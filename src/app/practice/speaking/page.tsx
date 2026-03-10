'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Mic, MicOff, Volume2, RotateCcw,
  ChevronRight, ChevronLeft, CheckCircle2, XCircle,
  Lightbulb, Trophy, Shuffle,
} from 'lucide-react';
import { speakingSentences, speakingCategories, type SpeakingSentence } from '@/data/speakingData';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}

type WordResult = { target: string; spoken: string; correct: boolean };
type CompareResult = { words: WordResult[]; accuracy: number; correct: number; total: number };

function compareSentences(target: string, spoken: string): CompareResult {
  const targetWords = normalize(target).split(' ');
  const spokenWords = normalize(spoken).split(' ');

  // Levenshtein-style alignment: match greedily from left
  const aligned: WordResult[] = targetWords.map((tw, i) => ({
    target: tw,
    spoken: spokenWords[i] ?? '',
    correct: (spokenWords[i] ?? '').toLowerCase() === tw.toLowerCase(),
  }));

  const correct = aligned.filter((w) => w.correct).length;
  return {
    words: aligned,
    correct,
    total: targetWords.length,
    accuracy: Math.round((correct / targetWords.length) * 100),
  };
}

// ─── SpeechRecognition shim ──────────────────────────────────────────────────

type SRInstance = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((e: { results: { transcript: string; isFinal: boolean }[][] }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

function createSR(): SRInstance | null {
  if (typeof window === 'undefined') return null;
  const SR =
    (window as unknown as Record<string, unknown>)['SpeechRecognition'] as
    (new () => SRInstance) | undefined ??
    (window as unknown as Record<string, unknown>)['webkitSpeechRecognition'] as
    (new () => SRInstance) | undefined;
  if (!SR) return null;
  return new SR();
}

// ─── Level Badge ─────────────────────────────────────────────────────────────

const levelColors = {
  beginner:     'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  intermediate: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  advanced:     'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
} as const;

// ─── Main Page ────────────────────────────────────────────────────────────────

type Status = 'idle' | 'recording' | 'done';

export default function SpeakingPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [queue, setQueue] = useState<SpeakingSentence[]>([]);
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [transcript, setTranscript] = useState('');
  const [interimText, setInterimText] = useState('');
  const [result, setResult] = useState<CompareResult | null>(null);
  const [sessionScores, setSessionScores] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState('');
  const [supported, setSupported] = useState(true);

  const srRef = useRef<SRInstance | null>(null);

  // Build queue whenever category changes
  useEffect(() => {
    const filtered =
      selectedCat === 'All'
        ? speakingSentences
        : speakingSentences.filter((s) => s.category === selectedCat);
    // Shuffle
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setQueue(shuffled);
    setIndex(0);
    setResult(null);
    setTranscript('');
    setStatus('idle');
    setShowHint(false);
    setSessionScores([]);
  }, [selectedCat]);

  const current = queue[index];

  // Check browser support on mount
  useEffect(() => {
    const sr = createSR();
    if (!sr) setSupported(false);
  }, []);

  const stopRecording = useCallback(() => {
    srRef.current?.stop();
    srRef.current = null;
    setStatus('idle');
    setInterimText('');
  }, []);

  const startRecording = useCallback(() => {
    if (!current) return;
    setError('');
    setResult(null);
    setTranscript('');
    setInterimText('');

    const sr = createSR();
    if (!sr) {
      setSupported(false);
      return;
    }

    sr.lang = 'en-US';
    sr.interimResults = true;
    sr.continuous = false;

    sr.onresult = (e) => {
      let interim = '';
      let final = '';
      for (const r of e.results) {
        const t = r[0].transcript;
        if (r[0].isFinal) final += t;
        else interim += t;
      }
      if (interim) setInterimText(interim);
      if (final) {
        const cmp = compareSentences(current.text, final.trim());
        setTranscript(final.trim());
        setResult(cmp);
        setSessionScores((prev) => [...prev, cmp.accuracy]);
        setStatus('done');
        setInterimText('');
      }
    };

    sr.onerror = (e) => {
      setError(
        e.error === 'not-allowed'
          ? 'Izin mikrofon ditolak. Aktifkan mikrofon di browser.'
          : e.error === 'no-speech'
          ? 'Tidak ada suara terdeteksi. Coba lagi.'
          : `Error: ${e.error}`,
      );
      setStatus('idle');
      setInterimText('');
    };

    sr.onend = () => {
      if (status === 'recording') setStatus('idle');
      setInterimText('');
    };

    srRef.current = sr;
    sr.start();
    setStatus('recording');
  }, [current, status]);

  function toggleMic() {
    if (status === 'recording') stopRecording();
    else startRecording();
  }

  function speak() {
    if (!current || typeof window === 'undefined') return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(current.text);
    utt.lang = 'en-US';
    utt.rate = 0.85;
    window.speechSynthesis.speak(utt);
  }

  function goNext() {
    if (index >= queue.length - 1) return;
    setIndex((i) => i + 1);
    setResult(null);
    setTranscript('');
    setStatus('idle');
    setShowHint(false);
    setInterimText('');
    stopRecording();
  }

  function goPrev() {
    if (index <= 0) return;
    setIndex((i) => i - 1);
    setResult(null);
    setTranscript('');
    setStatus('idle');
    setShowHint(false);
    setInterimText('');
    stopRecording();
  }

  function retry() {
    setResult(null);
    setTranscript('');
    setStatus('idle');
    setInterimText('');
  }

  function shuffle() {
    const filtered =
      selectedCat === 'All'
        ? speakingSentences
        : speakingSentences.filter((s) => s.category === selectedCat);
    setQueue([...filtered].sort(() => Math.random() - 0.5));
    setIndex(0);
    setResult(null);
    setTranscript('');
    setStatus('idle');
    setShowHint(false);
    setSessionScores([]);
  }

  const avgScore =
    sessionScores.length > 0
      ? Math.round(sessionScores.reduce((a, b) => a + b, 0) / sessionScores.length)
      : null;

  if (!supported) {
    return (
      <div className="p-6 max-w-xl mx-auto space-y-4">
        <Link href="/practice" className="inline-flex items-center gap-1.5 text-sm text-(--text-secondary) hover:text-primary">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-300/60 rounded-xl p-6 text-center space-y-3">
          <XCircle className="w-10 h-10 text-red-500 mx-auto" />
          <p className="font-semibold text-(--text)">Browser Tidak Didukung</p>
          <p className="text-sm text-(--text-secondary)">
            Fitur Speaking Test membutuhkan <strong>Google Chrome</strong> atau <strong>Microsoft Edge</strong>. Silakan buka halaman ini menggunakan salah satu browser tersebut.
          </p>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <p className="text-center text-(--text-secondary)">Tidak ada kalimat ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 space-y-5 max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/practice"
          className="inline-flex items-center gap-1.5 text-sm text-(--text-secondary) hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <div className="flex items-center gap-3">
          {avgScore !== null && (
            <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
              <Trophy className="w-4 h-4" />
              Rata-rata: {avgScore}%
            </div>
          )}
          <button
            onClick={shuffle}
            className="p-2 rounded-lg hover:bg-(--hover) transition-colors text-(--text-secondary)"
            title="Acak ulang"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-xl font-bold text-(--text) flex items-center gap-2">
          <Mic className="w-5 h-5 text-primary" />
          Speaking Test
        </h1>
        <p className="text-xs text-(--text-secondary) mt-0.5">
          Baca kalimat dengan lantang, lalu lihat seberapa akurat ucapanmu.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {['All', ...speakingCategories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
              selectedCat === cat
                ? 'bg-primary text-white border-primary'
                : 'border-(--border) text-(--text-secondary) hover:border-primary/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-(--text-muted)">
          {index + 1} / {queue.length}
        </span>
        <div className="flex-1 h-1.5 bg-(--bg-secondary) rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((index + 1) / queue.length) * 100}%` }}
          />
        </div>
        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${levelColors[current.level]}`}>
          {current.level}
        </span>
        <span className="text-[11px] text-(--text-muted) hidden sm:inline">
          {current.category}
        </span>
      </div>

      {/* Sentence Card */}
      <div className="bg-(--bg-card) border border-(--border) rounded-2xl overflow-hidden">
        {/* Translation hint */}
        <button
          onClick={() => setShowHint((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-2.5 border-b border-(--border) hover:bg-(--hover) transition-colors text-left"
        >
          <span className="text-xs text-(--text-muted) flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
            Terjemahan {showHint ? '(sembunyikan)' : '(klik untuk lihat)'}
          </span>
        </button>
        {showHint && (
          <p className="px-4 py-2 text-sm text-(--text-secondary) bg-yellow-50/50 dark:bg-yellow-950/20 italic border-b border-(--border)">
            {current.translation}
          </p>
        )}

        {/* Target sentence */}
        <div className="px-5 py-6 text-center">
          {/* Result: word-by-word coloring */}
          {result ? (
            <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center mb-3">
              {result.words.map((w, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <span
                    className={`text-xl font-bold px-1 rounded ${
                      w.correct
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-500 dark:text-red-400'
                    }`}
                  >
                    {w.target}
                  </span>
                  {!w.correct && w.spoken && (
                    <span className="text-[10px] text-red-400 line-through">{w.spoken}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-2xl font-bold text-(--text) leading-relaxed">
              {current.text}
            </p>
          )}

          {/* Pronunciation tip */}
          {current.tip && !result && (
            <p className="text-xs text-primary/70 mt-2">💡 {current.tip}</p>
          )}
        </div>

        {/* TTS Button */}
        <div className="flex justify-center pb-4">
          <button
            onClick={speak}
            className="flex items-center gap-1.5 text-xs text-(--text-secondary) hover:text-primary border border-(--border) px-3 py-1.5 rounded-lg transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5" /> Dengar contoh
          </button>
        </div>
      </div>

      {/* Mic Area */}
      <div className="flex flex-col items-center gap-4">
        {/* Interim transcript (live) */}
        {interimText && (
          <p className="text-sm text-(--text-muted) italic animate-pulse text-center">
            &ldquo;{interimText}&rdquo;
          </p>
        )}

        {/* Mic Button */}
        <button
          onClick={toggleMic}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-lg ${
            status === 'recording'
              ? 'bg-red-500 hover:bg-red-600 shadow-red-500/40 animate-pulse'
              : status === 'done'
              ? 'bg-green-500 hover:bg-green-600 shadow-green-500/20'
              : 'bg-primary hover:bg-primary/90 shadow-primary/30'
          }`}
          title={status === 'recording' ? 'Klik untuk stop' : 'Klik untuk mulai bicara'}
        >
          {status === 'recording' ? (
            <MicOff className="w-8 h-8 text-white" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
        </button>

        <p className="text-xs text-(--text-muted) text-center">
          {status === 'recording'
            ? '🔴 Sedang merekam... klik untuk stop'
            : status === 'done'
            ? '✅ Selesai direkam'
            : 'Klik mic untuk mulai berbicara'}
        </p>

        {/* Error */}
        {error && (
          <p className="text-xs text-red-500 text-center">{error}</p>
        )}
      </div>

      {/* Result Panel */}
      {result && (
        <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-5 space-y-4">
          {/* Score */}
          <div className="flex items-center gap-4">
            <div
              className={`text-3xl font-bold ${
                result.accuracy >= 80
                  ? 'text-green-600'
                  : result.accuracy >= 50
                  ? 'text-yellow-600'
                  : 'text-red-500'
              }`}
            >
              {result.accuracy}%
            </div>
            <div className="flex-1">
              <div className="h-3 bg-(--bg-secondary) rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    result.accuracy >= 80
                      ? 'bg-green-500'
                      : result.accuracy >= 50
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${result.accuracy}%` }}
                />
              </div>
              <p className="text-xs text-(--text-muted) mt-1">
                {result.correct}/{result.total} kata benar
              </p>
            </div>
            {result.accuracy === 100 && (
              <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
            )}
          </div>

          {/* What you said */}
          {transcript && (
            <div className="bg-(--bg-secondary) rounded-xl px-4 py-2.5">
              <p className="text-[11px] text-(--text-muted) mb-1">Yang kamu ucapkan:</p>
              <p className="text-sm text-(--text-secondary) italic">&ldquo;{transcript}&rdquo;</p>
            </div>
          )}

          {/* Feedback message */}
          <p className="text-sm font-medium text-center text-(--text)">
            {result.accuracy === 100
              ? '🎉 Sempurna! Ucapanmu tepat sekali!'
              : result.accuracy >= 80
              ? '👍 Bagus! Hampir sempurna.'
              : result.accuracy >= 50
              ? '📚 Lumayan, terus berlatih!'
              : '💪 Jangan menyerah, coba lagi!'}
          </p>

          {/* Word details - show wrong words */}
          {result.words.some((w) => !w.correct) && (
            <div className="space-y-1">
              <p className="text-[11px] text-(--text-muted) font-semibold uppercase">Kata yang perlu diperbaiki:</p>
              {result.words.filter((w) => !w.correct).map((w, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="text-primary font-mono font-semibold">{w.target}</span>
                  {w.spoken && (
                    <span className="text-(--text-muted)">
                      → kamu ucapkan: <span className="line-through text-red-400">{w.spoken}</span>
                    </span>
                  )}
                  {!w.spoken && (
                    <span className="text-(--text-muted) text-xs">(tidak terucap)</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Nav Buttons */}
      <div className="flex gap-3">
        <button
          onClick={goPrev}
          disabled={index === 0}
          className="flex items-center gap-2 border border-(--border) rounded-xl px-4 py-3 hover:bg-(--hover) transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm text-(--text-secondary)"
        >
          <ChevronLeft className="w-4 h-4" /> Sebelumnya
        </button>

        {result && (
          <button
            onClick={retry}
            className="flex items-center gap-2 border border-(--border) rounded-xl px-4 py-3 hover:bg-(--hover) transition-colors text-sm text-(--text-secondary)"
          >
            <RotateCcw className="w-4 h-4" /> Coba Lagi
          </button>
        )}

        <button
          onClick={goNext}
          disabled={index >= queue.length - 1}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-4 py-3 hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm font-semibold"
        >
          Berikutnya <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

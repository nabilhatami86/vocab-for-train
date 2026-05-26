'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, RefreshCw, Play, Pause, RotateCcw,
  CheckCircle2, XCircle, BookOpen, Volume2, FileText,
  AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Types ──────────────────────────────────────────────────────────────────────

interface MCOption { [letter: string]: string }

interface StructureQ {
  id: string;
  question: string;
  options: MCOption;
  correct_answer: string;
}

interface CommonQ {
  id: string;
  question: string;
  options: MCOption;
  correct_answer: string;
}

interface ReadingData {
  passage_id: number;
  passage_title: string;
  passage_text: string;
  questions: CommonQ[];
}

interface ListeningData {
  monolog_id: number;
  monolog_title: string;
  monolog_script: string;
  questions: CommonQ[];
}

// ── Helpers ────────────────────────────────────────────────────────────────────

const AUDIO_BASE = 'https://toefl-api.vercel.app';
const LETTERS = ['A', 'B', 'C', 'D'];

function fmtTime(s: number) {
  return `${Math.floor(s / 60).toString().padStart(2, '0')}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
}

// ── Shared MCQ component ───────────────────────────────────────────────────────

function MCQuestion({
  number, stem, options, selected, onSelect, submitted, correctAnswer,
}: {
  number: number;
  stem: string;
  options: MCOption;
  selected: string;
  onSelect: (v: string) => void;
  submitted: boolean;
  correctAnswer: string;
}) {
  const isCorrect = submitted && selected === correctAnswer;

  return (
    <div className="bg-(--bg-secondary) border border-(--border) rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-(--border)">
        <p className="text-sm text-(--text)">
          <span className="font-bold text-primary mr-1.5">{number}.</span>
          {stem}
        </p>
      </div>
      <div className="p-3 space-y-1.5">
        {LETTERS.filter(l => l in options).map(letter => {
          const isSelected = selected === letter;
          const isCorrectOpt = submitted && letter === correctAnswer;
          return (
            <button
              key={letter}
              onClick={() => !submitted && onSelect(letter)}
              disabled={submitted}
              className={cn(
                'w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                submitted
                  ? isCorrectOpt
                    ? 'bg-primary/10 text-primary border border-primary/30 font-medium'
                    : isSelected
                      ? 'bg-(--bg-card) text-(--text-muted) line-through border border-(--border)'
                      : 'bg-(--bg-card) border border-(--border) text-(--text-secondary)'
                  : isSelected
                    ? 'bg-primary text-white border border-primary'
                    : 'bg-(--bg-card) border border-(--border) text-(--text-secondary) hover:border-primary/50',
              )}
            >
              <span className={cn(
                'w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0',
                submitted
                  ? isCorrectOpt ? 'bg-primary text-white' : isSelected ? 'bg-(--border) text-(--text-muted)' : 'bg-(--bg-secondary) text-(--text-muted)'
                  : isSelected ? 'bg-white/20 text-white' : 'bg-(--bg-secondary) text-(--text)',
              )}>
                {letter}
              </span>
              {options[letter]}
            </button>
          );
        })}
      </div>
      {submitted && (
        <div className="px-4 pb-3 flex items-center gap-2">
          {isCorrect ? (
            <><CheckCircle2 className="w-3.5 h-3.5 text-primary" /><span className="text-xs text-primary font-semibold">Correct!</span></>
          ) : (
            <><XCircle className="w-3.5 h-3.5 text-(--text-muted)" /><span className="text-xs text-(--text-muted)">Correct: <span className="font-bold text-primary">{correctAnswer}</span></span></>
          )}
        </div>
      )}
    </div>
  );
}

// ── Score Badge ────────────────────────────────────────────────────────────────

function ScoreBadge({ correct, total }: { correct: number; total: number }) {
  const pct = total ? Math.round((correct / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3">
      <div>
        <p className="text-sm font-bold text-(--text)">{correct}/{total} Correct</p>
        <p className="text-xs text-(--text-muted)">{pct}% accuracy</p>
      </div>
      <div className="ml-auto">
        <div className="w-16 h-16 relative flex items-center justify-center">
          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="28" fill="none" stroke="var(--border)" strokeWidth="4" />
            <circle
              cx="32" cy="32" r="28" fill="none"
              stroke="var(--primary, #e11d48)" strokeWidth="4"
              strokeDasharray={`${pct * 1.759} 175.9`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-sm font-extrabold text-primary">{pct}%</span>
        </div>
      </div>
    </div>
  );
}

// ── Audio Player ───────────────────────────────────────────────────────────────

function AudioPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [rate, setRate] = useState(1);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => { if (ref.current) ref.current.playbackRate = rate; }, [rate]);
  useEffect(() => { setPlaying(false); setCurrent(0); setDuration(0); setAudioError(false); }, [src]);

  const toggle = () => {
    const a = ref.current; if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().catch(() => setAudioError(true)); setPlaying(true); }
  };
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = ref.current; if (!a || !duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    a.currentTime = ((e.clientX - r.left) / r.width) * duration;
  };

  if (!src || audioError) {
    return (
      <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-4 text-center">
        <p className="text-xs text-(--text-muted)">
          {audioError ? 'Audio tidak bisa diputar (CORS atau file tidak tersedia).' : 'Audio tidak tersedia untuk soal ini.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-4 space-y-2">
      <audio ref={ref} src={src}
        onTimeUpdate={() => setCurrent(ref.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(ref.current?.duration ?? 0)}
        onEnded={() => setPlaying(false)}
        onError={() => setAudioError(true)}
      />
      <div className="h-2 bg-(--bg-card) border border-(--border) rounded-full cursor-pointer overflow-hidden" onClick={seek}>
        <div className="h-full bg-primary rounded-full" style={{ width: `${duration ? (current / duration) * 100 : 0}%` }} />
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-(--text-muted) tabular-nums">{fmtTime(current)}</span>
        <div className="flex items-center gap-2">
          <button onClick={() => { const a = ref.current; if (a) a.currentTime = Math.max(0, a.currentTime - 10); }}
            className="p-1.5 rounded-lg hover:bg-(--bg-card) text-(--text-secondary)" title="Rewind 10s">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button onClick={toggle}
            className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90">
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <select value={rate} onChange={e => setRate(parseFloat(e.target.value))}
            className="text-xs bg-(--bg-card) border border-(--border) rounded-lg px-1.5 py-1 text-(--text-secondary) focus:outline-none">
            {[0.75, 0.9, 1, 1.1, 1.25].map(r => <option key={r} value={r}>{r}×</option>)}
          </select>
        </div>
        <span className="text-xs text-(--text-muted) tabular-nums">{fmtTime(duration)}</span>
      </div>
    </div>
  );
}

// ── Structure Tab ──────────────────────────────────────────────────────────────

function StructureTab() {
  const [data, setData] = useState<StructureQ | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const load = async () => {
    setLoading(true); setError(''); setData(null); setSelected(''); setSubmitted(false);
    try {
      const res = await fetch('/api/toefl?type=structure');
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Failed');
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal memuat soal.');
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const correct = submitted && data ? selected === data.correct_answer : null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-(--text-secondary)">
          Pilih jawaban yang paling tepat untuk melengkapi kalimat.
        </p>
        <button onClick={load} disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-(--border) text-(--text-secondary) hover:bg-(--bg-secondary) transition-colors">
          <RefreshCw className={cn('w-3.5 h-3.5', loading && 'animate-spin')} />
          Soal Baru
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-16 gap-2 text-(--text-muted)">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span className="text-sm">Memuat soal…</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-sm bg-primary/5 border border-primary/20 rounded-xl p-4 text-(--text-secondary)">
          <AlertCircle className="w-4 h-4 text-primary shrink-0" />
          {error}
        </div>
      )}

      {data && !loading && (
        <div className="space-y-4">
          {/* Question card */}
          <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-5">
            <p className="text-sm font-semibold text-(--text-muted) uppercase tracking-wide mb-3">Structure & Written Expression</p>
            <p className="text-base text-(--text) leading-relaxed">{data.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {LETTERS.filter(l => l in data.options).map(letter => {
              const isSelected = selected === letter;
              const isCorrectOpt = submitted && letter === data.correct_answer;
              return (
                <button
                  key={letter}
                  onClick={() => !submitted && setSelected(letter)}
                  disabled={submitted}
                  className={cn(
                    'w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors border',
                    submitted
                      ? isCorrectOpt
                        ? 'bg-primary/10 text-primary border-primary/30 font-medium'
                        : isSelected
                          ? 'bg-(--bg-card) text-(--text-muted) line-through border-(--border)'
                          : 'bg-(--bg-card) border-(--border) text-(--text-secondary)'
                      : isSelected
                        ? 'bg-primary text-white border-primary'
                        : 'bg-(--bg-card) border-(--border) text-(--text-secondary) hover:border-primary/50',
                  )}
                >
                  <span className={cn(
                    'w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0',
                    submitted
                      ? isCorrectOpt ? 'bg-primary text-white' : isSelected ? 'bg-(--border) text-(--text-muted)' : 'bg-(--bg-secondary) text-(--text-muted)'
                      : isSelected ? 'bg-white/20 text-white' : 'bg-(--bg-secondary) text-(--text)',
                  )}>
                    {letter}
                  </span>
                  {data.options[letter]}
                </button>
              );
            })}
          </div>

          {/* Submit / Result */}
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={!selected}
              className="w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
            >
              Check Answer
            </button>
          ) : (
            <div className="space-y-3">
              <div className={cn(
                'flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold',
                correct ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-(--bg-secondary) border-(--border) text-(--text-secondary)',
              )}>
                {correct
                  ? <><CheckCircle2 className="w-4 h-4" /> Jawaban kamu benar!</>
                  : <><XCircle className="w-4 h-4" /> Jawaban benar: <span className="text-primary ml-1">{data.correct_answer} — {data.options[data.correct_answer]}</span></>
                }
              </div>
              <button onClick={load}
                className="w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
                Soal Berikutnya →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Reading Tab ────────────────────────────────────────────────────────────────

function ReadingTab() {
  const [data, setData] = useState<ReadingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const load = async () => {
    setLoading(true); setError(''); setData(null); setAnswers({}); setSubmitted(false);
    try {
      const res = await fetch('/api/toefl?type=reading');
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Failed');
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal memuat soal.');
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const correctCount = data && submitted
    ? data.questions.filter(q => answers[q.id] === q.correct_answer).length
    : 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-(--text-secondary)">Baca teks lalu jawab soal pemahaman bacaan.</p>
        <button onClick={load} disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-(--border) text-(--text-secondary) hover:bg-(--bg-secondary) transition-colors">
          <RefreshCw className={cn('w-3.5 h-3.5', loading && 'animate-spin')} />
          Soal Baru
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-16 gap-2 text-(--text-muted)">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span className="text-sm">Memuat soal…</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-sm bg-primary/5 border border-primary/20 rounded-xl p-4 text-(--text-secondary)">
          <AlertCircle className="w-4 h-4 text-primary shrink-0" />
          {error}
        </div>
      )}

      {data && !loading && (
        <div className="space-y-5">
          {/* Score */}
          {submitted && <ScoreBadge correct={correctCount} total={data.questions.length} />}

          {/* Passage */}
          <div className="border border-(--border) rounded-xl overflow-hidden">
            <div className="bg-primary/5 border-b border-primary/10 px-4 py-2.5">
              <p className="font-bold text-(--text) text-sm">{data.passage_title}</p>
            </div>
            <div className="px-4 py-4 max-h-64 overflow-y-auto">
              <p className="text-sm text-(--text-secondary) leading-relaxed whitespace-pre-line">{data.passage_text}</p>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {data.questions.map((q, i) => (
              <MCQuestion
                key={q.id}
                number={i + 1}
                stem={q.question}
                options={q.options}
                selected={answers[q.id] ?? ''}
                onSelect={v => setAnswers(prev => ({ ...prev, [q.id]: v }))}
                submitted={submitted}
                correctAnswer={q.correct_answer}
              />
            ))}
          </div>

          {/* Submit */}
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(answers).length < data.questions.length}
              className="w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
            >
              Check Answers ({Object.keys(answers).length}/{data.questions.length} answered)
            </button>
          ) : (
            <button onClick={load}
              className="w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
              Soal Berikutnya →
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ── Listening Tab ──────────────────────────────────────────────────────────────

function ListeningTab() {
  const [data, setData] = useState<ListeningData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const load = async () => {
    setLoading(true); setError(''); setData(null); setAnswers({}); setSubmitted(false);
    try {
      const res = await fetch('/api/toefl?type=listening');
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Failed');
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal memuat soal.');
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const correctCount = data && submitted
    ? data.questions.filter(q => answers[q.id] === q.correct_answer).length
    : 0;

  const audioUrl = data?.monolog_script
    ? data.monolog_script.startsWith('http')
      ? data.monolog_script
      : `${AUDIO_BASE}${data.monolog_script}`
    : '';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-(--text-secondary)">Dengarkan audio lalu jawab pertanyaan.</p>
        <button onClick={load} disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-(--border) text-(--text-secondary) hover:bg-(--bg-secondary) transition-colors">
          <RefreshCw className={cn('w-3.5 h-3.5', loading && 'animate-spin')} />
          Soal Baru
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-16 gap-2 text-(--text-muted)">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span className="text-sm">Memuat soal…</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-sm bg-primary/5 border border-primary/20 rounded-xl p-4 text-(--text-secondary)">
          <AlertCircle className="w-4 h-4 text-primary shrink-0" />
          {error}
        </div>
      )}

      {data && !loading && (
        <div className="space-y-5">
          {/* Score */}
          {submitted && <ScoreBadge correct={correctCount} total={data.questions.length} />}

          {/* Audio */}
          <div className="border border-(--border) rounded-xl overflow-hidden">
            <div className="bg-primary/5 border-b border-primary/10 px-4 py-2.5 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-primary" />
              <p className="font-bold text-(--text) text-sm">{data.monolog_title}</p>
            </div>
            <div className="px-4 py-4">
              <AudioPlayer src={audioUrl} />
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {data.questions.map((q, i) => (
              <MCQuestion
                key={q.id}
                number={i + 1}
                stem={q.question}
                options={q.options}
                selected={answers[q.id] ?? ''}
                onSelect={v => setAnswers(prev => ({ ...prev, [q.id]: v }))}
                submitted={submitted}
                correctAnswer={q.correct_answer}
              />
            ))}
          </div>

          {/* Submit */}
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(answers).length < data.questions.length}
              className="w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
            >
              Check Answers ({Object.keys(answers).length}/{data.questions.length} answered)
            </button>
          ) : (
            <button onClick={load}
              className="w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
              Soal Berikutnya →
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

type Tab = 'structure' | 'reading' | 'listening';

const TABS: { id: Tab; label: string; icon: React.ElementType; sub: string }[] = [
  { id: 'structure', label: 'Structure', icon: FileText, sub: 'Written Expression' },
  { id: 'reading', label: 'Reading', icon: BookOpen, sub: 'Comprehension' },
  { id: 'listening', label: 'Listening', icon: Volume2, sub: 'Comprehension' },
];

export default function TOEFLPage() {
  const [tab, setTab] = useState<Tab>('structure');

  return (
    <div className="p-4 lg:p-6 max-w-2xl mx-auto space-y-5 animate-fade-in">
      <Link href="/practice" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Practice
      </Link>

      <div>
        <h1 className="text-xl font-bold text-(--text)">TOEFL Practice</h1>
        <p className="text-sm text-(--text-secondary) mt-0.5">
          Latihan soal TOEFL acak — Structure, Reading, dan Listening.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2">
        {TABS.map(t => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-3 rounded-xl border-2 text-xs font-semibold transition-all',
                tab === t.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-(--bg-card) border-(--border) text-(--text-secondary) hover:border-primary/40',
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{t.label}</span>
              <span className={cn('text-[10px] font-normal', tab === t.id ? 'text-white/70' : 'text-(--text-muted)')}>
                {t.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab content — keep all 3 mounted to preserve state when switching */}
      <div className={tab === 'structure' ? 'block' : 'hidden'}>
        <StructureTab />
      </div>
      <div className={tab === 'reading' ? 'block' : 'hidden'}>
        <ReadingTab />
      </div>
      <div className={tab === 'listening' ? 'block' : 'hidden'}>
        <ListeningTab />
      </div>
    </div>
  );
}

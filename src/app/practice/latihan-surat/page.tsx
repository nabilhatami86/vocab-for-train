'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Send, RotateCcw, CheckCircle2, XCircle,
  AlertCircle, Lightbulb, ChevronDown, ChevronUp,
  FileText, BookOpen, Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Types ──────────────────────────────────────────────────────────

type LetterType = 'formal' | 'informal';

interface StructureComponent {
  name: string;
  present: boolean;
  note?: string | null;
}

interface FeedbackResult {
  overallScore: number;
  letterType: LetterType;
  structure: {
    score: number;
    feedback: string;
    components: StructureComponent[];
  };
  grammar: {
    score: number;
    feedback: string;
    corrections: { original: string; corrected: string; explanation: string }[];
  };
  tone: {
    score: number;
    isAppropriate: boolean;
    feedback: string;
    flaggedPhrases: { phrase: string; suggestion: string; reason: string }[];
  };
  vocabulary: {
    score: number;
    feedback: string;
    enhancements: { used: string; better: string; reason: string }[];
  };
  correctedLetter: string;
  generalFeedback: string;
}

// ── Data ───────────────────────────────────────────────────────────

const TASKS: Record<LetterType, { id: string; title: string; scenario: string; tips: string[] }[]> = {
  informal: [
    {
      id: 'inf-1',
      title: 'Cerita Liburan',
      scenario: 'Tulis surat kepada teman baikmu tentang liburanmu yang berkesan baru-baru ini. Ceritakan apa yang kamu lakukan, tempat apa yang dikunjungi, dan kenangan terbaik yang kamu alami.',
      tips: ['Gunakan greeting akrab (Dear / Hi / Dearest)', 'Boleh pakai kontraksi (I\'m, don\'t, I\'ve)', 'Tulis minimal 3 paragraf isi', 'Akhiri dengan penutup yang hangat (Sincerely yours, With love,)'],
    },
    {
      id: 'inf-2',
      title: 'Update Kehidupan',
      scenario: 'Tulis surat kepada teman lama yang sudah lama tidak kamu hubungi. Ceritakan tentang kehidupanmu sekarang — pelajaran, kegiatan, atau rencana masa depanmu.',
      tips: ['Mulai dengan minta maaf sudah lama tidak berkabar', 'Tanyakan kabar teman di akhir surat', 'Boleh tambahkan P.S. di bagian akhir', 'Gunakan bahasa yang santai dan personal'],
    },
    {
      id: 'inf-3',
      title: 'Undangan Acara',
      scenario: 'Tulis surat kepada sepupumu untuk mengundangnya ke acara ulang tahunmu atau acara keluarga yang akan datang. Jelaskan detail acara dan ekspresikan keinginanmu agar dia bisa hadir.',
      tips: ['Ungkapkan kegembiraan di opening', 'Sebutkan tanggal, waktu, dan tempat acara', 'Beri tahu kenapa kehadirannya penting bagimu', 'Tutup dengan harapan akan balasan'],
    },
    {
      id: 'inf-4',
      title: 'Pengalaman Belajar',
      scenario: 'Tulis surat kepada teman tentang pengalamanmu belajar Bahasa Inggris — apa yang sudah kamu pelajari, tantangan yang dihadapi, dan kemajuan yang kamu rasakan.',
      tips: ['Ceritakan secara jujur dan personal', 'Gunakan kalimat variasi (Simple, Compound, Complex)', 'Boleh tanya balik pengalaman temanmu', 'Gunakan ekspresi emosi (I was excited, I felt nervous)'],
    },
  ],
  formal: [
    {
      id: 'frm-1',
      title: 'Lamaran Pekerjaan',
      scenario: 'Tulis surat lamaran pekerjaan kepada sebuah perusahaan teknologi untuk posisi yang kamu minati. Perkenalkan dirimu, jelaskan kualifikasimu, dan nyatakan ketertarikanmu pada posisi tersebut.',
      tips: ['Wajib ada subject line (Subject: Job Application — [Position])', 'Gunakan Dear Sir/Madam atau Dear Mr./Ms. [nama]', 'Bahasa formal, tidak ada kontraksi', 'Tutup dengan Sincerely, atau Yours faithfully,'],
    },
    {
      id: 'frm-2',
      title: 'Pertanyaan Program Studi',
      scenario: 'Tulis surat kepada seorang profesor di universitas luar negeri untuk menanyakan persyaratan mendaftar ke program studi yang kamu inginkan.',
      tips: ['Perkenalkan diri secara singkat di paragraf pertama', 'Ajukan pertanyaan spesifik di paragraf kedua', 'Tutup dengan kalimat sopan (I look forward to your response)', 'Sertakan subject line yang jelas'],
    },
    {
      id: 'frm-3',
      title: 'Keluhan & Permintaan',
      scenario: 'Tulis surat kepada sebuah perusahaan atau kantor untuk melaporkan masalah yang kamu alami (tagihan salah, produk rusak, layanan buruk) dan meminta tindakan penyelesaian.',
      tips: ['Jelaskan masalah secara faktual dan tenang', 'Sebutkan detail yang relevan (tanggal, nomor pesanan, dll)', 'Nyatakan tindakan yang kamu harapkan', 'Tetap sopan meskipun kamu tidak puas'],
    },
    {
      id: 'frm-4',
      title: 'Permohonan Beasiswa',
      scenario: 'Tulis surat kepada sebuah lembaga atau sekolah untuk mengajukan permohonan beasiswa. Jelaskan latar belakangmu, alasan membutuhkan beasiswa, dan potensimu.',
      tips: ['Opening: perkenalkan diri dan tujuan menulis', 'Body: prestasi, kondisi, dan motivasi', 'Closing: ucapan terima kasih dan harapan', 'Gunakan kosakata formal (I wish to apply, I would be grateful)'],
    },
  ],
};

// ── Score helpers ──────────────────────────────────────────────────

function scoreColor(s: number) {
  if (s >= 80) return 'text-green-600 dark:text-green-400';
  if (s >= 60) return 'text-amber-600 dark:text-amber-400';
  return 'text-red-500 dark:text-red-400';
}

function scoreBg(s: number) {
  if (s >= 80) return 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-800';
  if (s >= 60) return 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800';
  return 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800';
}

// ── Page ───────────────────────────────────────────────────────────

export default function LatihanSuratPage() {
  const [letterType, setLetterType] = useState<LetterType | null>(null);
  const [selectedTask, setSelectedTask] = useState<typeof TASKS['formal'][0] | null>(null);
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FeedbackResult | null>(null);
  const [error, setError] = useState('');

  const [showCorrection, setShowCorrection] = useState(false);
  const [showGrammar, setShowGrammar] = useState(false);
  const [showTone, setShowTone] = useState(false);
  const [showVocab, setShowVocab] = useState(false);

  const wordCount = letter.trim() ? letter.trim().split(/\s+/).length : 0;

  const handleSubmit = async () => {
    if (!letter.trim() || !selectedTask || !letterType) return;
    setLoading(true);
    setResult(null);
    setError('');
    setShowCorrection(false);
    setShowGrammar(false);
    setShowTone(false);
    setShowVocab(false);

    try {
      const res = await fetch('/api/letter-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ letter: letter.trim(), type: letterType, task: selectedTask.scenario }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message ?? 'Terjadi kesalahan.'); return; }
      setResult(data as FeedbackResult);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Tidak bisa terhubung ke server. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setLetter('');
    setResult(null);
    setError('');
  };

  // ── TYPE SELECTOR ─────────────────────────────────────────────────
  if (!letterType) {
    return (
      <div className="p-4 lg:p-6 max-w-2xl mx-auto space-y-6 animate-fade-in">
        <Link href="/practice" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Practice
        </Link>
        <div>
          <h1 className="text-xl font-bold text-(--text) flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" /> Latihan Menulis Surat
          </h1>
          <p className="text-sm text-(--text-secondary) mt-1">
            Pilih jenis surat yang ingin kamu latih, lalu tulis suratmu — AI akan mengoreksi struktur, grammar, tone, dan vocab.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Informal */}
          <button onClick={() => setLetterType('informal')}
            className="text-left bg-(--bg-card) border-2 border-teal-400 dark:border-teal-600 rounded-2xl p-5 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">Informal Letter</h2>
            <p className="text-sm text-(--text-secondary) mt-1 leading-relaxed">
              Surat kepada teman atau keluarga. Bahasa kasual, greeting akrab, boleh kontraksi & P.S.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['Dear Name,', 'Sincerely yours,', 'P.S. ...', 'Kontraksi OK'].map(t => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">{t}</span>
              ))}
            </div>
          </button>

          {/* Formal */}
          <button onClick={() => setLetterType('formal')}
            className="text-left bg-(--bg-card) border-2 border-blue-400 dark:border-blue-600 rounded-2xl p-5 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">Formal Letter</h2>
            <p className="text-sm text-(--text-secondary) mt-1 leading-relaxed">
              Surat untuk keperluan resmi/profesional. Bahasa formal, ada subject line, tidak ada kontraksi.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['Dear Sir/Madam,', 'Subject:', 'Sincerely,', 'No P.S.'].map(t => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">{t}</span>
              ))}
            </div>
          </button>
        </div>
      </div>
    );
  }

  const typeColor = letterType === 'informal' ? 'text-teal-600 dark:text-teal-400' : 'text-blue-600 dark:text-blue-400';
  const typeBadge = letterType === 'informal' ? 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
  const typeBorder = letterType === 'informal' ? 'border-teal-400' : 'border-blue-400';

  // ── TASK SELECTOR ─────────────────────────────────────────────────
  if (!selectedTask) {
    return (
      <div className="p-4 lg:p-6 max-w-2xl mx-auto space-y-5 animate-fade-in">
        <button onClick={() => setLetterType(null)} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> Ganti Jenis Surat
        </button>
        <div>
          <span className={cn('text-xs font-semibold px-2.5 py-1 rounded-full', typeBadge)}>
            {letterType === 'informal' ? 'Informal Letter' : 'Formal Letter'}
          </span>
          <h1 className="text-xl font-bold text-(--text) mt-2">Pilih Topik</h1>
          <p className="text-sm text-(--text-secondary) mt-0.5">Pilih skenario yang ingin kamu jadikan bahan surat.</p>
        </div>
        <div className="space-y-3">
          {TASKS[letterType].map(task => (
            <button key={task.id} onClick={() => setSelectedTask(task)}
              className={cn('w-full text-left bg-(--bg-card) border-2 rounded-xl p-4 hover:shadow-sm transition-all group', typeBorder)}
            >
              <h3 className={cn('font-semibold text-sm group-hover:underline', typeColor)}>{task.title}</h3>
              <p className="text-sm text-(--text-secondary) mt-1 leading-relaxed">{task.scenario}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── WRITE + RESULT VIEW ───────────────────────────────────────────
  return (
    <div className="p-4 lg:p-6 max-w-3xl mx-auto space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <button onClick={() => { setSelectedTask(null); handleReset(); }} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> Ganti Topik
        </button>
        <span className={cn('text-xs font-semibold px-2.5 py-1 rounded-full', typeBadge)}>
          {letterType === 'informal' ? 'Informal' : 'Formal'} Letter
        </span>
      </div>

      {/* Task card */}
      <div className={cn('rounded-xl border-l-4 p-4 bg-(--bg-card) border border-(--border)', typeBorder.replace('border-', 'border-l-'))}>
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{selectedTask.title}</p>
        <p className="text-sm text-(--text) leading-relaxed">{selectedTask.scenario}</p>
        <div className="mt-3 space-y-1">
          {selectedTask.tips.map((tip, i) => (
            <p key={i} className="text-xs text-(--text-muted) flex items-start gap-1.5">
              <span className="text-primary shrink-0">✓</span> {tip}
            </p>
          ))}
        </div>
      </div>

      {/* Result — shown ABOVE the editor after submit */}
      {result && (
        <div className="space-y-4 animate-fade-in">
          {/* Overall score */}
          <div className={cn('rounded-2xl border p-5', scoreBg(result.overallScore))}>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-semibold text-(--text-muted) uppercase tracking-wide mb-1">Skor Keseluruhan</p>
                <p className={cn('text-5xl font-black', scoreColor(result.overallScore))}>
                  {result.overallScore}<span className="text-lg font-semibold text-(--text-muted)">/100</span>
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Struktur', score: result.structure.score },
                  { label: 'Grammar', score: result.grammar.score },
                  { label: 'Tone', score: result.tone.score },
                  { label: 'Vocab', score: result.vocabulary.score },
                ].map(({ label, score }) => (
                  <div key={label} className="text-center">
                    <p className={cn('text-xl font-bold', scoreColor(score))}>{score}</p>
                    <p className="text-[10px] text-(--text-muted) font-semibold uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-(--text) leading-relaxed mt-3">{result.generalFeedback}</p>
          </div>

          {/* Structure check */}
          <div className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden">
            <button onClick={() => setShowGrammar(false)}
              className="w-full flex items-center justify-between px-4 py-3 bg-(--bg-secondary)/50"
            >
              <span className="text-sm font-semibold text-(--text) flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Kelengkapan Struktur
                <span className={cn('text-xs font-bold ml-1', scoreColor(result.structure.score))}>{result.structure.score}/100</span>
              </span>
            </button>
            <div className="px-4 py-3 border-t border-(--border) space-y-2">
              <p className="text-xs text-(--text-secondary) leading-relaxed">{result.structure.feedback}</p>
              <div className="grid sm:grid-cols-2 gap-1.5 mt-2">
                {result.structure.components.map((c, i) => (
                  <div key={i} className={cn('flex items-start gap-2 px-3 py-2 rounded-lg text-xs',
                    c.present ? 'bg-green-50 dark:bg-green-950/30' : 'bg-red-50 dark:bg-red-950/30',
                  )}>
                    {c.present
                      ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      : <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    }
                    <div>
                      <span className={cn('font-semibold', c.present ? 'text-green-700 dark:text-green-300' : 'text-red-600 dark:text-red-400')}>{c.name}</span>
                      {c.note && <p className="text-[10px] text-(--text-muted) mt-0.5">{c.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grammar */}
          {result.grammar.corrections.length > 0 && (
            <div className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden">
              <button onClick={() => setShowGrammar(!showGrammar)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-(--hover) transition-colors"
              >
                <span className="text-sm font-semibold text-(--text) flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  Koreksi Grammar
                  <span className={cn('text-xs font-bold ml-1', scoreColor(result.grammar.score))}>{result.grammar.score}/100</span>
                  <span className="text-xs text-(--text-muted)">({result.grammar.corrections.length} koreksi)</span>
                </span>
                {showGrammar ? <ChevronUp className="w-4 h-4 text-(--text-muted)" /> : <ChevronDown className="w-4 h-4 text-(--text-muted)" />}
              </button>
              {showGrammar && (
                <div className="border-t border-(--border) px-4 py-3 space-y-3">
                  <p className="text-xs text-(--text-secondary)">{result.grammar.feedback}</p>
                  {result.grammar.corrections.map((c, i) => (
                    <div key={i} className="rounded-lg bg-(--bg-secondary) p-3 space-y-1 text-xs">
                      <p className="text-red-500 line-through">"{c.original}"</p>
                      <p className="text-green-600 dark:text-green-400 font-semibold">→ "{c.corrected}"</p>
                      <p className="text-(--text-muted)">{c.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tone */}
          <div className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden">
            <button onClick={() => setShowTone(!showTone)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-(--hover) transition-colors"
            >
              <span className="text-sm font-semibold text-(--text) flex items-center gap-2">
                {result.tone.isAppropriate
                  ? <CheckCircle2 className="w-4 h-4 text-green-500" />
                  : <XCircle className="w-4 h-4 text-red-500" />
                }
                Tone &amp; Gaya Bahasa
                <span className={cn('text-xs font-bold ml-1', scoreColor(result.tone.score))}>{result.tone.score}/100</span>
              </span>
              {showTone ? <ChevronUp className="w-4 h-4 text-(--text-muted)" /> : <ChevronDown className="w-4 h-4 text-(--text-muted)" />}
            </button>
            {showTone && (
              <div className="border-t border-(--border) px-4 py-3 space-y-3">
                <p className="text-xs text-(--text-secondary)">{result.tone.feedback}</p>
                {result.tone.flaggedPhrases.map((f, i) => (
                  <div key={i} className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-3 text-xs space-y-1">
                    <p className="font-semibold text-amber-700 dark:text-amber-300">"{f.phrase}"</p>
                    <p className="text-(--text)">→ Lebih baik: <span className="font-semibold text-green-600 dark:text-green-400">"{f.suggestion}"</span></p>
                    <p className="text-(--text-muted)">{f.reason}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Vocabulary */}
          {result.vocabulary.enhancements.length > 0 && (
            <div className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden">
              <button onClick={() => setShowVocab(!showVocab)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-(--hover) transition-colors"
              >
                <span className="text-sm font-semibold text-(--text) flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  Peningkatan Kosakata
                  <span className={cn('text-xs font-bold ml-1', scoreColor(result.vocabulary.score))}>{result.vocabulary.score}/100</span>
                </span>
                {showVocab ? <ChevronUp className="w-4 h-4 text-(--text-muted)" /> : <ChevronDown className="w-4 h-4 text-(--text-muted)" />}
              </button>
              {showVocab && (
                <div className="border-t border-(--border) px-4 py-3 space-y-3">
                  <p className="text-xs text-(--text-secondary)">{result.vocabulary.feedback}</p>
                  {result.vocabulary.enhancements.map((e, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs rounded-lg bg-(--bg-secondary) px-3 py-2">
                      <span className="text-(--text-muted) shrink-0">"{e.used}"</span>
                      <span className="text-(--text-muted)">→</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">"{e.better}"</span>
                      <span className="text-(--text-muted) flex-1">{e.reason}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Corrected letter */}
          <div className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden">
            <button onClick={() => setShowCorrection(!showCorrection)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-(--hover) transition-colors"
            >
              <span className="text-sm font-semibold text-(--text) flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" /> Versi Terkoreksi
              </span>
              {showCorrection ? <ChevronUp className="w-4 h-4 text-(--text-muted)" /> : <ChevronDown className="w-4 h-4 text-(--text-muted)" />}
            </button>
            {showCorrection && (
              <div className="border-t border-(--border) px-4 py-4">
                <pre className="text-sm text-(--text) font-sans leading-relaxed whitespace-pre-wrap">{result.correctedLetter}</pre>
              </div>
            )}
          </div>

          {/* Tip */}
          <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl px-4 py-3">
            <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
              Baca versi terkoreksi, pelajari perbedaannya, lalu coba tulis ulang surat tanpa melihat hasilnya!
            </p>
          </div>
        </div>
      )}

      {/* Editor */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-(--text)">Tulisanmu</label>
          <div className="flex items-center gap-3">
            <span className={cn('text-xs', wordCount < 20 ? 'text-red-500' : 'text-(--text-muted)')}>
              {wordCount} kata {wordCount < 20 && '(min. 20)'}
            </span>
            {result && (
              <button onClick={handleReset} className="text-xs text-(--text-muted) hover:text-primary transition-colors flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Tulis ulang
              </button>
            )}
          </div>
        </div>
        <textarea
          value={letter}
          onChange={e => { setLetter(e.target.value); if (result) setResult(null); }}
          placeholder={letterType === 'informal'
            ? 'October 10, 2024\n\nDear [Name],\n\n...\n\nSincerely yours,\n[Your Name]'
            : 'October 10, 2024\n[Your Address]\n\n[Recipient Name]\n[Recipient Address]\n\nSubject: ...\n\nDear Sir/Madam,\n\n...\n\nSincerely,\n[Your Name]'
          }
          rows={16}
          className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--bg-card) text-(--text) text-sm resize-none focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all font-mono leading-relaxed placeholder:text-(--text-muted) placeholder:font-sans"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-2 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading || wordCount < 20}
        className={cn(
          'w-full py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2',
          loading || wordCount < 20
            ? 'bg-(--bg-secondary) text-(--text-muted) cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary-dark',
        )}
      >
        {loading
          ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> AI sedang mengoreksi...</>
          : <><Send className="w-4 h-4" /> Koreksi dengan AI</>
        }
      </button>
    </div>
  );
}

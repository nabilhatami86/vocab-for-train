'use client';

import { useState, useRef, useEffect, Fragment } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Volume2, Play, Pause, RotateCcw,
  ChevronRight, ChevronLeft, Trophy, Clock, CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { TESTS } from '@/data/ielts/tests';
import type {
  IELTSTest, AnswerKey,
  NotesSection, TableSection, MCSection, MatchingSection,
  QuestionSection,
} from '@/data/ielts/types';

// ── Helpers ────────────────────────────────────────────────────────────────────

function isCorrect(n: number, userAnswer: string, key: AnswerKey): boolean {
  const correct = key[n];
  if (!correct) return false;
  const ua = userAnswer.trim().toLowerCase();
  if (Array.isArray(correct)) return correct.some(c => c.toLowerCase() === ua);
  return correct.toLowerCase() === ua;
}

function correctDisplay(n: number, key: AnswerKey): string {
  const ans = key[n];
  if (!ans) return '';
  return Array.isArray(ans) ? ans[0] : ans;
}

function bandFromScore(n: number): string {
  if (n >= 39) return '9.0';
  if (n >= 37) return '8.5';
  if (n >= 35) return '8.0';
  if (n >= 32) return '7.5';
  if (n >= 30) return '7.0';
  if (n >= 26) return '6.5';
  if (n >= 23) return '6.0';
  if (n >= 18) return '5.5';
  if (n >= 16) return '5.0';
  if (n >= 13) return '4.5';
  if (n >= 10) return '4.0';
  return '3.5';
}

function fmtTime(s: number) {
  return `${Math.floor(s / 60).toString().padStart(2, '0')}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
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

  if (audioError) {
    return (
      <p className="text-xs text-(--text-muted) py-1">Audio tidak bisa diputar — coba URL lain atau cek koneksi.</p>
    );
  }

  return (
    <div className="space-y-2">
      {src && (
        <audio ref={ref} src={src}
          onTimeUpdate={() => setCurrent(ref.current?.currentTime ?? 0)}
          onLoadedMetadata={() => setDuration(ref.current?.duration ?? 0)}
          onEnded={() => setPlaying(false)}
          onError={() => setAudioError(true)}
        />
      )}
      <div className="h-2 bg-(--bg-card) border border-(--border) rounded-full cursor-pointer overflow-hidden" onClick={seek}>
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${duration ? (current / duration) * 100 : 0}%` }} />
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

// ── Inline question input ──────────────────────────────────────────────────────

function QInput({ n, value, onChange, submitted, answerKey }: {
  n: number; value: string;
  onChange: (n: number, v: string) => void;
  submitted: boolean;
  answerKey: AnswerKey;
}) {
  const ok = submitted ? isCorrect(n, value, answerKey) : null;
  return (
    <span className="inline-flex items-baseline gap-1 mx-0.5">
      <input
        type="text"
        value={value}
        onChange={e => !submitted && onChange(n, e.target.value)}
        readOnly={submitted}
        placeholder="……………"
        className={cn(
          'w-28 border-b-2 bg-transparent px-1 py-0 text-sm text-center outline-none transition-colors placeholder:text-(--text-muted)',
          submitted
            ? ok ? 'border-primary text-primary font-semibold' : 'border-(--border) text-(--text-muted) line-through'
            : 'border-(--border) focus:border-primary',
        )}
      />
      {submitted && !ok && (
        <span className="text-xs font-bold text-primary whitespace-nowrap">{correctDisplay(n, answerKey)}</span>
      )}
    </span>
  );
}

function InlineText({ text, answers, onChange, submitted, answerKey }: {
  text: string; answers: Record<number, string>;
  onChange: (n: number, v: string) => void;
  submitted: boolean; answerKey: AnswerKey;
}) {
  const parts = text.split(/(\{\{Q\d+\}\})/);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\{\{Q(\d+)\}\}$/);
        if (m) {
          const n = parseInt(m[1]);
          return <QInput key={i} n={n} value={answers[n] ?? ''} onChange={onChange} submitted={submitted} answerKey={answerKey} />;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

// ── Section Renderers ──────────────────────────────────────────────────────────

function NotesSectionView({ section, answers, onChange, submitted, answerKey }: {
  section: NotesSection; answers: Record<number, string>;
  onChange: (n: number, v: string) => void; submitted: boolean; answerKey: AnswerKey;
}) {
  return (
    <div className="space-y-3">
      <div>
        <p className="font-bold text-(--text) text-sm">{section.title}</p>
        <p className="text-xs text-(--text-secondary) mt-0.5 whitespace-pre-line">{section.instruction}</p>
      </div>
      <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-4 space-y-2">
        {section.heading && <p className="font-bold text-(--text) text-sm underline mb-3">{section.heading}</p>}
        {section.example && (
          <div className="flex flex-wrap items-center gap-2 text-sm pb-3 mb-1 border-b border-(--border)">
            <span className="text-[10px] font-bold text-(--text-muted) uppercase tracking-wide bg-(--bg-card) px-2 py-0.5 rounded">Example</span>
            <span className="text-(--text-secondary)">{section.example.text}</span>
            <span className="font-semibold text-(--text)">{section.example.answer}</span>
          </div>
        )}
        {section.lines.map((line, i) =>
          line === '' ? <div key={i} className="h-1" /> : (
            <div key={i} className="text-sm text-(--text) leading-loose">
              <InlineText text={line} answers={answers} onChange={onChange} submitted={submitted} answerKey={answerKey} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

function TableSectionView({ section, answers, onChange, submitted, answerKey }: {
  section: TableSection; answers: Record<number, string>;
  onChange: (n: number, v: string) => void; submitted: boolean; answerKey: AnswerKey;
}) {
  return (
    <div className="space-y-3">
      <div>
        <p className="font-bold text-(--text) text-sm">{section.title}</p>
        <p className="text-xs text-(--text-secondary) mt-0.5 whitespace-pre-line">{section.instruction}</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-(--border)">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-primary/10">
              {section.headers.map((h, i) => (
                <th key={i} className="border border-(--border) px-3 py-2.5 text-left font-bold text-(--text) text-xs">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-(--bg-card)' : 'bg-(--bg-secondary)'}>
                {row.map((cell, ci) => (
                  <td key={ci} className="border border-(--border) px-3 py-2.5 text-(--text-secondary) leading-relaxed">
                    <InlineText text={cell} answers={answers} onChange={onChange} submitted={submitted} answerKey={answerKey} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MCSectionView({ section, answers, onChange, submitted, answerKey }: {
  section: MCSection; answers: Record<number, string>;
  onChange: (n: number, v: string) => void; submitted: boolean; answerKey: AnswerKey;
}) {
  return (
    <div className="space-y-3">
      <div>
        <p className="font-bold text-(--text) text-sm">{section.title}</p>
        {section.instruction && <p className="text-xs text-(--text-secondary) mt-0.5">{section.instruction}</p>}
      </div>
      <div className="space-y-3">
        {section.questions.map(q => {
          const selected = answers[q.number] ?? '';
          const ok = submitted ? isCorrect(q.number, selected, answerKey) : null;
          const correctLetter = submitted ? correctDisplay(q.number, answerKey) : null;
          return (
            <div key={q.number} className="bg-(--bg-secondary) border border-(--border) rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-(--border)">
                <p className="text-sm text-(--text)">
                  <span className="font-bold text-primary mr-1.5">{q.number}.</span>{q.stem}
                </p>
              </div>
              <div className="p-3 space-y-1.5">
                {q.options.map(opt => {
                  const isSelected = selected === opt.letter;
                  const isCorrectOpt = submitted && opt.letter === correctLetter;
                  return (
                    <button key={opt.letter} onClick={() => !submitted && onChange(q.number, opt.letter)} disabled={submitted}
                      className={cn(
                        'w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                        submitted
                          ? isCorrectOpt ? 'bg-primary/10 text-primary border border-primary/30 font-medium'
                            : isSelected ? 'bg-(--bg-card) text-(--text-muted) line-through border border-(--border)'
                            : 'bg-(--bg-card) border border-(--border) text-(--text-secondary)'
                          : isSelected ? 'bg-primary text-white border border-primary'
                            : 'bg-(--bg-card) border border-(--border) text-(--text-secondary) hover:border-primary/50',
                      )}>
                      <span className={cn(
                        'w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0',
                        submitted
                          ? isCorrectOpt ? 'bg-primary text-white' : isSelected ? 'bg-(--border) text-(--text-muted)' : 'bg-(--bg-secondary) text-(--text-muted)'
                          : isSelected ? 'bg-white/20 text-white' : 'bg-(--bg-secondary) text-(--text)',
                      )}>
                        {opt.letter}
                      </span>
                      {opt.text}
                    </button>
                  );
                })}
              </div>
              {submitted && !ok && selected && (
                <div className="px-4 pb-3">
                  <p className="text-xs text-primary font-semibold">✓ Correct answer: {correctLetter}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MatchingSectionView({ section, answers, onChange, submitted, answerKey }: {
  section: MatchingSection; answers: Record<number, string>;
  onChange: (n: number, v: string) => void; submitted: boolean; answerKey: AnswerKey;
}) {
  return (
    <div className="space-y-3">
      <div>
        <p className="font-bold text-(--text) text-sm">{section.title}</p>
        <p className="text-xs text-(--text-secondary) mt-0.5 whitespace-pre-line">{section.instruction}</p>
      </div>
      <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-3">
        <div className="flex flex-wrap gap-2">
          {section.options.map(opt => (
            <span key={opt.letter} className="text-xs bg-(--bg-card) border border-(--border) rounded-lg px-2.5 py-1.5 text-(--text-secondary)">
              <span className="font-bold text-(--text) mr-1">{opt.letter}</span>{opt.text}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {section.items.map(item => {
          const selected = answers[item.number] ?? '';
          const ok = submitted ? isCorrect(item.number, selected, answerKey) : null;
          const correct = submitted ? correctDisplay(item.number, answerKey) : null;
          return (
            <div key={item.number} className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-xl border',
              submitted && ok ? 'bg-primary/5 border-primary/20' : 'bg-(--bg-secondary) border-(--border)',
            )}>
              <span className="font-bold text-primary text-sm w-5 shrink-0">{item.number}.</span>
              <span className="flex-1 text-sm text-(--text)">{item.stem}</span>
              {submitted ? (
                <div className="flex items-center gap-2 shrink-0">
                  <span className={cn('font-bold text-sm px-2 py-0.5 rounded-lg', ok ? 'bg-primary/10 text-primary' : 'bg-(--bg-card) text-(--text-muted) line-through')}>
                    {selected || '–'}
                  </span>
                  {!ok && correct && <span className="text-sm font-bold text-primary">{correct}</span>}
                </div>
              ) : (
                <select value={selected} onChange={e => onChange(item.number, e.target.value)}
                  className="text-sm bg-(--bg-card) border border-(--border) rounded-lg px-2 py-1.5 text-(--text) focus:outline-none focus:border-primary shrink-0">
                  <option value="">–</option>
                  {section.options.map(opt => <option key={opt.letter} value={opt.letter}>{opt.letter}</option>)}
                </select>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionView(props: {
  section: QuestionSection; answers: Record<number, string>;
  onChange: (n: number, v: string) => void; submitted: boolean; answerKey: AnswerKey;
}) {
  const { section, ...rest } = props;
  if (section.type === 'notes' || section.type === 'form') return <NotesSectionView section={section as NotesSection} {...rest} />;
  if (section.type === 'table') return <TableSectionView section={section as TableSection} {...rest} />;
  if (section.type === 'multiple-choice') return <MCSectionView section={section as MCSection} {...rest} />;
  if (section.type === 'matching') return <MatchingSectionView section={section as MatchingSection} {...rest} />;
  return null;
}

// ── Score Summary ──────────────────────────────────────────────────────────────

function ScoreSummary({ answers, test }: { answers: Record<number, string>; test: IELTSTest }) {
  const partScores = test.parts.map(p => {
    let correct = 0;
    for (let q = p.questionRange[0]; q <= p.questionRange[1]; q++) {
      if (isCorrect(q, answers[q] ?? '', test.answerKey)) correct++;
    }
    return { part: p.part, correct, total: p.questionRange[1] - p.questionRange[0] + 1 };
  });
  const totalCorrect = partScores.reduce((s, p) => s + p.correct, 0);

  return (
    <div className="bg-(--bg-secondary) border border-(--border) rounded-2xl overflow-hidden">
      <div className="bg-primary/5 border-b border-primary/20 px-5 py-4 flex items-center gap-3">
        <Trophy className="w-5 h-5 text-primary shrink-0" />
        <div>
          <p className="font-bold text-(--text)">Your Score — {test.title}</p>
          <p className="text-xs text-(--text-muted)">Estimated band: {bandFromScore(totalCorrect)}</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-2xl font-extrabold text-primary">
            {totalCorrect}<span className="text-base font-semibold text-(--text-muted)">/40</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 divide-x divide-(--border)">
        {partScores.map(ps => (
          <div key={ps.part} className="px-3 py-3 text-center">
            <p className="text-[10px] text-(--text-muted) font-semibold uppercase">Part {ps.part}</p>
            <p className="text-lg font-bold text-(--text) mt-0.5">{ps.correct}<span className="text-xs text-(--text-muted)">/{ps.total}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

export default function IELTSListeningPage() {
  const [testIdx, setTestIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentPart, setCurrentPart] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [audioUrls, setAudioUrls] = useState<Record<number, string>>({});
  const [audioInput, setAudioInput] = useState('');
  const [showAudioInput, setShowAudioInput] = useState(false);

  const test = TESTS[testIdx];
  const part = test.parts[currentPart];
  const audioUrl = audioUrls[currentPart] ?? part.audioUrl;

  const onChange = (n: number, v: string) => setAnswers(prev => ({ ...prev, [n]: v }));
  const answered = Object.values(answers).filter(v => v.trim() !== '').length;

  const handleAddAudio = () => {
    const url = audioInput.trim();
    if (!url) return;
    setAudioUrls(prev => ({ ...prev, [currentPart]: url }));
    setShowAudioInput(false);
    setAudioInput('');
  };

  const goToPart = (i: number) => {
    setCurrentPart(i);
    setShowAudioInput(false);
    setAudioInput('');
  };

  const switchTest = (i: number) => {
    setTestIdx(i);
    setAnswers({});
    setCurrentPart(0);
    setSubmitted(false);
    setAudioUrls({});
    setShowAudioInput(false);
    setAudioInput('');
  };

  return (
    <div className="p-4 lg:p-6 max-w-3xl mx-auto space-y-5 animate-fade-in">
      <Link href="/practice" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Practice
      </Link>

      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold text-(--text)">IELTS Listening</h1>
        <p className="text-sm text-(--text-secondary) mt-0.5">4 parts · 40 questions · Answer all questions</p>
      </div>

      {/* ── Test selector ── */}
      <div className="border border-(--border) rounded-2xl overflow-hidden">
        <div className="px-4 py-2.5 bg-(--bg-secondary) border-b border-(--border)">
          <p className="text-xs font-bold text-(--text-muted) uppercase tracking-wide">Select Practice Test</p>
        </div>
        <div className="grid grid-cols-3 divide-x divide-(--border)">
          {TESTS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => switchTest(i)}
              className={cn(
                'flex flex-col items-center py-3 px-2 text-center transition-colors',
                testIdx === i
                  ? 'bg-primary text-white'
                  : 'bg-(--bg-card) text-(--text-secondary) hover:bg-(--bg-secondary)',
              )}
            >
              <span className={cn('text-xs font-semibold', testIdx === i ? 'text-white/70' : 'text-(--text-muted)')}>
                Practice Test
              </span>
              <span className="text-2xl font-extrabold leading-tight">{t.number}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active test label */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-xl">
          <span className="text-xs font-bold text-primary uppercase tracking-wide">IELTS Listening</span>
          <span className="text-sm font-extrabold text-primary">Test {test.number}</span>
        </div>
        <span className="text-xs text-(--text-muted)">of {TESTS.length} available</span>
      </div>

      {submitted && <ScoreSummary answers={answers} test={test} />}

      {/* Part tabs */}
      <div className="flex gap-1.5 flex-wrap items-center">
        {test.parts.map((p, i) => (
          <button key={i} onClick={() => goToPart(i)}
            className={cn(
              'px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all',
              currentPart === i
                ? 'bg-primary text-white border-primary'
                : 'bg-(--bg-card) border-(--border) text-(--text-secondary) hover:border-primary/40',
            )}>
            {p.title}
            {submitted && (() => {
              let correct = 0;
              for (let q = p.questionRange[0]; q <= p.questionRange[1]; q++) {
                if (isCorrect(q, answers[q] ?? '', test.answerKey)) correct++;
              }
              const total = p.questionRange[1] - p.questionRange[0] + 1;
              return <span className="ml-1.5 opacity-70">{correct}/{total}</span>;
            })()}
          </button>
        ))}
        {!submitted
          ? <span className="ml-auto flex items-center gap-1.5 text-xs text-(--text-muted)"><Clock className="w-3.5 h-3.5" />{answered}/40</span>
          : <button onClick={() => switchTest(testIdx)}
              className="ml-auto text-xs text-(--text-secondary) hover:text-primary border border-(--border) px-3 py-1.5 rounded-lg transition-colors">
              Restart Test {test.number}
            </button>
        }
      </div>

      {/* Instructions box */}
      <div className="border border-(--border) rounded-xl overflow-hidden">
        <div className="bg-primary/5 border-b border-primary/10 px-4 py-3">
          <p className="text-sm font-bold text-(--text)">
            IELTS Listening Practice Test {test.number} – {part.title}
          </p>
          <p className="text-xs text-(--text-muted) mt-0.5 italic">{part.scenario}</p>
        </div>
        <div className="px-4 py-3">
          {part.description.split('\n').map((line, i) => (
            <p key={i} className="text-sm text-(--text-secondary) leading-relaxed">{line}</p>
          ))}
        </div>
      </div>

      {/* Audio section */}
      <div className="border border-(--border) rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-(--border) bg-(--bg-secondary)">
          <Volume2 className="w-4 h-4 text-primary shrink-0" />
          <span className="text-sm font-semibold text-(--text)">
            Listen to the audio for {part.title.toLowerCase()}
          </span>
          {audioUrl && (
            <button onClick={() => setAudioUrls(prev => { const n = { ...prev }; delete n[currentPart]; return n; })}
              className="ml-auto text-xs text-(--text-muted) hover:text-primary">
              Change
            </button>
          )}
        </div>
        <div className="px-4 py-4">
          {audioUrl ? (
            <AudioPlayer src={audioUrl} />
          ) : showAudioInput ? (
            <div className="space-y-2">
              <div className="flex gap-2">
                <input type="text" value={audioInput} onChange={e => setAudioInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddAudio()}
                  placeholder="Paste audio URL (.mp3, .ogg, ...)" autoFocus
                  className="flex-1 px-3 py-2 text-sm rounded-xl border border-(--border) bg-(--bg-card) text-(--text) focus:outline-none focus:border-primary" />
                <button onClick={handleAddAudio} className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:opacity-90">Add</button>
                <button onClick={() => setShowAudioInput(false)} className="px-3 py-2 rounded-xl border border-(--border) text-(--text-secondary) text-sm hover:bg-(--bg-secondary)">Cancel</button>
              </div>
              <p className="text-xs text-(--text-muted)">Download free practice audio from the British Council IELTS website, then paste the direct MP3 link here.</p>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button onClick={() => setShowAudioInput(true)} className="text-sm text-primary hover:underline font-medium">
                + Add audio URL for {part.title.toLowerCase()}
              </button>
              <span className="text-xs text-(--text-muted)">or download from British Council IELTS</span>
            </div>
          )}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {part.sections.map((section, i) => (
          <SectionView key={i} section={section} answers={answers} onChange={onChange} submitted={submitted} answerKey={test.answerKey} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2 border-t border-(--border)">
        <button onClick={() => goToPart(currentPart - 1)} disabled={currentPart === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border border-(--border) text-(--text-secondary) hover:bg-(--bg-secondary) disabled:opacity-30 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        {currentPart < test.parts.length - 1 ? (
          <button onClick={() => goToPart(currentPart + 1)}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
            Now move on to {test.parts[currentPart + 1].title}
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : submitted ? (
          <div className="flex items-center gap-1.5 text-sm text-primary font-semibold">
            <CheckCircle2 className="w-4 h-4" /> Test {test.number} completed
          </div>
        ) : (
          <button onClick={() => setSubmitted(true)}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
            <CheckCircle2 className="w-4 h-4" /> Submit All Answers
          </button>
        )}
      </div>
    </div>
  );
}

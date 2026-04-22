'use client';

import { useState, useCallback } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ListeningAudio } from '@/types/module';

// ── MCQ sub-component ─────────────────────────────────────────────────────────
function MCQSection({ audio }: { audio: ListeningAudio }) {
  const questions = audio.questions ?? [];
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qi: number, letter: string) => {
    if (submitted) return;
    setSelected((p) => ({ ...p, [qi]: letter }));
  };

  const handleCheck = () => setSubmitted(true);
  const handleReset = () => { setSelected({}); setSubmitted(false); };

  const correctCount = submitted
    ? questions.filter((q, i) => selected[i] === q.correctAnswer).length
    : 0;
  const total = questions.length;
  const filledCount = Object.keys(selected).length;

  return (
    <>
      <div className="p-5 space-y-5">
        {questions.map((q, qi) => {
          const userAns = selected[qi];
          return (
            <div key={qi} className="space-y-2">
              <p className="text-sm font-semibold text-(--text)">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-1.5 pl-2">
                {q.options.map((opt) => {
                  const letter = opt.charAt(0).toUpperCase();
                  const isSelected = userAns === letter;
                  const isCorrect = q.correctAnswer === letter;
                  const showRight = submitted && isCorrect;
                  const showWrong = submitted && isSelected && !isCorrect;
                  return (
                    <button
                      key={letter}
                      onClick={() => handleSelect(qi, letter)}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-lg text-sm border transition-all',
                        !submitted && !isSelected && 'border-(--border) text-(--text-secondary) hover:border-primary/40 hover:bg-primary/5',
                        !submitted && isSelected && 'border-primary bg-primary/10 text-(--text) font-medium',
                        showRight && 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-medium',
                        showWrong && 'border-red-400 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400',
                        submitted && !isSelected && !isCorrect && 'border-(--border) text-(--text-muted) opacity-60',
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {opt}
                        {showRight && <CheckCircle2 className="w-3.5 h-3.5 ml-auto shrink-0 text-green-500" />}
                        {showWrong && <XCircle className="w-3.5 h-3.5 ml-auto shrink-0 text-red-400" />}
                      </span>
                    </button>
                  );
                })}
                {submitted && userAns && userAns !== q.correctAnswer && (
                  <p className="text-xs text-green-600 dark:text-green-400 pl-1">
                    Jawaban benar: {q.correctAnswer}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-5 py-3 border-t border-(--border) bg-(--bg-secondary) flex items-center justify-between gap-3">
        {submitted ? (
          <div className="flex items-center gap-3">
            <span className={cn('text-sm font-bold', correctCount === total ? 'text-green-600' : correctCount >= total * 0.7 ? 'text-amber-500' : 'text-red-500')}>
              {correctCount}/{total} benar
            </span>
            <div className="w-32 h-1.5 bg-(--border) rounded-full overflow-hidden">
              <div className={cn('h-full rounded-full transition-all', correctCount === total ? 'bg-green-500' : correctCount >= total * 0.7 ? 'bg-amber-500' : 'bg-red-500')} style={{ width: `${(correctCount / total) * 100}%` }} />
            </div>
            <button onClick={handleReset} className="inline-flex items-center gap-1 text-xs text-(--text-muted) hover:text-primary transition-colors">
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        ) : (
          <span className="text-xs text-(--text-muted)">{filledCount}/{total} terjawab</span>
        )}
        {!submitted && (
          <button onClick={handleCheck} disabled={filledCount === 0} className={cn('px-4 py-1.5 rounded-lg text-sm font-semibold transition-all', filledCount > 0 ? 'bg-primary text-white hover:bg-primary/90' : 'bg-(--bg-secondary) text-(--text-muted) cursor-not-allowed border border-(--border)')}>
            Cek Jawaban
          </button>
        )}
      </div>
    </>
  );
}

interface Props {
  audio: ListeningAudio;
  audioIndex: number; // 1-based
}

function normalize(s: string) {
  return s.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.,!?]+$/, '');
}

export default function ListeningAudioSection({ audio, audioIndex }: Props) {
  const isMCQ = audio.type === 'mcq';
  const totalBlanks = Object.keys(audio.answers).length;
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((n: number, val: string) => {
    setInputs((p) => ({ ...p, [n]: val }));
  }, []);

  const handleCheck = useCallback(() => {
    const result: Record<number, boolean> = {};
    Object.entries(audio.answers).forEach(([k, ans]) => {
      const n = Number(k);
      result[n] = normalize(inputs[n] ?? '') === normalize(ans);
    });
    setChecked(result);
    setSubmitted(true);
  }, [audio.answers, inputs]);

  const handleReset = useCallback(() => {
    setInputs({});
    setChecked({});
    setSubmitted(false);
  }, []);

  const correctCount = submitted ? Object.values(checked).filter(Boolean).length : 0;

  // Render a text string with {{b:N}} replaced by input fields
  const renderText = (text: string, lineKey: string) => {
    const parts = text.split(/({{b:\d+}})/g);
    return parts.map((part, i) => {
      const m = part.match(/^{{b:(\d+)}}$/);
      if (!m) return <span key={i}>{part}</span>;
      const n = Number(m[1]);
      const isRight = submitted && checked[n] === true;
      const isWrong = submitted && checked[n] === false;
      const width = Math.max(60, (audio.answers[n]?.length ?? 6) * 9);
      return (
        <span key={i} className="inline-flex flex-col items-center mx-0.5 align-bottom">
          <span className="inline-flex items-center gap-0.5">
            <input
              type="text"
              value={inputs[n] ?? ''}
              onChange={(e) => handleChange(n, e.target.value)}
              disabled={submitted}
              style={{ width }}
              className={cn(
                'border-b-2 bg-transparent outline-none text-sm text-center px-1 pb-0.5 transition-colors',
                !submitted && 'border-primary/40 focus:border-primary text-(--text)',
                isRight && 'border-green-500 text-green-700 dark:text-green-400',
                isWrong && 'border-red-400 text-red-600 dark:text-red-400',
              )}
              placeholder={`_${n}_`}
            />
            {isRight && <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />}
            {isWrong && <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />}
          </span>
          {isWrong && (
            <span className="text-[10px] text-green-600 dark:text-green-400 font-medium mt-0.5">
              {audio.answers[n]}
            </span>
          )}
          <span className="text-[9px] text-(--text-muted) leading-none">{n}</span>
        </span>
      );
    });
  };

  const filledCount = Object.keys(inputs).filter((k) => (inputs[Number(k)] ?? '').trim()).length;

  return (
    <div className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden">
      {/* Audio header */}
      <div className="px-5 py-3 bg-primary/5 border-b border-(--border) flex items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-(--text) text-sm">
            <span className="text-primary mr-1.5">Audio {audioIndex}.</span>
            {audio.title.replace(/^Audio \d+[:.]\s*/i, '')}
          </h3>
          <p className="text-xs text-(--text-muted) mt-0.5 italic">{audio.instruction}</p>
        </div>
        {submitted && !isMCQ && (
          <button
            onClick={handleReset}
            className="shrink-0 inline-flex items-center gap-1 text-xs text-(--text-muted) hover:text-primary transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        )}
      </div>

      {/* MCQ body + footer */}
      {isMCQ && <MCQSection audio={audio} />}

      {/* Script body (fill-in-the-blank) */}
      {!isMCQ && (
        <div className="p-5 space-y-0.5">
          {audio.type === 'table' && audio.tableRows
            ? (
              <table className="w-full text-sm border-collapse border border-(--border) rounded-lg overflow-hidden">
                <tbody>
                  {audio.tableRows.map((row, i) => (
                    <tr key={i} className="border-b border-(--border) last:border-0">
                      <td className="py-3 px-4 text-(--text) font-medium align-middle border-r border-(--border) bg-(--bg-secondary) w-[45%] leading-snug">
                        {row.label}
                      </td>
                      <td className="py-3 px-4 text-(--text-secondary) align-middle">
                        <span className="flex flex-wrap items-baseline gap-y-1">
                          {renderText(row.value, `trow-${i}`)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
            : audio.type === 'dialogue'
            ? audio.lines.map((line, i) => (
                <div key={i} className="flex gap-3 py-1 leading-relaxed text-sm">
                  {line.speaker ? (
                    <>
                      <span className="shrink-0 w-28 font-bold text-(--text) text-right pt-0.5">{line.speaker}</span>
                      <span className="shrink-0 text-(--text-muted)">:</span>
                      <span className="flex-1 text-(--text-secondary) flex flex-wrap items-baseline gap-y-1">
                        {renderText(line.text, `${i}`)}
                      </span>
                    </>
                  ) : (
                    <span className="flex-1 pl-32 text-(--text-muted) italic text-xs flex flex-wrap items-baseline gap-y-1">
                      {renderText(line.text, `${i}`)}
                    </span>
                  )}
                </div>
              ))
            : audio.lines.map((line, i) => {
                if (line.bold) {
                  return (
                    <div key={i} className="pt-3 pb-0.5 flex flex-wrap items-baseline gap-y-1">
                      <span className="font-bold text-(--text) text-sm flex flex-wrap items-baseline gap-y-1">{renderText(line.text, `bold-${i}`)}</span>
                    </div>
                  );
                }
                if (line.indent) {
                  return (
                    <div key={i} className="pl-5 flex flex-wrap items-baseline gap-y-1 text-sm text-(--text-secondary) leading-relaxed py-0.5">
                      <span className="mr-1.5 text-(--text-muted)">•</span>
                      {renderText(line.text, `${i}`)}
                    </div>
                  );
                }
                return (
                  <div key={i} className="flex flex-wrap items-baseline gap-y-1 text-sm text-(--text-secondary) leading-relaxed py-0.5">
                    {renderText(line.text, `${i}`)}
                  </div>
                );
              })}
        </div>
      )}

      {/* Footer: progress + check button (fill-in-the-blank only) */}
      {!isMCQ && (
        <div className="px-5 py-3 border-t border-(--border) bg-(--bg-secondary) flex items-center justify-between gap-3">
          {submitted ? (
            <div className="flex items-center gap-3">
              <span className={cn(
                'text-sm font-bold',
                correctCount === totalBlanks ? 'text-green-600' : correctCount >= totalBlanks * 0.7 ? 'text-amber-500' : 'text-red-500'
              )}>
                {correctCount}/{totalBlanks} benar
              </span>
              <div className="w-32 h-1.5 bg-(--border) rounded-full overflow-hidden">
                <div
                  className={cn('h-full rounded-full transition-all', correctCount === totalBlanks ? 'bg-green-500' : correctCount >= totalBlanks * 0.7 ? 'bg-amber-500' : 'bg-red-500')}
                  style={{ width: `${(correctCount / totalBlanks) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            <span className="text-xs text-(--text-muted)">{filledCount}/{totalBlanks} terisi</span>
          )}
          {!submitted && (
            <button
              onClick={handleCheck}
              disabled={filledCount === 0}
              className={cn(
                'px-4 py-1.5 rounded-lg text-sm font-semibold transition-all',
                filledCount > 0
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-(--bg-secondary) text-(--text-muted) cursor-not-allowed border border-(--border)',
              )}
            >
              Cek Jawaban
            </button>
          )}
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import type { Exercise } from '@/data/tnIntermediateGrammar';

type Props = { exercises: Exercise[] };

type AnswerState = 'unanswered' | 'correct' | 'wrong';

export default function ExerciseSection({ exercises }: Props) {
  const [selected, setSelected] = useState<(string | null)[]>(
    () => Array(exercises.length).fill(null),
  );
  const [revealed, setRevealed] = useState<boolean[]>(
    () => Array(exercises.length).fill(false),
  );
  const [submitted, setSubmitted] = useState(false);

  const score = exercises.filter((ex, i) => selected[i] === ex.answer).length;

  function pick(qi: number, opt: string) {
    if (submitted) return;
    setSelected((prev) => prev.map((v, i) => (i === qi ? opt : v)));
  }

  function toggleReveal(qi: number) {
    setRevealed((prev) => prev.map((v, i) => (i === qi ? !v : v)));
  }

  function reset() {
    setSelected(Array(exercises.length).fill(null));
    setRevealed(Array(exercises.length).fill(false));
    setSubmitted(false);
  }

  function getState(qi: number, opt: string): AnswerState {
    if (!submitted) return 'unanswered';
    if (opt === exercises[qi].answer) return 'correct';
    if (opt === selected[qi]) return 'wrong';
    return 'unanswered';
  }

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-(--text) uppercase tracking-wider">
          Latihan ({exercises.length} Soal)
        </h2>
        {submitted && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-xs text-(--text-secondary) hover:text-primary transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Ulangi
          </button>
        )}
      </div>

      {/* Score Banner */}
      {submitted && (
        <div
          className={`rounded-xl border px-4 py-3 flex items-center gap-3 ${
            score === exercises.length
              ? 'bg-green-50 dark:bg-green-950/30 border-green-300/60 text-green-700'
              : score >= exercises.length / 2
              ? 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-300/60 text-yellow-700'
              : 'bg-red-50 dark:bg-red-950/30 border-red-300/60 text-red-700'
          }`}
        >
          <span className="text-2xl font-bold">{score}/{exercises.length}</span>
          <span className="text-sm font-medium">
            {score === exercises.length
              ? 'Sempurna! Kamu menguasai materi ini.'
              : score >= exercises.length / 2
              ? 'Bagus! Terus berlatih untuk hasil lebih baik.'
              : 'Coba lagi! Pelajari kembali materi di atas.'}
          </span>
        </div>
      )}

      {/* Questions */}
      <div className="space-y-4">
        {exercises.map((ex, qi) => {
          const userAns = selected[qi];
          const isCorrect = userAns === ex.answer;
          const isAnswered = userAns !== null;

          return (
            <div
              key={qi}
              className={`bg-(--bg-card) border rounded-xl overflow-hidden transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-green-400/50'
                    : 'border-red-400/50'
                  : 'border-(--border)'
              }`}
            >
              {/* Question */}
              <div className="px-4 pt-4 pb-3">
                <p className="text-sm font-semibold text-(--text) leading-relaxed">
                  <span className="text-primary font-bold mr-2">{qi + 1}.</span>
                  {ex.question}
                </p>
              </div>

              {/* Options */}
              <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ex.options.map((opt) => {
                  const state = getState(qi, opt);
                  const isSelected = selected[qi] === opt;

                  let optClass =
                    'w-full text-left text-sm px-3 py-2 rounded-lg border transition-all font-mono';

                  if (!submitted) {
                    optClass += isSelected
                      ? ' bg-primary/10 border-primary text-primary font-semibold'
                      : ' bg-(--bg-secondary) border-(--border) text-(--text-secondary) hover:border-primary/50 hover:text-primary';
                  } else {
                    if (state === 'correct')
                      optClass += ' bg-green-50 dark:bg-green-950/30 border-green-400 text-green-700 font-semibold';
                    else if (state === 'wrong')
                      optClass += ' bg-red-50 dark:bg-red-950/30 border-red-400 text-red-600 font-semibold line-through';
                    else
                      optClass += ' bg-(--bg-secondary) border-(--border) text-(--text-muted) opacity-50';
                  }

                  return (
                    <button key={opt} onClick={() => pick(qi, opt)} className={optClass}>
                      {submitted && state === 'correct' && (
                        <CheckCircle className="inline w-3.5 h-3.5 mr-1.5 shrink-0 text-green-600" />
                      )}
                      {submitted && state === 'wrong' && (
                        <XCircle className="inline w-3.5 h-3.5 mr-1.5 shrink-0 text-red-500" />
                      )}
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Explanation toggle (only after submit) */}
              {submitted && (
                <div className="border-t border-(--border)">
                  <button
                    onClick={() => toggleReveal(qi)}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-(--text-secondary) hover:text-primary transition-colors"
                  >
                    {revealed[qi] ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                    {revealed[qi] ? 'Sembunyikan penjelasan' : 'Lihat penjelasan'}
                  </button>
                  {revealed[qi] && (
                    <div className="px-4 pb-4 text-xs text-(--text-secondary) bg-primary/5 rounded-b-xl leading-relaxed">
                      <span className="font-semibold text-primary">Penjelasan: </span>
                      {ex.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit / Check button */}
      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          disabled={selected.some((s) => s === null)}
          className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {selected.some((s) => s === null)
            ? `Jawab semua soal (${selected.filter((s) => s !== null).length}/${exercises.length})`
            : 'Periksa Jawaban'}
        </button>
      )}
    </section>
  );
}

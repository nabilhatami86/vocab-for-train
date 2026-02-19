"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, RotateCcw, Trophy, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { grammarExams } from "@/data/grammarExams";

export default function GrammarExamPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const exam = grammarExams.find((item) => item.slug === slug);

  const shuffledQuestions = useMemo(() => {
    if (!exam) return [];
    return exam.questions;
  }, [exam]);

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!exam) {
    return (
      <div className="p-4 lg:p-6 max-w-3xl mx-auto space-y-4">
        <Link href="/practice" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="bg-(--bg-card) border border-(--border) rounded-xl p-6">
          <h1 className="text-xl font-bold text-(--text)">Paket ujian tidak ditemukan</h1>
        </div>
      </div>
    );
  }

  const total = shuffledQuestions.length;
  const answered = Object.keys(answers).length;
  const score = submitted
    ? shuffledQuestions.filter((q) => answers[q.id] === q.correctIndex).length
    : 0;
  const percent = submitted ? Math.round((score / total) * 100) : 0;

  const handleSelect = (id: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: optionIndex }));
  };

  const handleSubmit = () => {
    if (answered < total) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetQuiz = () => {
    window.location.reload();
  };

  return (
    <div className="p-4 lg:p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Link href="/practice" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <span className="text-sm text-(--text-secondary)">
          {answered}/{total} dijawab
        </span>
      </div>

      <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-(--text)">{exam.title}</h1>
        <p className="text-sm text-(--text-secondary) mt-1">{exam.description}</p>
        <p className="text-xs text-(--text-muted) mt-2">Durasi referensi: {exam.duration}</p>
        <a
          href={exam.sourcePdf}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 text-xs text-primary hover:underline"
        >
          Lihat PDF sumber
        </a>

        {submitted && (
          <div className="mt-5 rounded-xl border border-(--border) bg-(--bg-secondary) p-4">
            <div className="flex items-center gap-2 text-(--text)">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span className="font-semibold">
                Skor: {score}/{total} ({percent}%)
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {shuffledQuestions.map((q, idx) => {
          const selected = answers[q.id];
          return (
            <section key={q.id} className="bg-(--bg-card) border border-(--border) rounded-xl p-5">
              <p className="text-sm text-(--text-secondary) mb-2">Soal {idx + 1}</p>
              <h2 className="font-medium text-(--text) mb-4">{q.question}</h2>

              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isSelected = selected === i;
                  const isCorrect = i === q.correctIndex;
                  return (
                    <button
                      key={`${q.id}-${i}`}
                      type="button"
                      onClick={() => handleSelect(q.id, i)}
                      disabled={submitted}
                      className={cn(
                        "w-full text-left rounded-lg border p-3 text-sm transition-all",
                        !submitted && "border-(--border) hover:border-primary/40",
                        !submitted && isSelected && "border-primary bg-primary/10",
                        submitted && isCorrect && "border-green-500 bg-green-50 dark:bg-green-950/40",
                        submitted && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-950/40",
                        submitted && !isSelected && !isCorrect && "border-(--border) opacity-70",
                      )}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span>{opt}</span>
                        {!submitted && isSelected && (
                          <span className="text-xs font-medium text-primary">Dipilih</span>
                        )}
                        {submitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                        {submitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-3 space-y-1 text-xs">
                  {selected !== q.correctIndex ? (
                    <>
                      <p className="text-red-600 dark:text-red-400">
                        Koreksi: jawaban kamu salah.
                      </p>
                      <p className="text-(--text-secondary)">
                        Jawaban benar: <span className="font-medium text-(--text)">{q.options[q.correctIndex]}</span>
                      </p>
                    </>
                  ) : (
                    <p className="text-green-600 dark:text-green-400">
                      Jawaban kamu benar.
                    </p>
                  )}
                  <p className="text-(--text-secondary)">
                    Penjelasan: {q.reason}
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={answered < total}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium",
              answered < total
                ? "bg-(--bg-secondary) text-(--text-muted) cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-dark",
            )}
          >
            Submit Ujian
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark"
          >
            <RotateCcw className="w-4 h-4" /> Ulangi
          </button>
        )}
      </div>
    </div>
  );
}

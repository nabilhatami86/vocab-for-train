'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, BookText, Languages, X, XCircle, Lightbulb } from 'lucide-react';
import type { ModuleLesson } from '@/types/module';
import { cn } from '@/lib/utils';
import TTSPlayer from '@/components/tts/TTSPlayer';

interface Props {
  lesson: ModuleLesson;
}

export default function ModuleLessonClient({ lesson }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [translation, setTranslation] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string>('');
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});

  const completedCount = useMemo(
    () =>
      lesson.exercises.filter((exercise) => {
        if (exercise.type === 'multiple-choice') return Boolean(selectedOptions[exercise.id]);
        return Boolean(notes[exercise.id]?.trim());
      }).length,
    [lesson.exercises, notes, selectedOptions]
  );

  const tokenize = useCallback((text: string) => text.split(/(\s+|[^A-Za-z'-]+)/g), []);

  const translateWord = useCallback(async (word: string) => {
    const cleaned = word.toLowerCase().replace(/^'+|'+$/g, '');
    if (!cleaned) return;

    setSelectedWord(cleaned);
    setTranslationError('');

    if (translationCache[cleaned]) {
      setTranslation(translationCache[cleaned]);
      return;
    }

    setIsTranslating(true);
    setTranslation('');

    try {
      const memoryRes = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleaned)}&langpair=en|id`
      );
      if (memoryRes.ok) {
        const memoryData = await memoryRes.json();
        const translated = memoryData?.responseData?.translatedText;
        if (translated && typeof translated === 'string' && translated.trim()) {
          setTranslation(translated);
          setTranslationCache((prev) => ({ ...prev, [cleaned]: translated }));
          setIsTranslating(false);
          return;
        }
      }

      const googleRes = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=id&dt=t&q=${encodeURIComponent(cleaned)}`
      );
      if (!googleRes.ok) throw new Error('translator unavailable');
      const googleData = await googleRes.json();
      const translated = googleData?.[0]?.[0]?.[0];

      if (!translated || typeof translated !== 'string') throw new Error('empty translation');

      setTranslation(translated);
      setTranslationCache((prev) => ({ ...prev, [cleaned]: translated }));
    } catch {
      setTranslationError('Terjemahan gagal dimuat. Coba lagi.');
    } finally {
      setIsTranslating(false);
    }
  }, [translationCache]);

  const renderClickableText = useCallback((text: string) => {
    const parts = tokenize(text);
    return parts.map((part, idx) => {
      const isWord = /^[A-Za-z][A-Za-z'-]*$/.test(part);
      if (!isWord) return <span key={`${part}-${idx}`}>{part}</span>;

      const cleaned = part.toLowerCase().replace(/^'+|'+$/g, '');
      const isActive = selectedWord === cleaned;

      return (
        <button
          key={`${part}-${idx}`}
          type="button"
          onClick={() => translateWord(part)}
          className={cn(
            'rounded px-0.5 transition-colors',
            isActive
              ? 'bg-primary/15 text-primary'
              : 'hover:bg-primary/10 hover:text-primary'
          )}
        >
          {part}
        </button>
      );
    });
  }, [selectedWord, tokenize, translateWord]);

  return (
    <div className="p-4 lg:p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Link href="/tn-basic-cource" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to TN Basic Cource
        </Link>
        <p className="text-sm text-(--text-secondary)">
          Progress: <span className="font-semibold text-(--text)">{completedCount}/{lesson.exercises.length}</span>
        </p>
      </div>

      <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-6">
        <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          {lesson.track.toUpperCase()} • Day {lesson.day}
        </p>
        <h1 className="text-2xl font-bold text-(--text)">{lesson.title}</h1>
        <p className="text-sm text-(--text-secondary) mt-1">{renderClickableText(lesson.subtitle)}</p>
        <p className="text-sm text-(--text-secondary) mt-4 leading-relaxed">{renderClickableText(lesson.overview)}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
          <BookText className="w-5 h-5 text-primary" /> Material
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {lesson.materialSections.map((section) => (
            <div key={section.title} className="bg-(--bg-card) border border-(--border) rounded-xl p-5">
              <h3 className="font-semibold text-(--text) mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm text-(--text-secondary)">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{renderClickableText(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {lesson.track === 'listening' && lesson.passage && lesson.passage.length > 0 && (
        <TTSPlayer
          text={lesson.passage.join('\n')}
          label="Listen to Audio"
        />
      )}

      {lesson.passage && lesson.passage.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-(--text)">
            {{ reading: 'Full Reading Passage', speaking: 'Sample Script', grammar: 'Grammar Examples', listening: 'Listening Script' }[lesson.track]}
          </h2>
          <div className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-4">
            {lesson.passage.map((paragraph, idx) => (
              <p key={`${lesson.id}-p-${idx}`} className="text-sm leading-7 text-(--text-secondary)">
                {renderClickableText(paragraph)}
              </p>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-(--text)">Exercises</h2>
        <div className="space-y-4">
          {lesson.exercises.map((exercise, index) => {
            const isDone =
              exercise.type === 'multiple-choice'
                ? Boolean(selectedOptions[exercise.id])
                : Boolean(notes[exercise.id]?.trim());

            return (
              <div key={exercise.id} className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm text-(--text) font-medium">
                    {index + 1}. {renderClickableText(exercise.question)}
                  </p>
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-(--text-muted) mt-0.5 shrink-0" />
                  )}
                </div>

                {exercise.type === 'multiple-choice' && exercise.options && (() => {
                  const selected = selectedOptions[exercise.id];
                  const hasAnswered = Boolean(selected);
                  const isCorrect = hasAnswered && selected === exercise.correctAnswer;

                  return (
                    <div className="space-y-3">
                      <div className="grid sm:grid-cols-2 gap-2">
                        {exercise.options.map((option) => {
                          const isSelected = selected === option;
                          const isAnswer = option === exercise.correctAnswer;
                          const showResult = hasAnswered && exercise.correctAnswer;

                          return (
                            <button
                              key={option}
                              onClick={() => setSelectedOptions((prev) => ({ ...prev, [exercise.id]: option }))}
                              className={cn(
                                'text-left text-sm px-3 py-2 rounded-lg border transition-colors',
                                showResult
                                  ? isAnswer
                                    ? 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-400 font-medium'
                                    : isSelected
                                      ? 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-400'
                                      : 'border-(--border) text-(--text-muted)'
                                  : isSelected
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-(--border) hover:border-primary/50 text-(--text-secondary)'
                              )}
                            >
                              <span className="flex items-center gap-2">
                                {showResult && isAnswer && <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" />}
                                {showResult && isSelected && !isAnswer && <XCircle className="w-4 h-4 shrink-0 text-red-500" />}
                                {option}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && exercise.correctAnswer && (
                        <div className={cn(
                          'rounded-lg px-4 py-3 text-sm flex items-start gap-2',
                          isCorrect
                            ? 'bg-green-500/10 border border-green-500/30'
                            : 'bg-red-500/10 border border-red-500/30'
                        )}>
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                          ) : (
                            <XCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                          )}
                          <div>
                            <p className={cn('font-medium', isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400')}>
                              {isCorrect ? 'Benar!' : 'Salah!'}
                              {!isCorrect && <span className="font-normal text-(--text-secondary)"> Jawaban yang benar: <span className="font-semibold text-green-700 dark:text-green-400">{exercise.correctAnswer}</span></span>}
                            </p>
                            {exercise.reason && (
                              <p className="mt-1 text-(--text-secondary) flex items-start gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
                                {exercise.reason}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {exercise.type !== 'multiple-choice' && (
                  <textarea
                    value={notes[exercise.id] ?? ''}
                    onChange={(e) => setNotes((prev) => ({ ...prev, [exercise.id]: e.target.value }))}
                    placeholder="Write your answer here..."
                    className="w-full min-h-[90px] rounded-lg border border-(--border) bg-(--bg-secondary) px-3 py-2 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {selectedWord && (
        <div className="fixed right-4 bottom-4 z-40 w-[min(92vw,360px)] bg-(--bg-card) border border-(--border) rounded-xl shadow-xl p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <p className="text-sm font-semibold text-(--text) flex items-center gap-2">
              <Languages className="w-4 h-4 text-primary" />
              {selectedWord}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedWord(null);
                setTranslation('');
                setTranslationError('');
              }}
              className="p-1 rounded hover:bg-(--hover)"
              aria-label="Close translation"
            >
              <X className="w-4 h-4 text-(--text-muted)" />
            </button>
          </div>

          {isTranslating && <p className="text-sm text-(--text-secondary)">Menerjemahkan...</p>}
          {!isTranslating && translation && (
            <p className="text-sm text-(--text-secondary)">
              <span className="font-medium text-(--text)">ID:</span> {translation}
            </p>
          )}
          {!isTranslating && translationError && (
            <p className="text-sm text-red-600 dark:text-red-400">{translationError}</p>
          )}
        </div>
      )}
    </div>
  );
}

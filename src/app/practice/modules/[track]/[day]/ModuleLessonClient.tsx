'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, BookText } from 'lucide-react';
import type { ModuleLesson } from '@/types/module';
import { cn } from '@/lib/utils';

interface Props {
  lesson: ModuleLesson;
}

export default function ModuleLessonClient({ lesson }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});

  const completedCount = useMemo(
    () =>
      lesson.exercises.filter((exercise) => {
        if (exercise.type === 'multiple-choice') return Boolean(selectedOptions[exercise.id]);
        return Boolean(notes[exercise.id]?.trim());
      }).length,
    [lesson.exercises, notes, selectedOptions]
  );

  return (
    <div className="p-4 lg:p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Link href="/practice/modules" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Modules
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
        <p className="text-sm text-(--text-secondary) mt-1">{lesson.subtitle}</p>
        <p className="text-sm text-(--text-secondary) mt-4 leading-relaxed">{lesson.overview}</p>
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
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

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
                    {index + 1}. {exercise.question}
                  </p>
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-(--text-muted) mt-0.5 shrink-0" />
                  )}
                </div>

                {exercise.type === 'multiple-choice' && exercise.options && (
                  <div className="grid sm:grid-cols-2 gap-2">
                    {exercise.options.map((option) => {
                      const isSelected = selectedOptions[exercise.id] === option;
                      return (
                        <button
                          key={option}
                          onClick={() => setSelectedOptions((prev) => ({ ...prev, [exercise.id]: option }))}
                          className={cn(
                            'text-left text-sm px-3 py-2 rounded-lg border transition-colors',
                            isSelected
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-(--border) hover:border-primary/50 text-(--text-secondary)'
                          )}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}

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
    </div>
  );
}

'use client';

import { useVocabStore } from '@/store/useVocabStore';
import { cn } from '@/lib/utils';
import type { Difficulty } from '@/types/vocab';

const difficultyOptions: { value: Difficulty | null; label: string }[] = [
  { value: null, label: 'All Levels' },
  { value: 'basic', label: 'Basic' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

export function FilterBar() {
  const selectedDifficulty = useVocabStore((s) => s.selectedDifficulty);
  const setSelectedDifficulty = useVocabStore((s) => s.setSelectedDifficulty);

  return (
    <div className="flex flex-wrap gap-2">
      {difficultyOptions.map((opt) => (
        <button
          key={opt.label}
          onClick={() => setSelectedDifficulty(opt.value)}
          className={cn(
            'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
            selectedDifficulty === opt.value
              ? 'bg-primary text-white'
              : 'bg-(--bg-secondary) text-(--text-secondary) hover:bg-(--hover) border border-(--border)'
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

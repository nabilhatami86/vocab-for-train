'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Zap, Palette, Wind, MessageSquare, Calendar, Briefcase } from 'lucide-react';
import { useVocabStore } from '@/store/useVocabStore';
import { filterVocabulary } from '@/lib/utils';
import { VocabCard } from '@/components/vocab/VocabCard';
import { SearchBar } from '@/components/vocab/SearchBar';
import { FilterBar } from '@/components/vocab/FilterBar';
import type { VocabWord, CategoryInfo } from '@/types/vocab';

interface Props {
  category: CategoryInfo;
  words: VocabWord[];
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Zap,
  Palette,
  Wind,
  MessageSquare,
  Calendar,
  Briefcase,
};

export function CategoryPageClient({ category, words }: Props) {
  const searchQuery = useVocabStore((s) => s.searchQuery);
  const selectedDifficulty = useVocabStore((s) => s.selectedDifficulty);
  const CategoryIcon = iconMap[category.icon] || BookOpen;

  const filtered = useMemo(
    () =>
      filterVocabulary(words, {
        difficulty: selectedDifficulty ?? undefined,
        search: searchQuery || undefined,
      }),
    [words, searchQuery, selectedDifficulty]
  );

  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">
      {/* Back + Header */}
      <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-5">
        <Link
          href="/vocab"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-3"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all vocabulary
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <CategoryIcon className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold text-(--text)">{category.name}</h1>
        </div>
        <p className="text-sm text-(--text-secondary) mt-1">{category.description}</p>
        <p className="text-xs text-(--text-muted) mt-2">
          Total words: {words.length}
        </p>
      </div>

      {/* Search & Filters */}
      <div className="space-y-3">
        <SearchBar />
        <FilterBar />
      </div>

      {/* Count */}
      <p className="text-sm text-(--text-muted)">
        Showing {filtered.length} word{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((word) => (
            <VocabCard key={word.id} word={word} categorySlug={category.slug} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-(--text-secondary) font-medium">No words found</p>
          <p className="text-sm text-(--text-muted) mt-1">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}

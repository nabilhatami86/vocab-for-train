'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Zap, Palette, Wind, MessageSquare, Calendar, Briefcase } from 'lucide-react';
import { useVocabStore } from '@/store/useVocabStore';
import { filterVocabulary } from '@/lib/utils';
import { VocabCard } from '@/components/vocab/VocabCard';
import { SearchBar } from '@/components/vocab/SearchBar';
import { FilterBar } from '@/components/vocab/FilterBar';
import { Pagination } from '@/components/vocab/Pagination';
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

const PAGE_SIZE = 24;

export function CategoryPageClient({ category, words }: Props) {
  const searchQuery = useVocabStore((s) => s.searchQuery);
  const selectedDifficulty = useVocabStore((s) => s.selectedDifficulty);
  const CategoryIcon = iconMap[category.icon] || BookOpen;
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(
    () =>
      filterVocabulary(words, {
        difficulty: selectedDifficulty ?? undefined,
        search: searchQuery || undefined,
      }),
    [words, searchQuery, selectedDifficulty]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedDifficulty]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const start = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const end = Math.min(currentPage * PAGE_SIZE, filtered.length);

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
        {filtered.length === 0
          ? 'No words found'
          : `Showing ${start}–${end} of ${filtered.length} word${filtered.length !== 1 ? 's' : ''}`}
      </p>

      {/* Grid */}
      {paginated.length > 0 ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginated.map((word) => (
              <VocabCard key={word.id} word={word} categorySlug={category.slug} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
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

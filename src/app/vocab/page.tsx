'use client';

import { useMemo } from 'react';
import { BookOpen } from 'lucide-react';
import { vocabulary } from '@/data/vocabulary';
import { useVocabStore } from '@/store/useVocabStore';
import { filterVocabulary } from '@/lib/utils';
import { VocabCard } from '@/components/vocab/VocabCard';
import { SearchBar } from '@/components/vocab/SearchBar';
import { FilterBar } from '@/components/vocab/FilterBar';

export default function VocabListPage() {
  const searchQuery = useVocabStore((s) => s.searchQuery);
  const selectedDifficulty = useVocabStore((s) => s.selectedDifficulty);

  const filtered = useMemo(
    () =>
      filterVocabulary(vocabulary, {
        difficulty: selectedDifficulty ?? undefined,
        search: searchQuery || undefined,
      }),
    [searchQuery, selectedDifficulty]
  );

  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          All Vocabulary
        </h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Browse and search all {vocabulary.length} words in our collection
        </p>
      </div>

      {/* Search & Filters */}
      <div className="space-y-3">
        <SearchBar />
        <FilterBar />
      </div>

      {/* Results count */}
      <p className="text-sm text-(--text-muted)">
        Showing {filtered.length} word{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Word Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((word) => (
            <VocabCard key={word.id} word={word} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-(--text-muted) mx-auto mb-3" />
          <p className="text-(--text-secondary) font-medium">No words found</p>
          <p className="text-sm text-(--text-muted) mt-1">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}

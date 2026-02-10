'use client';

import { Search, X } from 'lucide-react';
import { useVocabStore } from '@/store/useVocabStore';

export function SearchBar() {
  const searchQuery = useVocabStore((s) => s.searchQuery);
  const setSearchQuery = useVocabStore((s) => s.setSearchQuery);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-muted)" />
      <input
        type="text"
        placeholder="Search words, meanings..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-(--bg-secondary) border border-(--border) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-(--hover)"
        >
          <X className="w-3.5 h-3.5 text-(--text-muted)" />
        </button>
      )}
    </div>
  );
}

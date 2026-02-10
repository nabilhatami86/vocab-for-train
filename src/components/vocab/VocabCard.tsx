'use client';

import Link from 'next/link';
import { Heart, CheckCircle } from 'lucide-react';
import { cn, getDifficultyColor } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { useVocabStore } from '@/store/useVocabStore';
import type { VocabWord } from '@/types/vocab';

interface VocabCardProps {
  word: VocabWord;
  categorySlug?: string;
}

export function VocabCard({ word, categorySlug }: VocabCardProps) {
  const toggleFavorite = useVocabStore((s) => s.toggleFavorite);
  const isFavorite = useVocabStore((s) => s.favorites.includes(word.id));
  const isLearned = useVocabStore((s) => s.learnedWords.includes(word.id));
  const category = categorySlug || word.categories[0];

  return (
    <div className="group relative bg-(--bg-card) border border-(--border) rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200 animate-fade-in">
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <Link href={`/vocab/${category}/${word.slug}`} className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-(--text) group-hover:text-primary transition-colors truncate">
            {word.word}
          </h3>
          <p className="text-xs text-(--text-muted) mt-0.5">{word.pronunciation.ipa}</p>
        </Link>
        <div className="flex items-center gap-1 ml-2 shrink-0">
          {isLearned && (
            <CheckCircle className="w-4 h-4 text-success" />
          )}
          <button
            onClick={() => toggleFavorite(word.id)}
            className="p-1.5 rounded-lg hover:bg-(--hover) transition-colors"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={cn(
                'w-4 h-4 transition-colors',
                isFavorite ? 'fill-red-500 text-red-500' : 'text-(--text-muted)'
              )}
            />
          </button>
        </div>
      </div>

      {/* Part of speech & difficulty */}
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="outline">{word.partOfSpeech}</Badge>
        <Badge className={getDifficultyColor(word.difficulty)}>{word.difficulty}</Badge>
      </div>

      {/* Meanings */}
      <Link href={`/vocab/${category}/${word.slug}`}>
        <p className="text-sm text-(--text-secondary) line-clamp-2 mb-2">
          {word.meaning.en}
        </p>
        <p className="text-sm text-primary/80 italic">
          {word.meaning.id}
        </p>
      </Link>

      {/* Example */}
      {word.examples[0] && (
        <p className="text-xs text-(--text-muted) mt-3 pt-3 border-t border-(--border) italic line-clamp-1">
          &ldquo;{word.examples[0]}&rdquo;
        </p>
      )}
    </div>
  );
}

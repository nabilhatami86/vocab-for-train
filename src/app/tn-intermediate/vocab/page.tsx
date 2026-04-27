'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { vocabCategories, totalWordCount } from '@/data/tnIntermediateVocab';
import { cn } from '@/lib/utils';

const COLOR_MAP: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  blue:   { bg: 'bg-blue-50 dark:bg-blue-950/30',     border: 'border-blue-200 dark:border-blue-800',   text: 'text-blue-700 dark:text-blue-300',   badge: 'bg-blue-500' },
  green:  { bg: 'bg-green-50 dark:bg-green-950/30',   border: 'border-green-200 dark:border-green-800', text: 'text-green-700 dark:text-green-300', badge: 'bg-green-500' },
  red:    { bg: 'bg-red-50 dark:bg-red-950/30',       border: 'border-red-200 dark:border-red-800',     text: 'text-red-700 dark:text-red-300',     badge: 'bg-red-500' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', border: 'border-orange-200 dark:border-orange-800',text: 'text-orange-700 dark:text-orange-300',badge: 'bg-orange-500' },
  pink:   { bg: 'bg-pink-50 dark:bg-pink-950/30',     border: 'border-pink-200 dark:border-pink-800',   text: 'text-pink-700 dark:text-pink-300',   badge: 'bg-pink-500' },
  yellow: { bg: 'bg-yellow-50 dark:bg-yellow-950/30', border: 'border-yellow-200 dark:border-yellow-800',text: 'text-yellow-700 dark:text-yellow-300',badge: 'bg-yellow-500' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-950/30', border: 'border-purple-200 dark:border-purple-800',text: 'text-purple-700 dark:text-purple-300',badge: 'bg-purple-500' },
  teal:   { bg: 'bg-teal-50 dark:bg-teal-950/30',     border: 'border-teal-200 dark:border-teal-800',   text: 'text-teal-700 dark:text-teal-300',   badge: 'bg-teal-500' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/30', border: 'border-indigo-200 dark:border-indigo-800',text: 'text-indigo-700 dark:text-indigo-300',badge: 'bg-indigo-500' },
  cyan:   { bg: 'bg-cyan-50 dark:bg-cyan-950/30',     border: 'border-cyan-200 dark:border-cyan-800',   text: 'text-cyan-700 dark:text-cyan-300',   badge: 'bg-cyan-500' },
};

export default function IntermediateVocabPage() {
  return (
    <div className="p-4 lg:p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">

      {/* Top nav */}
      <div className="flex items-center gap-3">
        <Link
          href="/tn-intermediate"
          className="inline-flex items-center gap-1.5 text-sm text-(--text-secondary) hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          TN Intermediate
        </Link>
      </div>

      {/* Header */}
      <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-5 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-2xl">
          📚
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-(--text)">Vocabulary Bank</h1>
          <p className="text-sm text-(--text-secondary) mt-0.5">
            Kosakata tematik TN Intermediate · {vocabCategories.length} kategori · {totalWordCount} kata
          </p>
          <div className="flex items-center gap-2 mt-2">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-(--text-muted)">Klik kategori untuk mulai belajar · Pelajari arti + contoh kalimat</span>
          </div>
        </div>
      </div>

      {/* Category grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vocabCategories.map((cat) => {
          const c = COLOR_MAP[cat.color] ?? COLOR_MAP.blue;
          return (
            <Link
              key={cat.slug}
              href={`/tn-intermediate/vocab/${cat.slug}`}
              className={cn(
                'group block rounded-2xl border p-4 transition-all hover:shadow-md hover:-translate-y-0.5',
                c.bg, c.border,
              )}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl leading-none">{cat.icon}</span>
                <div className="flex-1 min-w-0">
                  <h2 className={cn('font-bold text-sm leading-tight group-hover:underline', c.text)}>
                    {cat.title}
                  </h2>
                  <p className="text-xs text-(--text-muted) mt-0.5 italic">{cat.titleId}</p>
                  <p className="text-xs text-(--text-secondary) mt-1.5 leading-snug">{cat.description}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className={cn('inline-block text-white text-[10px] font-bold px-2 py-0.5 rounded-full', c.badge)}>
                  {cat.words.length} kata
                </span>
                <span className={cn('text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity', c.text)}>
                  Pelajari →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

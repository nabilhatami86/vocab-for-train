'use client';

import { cn } from '@/lib/utils';

interface ComparisonAltsCardProps {
  /** The primary example sentence */
  main: string;
  /** Alternative inversion / ellipsis forms */
  alts: string[];
  /** Optional leading arrow/label, defaults to "→" */
  label?: string;
}

/**
 * Renders one comparison example sentence with its inversion / ellipsis alternatives.
 *
 * Data format in points array:
 *   "{{alts: main sentence | alt1 | alt2 | alt3}}"
 */
export function ComparisonAltsCard({ main, alts, label = '→' }: ComparisonAltsCardProps) {
  return (
    <div className="rounded-lg bg-(--bg-secondary) border border-(--border) px-4 py-2.5 space-y-1">
      {/* Main sentence */}
      <div className="flex items-start gap-2">
        <span className="shrink-0 text-primary font-bold text-sm mt-0.5">{label}</span>
        <p className="text-sm text-(--text) font-medium leading-relaxed">{main}</p>
      </div>

      {/* Alternatives */}
      {alts.length > 0 && (
        <div className="pl-6 space-y-0.5 border-l-2 border-primary/20 ml-2">
          {alts.map((alt, i) => (
            <p
              key={i}
              className={cn(
                'text-xs leading-relaxed font-mono',
                i === 0 ? 'text-primary/70' : 'text-(--text-muted)',
              )}
            >
              {alt}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

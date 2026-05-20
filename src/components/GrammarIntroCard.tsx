'use client';

import { cn } from '@/lib/utils';

interface GrammarIntroCardProps {
  points: string[];
}

/**
 * Renders grammar lesson "Pengertian / Ketentuan / Jenis" sections
 * with smart detection of definitions, chip rows, arrow rules,
 * labeled lines, and indented examples.
 *
 * Patterns detected in points[]:
 *   "TERM = definition"          → highlighted definition row
 *   "item · item · item"         → badge chip row
 *   "→ rule text"                → colored arrow rule
 *   "⚠ warning text"             → amber warning
 *   "Label:"  (standalone)       → mini section header
 *   "Label: content"             → label + content row
 *   "  indented text"            → indented example
 *   default                      → plain bullet
 */
export function GrammarIntroCard({ points }: GrammarIntroCardProps) {
  return (
    <div className="space-y-1.5">
      {points.map((point, i) => {
        const t = point.trim();

        // Empty → small gap
        if (!t) return <div key={i} className="h-2" />;

        // Indented continuation / sub-example
        if (point.startsWith('  ') || point.startsWith('\t')) {
          return (
            <div key={i} className="pl-4 flex items-start gap-1.5">
              <span className="text-primary/50 shrink-0 mt-1.5 text-[10px]">◦</span>
              <span className="text-xs font-mono text-(--text-secondary) leading-relaxed">{t}</span>
            </div>
          );
        }

        // Warning: ⚠ text
        if (t.startsWith('⚠')) {
          return (
            <div key={i} className="flex items-start gap-2 rounded-lg bg-amber-500/10 border border-amber-500/25 px-3 py-2">
              <span className="shrink-0 text-amber-500 text-sm">⚠</span>
              <span className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">{t.slice(1).trim()}</span>
            </div>
          );
        }

        // Definition: TERM = definition
        const defMatch = t.match(/^(.{1,50}?)\s*=\s*(.+)$/);
        if (defMatch) {
          return (
            <div key={i} className="flex items-start gap-2.5 rounded-lg bg-primary/5 border border-primary/15 px-3 py-2.5">
              <span className="text-sm font-bold text-primary shrink-0 leading-snug">{defMatch[1].trim()}</span>
              <span className="text-(--text-muted) shrink-0 text-xs mt-0.5 font-bold">=</span>
              <span className="text-sm text-(--text-secondary) leading-relaxed">{defMatch[2].trim()}</span>
            </div>
          );
        }

        // Chip row: item · item · item
        if (t.includes(' · ')) {
          return (
            <div key={i} className="flex flex-wrap gap-1.5 py-0.5">
              {t.split(' · ').map((chip, j) => (
                <span
                  key={j}
                  className="px-2.5 py-1 rounded-lg bg-(--bg-secondary) border border-(--border) text-xs font-medium text-(--text)"
                >
                  {chip}
                </span>
              ))}
            </div>
          );
        }

        // Arrow rule: → rule text
        if (t.startsWith('→')) {
          return (
            <div key={i} className="flex items-start gap-2">
              <span className="text-primary font-bold shrink-0 mt-0.5 leading-tight">→</span>
              <span className="text-sm text-(--text-secondary) leading-relaxed">{t.slice(1).trim()}</span>
            </div>
          );
        }

        // Standalone header: ends with ':', nothing after, no '=' in line
        if (t.endsWith(':') && t.length < 60 && !t.includes('=') && !t.includes('→')) {
          return (
            <p key={i} className="text-xs font-bold uppercase tracking-wider text-(--text-muted) pt-2 pb-0.5">
              {t.slice(0, -1)}
            </p>
          );
        }

        // Labeled content: "Label: some text here"
        const labelMatch = t.match(/^([A-Za-z][\w\s/().]{0,30}?)\s*:\s+(.+)$/);
        if (labelMatch) {
          const lbl = labelMatch[1].trim();
          const rest = labelMatch[2].trim();
          const isFormula = (rest.match(/\s\+\s/g) || []).length >= 1;
          return (
            <div key={i} className="flex items-start gap-2 py-0.5">
              <span className="text-xs font-bold text-primary shrink-0 mt-0.5 min-w-[72px] leading-tight">
                {lbl}:
              </span>
              <span
                className={cn(
                  'text-sm leading-relaxed',
                  isFormula ? 'font-mono text-(--text) bg-(--bg-secondary) px-2 py-0.5 rounded text-xs' : 'text-(--text-secondary)',
                )}
              >
                {rest}
              </span>
            </div>
          );
        }

        // Default: plain bullet
        return (
          <div key={i} className="flex items-start gap-2">
            <span className="text-primary shrink-0 mt-1.5 text-xs">●</span>
            <span className="text-sm text-(--text-secondary) leading-relaxed">{t}</span>
          </div>
        );
      })}
    </div>
  );
}

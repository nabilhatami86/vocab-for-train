import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DayNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  prevTitle?: string;
  nextHref?: string;
  nextLabel?: string;
  nextTitle?: string;
}

export default function DayNavigation({
  prevHref,
  prevLabel,
  prevTitle,
  nextHref,
  nextLabel,
  nextTitle,
}: DayNavigationProps) {
  if (!prevHref && !nextHref) return null;

  return (
    <div className="flex items-stretch gap-3 pt-2">
      {/* Previous */}
      <div className="flex-1">
        {prevHref ? (
          <Link
            href={prevHref}
            className="group flex items-center gap-3 h-full rounded-xl border border-(--border) bg-(--bg-card) px-4 py-3 hover:border-primary/40 hover:bg-primary/[0.03] transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-(--text-muted) shrink-0 group-hover:text-primary transition-colors" />
            <div className="text-left min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-(--text-muted) font-semibold">{prevLabel ?? 'Previous'}</p>
              {prevTitle && (
                <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors truncate">
                  {prevTitle}
                </p>
              )}
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Next */}
      <div className="flex-1">
        {nextHref ? (
          <Link
            href={nextHref}
            className="group flex items-center justify-end gap-3 h-full rounded-xl border border-(--border) bg-(--bg-card) px-4 py-3 hover:border-primary/40 hover:bg-primary/[0.03] transition-all"
          >
            <div className="text-right min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-(--text-muted) font-semibold">{nextLabel ?? 'Next'}</p>
              {nextTitle && (
                <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors truncate">
                  {nextTitle}
                </p>
              )}
            </div>
            <ChevronRight className="w-5 h-5 text-(--text-muted) shrink-0 group-hover:text-primary transition-colors" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  color?: string;
}

export function ProgressBar({ value, max, className, color = 'bg-primary' }: ProgressBarProps) {
  const percentage = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className={cn('w-full', className)}>
      <div className="flex justify-between text-xs text-(--text-secondary) mb-1">
        <span>{value} / {max}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 rounded-full bg-(--bg-secondary) overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-500', color)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

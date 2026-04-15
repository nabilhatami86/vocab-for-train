import { cn } from '@/lib/utils';

interface AnnotatedTextProps {
  /** Raw text containing zero or more {{annotation:word|label}} markers */
  text: string;
  /** Optional renderer for plain-text segments (e.g. clickable word buttons).
   *  Defaults to a plain <span>. */
  renderText?: (text: string, idx: number) => React.ReactNode;
  className?: string;
}

type Segment =
  | { type: 'text'; value: string }
  | { type: 'annotation'; word: string; label: string };

function parseAnnotations(text: string): Segment[] {
  const regex = /\{\{annotation:([^|]+)\|([^}]+)\}\}/g;
  const segments: Segment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'annotation', word: match[1], label: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }
  return segments;
}

export default function AnnotatedText({ text, renderText, className }: AnnotatedTextProps) {
  const segments = parseAnnotations(text);

  // No annotations — render plain
  if (segments.length === 1 && segments[0].type === 'text') {
    return (
      <span className={className}>
        {renderText ? renderText(segments[0].value, 0) : segments[0].value}
      </span>
    );
  }

  return (
    <span className={cn('inline-flex flex-wrap items-end gap-x-0.5 gap-y-1', className)}>
      {segments.map((seg, idx) => {
        if (seg.type === 'text') {
          return (
            <span key={`t-${idx}`} className="leading-normal">
              {renderText ? renderText(seg.value, idx) : seg.value}
            </span>
          );
        }

        return (
          <span
            key={`a-${idx}`}
            className="inline-flex flex-col items-center px-1.5 py-0.5 rounded-md border border-primary/20 bg-primary/[0.04]"
          >
            <span className="text-sm font-semibold leading-snug text-(--text)">
              {seg.word}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wide px-1 rounded-full bg-primary/10 text-primary leading-snug mt-0.5">
              {seg.label}
            </span>
          </span>
        );
      })}
    </span>
  );
}

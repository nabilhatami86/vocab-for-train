'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type GExample =
  | { kind: 'sentence'; text: string }
  | { kind: 'reduction'; reduced: string; original: string }
  | { kind: 'multi'; texts: string[] };

interface GRule {
  label: string;
  desc: string;
  examples: GExample[];
}

interface GSection {
  header: string;
  rules: GRule[];
}

// ── Colours ───────────────────────────────────────────────────────────────────

const EXAMPLE_DOT_COLOR = 'bg-primary/60';


// ── Parser ────────────────────────────────────────────────────────────────────

function parseExampleLine(raw: string): GExample {
  const t = raw.trim();
  if (t.includes('←')) {
    const [rPart, oPart = ''] = t.split(/\s*←\s*/);
    return {
      kind: 'reduction',
      reduced: rPart.replace(/^'|'$/g, '').trim(),
      original: oPart.replace(/^'|'$/g, '').trim(),
    };
  }
  if (t.includes(' · ')) {
    return {
      kind: 'multi',
      texts: t.split(/\s*·\s*/).map((s) => s.replace(/^'|'$/g, '').trim()),
    };
  }
  return { kind: 'sentence', text: t.replace(/^'|'$/g, '').trim() };
}

function parseSections(points: string[]): GSection[] {
  const sections: GSection[] = [];
  let curSection: GSection | null = null;
  let curRule: GRule | null = null;

  const flushRule = () => {
    if (curRule && curSection) {
      curSection.rules.push(curRule);
      curRule = null;
    }
  };

  for (const point of points) {
    const trimmed = point.trim();

    // ── Section header ──
    if (/^──.*──$/.test(trimmed)) {
      flushRule();
      const text = trimmed.replace(/^──\s*|\s*──$/g, '').trim();
      curSection = { header: text, rules: [] };
      sections.push(curSection);
      continue;
    }

    if (!curSection) continue;

    // Empty line → flush rule
    if (!trimmed) {
      flushRule();
      continue;
    }

    // Example line (indented + starts with quote or contains ←)
    if (
      (point.startsWith('   ') || point.startsWith('\t')) &&
      (trimmed.startsWith("'") || trimmed.startsWith('"') || trimmed.includes('←'))
    ) {
      if (!curRule) {
        curRule = { label: '', desc: '', examples: [] };
      }
      curRule.examples.push(parseExampleLine(trimmed));
      continue;
    }

    // Rule line with → arrow
    if (trimmed.includes('→') && !trimmed.startsWith("'")) {
      flushRule();
      const idx = trimmed.indexOf('→');
      const label = trimmed.slice(0, idx).trim();
      const desc = trimmed.slice(idx + 1).trim().replace(/:$/, '').trim();
      curRule = { label, desc, examples: [] };
      continue;
    }

    // Plain label line (no → but not empty, not indented)
    flushRule();
    curRule = {
      label: trimmed.replace(/:$/, '').trim(),
      desc: '',
      examples: [],
    };
  }

  flushRule();
  return sections.filter((s) => s.rules.length > 0);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ExampleBlock({
  examples,
  dotColor,
}: {
  examples: GExample[];
  dotColor: string;
}) {
  if (examples.length === 0) return null;
  return (
    <div className="mt-2.5 space-y-1.5 pl-3 border-l-2 border-(--border)">
      {examples.map((ex, i) => {
        if (ex.kind === 'reduction') {
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs"
            >
              <span className="font-mono text-(--text) bg-(--bg-secondary) px-2 py-0.5 rounded">
                &ldquo;{ex.reduced}&rdquo;
              </span>
              <span className="text-(--text-muted) shrink-0 text-[10px] font-bold">← original:</span>
              <span className="font-mono text-(--text-muted) italic px-2 py-0.5">
                &ldquo;{ex.original}&rdquo;
              </span>
            </div>
          );
        }
        if (ex.kind === 'multi') {
          return (
            <div key={i} className="flex flex-wrap gap-1.5">
              {ex.texts.map((t, j) => (
                <span
                  key={j}
                  className="text-xs font-mono text-(--text) bg-(--bg-secondary) px-2 py-0.5 rounded"
                >
                  &ldquo;{t}&rdquo;
                </span>
              ))}
            </div>
          );
        }
        return (
          <div key={i} className="flex items-start gap-2">
            <span className={cn('shrink-0 w-1.5 h-1.5 rounded-full mt-1.5', dotColor)} />
            <p className="text-xs font-mono text-(--text-secondary) leading-relaxed">
              &ldquo;{ex.text}&rdquo;
            </p>
          </div>
        );
      })}
    </div>
  );
}

function RuleCard({
  rule,
  dotColor,
}: {
  rule: GRule;
  dotColor: string;
}) {
  return (
    <div className="rounded-lg bg-(--bg-card) border border-(--border) px-3.5 py-3 space-y-0.5">
      <div className="flex items-baseline gap-2 flex-wrap">
        {rule.label && (
          <span className="text-sm font-semibold text-(--text)">{rule.label}</span>
        )}
        {rule.desc && (
          <span className="text-xs text-(--text-muted) leading-snug">{rule.desc}</span>
        )}
      </div>
      <ExampleBlock examples={rule.examples} dotColor={dotColor} />
    </div>
  );
}

function GSection({ section }: { section: GSection }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-xl border border-primary/20 overflow-hidden">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'w-full flex items-center justify-between px-4 py-2.5 bg-primary/8 border-b border-primary/20 transition-colors hover:bg-primary/12',
          open ? '' : 'border-b-0',
        )}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-primary">{section.header}</span>
        {open ? <ChevronUp className="w-3.5 h-3.5 text-primary" /> : <ChevronDown className="w-3.5 h-3.5 text-primary" />}
      </button>

      {/* Rules */}
      {open && (
        <div className="px-3 pb-3 pt-2 space-y-2">
          {section.rules.map((rule, i) => (
            <RuleCard key={i} rule={rule} dotColor={EXAMPLE_DOT_COLOR} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

interface GrammarPassageCardProps {
  points: string[];
}

/**
 * Renders a "Grammar in the Passage" material section with
 * collapsible colour-coded sections, rule cards, and example blocks.
 */
export function GrammarPassageCard({ points }: GrammarPassageCardProps) {
  const sections = parseSections(points);
  if (sections.length === 0) return null;

  return (
    <div className="space-y-2">
      {sections.map((section, i) => (
        <GSection key={i} section={section} />
      ))}
    </div>
  );
}

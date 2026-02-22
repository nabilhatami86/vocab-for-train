"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { grammarTopics, type POS, type GrammarBlock } from "@/data/grammarGuide";

// ── Warna per POS ──────────────────────────────────────────────
const POS_STYLE: Record<POS, { pill: string; panel: string; label: string }> = {
  noun:        { pill: "bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-100",          panel: "bg-blue-50 border-blue-300 text-blue-900 dark:bg-blue-900/40 dark:border-blue-600 dark:text-blue-100",          label: "Noun" },
  verb:        { pill: "bg-green-200 text-green-900 dark:bg-green-800 dark:text-green-100",        panel: "bg-green-50 border-green-300 text-green-900 dark:bg-green-900/40 dark:border-green-600 dark:text-green-100",        label: "Verb" },
  modal:       { pill: "bg-indigo-200 text-indigo-900 dark:bg-indigo-800 dark:text-indigo-100",    panel: "bg-indigo-50 border-indigo-300 text-indigo-900 dark:bg-indigo-900/40 dark:border-indigo-600 dark:text-indigo-100",    label: "Modal Verb" },
  adjective:   { pill: "bg-purple-200 text-purple-900 dark:bg-purple-800 dark:text-purple-100",    panel: "bg-purple-50 border-purple-300 text-purple-900 dark:bg-purple-900/40 dark:border-purple-600 dark:text-purple-100",    label: "Adjective" },
  adverb:      { pill: "bg-orange-200 text-orange-900 dark:bg-orange-800 dark:text-orange-100",    panel: "bg-orange-50 border-orange-300 text-orange-900 dark:bg-orange-900/40 dark:border-orange-600 dark:text-orange-100",    label: "Adverb" },
  pronoun:     { pill: "bg-pink-200 text-pink-900 dark:bg-pink-800 dark:text-pink-100",            panel: "bg-pink-50 border-pink-300 text-pink-900 dark:bg-pink-900/40 dark:border-pink-600 dark:text-pink-100",              label: "Pronoun" },
  article:     { pill: "bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100",        panel: "bg-slate-50 border-slate-300 text-slate-800 dark:bg-slate-800/60 dark:border-slate-500 dark:text-slate-100",        label: "Article" },
  quantifier:  { pill: "bg-rose-200 text-rose-900 dark:bg-rose-800 dark:text-rose-100",            panel: "bg-rose-50 border-rose-300 text-rose-900 dark:bg-rose-900/40 dark:border-rose-600 dark:text-rose-100",              label: "Quantifier" },
  preposition: { pill: "bg-teal-200 text-teal-900 dark:bg-teal-800 dark:text-teal-100",            panel: "bg-teal-50 border-teal-300 text-teal-900 dark:bg-teal-900/40 dark:border-teal-600 dark:text-teal-100",              label: "Preposition" },
  conjunction: { pill: "bg-amber-200 text-amber-900 dark:bg-amber-800 dark:text-amber-100",        panel: "bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-900/40 dark:border-amber-600 dark:text-amber-100",        label: "Conjunction" },
  possessive:  { pill: "bg-cyan-200 text-cyan-900 dark:bg-cyan-800 dark:text-cyan-100",            panel: "bg-cyan-50 border-cyan-300 text-cyan-900 dark:bg-cyan-900/40 dark:border-cyan-600 dark:text-cyan-100",              label: "Possessive" },
  none:        { pill: "", panel: "", label: "" },
};

type ActiveWord = { sentenceIdx: number; wordIdx: number };

// ── Helper: highlight kata dalam kalimat ──────────────────────
function HighlightedSentence({ sentence, highlight }: { sentence: string; highlight?: string }) {
  if (!highlight || !sentence.includes(highlight)) {
    return <span>{sentence}</span>;
  }
  const idx = sentence.indexOf(highlight);
  return (
    <>
      <span>{sentence.slice(0, idx)}</span>
      <span className="font-bold text-primary underline underline-offset-2 decoration-2">
        {highlight}
      </span>
      <span>{sentence.slice(idx + highlight.length)}</span>
    </>
  );
}

// ── Render satu block konten ───────────────────────────────────
function RenderBlock({ block }: { block: GrammarBlock }) {
  switch (block.type) {
    case "text":
      return (
        <p className="text-sm text-(--text-secondary) leading-relaxed">
          {block.value}
        </p>
      );

    case "bullets":
      return (
        <div className="space-y-1">
          {block.title && (
            <p className="text-sm font-medium text-(--text)">{block.title}</p>
          )}
          <ul className="space-y-1 pl-1">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-(--text-secondary) leading-relaxed">
                <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "example":
      return (
        <div className="rounded-xl border border-(--border) overflow-hidden">
          <div className="bg-(--bg-secondary) px-4 py-3">
            <p className="text-sm font-semibold text-(--text) font-mono">
              <HighlightedSentence sentence={block.sentence} highlight={block.highlight} />
            </p>
          </div>
          <div className="px-4 py-3 bg-(--bg-card)">
            <p className="text-xs text-(--text-secondary) leading-relaxed">
              <span className="font-semibold text-(--text)">Kenapa? </span>
              {block.note}
            </p>
          </div>
        </div>
      );

    case "wrongright":
      return (
        <div className="space-y-1.5">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 px-3 py-2">
              <p className="text-xs font-bold text-red-600 dark:text-red-400 mb-1">❌ Salah</p>
              <p className="text-sm text-red-800 dark:text-red-200 font-mono">{block.wrong}</p>
            </div>
            <div className="rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 px-3 py-2">
              <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1">✓ Benar</p>
              <p className="text-sm text-green-800 dark:text-green-200 font-mono">{block.right}</p>
            </div>
          </div>
          {block.note && (
            <p className="text-xs text-(--text-secondary) leading-relaxed px-1">{block.note}</p>
          )}
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-(--border)">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-(--bg-secondary) border-b border-(--border)">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-3 py-2 text-left text-xs font-semibold text-(--text) uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={cn(
                    "border-b border-(--border) last:border-0",
                    ri % 2 === 0 ? "bg-(--bg-card)" : "bg-(--bg-secondary)/50"
                  )}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-(--text-secondary) font-mono text-xs leading-relaxed">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

// ── Halaman utama ─────────────────────────────────────────────
export default function GrammarTopicPage() {
  const params = useParams();
  const topic = grammarTopics.find((t) => t.id === params.topic);
  const [active, setActive] = useState<ActiveWord | null>(null);

  if (!topic) {
    return (
      <div className="p-6 text-center text-(--text-secondary)">
        <p>Topik tidak ditemukan.</p>
        <Link href="/grammar-guide" className="text-primary underline mt-2 inline-block">
          Kembali ke Grammar Guide
        </Link>
      </div>
    );
  }

  const handleWordClick = (sIdx: number, wIdx: number, pos: POS) => {
    if (pos === "none") return;
    if (active?.sentenceIdx === sIdx && active?.wordIdx === wIdx) {
      setActive(null);
    } else {
      setActive({ sentenceIdx: sIdx, wordIdx: wIdx });
    }
  };

  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">

      {/* Back + Title */}
      <div className="flex items-center gap-3">
        <Link
          href="/grammar-guide"
          className="p-2 rounded-lg hover:bg-(--bg-secondary) transition-colors text-(--text-secondary)"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{topic.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold text-(--text)">{topic.title}</h1>
            <p className="text-sm text-(--text-secondary)">{topic.shortDefinition}</p>
          </div>
        </div>
      </div>

      {/* Sections — Reference Guide */}
      <div className="space-y-4">
        {topic.sections.map((section) => (
          <section
            key={section.letter}
            className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden"
          >
            {/* Section header */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-(--border) bg-(--bg-secondary)/60">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {section.letter}
              </span>
              <h2 className="font-semibold text-(--text) text-sm">{section.title}</h2>
            </div>

            {/* Section content */}
            <div className="px-5 py-4 space-y-4">
              {section.blocks.map((block, i) => (
                <RenderBlock key={i} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Annotated sentences — interactive practice */}
      {topic.sentences.length > 0 && (
        <section className="space-y-4">
          <div>
            <h2 className="font-semibold text-(--text) flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              Contoh Kalimat Interaktif
            </h2>
            <p className="text-xs text-(--text-secondary) mt-1">
              Klik kata yang berwarna untuk lihat penjelasannya.
            </p>
          </div>

          <div className="space-y-4">
            {topic.sentences.map((sentence, sIdx) => {
              const activeWord =
                active?.sentenceIdx === sIdx ? sentence.words[active.wordIdx] : null;
              const activeStyle = activeWord ? POS_STYLE[activeWord.pos] : null;

              return (
                <div
                  key={sIdx}
                  className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-4"
                >
                  {/* Words */}
                  <div className="flex flex-wrap gap-2 items-center">
                    {sentence.words.map((w, wIdx) => {
                      const isActive =
                        active?.sentenceIdx === sIdx && active?.wordIdx === wIdx;
                      const style = POS_STYLE[w.pos];
                      const isClickable = w.pos !== "none";

                      return (
                        <button
                          key={wIdx}
                          onClick={() => handleWordClick(sIdx, wIdx, w.pos)}
                          disabled={!isClickable}
                          className={cn(
                            "px-2.5 py-1 rounded-lg text-sm font-semibold transition-all select-none",
                            isClickable
                              ? cn(
                                  style.pill,
                                  "cursor-pointer hover:scale-105 hover:shadow-sm active:scale-95",
                                  isActive &&
                                    "ring-2 ring-offset-2 ring-current scale-105 shadow-md"
                                )
                              : "text-(--text) font-normal cursor-default px-1"
                          )}
                        >
                          {w.word}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation panel */}
                  {activeWord && activeStyle && (
                    <div
                      className={cn(
                        "rounded-xl border p-4 space-y-1.5 transition-all",
                        activeStyle.panel
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest opacity-70">
                            {activeStyle.label}
                          </span>
                          <span className="font-bold text-base">
                            &ldquo;{activeWord.word}&rdquo;
                          </span>
                        </div>
                        <button
                          onClick={() => setActive(null)}
                          className="text-current opacity-50 hover:opacity-100 text-lg leading-none"
                          aria-label="Tutup"
                        >
                          ×
                        </button>
                      </div>
                      <p className="text-sm leading-relaxed opacity-90">
                        {activeWord.reason}
                      </p>
                    </div>
                  )}

                  {/* Translation */}
                  <p className="text-sm text-(--text-secondary) italic border-t border-(--border) pt-3">
                    🇮🇩 {sentence.translation}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Navigation to other topics */}
      <section className="space-y-3">
        <h2 className="font-semibold text-(--text)">Topik Lainnya</h2>
        <div className="flex flex-wrap gap-2">
          {grammarTopics
            .filter((t) => t.id !== topic.id)
            .map((t) => (
              <Link
                key={t.id}
                href={`/grammar-guide/${t.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-(--bg-card) border border-(--border) text-sm text-(--text-secondary) hover:border-primary/40 hover:text-(--text) transition-all"
              >
                <span>{t.emoji}</span>
                {t.title.split(" ")[0]}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

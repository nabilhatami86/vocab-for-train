"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Lightbulb, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { grammarTopics, type POS } from "@/data/grammarGuide";

// ── Warna per POS — didefinisikan di sini agar Tailwind selalu include ──
const POS_STYLE: Record<POS, { pill: string; panel: string; label: string }> = {
  noun:        { pill: "bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-100",        panel: "bg-blue-50 border-blue-300 text-blue-900 dark:bg-blue-900/40 dark:border-blue-600 dark:text-blue-100",        label: "Noun" },
  verb:        { pill: "bg-green-200 text-green-900 dark:bg-green-800 dark:text-green-100",      panel: "bg-green-50 border-green-300 text-green-900 dark:bg-green-900/40 dark:border-green-600 dark:text-green-100",      label: "Verb" },
  adjective:   { pill: "bg-purple-200 text-purple-900 dark:bg-purple-800 dark:text-purple-100",  panel: "bg-purple-50 border-purple-300 text-purple-900 dark:bg-purple-900/40 dark:border-purple-600 dark:text-purple-100",  label: "Adjective" },
  adverb:      { pill: "bg-orange-200 text-orange-900 dark:bg-orange-800 dark:text-orange-100",  panel: "bg-orange-50 border-orange-300 text-orange-900 dark:bg-orange-900/40 dark:border-orange-600 dark:text-orange-100",  label: "Adverb" },
  pronoun:     { pill: "bg-pink-200 text-pink-900 dark:bg-pink-800 dark:text-pink-100",          panel: "bg-pink-50 border-pink-300 text-pink-900 dark:bg-pink-900/40 dark:border-pink-600 dark:text-pink-100",            label: "Pronoun" },
  article:     { pill: "bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100",      panel: "bg-slate-50 border-slate-300 text-slate-800 dark:bg-slate-800/60 dark:border-slate-500 dark:text-slate-100",      label: "Article" },
  preposition: { pill: "bg-teal-200 text-teal-900 dark:bg-teal-800 dark:text-teal-100",          panel: "bg-teal-50 border-teal-300 text-teal-900 dark:bg-teal-900/40 dark:border-teal-600 dark:text-teal-100",            label: "Preposition" },
  conjunction: { pill: "bg-amber-200 text-amber-900 dark:bg-amber-800 dark:text-amber-100",      panel: "bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-900/40 dark:border-amber-600 dark:text-amber-100",      label: "Conjunction" },
  none:        { pill: "", panel: "", label: "" },
};

type ActiveWord = {
  sentenceIdx: number;
  wordIdx: number;
};

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
    <div className="p-4 lg:p-6 space-y-8 animate-fade-in">
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

      {/* Explanation */}
      <section className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-(--text) flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary" />
          Apa itu {topic.title.split(" ")[0]}?
        </h2>
        {topic.explanation.map((para, i) => (
          <p key={i} className="text-sm text-(--text-secondary) leading-relaxed">
            {para}
          </p>
        ))}
      </section>

      {/* Tips */}
      <section className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-(--text) flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-yellow-500" />
          Cara Mengenali
        </h2>
        <ul className="space-y-2">
          {topic.tips.map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm text-(--text-secondary) leading-relaxed">
              <span className="text-primary font-bold shrink-0">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Annotated sentences */}
      <section className="space-y-4">
        <div>
          <h2 className="font-semibold text-(--text) flex items-center gap-2">
            <span className="text-lg">📝</span>
            Contoh Kalimat Interaktif
          </h2>
          <p className="text-xs text-(--text-secondary) mt-1">
            Klik kata yang berwarna untuk lihat kenapa termasuk kategori tersebut.
          </p>
        </div>

        <div className="space-y-4">
          {topic.sentences.map((sentence, sIdx) => {
            const activeWord =
              active?.sentenceIdx === sIdx
                ? sentence.words[active.wordIdx]
                : null;
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
                                isActive && "ring-2 ring-offset-2 ring-current scale-105 shadow-md"
                              )
                            : "text-(--text) font-normal cursor-default px-1"
                        )}
                      >
                        {w.word}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation panel — shown inline, no floating */}
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

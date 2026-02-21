import Link from "next/link";
import { BookMarked, ArrowRight } from "lucide-react";
import { grammarTopics } from "@/data/grammarGuide";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Grammar Guide",
  description: "Pelajari grammar Bahasa Inggris dengan penjelasan mudah dan contoh interaktif.",
};

export default function GrammarGuidePage() {
  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-primary" />
          Grammar Guide
        </h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Pilih topik grammar yang ingin kamu pelajari. Klik kata di contoh kalimat untuk lihat penjelasannya!
        </p>
      </div>

      {/* Legend warna */}
      <div className="bg-(--bg-card) border border-(--border) rounded-xl p-4">
        <p className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider mb-3">
          Kode Warna
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Noun",        bg: "bg-blue-100 dark:bg-blue-900/40",    text: "text-blue-700 dark:text-blue-300" },
            { label: "Verb",        bg: "bg-green-100 dark:bg-green-900/40",  text: "text-green-700 dark:text-green-300" },
            { label: "Adjective",   bg: "bg-purple-100 dark:bg-purple-900/40",text: "text-purple-700 dark:text-purple-300" },
            { label: "Adverb",      bg: "bg-orange-100 dark:bg-orange-900/40",text: "text-orange-700 dark:text-orange-300" },
            { label: "Pronoun",     bg: "bg-pink-100 dark:bg-pink-900/40",    text: "text-pink-700 dark:text-pink-300" },
            { label: "Article",     bg: "bg-gray-100 dark:bg-gray-700/60",    text: "text-gray-600 dark:text-gray-300" },
            { label: "Preposition", bg: "bg-teal-100 dark:bg-teal-900/40",    text: "text-teal-700 dark:text-teal-300" },
            { label: "Conjunction", bg: "bg-amber-100 dark:bg-amber-900/40",  text: "text-amber-700 dark:text-amber-300" },
          ].map((c) => (
            <span
              key={c.label}
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.bg} ${c.text}`}
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* Topic cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {grammarTopics.map((topic) => (
          <Link
            key={topic.id}
            href={`/grammar-guide/${topic.id}`}
            className="bg-(--bg-card) border border-(--border) rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all group flex flex-col gap-3"
          >
            {/* Emoji + title */}
            <div className="flex items-center gap-3">
              <span className="text-3xl">{topic.emoji}</span>
              <div>
                <h2 className="text-base font-semibold text-(--text) group-hover:text-primary transition-colors leading-tight">
                  {topic.title}
                </h2>
                <p className="text-xs text-(--text-secondary) mt-0.5">
                  {topic.sentences.length} contoh kalimat
                </p>
              </div>
            </div>

            {/* Definition */}
            <p className="text-sm text-(--text-secondary) leading-relaxed flex-1">
              {topic.shortDefinition}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
              Pelajari
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

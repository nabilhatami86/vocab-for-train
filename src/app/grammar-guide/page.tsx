import Link from "next/link";
import { BookMarked, ArrowRight } from "lucide-react";
import { grammarTopics } from "@/data/grammarGuide";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Grammar Guide",
  description: "Pelajari grammar Bahasa Inggris dari TN Basic Course — klik kata di contoh kalimat untuk lihat penjelasannya.",
};

const legend = [
  { label: "Noun",        pill: "bg-blue-200 text-blue-900" },
  { label: "Verb",        pill: "bg-green-200 text-green-900" },
  { label: "Modal Verb",  pill: "bg-indigo-200 text-indigo-900" },
  { label: "Adjective",   pill: "bg-purple-200 text-purple-900" },
  { label: "Adverb",      pill: "bg-orange-200 text-orange-900" },
  { label: "Pronoun",     pill: "bg-pink-200 text-pink-900" },
  { label: "Article",     pill: "bg-slate-200 text-slate-800" },
  { label: "Quantifier",  pill: "bg-rose-200 text-rose-900" },
  { label: "Preposition", pill: "bg-teal-200 text-teal-900" },
  { label: "Conjunction", pill: "bg-amber-200 text-amber-900" },
  { label: "Possessive",  pill: "bg-cyan-200 text-cyan-900" },
];

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
          Semua materi dari TN Basic Grammar (Days 2–9). Klik kata berwarna di contoh kalimat untuk lihat kenapa kata itu masuk kategori tersebut.
        </p>
      </div>

      {/* Kode warna */}
      <div className="bg-(--bg-card) border border-(--border) rounded-xl p-4">
        <p className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider mb-3">
          Kode Warna
        </p>
        <div className="flex flex-wrap gap-2">
          {legend.map((c) => (
            <span
              key={c.label}
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${c.pill}`}
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* Topic cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {grammarTopics.map((topic) => (
          <Link
            key={topic.id}
            href={`/grammar-guide/${topic.id}`}
            className="bg-(--bg-card) border border-(--border) rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all group flex flex-col gap-3"
          >
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

            <p className="text-sm text-(--text-secondary) leading-relaxed flex-1">
              {topic.shortDefinition}
            </p>

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

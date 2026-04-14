import Link from "next/link";
import { BookMarked, ArrowRight, GraduationCap } from "lucide-react";
import { grammarTopics } from "@/data/grammarGuide";
import { tensesTopics, grammarTopics as tnIntGrammarTopics } from "@/data/tnIntermediateGrammar";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Grammar Guide",
  description: "Pelajari grammar Bahasa Inggris dari TN Basic Grammar dan TN Intermediate Grammar.",
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

const tenseColors: Record<string, string> = {
  'simple-present':       'border-green-400/40  bg-green-500/5   text-green-600',
  'simple-past':          'border-blue-400/40   bg-blue-500/5    text-blue-600',
  'simple-future':        'border-yellow-400/40 bg-yellow-500/5  text-yellow-600',
  'present-continuous':   'border-orange-400/40 bg-orange-500/5  text-orange-600',
  'present-perfect':      'border-red-400/40    bg-red-500/5     text-red-600',
  'adjective-clause':     'border-purple-400/40 bg-purple-500/5  text-purple-600',
  'to-infinitive-gerund': 'border-teal-400/40   bg-teal-500/5    text-teal-600',
};

export default function GrammarGuidePage() {
  return (
    <div className="p-4 lg:p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-primary" />
          Grammar Guide
        </h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Semua materi grammar TN Basic dan TN Intermediate — klik topik untuk pelajari lebih lanjut.
        </p>
      </div>

      {/* ── TN Basic Grammar ──────────────────────────────────────── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-(--text)">TN Basic Grammar</h2>
          <p className="text-sm text-(--text-secondary) mt-0.5">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {grammarTopics.map((topic) => (
            <Link
              key={topic.id}
              href={`/grammar-guide/${topic.id}`}
              className="bg-(--bg-card) border border-(--border) rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all group flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <topic.icon className="w-5 h-5 text-primary" />
                </div>
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
      </section>

      {/* ── TN Intermediate Grammar ───────────────────────────────── */}
      <section className="space-y-5">
        <div>
          <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            TN Intermediate Grammar
          </h2>
          <p className="text-sm text-(--text-secondary) mt-0.5">
            5 Tenses utama, Adjective Clause, dan To Infinitive &amp; Gerund — lengkap dengan rumus, contoh, dan latihan soal.
          </p>
        </div>

        {/* 5 Tenses */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider px-1">
            5 Tenses Utama
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tensesTopics.map((topic) => {
              const colors = tenseColors[topic.id] ?? 'border-(--border) bg-(--bg-card) text-primary';
              return (
                <Link
                  key={topic.id}
                  href={`/tn-intermediate/${topic.id}`}
                  className={`group border rounded-xl p-5 hover:shadow-lg transition-all flex flex-col gap-3 ${colors}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/50 dark:bg-white/10 flex items-center justify-center shrink-0">
                      <topic.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-(--text) group-hover:text-primary transition-colors leading-tight">
                        {topic.title}
                      </h4>
                      <p className="text-[11px] text-(--text-muted) mt-0.5 font-mono">
                        {topic.formula.positive}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-(--text-secondary) leading-relaxed line-clamp-2 flex-1">
                    {topic.shortDefinition}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Pelajari <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Grammar Structures */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider px-1">
            Grammar Structures
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {tnIntGrammarTopics.map((topic) => {
              const colors = tenseColors[topic.id] ?? 'border-(--border) bg-(--bg-card) text-primary';
              return (
                <Link
                  key={topic.id}
                  href={`/tn-intermediate/${topic.id}`}
                  className={`group border rounded-xl p-5 hover:shadow-lg transition-all flex flex-col gap-3 ${colors}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/50 dark:bg-white/10 flex items-center justify-center shrink-0">
                      <topic.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-(--text) group-hover:text-primary transition-colors leading-tight">
                        {topic.title}
                      </h4>
                      <p className="text-[11px] text-(--text-muted) mt-0.5">
                        {topic.sections.length} topik • {topic.exercises.length} latihan soal
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-(--text-secondary) leading-relaxed line-clamp-2 flex-1">
                    {topic.shortDefinition}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Pelajari <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

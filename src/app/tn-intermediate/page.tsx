import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { tensesTopics, grammarTopics } from '@/data/tnIntermediateGrammar';

export const metadata: Metadata = {
  title: 'TN Intermediate — Grammar',
  description: 'Pelajari 5 tenses utama, Adjective Clause, serta To Infinitive & Gerund lengkap dengan materi dan latihan.',
};

const tenseColors: Record<string, string> = {
  'simple-present':     'from-green-500/10 to-green-500/5   border-green-400/40   text-green-600',
  'simple-past':        'from-blue-500/10  to-blue-500/5    border-blue-400/40    text-blue-600',
  'simple-future':      'from-yellow-500/10 to-yellow-500/5 border-yellow-400/40  text-yellow-600',
  'present-continuous': 'from-orange-500/10 to-orange-500/5 border-orange-400/40  text-orange-600',
  'present-perfect':    'from-red-500/10    to-red-500/5    border-red-400/40     text-red-600',
  'adjective-clause':      'from-purple-500/10 to-purple-500/5 border-purple-400/40  text-purple-600',
  'to-infinitive-gerund':  'from-teal-500/10   to-teal-500/5   border-teal-400/40    text-teal-600',
};

export default function TNIntermediatePage() {
  return (
    <div className="p-4 lg:p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          TN Intermediate — Grammar
        </h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Materi grammar lengkap: 5 Tenses utama, Adjective Clause, serta To Infinitive &amp; Gerund — dilengkapi rumus, contoh kalimat, dan latihan soal.
        </p>
      </div>

      {/* 5 Tenses */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-(--text-secondary) uppercase tracking-wider px-1">
          5 Tenses Utama
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tensesTopics.map((topic) => {
            const colors = tenseColors[topic.id] ?? 'from-primary/10 to-primary/5 border-primary/30 text-primary';
            return (
              <Link
                key={topic.id}
                href={`/tn-intermediate/${topic.id}`}
                className={`group bg-linear-to-br ${colors} border rounded-xl p-5 hover:shadow-md transition-all flex flex-col gap-3`}
              >
                <div className="flex items-start gap-3">
                  <topic.icon className="w-6 h-6 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-(--text) group-hover:text-primary transition-colors leading-tight">
                      {topic.title}
                    </h3>
                    <p className="text-[11px] text-(--text-muted) mt-0.5 font-mono">
                      {topic.formula.positive}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-(--text-secondary) leading-relaxed line-clamp-2 flex-1">
                  {topic.shortDefinition}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  Pelajari <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Grammar Structures */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-(--text-secondary) uppercase tracking-wider px-1">
          Grammar Structures
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {grammarTopics.map((topic) => {
            const colors = tenseColors[topic.id] ?? 'from-primary/10 to-primary/5 border-primary/30 text-primary';
            return (
              <Link
                key={topic.id}
                href={`/tn-intermediate/${topic.id}`}
                className={`group bg-linear-to-br ${colors} border rounded-xl p-5 hover:shadow-md transition-all flex flex-col gap-3`}
              >
                <div className="flex items-start gap-3">
                  <topic.icon className="w-6 h-6 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-(--text) group-hover:text-primary transition-colors leading-tight">
                      {topic.title}
                    </h3>
                    <p className="text-[11px] text-(--text-muted) mt-0.5">
                      {topic.sections.length} topik • {topic.exercises.length} latihan soal
                    </p>
                  </div>
                </div>
                <p className="text-xs text-(--text-secondary) leading-relaxed line-clamp-2 flex-1">
                  {topic.shortDefinition}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  Pelajari <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { tensesTopics } from '@/data/tnIntermediateGrammar';

export const metadata: Metadata = {
  title: 'TN Intermediate — Grammar: Tenses',
  description: 'Pelajari 12 tenses Bahasa Inggris lengkap dengan rumus, penggunaan, dan contoh kalimat.',
};

const tenseColors: Record<string, string> = {
  'simple-present':              'from-green-500/10 to-green-500/5   border-green-400/40   text-green-600',
  'simple-past':                 'from-blue-500/10  to-blue-500/5    border-blue-400/40    text-blue-600',
  'simple-future':               'from-yellow-500/10 to-yellow-500/5 border-yellow-400/40  text-yellow-600',
  'present-continuous':          'from-orange-500/10 to-orange-500/5 border-orange-400/40  text-orange-600',
  'past-continuous':             'from-purple-500/10 to-purple-500/5 border-purple-400/40  text-purple-600',
  'future-continuous':           'from-amber-500/10  to-amber-500/5  border-amber-400/40   text-amber-700',
  'present-perfect':             'from-red-500/10    to-red-500/5    border-red-400/40     text-red-600',
  'past-perfect':                'from-gray-500/10   to-gray-500/5   border-gray-400/40    text-gray-600',
  'future-perfect':              'from-indigo-500/10 to-indigo-500/5 border-indigo-400/40  text-indigo-600',
  'present-perfect-continuous':  'from-rose-500/10   to-rose-500/5   border-rose-400/40    text-rose-600',
  'past-perfect-continuous':     'from-cyan-500/10   to-cyan-500/5   border-cyan-400/40    text-cyan-600',
  'future-perfect-continuous':   'from-teal-500/10   to-teal-500/5   border-teal-400/40    text-teal-600',
};

const groups = [
  {
    label: 'Simple Tenses',
    ids: ['simple-present', 'simple-past', 'simple-future'],
  },
  {
    label: 'Continuous Tenses',
    ids: ['present-continuous', 'past-continuous', 'future-continuous'],
  },
  {
    label: 'Perfect Tenses',
    ids: ['present-perfect', 'past-perfect', 'future-perfect'],
  },
  {
    label: 'Perfect Continuous Tenses',
    ids: ['present-perfect-continuous', 'past-perfect-continuous', 'future-perfect-continuous'],
  },
];

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
          Kuasai 12 tenses Bahasa Inggris — dari Simple sampai Perfect Continuous — lengkap dengan rumus, penggunaan, dan contoh kalimat.
        </p>
      </div>

      {/* Tense Groups */}
      {groups.map((group) => {
        const topicsInGroup = tensesTopics.filter((t) => group.ids.includes(t.id));
        return (
          <section key={group.label} className="space-y-3">
            <h2 className="text-base font-semibold text-(--text-secondary) uppercase tracking-wider px-1">
              {group.label}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topicsInGroup.map((topic) => {
                const colors = tenseColors[topic.id] ?? 'from-primary/10 to-primary/5 border-primary/30 text-primary';
                return (
                  <Link
                    key={topic.id}
                    href={`/tn-intermediate/${topic.id}`}
                    className={`group bg-gradient-to-br ${colors} border rounded-xl p-5 hover:shadow-md transition-all flex flex-col gap-3`}
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
        );
      })}
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpenText, Mic2, PenLine, Headphones,
  ArrowRight, BookOpen, GraduationCap,
} from 'lucide-react';
import { tensesTopics, grammarTopics } from '@/data/tnIntermediateGrammar';
import { getTnIntermediateLessonsByTrack, tnIntermediateTracks } from '@/data/tnIntermediateModules';

export const metadata: Metadata = {
  title: 'TN Intermediate',
  description: 'Materi Intermediate: Reading, Speaking, Grammar (5 Tenses + Adjective Clause + Gerund), dan Listening.',
};

const tenseColors: Record<string, string> = {
  'simple-present':       'from-green-500/10 to-green-500/5   border-green-400/40   text-green-600',
  'simple-past':          'from-blue-500/10  to-blue-500/5    border-blue-400/40    text-blue-600',
  'simple-future':        'from-yellow-500/10 to-yellow-500/5 border-yellow-400/40  text-yellow-600',
  'present-continuous':   'from-orange-500/10 to-orange-500/5 border-orange-400/40  text-orange-600',
  'present-perfect':      'from-red-500/10    to-red-500/5    border-red-400/40     text-red-600',
  'adjective-clause':     'from-purple-500/10 to-purple-500/5 border-purple-400/40  text-purple-600',
  'to-infinitive-gerund': 'from-teal-500/10   to-teal-500/5   border-teal-400/40    text-teal-600',
};

const trackIcons = {
  reading:   BookOpenText,
  speaking:  Mic2,
  grammar:   PenLine,
  listening: Headphones,
} as const;

export default function TNIntermediatePage() {
  return (
    <div className="p-4 lg:p-6 space-y-10 animate-fade-in">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary" />
          TN Intermediate
        </h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Materi lengkap level Intermediate: Reading, Speaking, Grammar, dan Listening — disertai latihan dan post test.
        </p>
      </div>

      {/* ── Course Tracks ───────────────────────────────────────────── */}
      <div className="grid lg:grid-cols-2 gap-5">
        {tnIntermediateTracks.map((trackInfo) => {
          const lessons = getTnIntermediateLessonsByTrack(trackInfo.track);
          const Icon = trackIcons[trackInfo.track];
          const isGrammar = trackInfo.track === 'grammar';

          return (
            <section
              key={trackInfo.track}
              className="bg-(--bg-card) border border-(--border) rounded-2xl p-5 space-y-4"
            >
              {/* Track header */}
              <div>
                <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  {trackInfo.title}
                </h2>
                <p className="text-sm text-(--text-secondary) mt-1">{trackInfo.description}</p>
              </div>

              {/* Lesson cards */}
              <div className="grid sm:grid-cols-2 gap-2">
                {lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/tn-intermediate/class/${lesson.track}/${lesson.day}`}
                    className="group border border-(--border) hover:border-primary/40 hover:bg-(--hover) rounded-xl p-3 transition-colors"
                  >
                    <p className="text-xs text-primary font-semibold mb-0.5">Day {lesson.day}</p>
                    <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors">
                      {lesson.title}
                    </p>
                    <p className="text-xs text-(--text-muted) mt-1 line-clamp-2">{lesson.subtitle}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-primary">
                      Open <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}

                {/* Grammar: link to grammar topics page */}
                {isGrammar && (
                  <Link
                    href="#grammar-topics"
                    className="group border border-primary/40 bg-primary/5 hover:bg-primary/10 rounded-xl p-3 transition-colors sm:col-span-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5">
                          Grammar Topics
                        </p>
                        <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors">
                          5 Tenses + Adjective Clause + Gerund
                        </p>
                        <p className="text-xs text-(--text-muted) mt-0.5">
                          Lihat semua materi grammar di bawah halaman ini ↓
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                    </div>
                  </Link>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Grammar Topics ──────────────────────────────────────────── */}
      <section id="grammar-topics" className="space-y-6 scroll-mt-6">
        <div>
          <h2 className="text-xl font-bold text-(--text) flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Grammar — TN Intermediate
          </h2>
          <p className="text-sm text-(--text-secondary) mt-1">
            5 Tenses utama, Adjective Clause, dan To Infinitive &amp; Gerund — lengkap dengan rumus, contoh, dan latihan soal.
          </p>
        </div>

        {/* 5 Tenses */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wider px-1">
            5 Tenses Utama
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tensesTopics.map((topic) => {
              const colors =
                tenseColors[topic.id] ??
                'from-primary/10 to-primary/5 border-primary/30 text-primary';
              return (
                <Link
                  key={topic.id}
                  href={`/tn-intermediate/${topic.id}`}
                  className={`group bg-linear-to-br ${colors} border rounded-xl p-5 hover:shadow-md transition-all flex flex-col gap-3`}
                >
                  <div className="flex items-start gap-3">
                    <topic.icon className="w-6 h-6 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-(--text) group-hover:text-primary transition-colors leading-tight">
                        {topic.title}
                      </h4>
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
        </div>

        {/* Grammar Structures */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wider px-1">
            Grammar Structures
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {grammarTopics.map((topic) => {
              const colors =
                tenseColors[topic.id] ??
                'from-primary/10 to-primary/5 border-primary/30 text-primary';
              return (
                <Link
                  key={topic.id}
                  href={`/tn-intermediate/${topic.id}`}
                  className={`group bg-linear-to-br ${colors} border rounded-xl p-5 hover:shadow-md transition-all flex flex-col gap-3`}
                >
                  <div className="flex items-start gap-3">
                    <topic.icon className="w-6 h-6 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-(--text) group-hover:text-primary transition-colors leading-tight">
                        {topic.title}
                      </h4>
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
        </div>
      </section>
    </div>
  );
}

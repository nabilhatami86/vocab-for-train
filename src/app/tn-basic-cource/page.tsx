import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpenText, Mic2, PenLine, Headphones, ArrowRight, BookOpen } from 'lucide-react';
import { getLessonsByTrack, moduleTracks } from '@/data/modules';

export const metadata: Metadata = {
  title: 'TN Basic Cource',
  description: 'Module belajar Reading, Speaking, Grammar, dan Listening Basic Week 1-2.',
};

const trackIcons = {
  reading:   BookOpenText,
  speaking:  Mic2,
  grammar:   PenLine,
  listening: Headphones,
} as const;

const trackColors = {
  reading:   'from-blue-500/10  to-blue-500/5   border-blue-400/40   text-blue-600',
  speaking:  'from-green-500/10 to-green-500/5  border-green-400/40  text-green-600',
  grammar:   'from-violet-500/10 to-violet-500/5 border-violet-400/40 text-violet-600',
  listening: 'from-amber-500/10 to-amber-500/5  border-amber-400/40  text-amber-600',
} as const;

export default function ModuleLearningPage() {
  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          TN Basic Cource
        </h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Materi Reading, Speaking, Grammar, dan Listening Week 1-2 lengkap dengan latihan.
        </p>
      </div>

      {/* Track Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {moduleTracks.map((track) => {
          const lessons = getLessonsByTrack(track.track);
          const Icon = trackIcons[track.track];
          const colors = trackColors[track.track];

          return (
            <Link
              key={track.track}
              href={`/tn-basic-cource/class/${track.track}`}
              className={`group bg-linear-to-br ${colors} border rounded-2xl p-5 hover:shadow-md transition-all flex flex-col gap-3`}
            >
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/50 dark:bg-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-(--text) group-hover:text-primary transition-colors">
                    {track.title}
                  </h2>
                  <p className="text-xs text-(--text-muted) mt-0.5">
                    {lessons.length} materi tersedia
                  </p>
                </div>
              </div>
              <p className="text-sm text-(--text-secondary) leading-relaxed line-clamp-2">
                {track.description}
              </p>
              <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all mt-auto">
                Lihat Materi <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpenText, Mic2, PenLine, Headphones, ArrowRight, FileText, GraduationCap } from 'lucide-react';
import { getLessonsByTrack, moduleTracks } from '@/data/modules';

export const metadata: Metadata = {
  title: 'TN Basic Cource',
  description: 'Module belajar Reading, Speaking, Grammar, dan Listening Basic Week 1-2.',
};

export default function ModuleLearningPage() {
  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-(--text)">TN Basic Cource</h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Materi Reading, Speaking, Grammar, dan Listening Week 1-2 lengkap dengan latihan.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {moduleTracks.map((track) => {
          const lessons = getLessonsByTrack(track.track);
          const trackIcons = { reading: BookOpenText, speaking: Mic2, grammar: PenLine, listening: Headphones };
          const Icon = trackIcons[track.track];

          return (
            <section key={track.track} className="bg-(--bg-card) border border-(--border) rounded-2xl p-5 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    {track.title}
                  </h2>
                  <p className="text-sm text-(--text-secondary) mt-1">{track.description}</p>
                </div>
                {track.pdfPath && (
                  <a
                    href={track.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border border-(--border) text-(--text-secondary) hover:bg-(--hover)"
                  >
                    <FileText className="w-3.5 h-3.5" /> PDF
                  </a>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-2">
                {lessons.map((lesson) => {
                  const isExam = lesson.day === 10;
                  return (
                    <Link
                      key={lesson.id}
                      href={`/tn-basic-cource/${lesson.track}/${lesson.day}`}
                      className={`group border rounded-xl p-3 transition-colors ${
                        isExam
                          ? 'border-primary/40 bg-primary/5 hover:bg-primary/10 sm:col-span-2'
                          : 'border-(--border) hover:border-primary/40 hover:bg-(--hover)'
                      }`}
                    >
                      {isExam ? (
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                            <GraduationCap className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-xs font-bold text-primary uppercase tracking-wider">Middle Test</p>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/15 text-primary font-semibold">Ujian</span>
                            </div>
                            <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors">
                              {lesson.title}
                            </p>
                            <p className="text-xs text-(--text-muted) mt-0.5">{lesson.subtitle}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                        </div>
                      ) : (
                        <>
                          <p className="text-xs text-primary font-semibold mb-0.5">Day {lesson.day}</p>
                          <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors">
                            {lesson.title}
                          </p>
                          <p className="text-xs text-(--text-muted) mt-1 line-clamp-2">{lesson.subtitle}</p>
                          <span className="mt-2 inline-flex items-center gap-1 text-xs text-primary">
                            Open <ArrowRight className="w-3 h-3" />
                          </span>
                        </>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

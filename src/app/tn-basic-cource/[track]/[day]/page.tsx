import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLesson, getLessonsByTrack, moduleLessons } from '@/data/modules';
import type { ModuleTrack } from '@/types/module';
import ModuleLessonClient from './ModuleLessonClient';

interface PageProps {
  params: Promise<{ track: string; day: string }>;
}

const isTrack = (value: string): value is ModuleTrack =>
  ['reading', 'speaking', 'grammar', 'listening'].includes(value);

export async function generateStaticParams() {
  return moduleLessons.map((lesson) => ({
    track: lesson.track,
    day: String(lesson.day),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { track, day } = await params;
  if (!isTrack(track)) return { title: 'Module Lesson' };

  const lesson = getLesson(track, Number(day));
  if (!lesson) return { title: 'Module Lesson' };

  return {
    title: `${lesson.track.toUpperCase()} Day ${lesson.day} - ${lesson.title}`,
    description: lesson.subtitle,
  };
}

export default async function ModuleLessonPage({ params }: PageProps) {
  const { track, day } = await params;

  if (!isTrack(track)) notFound();

  const lesson = getLesson(track, Number(day));
  if (!lesson) notFound();

  const trackLessons = getLessonsByTrack(track);
  const currentIdx = trackLessons.findIndex((l) => l.day === lesson.day);
  const prevLesson = currentIdx > 0 ? trackLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < trackLessons.length - 1 ? trackLessons[currentIdx + 1] : null;
  const base = `/tn-basic-cource/${track}`;

  return (
    <ModuleLessonClient
      lesson={lesson}
      backHref={`/tn-basic-cource/class/${track}`}
      backLabel={`Back to ${track.charAt(0).toUpperCase() + track.slice(1)}`}
      prevHref={prevLesson ? `${base}/${prevLesson.day}` : undefined}
      prevLabel={prevLesson ? `Day ${prevLesson.day}` : undefined}
      prevTitle={prevLesson?.title}
      nextHref={nextLesson ? `${base}/${nextLesson.day}` : undefined}
      nextLabel={nextLesson ? `Day ${nextLesson.day}` : undefined}
      nextTitle={nextLesson?.title}
    />
  );
}

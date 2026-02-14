import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLesson, moduleLessons } from '@/data/modules';
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

  return <ModuleLessonClient lesson={lesson} />;
}

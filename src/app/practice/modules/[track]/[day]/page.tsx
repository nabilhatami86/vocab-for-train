import { notFound, redirect } from 'next/navigation';
import type { ModuleTrack } from '@/types/module';

interface PageProps {
  params: Promise<{ track: string; day: string }>;
}

const isTrack = (value: string): value is ModuleTrack => value === 'reading' || value === 'speaking';

export default async function PracticeModuleLessonRedirectPage({ params }: PageProps) {
  const { track, day } = await params;
  if (!isTrack(track)) notFound();

  redirect(`/tn-basic-cource/${track}/${day}`);
}

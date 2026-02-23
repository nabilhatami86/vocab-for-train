import { notFound } from 'next/navigation';
import { getStoryById } from '@/data/stories';
import StoryReaderClient from './StoryReaderClient';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function StoryPage({ params }: Props) {
  const { id } = await params;
  const story = getStoryById(id);

  if (!story) notFound();

  return <StoryReaderClient story={story} />;
}

export async function generateStaticParams() {
  const { stories } = await import('@/data/stories');
  return stories.map((s) => ({ id: s.id }));
}

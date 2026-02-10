import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { vocabulary, getAllSlugs, getWordBySlug } from '@/data/vocabulary';
import { VocabDetailClient } from './VocabDetailClient';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const word = getWordBySlug(slug);
  if (!word) return {};

  return {
    title: `${word.word} - Meaning, Examples & Pronunciation`,
    description: `Learn the word "${word.word}" - ${word.meaning.en}. See examples, synonyms, antonyms, and pronunciation.`,
  };
}

export default async function VocabDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const word = getWordBySlug(slug);
  if (!word) notFound();

  return <VocabDetailClient word={word} category={category} />;
}

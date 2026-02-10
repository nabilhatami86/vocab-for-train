import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getWordsByCategory } from '@/data/vocabulary';
import { getCategoryLabel } from '@/lib/utils';
import type { Category } from '@/types/vocab';
import { CategoryPageClient } from './CategoryPageClient';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};

  return {
    title: `${cat.name} - English Vocabulary`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const words = getWordsByCategory(category);

  return <CategoryPageClient category={cat} words={words} />;
}

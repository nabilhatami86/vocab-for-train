import { type Category, type Difficulty, type VocabWord } from '@/types/vocab';

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function getCategoryLabel(category: Category): string {
  const labels: Record<Category, string> = {
    nouns: 'Nouns',
    verbs: 'Verbs',
    adjectives: 'Adjectives',
    adverbs: 'Adverbs',
    phrases: 'Phrases',
    daily: 'Daily Vocabulary',
    'work-tech': 'Work & Tech',
  };
  return labels[category];
}

export function getDifficultyColor(difficulty: Difficulty): string {
  const colors: Record<Difficulty, string> = {
    basic: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };
  return colors[difficulty];
}

export function filterVocabulary(
  words: VocabWord[],
  options: {
    category?: Category;
    difficulty?: Difficulty;
    search?: string;
  }
): VocabWord[] {
  let filtered = [...words];

  if (options.category) {
    filtered = filtered.filter((w) => w.categories.includes(options.category!));
  }

  if (options.difficulty) {
    filtered = filtered.filter((w) => w.difficulty === options.difficulty);
  }

  if (options.search) {
    const q = options.search.toLowerCase();
    filtered = filtered.filter(
      (w) =>
        w.word.toLowerCase().includes(q) ||
        w.meaning.en.toLowerCase().includes(q) ||
        w.meaning.id.toLowerCase().includes(q)
    );
  }

  return filtered;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getDailyWord(words: VocabWord[]): VocabWord {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return words[dayOfYear % words.length];
}

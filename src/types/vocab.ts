export type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase';

export type Difficulty = 'basic' | 'intermediate' | 'advanced';

export type Category =
  | 'nouns'
  | 'verbs'
  | 'adjectives'
  | 'adverbs'
  | 'phrases'
  | 'daily'
  | 'work-tech';

export interface VocabWord {
  id: string;
  word: string;
  slug: string;
  partOfSpeech: PartOfSpeech;
  categories: Category[];
  meaning: {
    en: string;
    id: string;
  };
  examples: string[];
  synonyms: string[];
  antonyms: string[];
  pronunciation: {
    text: string;
    ipa: string;
  };
  difficulty: Difficulty;
  audioUrl?: string;
}

export interface QuizQuestion {
  word: VocabWord;
  options: string[];
  correctAnswer: string;
  type: 'meaning' | 'synonym' | 'antonym' | 'fill-blank';
}

export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  icon: string;
  count: number;
}

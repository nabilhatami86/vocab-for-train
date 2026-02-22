import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Category, Difficulty } from '@/types/vocab';

interface VocabState {
  // Favorites
  favorites: string[];
  toggleFavorite: (wordId: string) => void;
  isFavorite: (wordId: string) => boolean;

  // Learned words
  learnedWords: string[];
  markAsLearned: (wordId: string) => void;
  unmarkAsLearned: (wordId: string) => void;
  isLearned: (wordId: string) => boolean;

  // Quiz scores
  quizScores: { date: string; score: number; total: number }[];
  addQuizScore: (score: number, total: number) => void;

  // Grammar scores per topic (persisted)
  grammarScores: { date: string; topic: string; score: number; total: number }[];
  addGrammarScore: (topic: string, score: number, total: number) => void;

  // Filters
  selectedCategory: Category | null;
  selectedDifficulty: Difficulty | null;
  searchQuery: string;
  setSelectedCategory: (category: Category | null) => void;
  setSelectedDifficulty: (difficulty: Difficulty | null) => void;
  setSearchQuery: (query: string) => void;

  // Theme
  theme: 'light' | 'dark';
  toggleTheme: () => void;

  // Sidebar
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const useVocabStore = create<VocabState>()(
  persist(
    (set, get) => ({
      // Favorites
      favorites: [],
      toggleFavorite: (wordId) =>
        set((state) => ({
          favorites: state.favorites.includes(wordId)
            ? state.favorites.filter((id) => id !== wordId)
            : [...state.favorites, wordId],
        })),
      isFavorite: (wordId) => get().favorites.includes(wordId),

      // Learned words
      learnedWords: [],
      markAsLearned: (wordId) =>
        set((state) => ({
          learnedWords: state.learnedWords.includes(wordId)
            ? state.learnedWords
            : [...state.learnedWords, wordId],
        })),
      unmarkAsLearned: (wordId) =>
        set((state) => ({
          learnedWords: state.learnedWords.filter((id) => id !== wordId),
        })),
      isLearned: (wordId) => get().learnedWords.includes(wordId),

      // Quiz scores
      quizScores: [],
      addQuizScore: (score, total) =>
        set((state) => ({
          quizScores: [
            ...state.quizScores,
            { date: new Date().toISOString(), score, total },
          ],
        })),

      // Grammar scores per topic
      grammarScores: [],
      addGrammarScore: (topic, score, total) =>
        set((state) => ({
          grammarScores: [
            ...state.grammarScores,
            { date: new Date().toISOString(), topic, score, total },
          ],
        })),

      // Filters
      selectedCategory: null,
      selectedDifficulty: null,
      searchQuery: '',
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
      setSearchQuery: (query) => set({ searchQuery: query }),

      // Theme
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      // Sidebar
      sidebarOpen: false,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
    }),
    {
      name: 'vocab-store',
      partialize: (state) => ({
        favorites: state.favorites,
        learnedWords: state.learnedWords,
        quizScores: state.quizScores,
        grammarScores: state.grammarScores,
        theme: state.theme,
      }),
    }
  )
);

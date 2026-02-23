export type StoryDifficulty = 'basic' | 'intermediate' | 'advanced';

export type StoryFormat = 'story' | 'conversation';

export interface StoryTurn {
  /** Speaker name for conversation format; omit/empty for narrative paragraphs */
  speaker?: string;
  text: string;
}

export interface StoryVocab {
  word: string;
  translation: string;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  difficulty: StoryDifficulty;
  format: StoryFormat;
  topic: string;
  estimatedMinutes: number;
  turns: StoryTurn[];
  /** Key vocabulary highlighted for learners */
  keyVocab: StoryVocab[];
}

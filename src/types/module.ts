export type ModuleTrack = 'reading' | 'speaking' | 'grammar' | 'listening';

export type ModuleExerciseType = 'multiple-choice' | 'short-answer' | 'task';

export interface ModuleExercise {
  id: string;
  type: ModuleExerciseType;
  question: string;
  options?: string[];
  correctAnswer?: string;
  reason?: string;
  sampleAnswer?: string;
  section?: 'middle' | 'final';
}

export interface ModuleMaterialSection {
  title: string;
  points: string[];
  imageUrl?: string;
}

export interface ModuleLesson {
  id: string;
  track: ModuleTrack;
  day: number;
  title: string;
  subtitle: string;
  overview: string;
  passage?: string[];
  audioUrl?: string;
  audioTracks?: {
    title: string;
    url: string;
  }[];
  materialSections: ModuleMaterialSection[];
  exercises: ModuleExercise[];
}

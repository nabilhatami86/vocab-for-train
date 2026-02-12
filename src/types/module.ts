export type ModuleTrack = 'reading' | 'speaking';

export type ModuleExerciseType = 'multiple-choice' | 'short-answer' | 'task';

export interface ModuleExercise {
  id: string;
  type: ModuleExerciseType;
  question: string;
  options?: string[];
  sampleAnswer?: string;
}

export interface ModuleMaterialSection {
  title: string;
  points: string[];
}

export interface ModuleLesson {
  id: string;
  track: ModuleTrack;
  day: number;
  title: string;
  subtitle: string;
  overview: string;
  passage?: string[];
  materialSections: ModuleMaterialSection[];
  exercises: ModuleExercise[];
}

export type ModuleTrack = 'reading' | 'speaking' | 'grammar' | 'listening';

export type ModuleExerciseType = 'multiple-choice' | 'fill-the-gap' | 'true-false-not-given' | 'short-answer' | 'task';

export interface ModuleExercise {
  id: string;
  type: ModuleExerciseType;
  question: string;
  options?: string[];
  correctAnswer?: string;
  reason?: string;
  sampleAnswer?: string;
  section?: 'middle' | 'final' | 'quiz';
}

export interface ModuleMaterialSection {
  title: string;
  points: string[];
  imageUrl?: string;
}

/** A single line in a listening script. Speaker = dialogue, no speaker = narration/note. */
export interface ListeningLine {
  speaker?: string;   // "Receptionist", "A", "B" — omit for notes/narration
  text: string;       // prose with {{b:N}} markers for numbered blanks
  bold?: boolean;     // section header within notes
  indent?: boolean;   // indented bullet item in notes
}

/** One audio section (e.g. Audio 1, Audio 2, Audio 3). */
export interface ListeningAudio {
  title: string;        // "Audio 1: Free time."
  instruction: string;  // "Fill the blank spaces while listening to the recording."
  type: 'dialogue' | 'notes';
  lines: ListeningLine[];
  answers: Record<number, string>; // blank number → correct answer
}

export interface ModuleLesson {
  id: string;
  track: ModuleTrack;
  day: number;
  title: string;
  subtitle: string;
  overview: string;
  tutor?: string;
  passage?: string[];
  audioUrl?: string;
  audioTracks?: {
    title: string;
    url: string;
  }[];
  materialSections: ModuleMaterialSection[];
  exercises: ModuleExercise[];
  listeningAudios?: ListeningAudio[];
}

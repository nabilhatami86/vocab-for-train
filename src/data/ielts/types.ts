export type AnswerKey = Record<number, string | string[]>;

export interface NotesSection {
  type: 'notes' | 'form';
  title: string;
  instruction: string;
  heading?: string;
  example?: { text: string; answer: string };
  lines: string[];
  questionRange: [number, number];
}

export interface TableSection {
  type: 'table';
  title: string;
  instruction: string;
  headers: string[];
  rows: string[][];
  questionRange: [number, number];
}

export interface MCOption { letter: string; text: string }
export interface MCQuestion { number: number; stem: string; options: MCOption[] }

export interface MCSection {
  type: 'multiple-choice';
  title: string;
  instruction?: string;
  questions: MCQuestion[];
  questionRange: [number, number];
}

export interface MatchingSection {
  type: 'matching';
  title: string;
  instruction: string;
  items: Array<{ number: number; stem: string }>;
  options: MCOption[];
  questionRange: [number, number];
}

export type QuestionSection = NotesSection | TableSection | MCSection | MatchingSection;

export interface IELTSPart {
  part: number;
  title: string;
  scenario: string;
  description: string;
  audioUrl: string;
  questionRange: [number, number];
  sections: QuestionSection[];
}

export interface IELTSTest {
  id: string;
  number: number;
  title: string;
  parts: IELTSPart[];
  answerKey: AnswerKey;
}

import type { ModuleLesson, ModuleTrack } from "@/types/module";
import { basicReadingLessons } from "./reading/tnBasicReading";
import { basicSpeakingLessons } from "./speaking/tnBasicSpeaking";
import { basicGrammarLessons } from "./grammar/tnBasicGrammar";
import { basicListeningLessons } from "./listening/tnBasicListening";

export const moduleLessons: ModuleLesson[] = [
  ...basicReadingLessons,
  ...basicSpeakingLessons,
  ...basicGrammarLessons,
  ...basicListeningLessons,
].sort((a, b) =>
  a.track === b.track ? a.day - b.day : a.track.localeCompare(b.track),
);

export const moduleTracks: {
  track: ModuleTrack;
  title: string;
  description: string;
  pdfPath: string;
}[] = [
  {
    track: "reading",
    title: "Reading Basic Week 1-2",
    description: "Passages + comprehension exercises dari modul reading.",
    pdfPath: "/modules/reading-week1-2.pdf",
  },
  {
    track: "speaking",
    title: "Speaking Basic Week 1-2",
    description: "Expression practice + speaking tasks dari modul speaking.",
    pdfPath: "/modules/speaking-week1-2.pdf",
  },
  {
    track: "grammar",
    title: "Grammar Basic Week 1-2",
    description:
      "Penjelasan grammar dasar lengkap: Nouns, Verbs, Adjectives, Adverbs, Pronouns, Prepositions, Conjunctions, Articles & Determiners.",
    pdfPath: "",
  },
  {
    track: "listening",
    title: "Listening Basic Week 1-2",
    description: "Latihan listening dengan audio + comprehension questions.",
    pdfPath: "",
  },
];

export const getLessonsByTrack = (track: ModuleTrack) =>
  moduleLessons
    .filter((lesson) => lesson.track === track)
    .sort((a, b) => a.day - b.day);

export const getLesson = (track: ModuleTrack, day: number) =>
  moduleLessons.find(
    (lesson) => lesson.track === track && lesson.day === day,
  ) ?? null;

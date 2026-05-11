import type { ModuleLesson, ModuleTrack } from "@/types/module";
import { intermediateReadingLessons } from "@/data/reading/tnIntermediateReading";
import { intermediateSpeakingLessons } from "@/data/speaking/tnIntermediateSpeaking";
import { intermediateListeningLessons } from "@/data/listening/tnIntermediateListening";
import { intermediateGrammarLessons } from "@/data/grammar/tnIntermediateGrammar";

// ── All lessons combined ──────────────────────────────────────────────────────

export const tnIntermediateLessons: ModuleLesson[] = [
  ...intermediateReadingLessons,
  ...intermediateSpeakingLessons,
  ...intermediateListeningLessons,
  ...intermediateGrammarLessons,
].sort((a, b) =>
  a.track === b.track ? a.day - b.day : a.track.localeCompare(b.track),
);

export const tnIntermediateTracks: {
  track: ModuleTrack;
  title: string;
  description: string;
  pdfPath: string;
}[] = [
  {
    track: "reading",
    title: "Reading Intermediate",
    description:
      "Teks bacaan bertopik akademis & kontemporer: media sosial, iklim, ekonomi, dan lainnya.",
    pdfPath: "",
  },
  {
    track: "speaking",
    title: "Speaking Intermediate",
    description:
      "Latihan speaking: ekspresi pendapat, diskusi, dan percakapan level intermediate.",
    pdfPath: "",
  },
  {
    track: "grammar",
    title: "Grammar Intermediate",
    description:
      "5 tenses utama + Adjective Clause + To Infinitive & Gerund dengan latihan soal.",
    pdfPath: "",
  },
  {
    track: "listening",
    title: "Listening Intermediate",
    description:
      "Strategi listening: gist, detail, attitude, dan latihan percakapan sehari-hari.",
    pdfPath: "",
  },
];

export const getTnIntermediateLessonsByTrack = (track: ModuleTrack) =>
  tnIntermediateLessons
    .filter((lesson) => lesson.track === track)
    .sort((a, b) => a.day - b.day);

export const getTnIntermediateLesson = (track: ModuleTrack, day: number) =>
  tnIntermediateLessons.find(
    (lesson) => lesson.track === track && lesson.day === day,
  ) ?? null;

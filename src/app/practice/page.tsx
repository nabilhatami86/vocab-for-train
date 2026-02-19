import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Brain, PenLine, RotateCcw, BookCheck, FileText, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Practice',
  description: 'Practice your English vocabulary with quizzes, fill-in-the-blanks, and review modes.',
};

const modes = [
  {
    href: '/practice/quiz',
    title: 'Multiple Choice Quiz',
    description: 'Test your vocabulary knowledge with multiple choice questions. Choose the correct meaning for each word.',
    icon: Brain,
    color: 'bg-primary/10 text-primary',
  },
  {
    href: '/practice/grammar-quiz',
    title: 'Grammar Quiz',
    description: '25 soal pilihan ganda (ABCD) dari semua part of speech: Nouns, Verbs, Adjectives, Adverbs, Pronouns, Prepositions, Conjunctions, Articles. Lihat skor & penjelasan di akhir!',
    icon: BookCheck,
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    href: '/practice/grammar-evaluator',
    title: 'Grammar Evaluator (30Q)',
    description: 'Tes grammar 30 soal (A-D) dengan koreksi detail per nomor: rule, error type, corrected sentence, dan extra practice.',
    icon: FileText,
    color: 'bg-fuchsia-500/10 text-fuchsia-600',
  },
  {
    href: '/practice/exams/review-basic-grammar-1-2',
    title: 'Tugas Review Basic Grammar',
    description: 'Paket tugas/latihan 30 soal dari file REVIEW BASIC GRAMMAR 1 2 (persiapan ujian).',
    icon: FileText,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    href: '/practice/exams/kisi-kisi-having',
    title: 'Kisi-Kisi Ujian Having',
    description: 'Paket kisi-kisi 20 soal dari file d. having (untuk persiapan ujian).',
    icon: ClipboardList,
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    href: '/practice/exams/kisi-kisi-reading-middle-test',
    title: 'Kisi-Kisi Reading Middle Test',
    description: 'Latihan reading comprehension topik Hobby and Interest (T/F/NG + vocabulary + detail).',
    icon: ClipboardList,
    color: 'bg-cyan-500/10 text-cyan-700',
  },
  {
    href: '/practice/modules/speaking/10',
    title: 'Kisi-Kisi Speaking Middle Test',
    description: 'Practice speaking: greeting, personal identity, education, family, hobby, angka dan waktu.',
    icon: ClipboardList,
    color: 'bg-rose-500/10 text-rose-700',
  },
  {
    href: '/practice/fill-blanks',
    title: 'Fill in the Blanks',
    description: 'Complete sentences by typing the missing word. Great for spelling and context practice.',
    icon: PenLine,
    color: 'bg-accent/10 text-accent',
  },
  {
    href: '/practice/review',
    title: 'Vocabulary Review',
    description: 'Flip through vocabulary cards to review words you have learned or need to practice.',
    icon: RotateCcw,
    color: 'bg-success/10 text-success',
  },
];

export default function PracticePage() {
  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary" />
          Practice
        </h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Choose a practice mode to strengthen your vocabulary skills
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modes.map((mode) => {
          const Icon = mode.icon;
          return (
            <Link
              key={mode.href}
              href={mode.href}
              className="bg-(--bg-card) border border-(--border) rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${mode.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-semibold text-(--text) group-hover:text-primary transition-colors mb-2">
                {mode.title}
              </h2>
              <p className="text-sm text-(--text-secondary) leading-relaxed">
                {mode.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

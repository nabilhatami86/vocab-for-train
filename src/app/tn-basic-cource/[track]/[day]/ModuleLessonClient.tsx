'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, BookText, Languages, X, XCircle, Lightbulb, Volume2 } from 'lucide-react';
import type { ModuleLesson } from '@/types/module';
import { cn } from '@/lib/utils';
import TTSPlayer from '@/components/tts/TTSPlayer';

interface TranslationResult {
  translated: string;
  alternatives?: string[];
  context?: string;
  partOfSpeech?: string;
  ipa?: string;
  definition?: string;
  example?: string;
}

interface Props {
  lesson: ModuleLesson;
}

export default function ModuleLessonClient({ lesson }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [translation, setTranslation] = useState<TranslationResult | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string>('');
  const [translationCache, setTranslationCache] = useState<Record<string, TranslationResult>>({});

  const completedCount = useMemo(
    () =>
      lesson.exercises.filter((exercise) => {
        if (exercise.type === 'multiple-choice') return Boolean(selectedOptions[exercise.id]);
        return Boolean(notes[exercise.id]?.trim());
      }).length,
    [lesson.exercises, notes, selectedOptions]
  );

  const tokenize = useCallback((text: string) => text.split(/(\s+|[^A-Za-z'-]+)/g).filter((p) => p !== ''), []);

  // Contextual glossary for education/lesson terms that get mistranslated without context
  const contextGlossary: Record<string, TranslationResult> = useMemo(() => ({
    major: { translated: 'jurusan', alternatives: ['bidang studi', 'program studi'] },
    subject: { translated: 'mata pelajaran', alternatives: ['subjek', 'mata kuliah'] },
    degree: { translated: 'gelar', alternatives: ['sarjana', 'derajat'] },
    course: { translated: 'kursus', alternatives: ['mata kuliah', 'pelajaran'] },
    grade: { translated: 'nilai', alternatives: ['kelas', 'tingkat'] },
    semester: { translated: 'semester', alternatives: [] },
    faculty: { translated: 'fakultas', alternatives: ['dosen', 'pengajar'] },
    lecture: { translated: 'kuliah', alternatives: ['ceramah', 'perkuliahan'] },
    lecturer: { translated: 'dosen', alternatives: ['pengajar'] },
    assignment: { translated: 'tugas', alternatives: ['penugasan'] },
    thesis: { translated: 'skripsi', alternatives: ['tesis'] },
    scholarship: { translated: 'beasiswa', alternatives: [] },
    graduate: { translated: 'lulus', alternatives: ['lulusan', 'sarjana'] },
    graduated: { translated: 'lulus', alternatives: ['telah lulus'] },
    undergraduate: { translated: 'sarjana (S1)', alternatives: ['mahasiswa'] },
    diploma: { translated: 'diploma', alternatives: ['ijazah'] },
    campus: { translated: 'kampus', alternatives: [] },
    curriculum: { translated: 'kurikulum', alternatives: [] },
    tuition: { translated: 'uang kuliah', alternatives: ['biaya pendidikan'] },
    enrollment: { translated: 'pendaftaran', alternatives: [] },
    freshman: { translated: 'mahasiswa baru', alternatives: [] },
    sophomore: { translated: 'mahasiswa tahun kedua', alternatives: [] },
    junior: { translated: 'mahasiswa tahun ketiga', alternatives: ['yunior'] },
    senior: { translated: 'mahasiswa tahun akhir', alternatives: ['senior'] },
    dean: { translated: 'dekan', alternatives: [] },
    rector: { translated: 'rektor', alternatives: [] },
    dormitory: { translated: 'asrama', alternatives: [] },
    syllabus: { translated: 'silabus', alternatives: [] },
    transcript: { translated: 'transkrip nilai', alternatives: [] },
    midterm: { translated: 'ujian tengah semester', alternatives: ['UTS'] },
    final: { translated: 'ujian akhir', alternatives: ['final'] },
    practice: { translated: 'latihan', alternatives: ['praktik'] },
    exercise: { translated: 'latihan', alternatives: ['soal'] },
    vocabulary: { translated: 'kosa kata', alternatives: [] },
    pronunciation: { translated: 'pengucapan', alternatives: [] },
    fluent: { translated: 'fasih', alternatives: ['lancar'] },
    fluency: { translated: 'kefasihan', alternatives: ['kelancaran'] },
    grammar: { translated: 'tata bahasa', alternatives: [] },
    passage: { translated: 'teks bacaan', alternatives: ['paragraf'] },
    comprehension: { translated: 'pemahaman', alternatives: [] },
    greeting: { translated: 'salam', alternatives: ['sapaan'] },
    introduction: { translated: 'perkenalan', alternatives: ['pendahuluan'] },
    origin: { translated: 'asal', alternatives: ['asal-usul'] },
    occupation: { translated: 'pekerjaan', alternatives: ['profesi'] },
    profession: { translated: 'profesi', alternatives: ['pekerjaan'] },
    background: { translated: 'latar belakang', alternatives: [] },
    identity: { translated: 'identitas', alternatives: ['jati diri'] },
    status: { translated: 'status', alternatives: ['keadaan'] },
    track: { translated: 'jalur', alternatives: ['trek', 'lintasan'] },
    material: { translated: 'materi', alternatives: ['bahan'] },
    overview: { translated: 'gambaran umum', alternatives: ['ringkasan'] },
    section: { translated: 'bagian', alternatives: ['seksi'] },
    closing: { translated: 'penutup', alternatives: ['penutupan'] },
    tense: { translated: 'bentuk waktu (tense)', alternatives: [] },
    clause: { translated: 'klausa', alternatives: ['anak kalimat'] },
    phrase: { translated: 'frasa', alternatives: ['ungkapan'] },
    noun: { translated: 'kata benda', alternatives: [] },
    verb: { translated: 'kata kerja', alternatives: [] },
    adjective: { translated: 'kata sifat', alternatives: [] },
    adverb: { translated: 'kata keterangan', alternatives: [] },
    pronoun: { translated: 'kata ganti', alternatives: [] },
    preposition: { translated: 'kata depan', alternatives: [] },
    conjunction: { translated: 'kata hubung', alternatives: [] },
    article: { translated: 'kata sandang', alternatives: ['artikel'] },
    determiner: { translated: 'kata penentu', alternatives: [] },
    singular: { translated: 'tunggal', alternatives: [] },
    plural: { translated: 'jamak', alternatives: [] },
    countable: { translated: 'dapat dihitung', alternatives: [] },
    uncountable: { translated: 'tidak dapat dihitung', alternatives: [] },
  }), []);

  const speakWord = useCallback((word: string) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US';
    u.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Natural')));
    if (preferred) u.voice = preferred;
    window.speechSynthesis.speak(u);
  }, []);

  const translateWord = useCallback(async (word: string) => {
    const cleaned = word.toLowerCase().replace(/^'+|'+$/g, '');
    if (!cleaned) return;

    setSelectedWord(cleaned);
    setTranslationError('');

    // Check contextual glossary first
    if (contextGlossary[cleaned]) {
      setTranslation(contextGlossary[cleaned]);
      return;
    }

    if (translationCache[cleaned]) {
      setTranslation(translationCache[cleaned]);
      return;
    }

    setIsTranslating(true);
    setTranslation(null);

    try {
      const res = await fetch(`/api/translate?word=${encodeURIComponent(cleaned)}`);
      if (!res.ok) throw new Error('translate api failed');
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const result: TranslationResult = {
        translated: data.translated,
        partOfSpeech: data.partOfSpeech || '',
        ipa: data.ipa || '',
        definition: data.definition || '',
        example: data.example || '',
        alternatives: data.alternatives || [],
      };
      setTranslation(result);
      setTranslationCache((prev) => ({ ...prev, [cleaned]: result }));
    } catch {
      setTranslationError('Terjemahan gagal dimuat. Coba klik ulang.');
    } finally {
      setIsTranslating(false);
    }
  }, [translationCache, contextGlossary]);

  const renderClickableText = useCallback((text: string) => {
    const parts = tokenize(text);
    return parts.map((part, idx) => {
      const isWord = /^[A-Za-z][A-Za-z'-]*$/.test(part);
      if (!isWord) return <span key={`t-${idx}`}>{part}</span>;

      const cleaned = part.toLowerCase().replace(/^'+|'+$/g, '');
      const isActive = selectedWord === cleaned;

      return (
        <button
          key={`w-${idx}`}
          type="button"
          onClick={() => translateWord(part)}
          className={cn(
            'rounded px-0.5 transition-colors',
            isActive
              ? 'bg-primary/15 text-primary'
              : 'hover:bg-primary/10 hover:text-primary'
          )}
        >
          {part}
        </button>
      );
    });
  }, [selectedWord, tokenize, translateWord]);

  return (
    <div className="p-4 lg:p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Link href="/tn-basic-cource" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to TN Basic Cource
        </Link>
        <p className="text-sm text-(--text-secondary)">
          Progress: <span className="font-semibold text-(--text)">{completedCount}/{lesson.exercises.length}</span>
        </p>
      </div>

      <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-6">
        <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          {lesson.track.toUpperCase()} • Day {lesson.day}
        </p>
        <h1 className="text-2xl font-bold text-(--text)">{lesson.title}</h1>
        <p className="text-sm text-(--text-secondary) mt-1">{renderClickableText(lesson.subtitle)}</p>
        <p className="text-sm text-(--text-secondary) mt-4 leading-relaxed">{renderClickableText(lesson.overview)}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
          <BookText className="w-5 h-5 text-primary" /> Material
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {lesson.materialSections.map((section) => (
            <div key={section.title} className="bg-(--bg-card) border border-(--border) rounded-xl p-5">
              <h3 className="font-semibold text-(--text) mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm text-(--text-secondary)">
                {section.points.map((point, pIdx) => (
                  <li key={`${section.title}-${pIdx}`} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{renderClickableText(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {lesson.track === 'listening' && lesson.passage && lesson.passage.length > 0 && (
        <TTSPlayer
          text={lesson.passage.join('\n')}
          label="Listen to Audio"
        />
      )}

      {lesson.passage && lesson.passage.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-(--text)">
            {{ reading: 'Full Reading Passage', speaking: 'Sample Script', grammar: 'Grammar Examples', listening: 'Listening Script' }[lesson.track]}
          </h2>
          <div className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-4">
            {lesson.passage.map((paragraph, idx) => (
              <p key={`${lesson.id}-p-${idx}`} className="text-sm leading-7 text-(--text-secondary)">
                {renderClickableText(paragraph)}
              </p>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-(--text)">Exercises</h2>
        <div className="space-y-4">
          {lesson.exercises.map((exercise, index) => {
            const isDone =
              exercise.type === 'multiple-choice'
                ? Boolean(selectedOptions[exercise.id])
                : Boolean(notes[exercise.id]?.trim());

            return (
              <div key={exercise.id} className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm text-(--text) font-medium">
                    {index + 1}. {renderClickableText(exercise.question)}
                  </p>
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-(--text-muted) mt-0.5 shrink-0" />
                  )}
                </div>

                {exercise.type === 'multiple-choice' && exercise.options && (() => {
                  const selected = selectedOptions[exercise.id];
                  const hasAnswered = Boolean(selected);
                  const isCorrect = hasAnswered && selected === exercise.correctAnswer;

                  return (
                    <div className="space-y-3">
                      <div className="grid sm:grid-cols-2 gap-2">
                        {exercise.options.map((option) => {
                          const isSelected = selected === option;
                          const isAnswer = option === exercise.correctAnswer;
                          const showResult = hasAnswered && exercise.correctAnswer;

                          return (
                            <button
                              key={option}
                              onClick={() => setSelectedOptions((prev) => ({ ...prev, [exercise.id]: option }))}
                              className={cn(
                                'text-left text-sm px-3 py-2 rounded-lg border transition-colors',
                                showResult
                                  ? isAnswer
                                    ? 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-400 font-medium'
                                    : isSelected
                                      ? 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-400'
                                      : 'border-(--border) text-(--text-muted)'
                                  : isSelected
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-(--border) hover:border-primary/50 text-(--text-secondary)'
                              )}
                            >
                              <span className="flex items-center gap-2">
                                {showResult && isAnswer && <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" />}
                                {showResult && isSelected && !isAnswer && <XCircle className="w-4 h-4 shrink-0 text-red-500" />}
                                {option}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && exercise.correctAnswer && (
                        <div className={cn(
                          'rounded-lg px-4 py-3 text-sm flex items-start gap-2',
                          isCorrect
                            ? 'bg-green-500/10 border border-green-500/30'
                            : 'bg-red-500/10 border border-red-500/30'
                        )}>
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                          ) : (
                            <XCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                          )}
                          <div>
                            <p className={cn('font-medium', isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400')}>
                              {isCorrect ? 'Benar!' : 'Salah!'}
                              {!isCorrect && <span className="font-normal text-(--text-secondary)"> Jawaban yang benar: <span className="font-semibold text-green-700 dark:text-green-400">{exercise.correctAnswer}</span></span>}
                            </p>
                            {exercise.reason && (
                              <p className="mt-1 text-(--text-secondary) flex items-start gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
                                {exercise.reason}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {exercise.type !== 'multiple-choice' && (
                  <textarea
                    value={notes[exercise.id] ?? ''}
                    onChange={(e) => setNotes((prev) => ({ ...prev, [exercise.id]: e.target.value }))}
                    placeholder="Write your answer here..."
                    className="w-full min-h-[90px] rounded-lg border border-(--border) bg-(--bg-secondary) px-3 py-2 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {selectedWord && (
        <div className="fixed right-4 bottom-4 z-40 w-[min(92vw,380px)] bg-(--bg-card) border border-(--border) rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 px-4 pt-3 pb-2">
            <div className="flex items-center gap-2 min-w-0">
              <Languages className="w-4 h-4 text-primary shrink-0" />
              <p className="text-base font-bold text-(--text) truncate">{selectedWord}</p>
              <button
                type="button"
                onClick={() => speakWord(selectedWord)}
                className="p-1 rounded-full hover:bg-primary/10 transition-colors shrink-0"
                aria-label="Pronounce word"
              >
                <Volume2 className="w-4 h-4 text-primary" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedWord(null);
                setTranslation(null);
                setTranslationError('');
              }}
              className="p-1 rounded hover:bg-(--hover) shrink-0"
              aria-label="Close translation"
            >
              <X className="w-4 h-4 text-(--text-muted)" />
            </button>
          </div>

          {/* Content */}
          <div className="px-4 pb-3 space-y-2">
            {isTranslating && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                <p className="text-sm text-(--text-secondary)">Menerjemahkan...</p>
              </div>
            )}

            {!isTranslating && translation && (
              <>
                {/* Part of speech & IPA */}
                {(translation.partOfSpeech || translation.ipa) && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {translation.partOfSpeech && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium italic">
                        {translation.partOfSpeech}
                      </span>
                    )}
                    {translation.ipa && (
                      <span className="text-xs text-(--text-muted) font-mono">{translation.ipa}</span>
                    )}
                  </div>
                )}

                {/* English definition */}
                {translation.definition && (
                  <div>
                    <p className="text-xs text-(--text-muted) uppercase tracking-wider">Definition</p>
                    <p className="text-sm text-(--text-secondary) mt-0.5 leading-relaxed">{translation.definition}</p>
                  </div>
                )}

                {/* Indonesian translation */}
                <div>
                  <p className="text-xs text-(--text-muted) uppercase tracking-wider">Terjemahan</p>
                  <p className="text-sm font-semibold text-primary mt-0.5">{translation.translated}</p>
                </div>

                {/* Example sentence */}
                {translation.example && (
                  <div>
                    <p className="text-xs text-(--text-muted) uppercase tracking-wider">Example</p>
                    <p className="text-xs text-(--text-secondary) mt-0.5 italic leading-relaxed">&quot;{translation.example}&quot;</p>
                  </div>
                )}

                {/* Alternative translations */}
                {translation.alternatives && translation.alternatives.length > 0 && (
                  <div>
                    <p className="text-xs text-(--text-muted) uppercase tracking-wider">Arti lain</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {translation.alternatives.map((alt) => (
                        <span key={alt} className="text-xs px-2 py-0.5 rounded-full bg-(--bg-secondary) text-(--text-secondary) border border-(--border)">
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {!isTranslating && translationError && (
              <p className="text-sm text-red-600 dark:text-red-400">{translationError}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

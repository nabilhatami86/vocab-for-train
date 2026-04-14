'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, BookText, Languages, X, XCircle, Lightbulb, Volume2, MessageCircle, Headphones, Eye, EyeOff, Braces } from 'lucide-react';
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
  backHref?: string;
  backLabel?: string;
}

export default function ModuleLessonClient({ lesson, backHref = '/tn-basic-cource', backLabel = 'Back to TN Basic Cource' }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Set<string>>(new Set());
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [translation, setTranslation] = useState<TranslationResult | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string>('');
  const [translationCache, setTranslationCache] = useState<Record<string, TranslationResult>>({});
  const [blockText, setBlockText] = useState<string>('');
  const [blankAnswers, setBlankAnswers] = useState<Record<string, string>>({});
  const [blankChecked, setBlankChecked] = useState<Record<string, boolean>>({});
  const [showTranslation, setShowTranslation] = useState(false);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});
  const [showGrammarMode, setShowGrammarMode] = useState(false);
  const [grammarPopup, setGrammarPopup] = useState<{ word: string; label: string; reason: string; color: string; bg: string } | null>(null);

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

  const handlePassageMouseUp = useCallback(async () => {
    const sel = window.getSelection();
    const text = sel?.toString().trim().replace(/\s+/g, ' ');
    if (!text || text.split(/\s+/).length < 2) return;

    const displayText = text.length > 50 ? text.slice(0, 50) + '…' : text;
    setSelectedWord(displayText);
    setBlockText(text);
    setTranslationError('');

    if (translationCache[text]) {
      setTranslation(translationCache[text]);
      return;
    }

    setIsTranslating(true);
    setTranslation(null);

    try {
      const res = await fetch(`/api/translate?text=${encodeURIComponent(text)}`);
      const data = await res.json();
      if (!data.translated) throw new Error('no translation');
      const result: TranslationResult = { translated: data.translated };
      setTranslation(result);
      setTranslationCache((prev) => ({ ...prev, [text]: result }));
    } catch {
      setTranslationError('Terjemahan gagal dimuat.');
    } finally {
      setIsTranslating(false);
    }
  }, [translationCache]);

  const translateWord = useCallback(async (word: string) => {
    const cleaned = word.toLowerCase().replace(/^'+|'+$/g, '');
    if (!cleaned) return;

    setBlockText('');
    setSelectedWord(cleaned);
    setTranslationError('');

    if (translationCache[cleaned]) {
      setTranslation(translationCache[cleaned]);
      return;
    }

    setIsTranslating(true);
    setTranslation(null);

    try {
      const res = await fetch(`/api/translate?word=${encodeURIComponent(cleaned)}`);
      const data = await res.json();

      if (res.status === 404 || data.error === 'not_found') {
        const result: TranslationResult = { translated: 'Tidak ditemukan' };
        setTranslation(result);
        setTranslationCache((prev) => ({ ...prev, [cleaned]: result }));
        return;
      }

      if (!res.ok || data.error) throw new Error(data.message || 'translate api failed');

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
  }, [translationCache]);

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

  // Render text with {{annotation:word|label}} markers showing label underneath
  const renderAnnotatedText = useCallback((text: string) => {
    const annotationRegex = /\{\{annotation:([^|]+)\|([^}]+)\}\}/g;
    const segments: Array<{ type: 'text'; value: string } | { type: 'annotation'; word: string; label: string }> = [];
    let lastIndex = 0;
    let match;

    while ((match = annotationRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        segments.push({ type: 'text', value: text.slice(lastIndex, match.index) });
      }
      segments.push({ type: 'annotation', word: match[1], label: match[2] });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      segments.push({ type: 'text', value: text.slice(lastIndex) });
    }

    // If no annotations found, fall back to renderClickableText
    if (segments.length === 1 && segments[0].type === 'text') {
      return renderClickableText(text);
    }

    return segments.map((seg, idx) => {
      if (seg.type === 'text') {
        return <span key={`seg-${idx}`}>{renderClickableText(seg.value)}</span>;
      }
      // Determine color based on label
      const lbl = seg.label.toLowerCase();
      let colorClass: string;
      let labelBgClass: string;
      if (lbl === 'wrong') {
        colorClass = 'text-red-600 dark:text-red-400 border-red-400/50 bg-red-500/5';
        labelBgClass = 'bg-red-500/15 text-red-600 dark:text-red-400';
      } else if (lbl.includes('noun') || lbl.includes('n/h')) {
        colorClass = 'text-amber-600 dark:text-amber-400 border-amber-400/50 bg-amber-500/5';
        labelBgClass = 'bg-amber-500/15 text-amber-600 dark:text-amber-400';
      } else if (lbl.includes('verb') || lbl.includes('modal')) {
        colorClass = 'text-green-600 dark:text-green-400 border-green-400/50 bg-green-500/5';
        labelBgClass = 'bg-green-500/15 text-green-600 dark:text-green-400';
      } else if (lbl.includes('adj') || lbl.includes('/m')) {
        colorClass = 'text-blue-600 dark:text-blue-400 border-blue-400/50 bg-blue-500/5';
        labelBgClass = 'bg-blue-500/15 text-blue-600 dark:text-blue-400';
      } else if (lbl.includes('adv')) {
        colorClass = 'text-purple-600 dark:text-purple-400 border-purple-400/50 bg-purple-500/5';
        labelBgClass = 'bg-purple-500/15 text-purple-600 dark:text-purple-400';
      } else if (lbl.includes('prep')) {
        colorClass = 'text-teal-600 dark:text-teal-400 border-teal-400/50 bg-teal-500/5';
        labelBgClass = 'bg-teal-500/15 text-teal-600 dark:text-teal-400';
      } else if (lbl.includes('conj')) {
        colorClass = 'text-orange-600 dark:text-orange-400 border-orange-400/50 bg-orange-500/5';
        labelBgClass = 'bg-orange-500/15 text-orange-600 dark:text-orange-400';
      } else if (lbl.includes('article') || lbl.includes('det')) {
        colorClass = 'text-pink-600 dark:text-pink-400 border-pink-400/50 bg-pink-500/5';
        labelBgClass = 'bg-pink-500/15 text-pink-600 dark:text-pink-400';
      } else if (lbl.includes('pron') || lbl.includes('reflexive') || lbl.includes('demonstrative') || lbl.includes('relative') || lbl.includes('indefinite') || lbl.includes('reciprocal') || lbl.includes('poss')) {
        colorClass = 'text-indigo-600 dark:text-indigo-400 border-indigo-400/50 bg-indigo-500/5';
        labelBgClass = 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400';
      } else {
        colorClass = 'text-gray-600 dark:text-gray-400 border-gray-400/50 bg-gray-500/5';
        labelBgClass = 'bg-gray-500/15 text-gray-600 dark:text-gray-400';
      }

      return (
        <span key={`ann-${idx}`} className={cn('inline-flex flex-col items-center mx-0.5 px-1.5 py-0.5 rounded-lg border', colorClass)}>
          <span className="text-sm font-semibold leading-tight">{renderClickableText(seg.word)}</span>
          <span className={cn('text-[10px] font-bold uppercase tracking-wider px-1.5 py-0 rounded-full mt-0.5 leading-tight', labelBgClass)}>
            {seg.label}
          </span>
        </span>
      );
    });
  }, [renderClickableText]);

  // ── Grammar Mode: Part-of-Speech detection ────────────────────────────────────
  type POSInfo = { label: string; reason: string; color: string; bg: string };

  const analyzePOS = useCallback((word: string, prevWord: string, nextWord: string): POSInfo => {
    const w = word.toLowerCase();
    const prev = prevWord.toLowerCase();
    const next = nextWord.toLowerCase();

    const DETS = new Set(['the','a','an','this','that','these','those','my','your','his','her','its','our','their','some','any','each','every','no','both','all','many','much','few','little','several','another','other','what','which','whose']);
    const PREPS = new Set(['in','on','at','by','for','with','about','of','from','into','through','during','before','after','above','below','between','among','without','within','under','over','against','along','around','behind','beside','beyond','despite','except','inside','near','off','outside','past','since','than','toward','towards','up','upon','via','throughout','including','following','across','regarding','unlike']);
    const COORDS = new Set(['and','or','but','so','yet','nor']);
    const SUBS = new Set(['although','because','since','while','when','if','though','unless','until','as','whereas','whether','wherever','whenever','once']);
    const ADVCONJS = new Set(['however','therefore','furthermore','moreover','nevertheless','consequently','otherwise','meanwhile','instead','besides','thus','hence']);
    const PRONOUNS = new Set(['i','me','we','us','you','he','him','she','her','they','them','it','who','whom','whose','which','what','myself','yourself','himself','herself','itself','ourselves','yourselves','themselves','one','someone','anyone','everyone','nobody','somebody','anybody','everybody','nothing','something','anything','everything']);
    const BES = new Set(['is','am','are','was','were','be','been','being']);
    const HAVES = new Set(['have','has','had']);
    const MODALS = new Set(['will','would','can','could','shall','should','may','might','must']);
    const DOAUX = new Set(['do','does','did']);
    const ALLAUX = new Set([...BES,...HAVES,...MODALS,...DOAUX]);

    // Warna kalem: 3 kelompok utama saja
    // Verb (aksi)  → primary site
    // Noun/Pronoun → slate netral
    // Adj/Adv      → indigo muted
    // Function words (Det/Prep/Conj/Aux) → gray sangat muted
    const C = {
      verb:  { text: 'text-primary',                                         badge: 'bg-primary/10 text-primary' },
      noun:  { text: 'text-(--text-secondary)',                               badge: 'bg-slate-500/10 text-slate-500 dark:text-slate-400' },
      mod:   { text: 'text-indigo-500 dark:text-indigo-400',                  badge: 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400' },
      func:  { text: 'text-(--text-muted)',                                   badge: 'bg-(--bg-secondary) text-(--text-muted)' },
      inf:   { text: 'text-primary/80',                                       badge: 'bg-primary/8 text-primary/80' },
    };

    const noun  = (reason: string): POSInfo => ({ label: 'Noun',    reason, color: C.noun.text,  bg: C.noun.badge  });
    const vrb   = (label: string, reason: string): POSInfo => ({ label, reason, color: C.verb.text,  bg: C.verb.badge  });
    const adj   = (reason: string): POSInfo => ({ label: 'Adj',     reason, color: C.mod.text,   bg: C.mod.badge   });
    const adv   = (reason: string): POSInfo => ({ label: 'Adv',     reason, color: C.mod.text,   bg: C.mod.badge   });
    const pron  = (label: string, reason: string): POSInfo => ({ label, reason, color: C.noun.text,  bg: C.noun.badge  });
    const prep  = (reason: string): POSInfo => ({ label: 'Prep',    reason, color: C.func.text,  bg: C.func.badge  });
    const det   = (reason: string): POSInfo => ({ label: 'Det',     reason, color: C.func.text,  bg: C.func.badge  });
    const conj  = (label: string, reason: string): POSInfo => ({ label, reason, color: C.func.text,  bg: C.func.badge  });
    const aux   = (label: string, reason: string): POSInfo => ({ label, reason, color: C.verb.text,  bg: C.verb.badge  });
    const toinf = (reason: string): POSInfo => ({ label: 'to-inf',  reason, color: C.inf.text,   bg: C.inf.badge   });

    // Determiners/Articles
    if (DETS.has(w)) return det(
      w === 'the' ? `"the" = definite article (kata sandang tertentu). Muncul sebelum noun yang sudah dikenal/spesifik. Contoh: "the brain" — otak yang sudah kita bicarakan.` :
      w === 'a' || w === 'an' ? `"${word}" = indefinite article (kata sandang tak tentu). Digunakan untuk noun yang belum dikenal/pertama kali disebut. "a" → konsonan, "an" → vokal.` :
      `"${word}" = determiner (penentu). Mendahului noun untuk menunjukkan kepemilikan (my/your/his/her/its/our/their), jumlah (some/any/many/few), atau referensi (this/that/these/those).`
    );

    // Modal auxiliaries
    if (MODALS.has(w)) return aux('Modal', `"${word}" adalah modal auxiliary verb. Aturan penting: Modal SELALU diikuti bare infinitive (V1 tanpa -s/-ed). Menyatakan: kemungkinan (may/might), kemampuan (can/could), keharusan (must/should), kehendak (will/would).`);

    // BE auxiliaries
    if (BES.has(w)) return aux('BE', `"${word}" adalah BE verb. Fungsi: (1) Kalimat nominal/non-verbal: S + BE + adj/noun/adverb, (2) Passive voice: S + BE + V3, (3) Progressive: S + BE + V-ing. BE menyesuaikan subjek: am→I, is→he/she/it, are→we/you/they.`);

    // HAVE auxiliaries
    if (HAVES.has(w)) return aux('Have', `"${word}" = auxiliary untuk Perfect Tense (have/has/had + V3). Menyatakan aksi yang sudah selesai tapi masih relevan. Juga bisa main verb berarti "memiliki". Bedanya: "I have a car" (main verb) vs "I have eaten" (auxiliary).`);

    // DO auxiliaries
    if (DOAUX.has(w)) return aux('Do/Does/Did', `"${word}" = auxiliary do-support untuk: (1) Kalimat negatif: S + do/does + not + V1, (2) Kalimat tanya: Do/Does + S + V1? Tidak bermakna sendiri — hanya "membantu" verb utama. Did = bentuk past dari do/does.`);

    // Pronouns
    if (PRONOUNS.has(w)) {
      if (['myself','yourself','himself','herself','itself','ourselves','yourselves','themselves'].includes(w))
        return pron('Refl. Pron', `"${word}" = reflexive pronoun. Digunakan ketika subjek dan objek merujuk ke orang yang sama. Contoh: "He hurt himself." Juga untuk penekanan: "I did it myself."`);
      if (['who','whom','which','what'].includes(w))
        return pron('Rel. Pron', `"${word}" = relative pronoun yang memperkenalkan adjective clause. Adjective clause berfungsi menerangkan noun sebelumnya. Contoh: "the brain [that controls everything]" — "that" menghubungkan ke noun "brain".`);
      if (['someone','anyone','everyone','nobody','somebody','anybody','everybody','nothing','something','anything','everything'].includes(w))
        return pron('Indef. Pron', `"${word}" = indefinite pronoun — merujuk orang/benda yang tidak spesifik. Selalu dianggap singular → gunakan is/has, bukan are/have.`);
      return pron('Pronoun', `"${word}" = pronoun (kata ganti) yang menggantikan noun agar tidak diulang. Perhatikan kasus: subject (I/he/she/they) vs object (me/him/her/them).`);
    }

    // "to" special case
    if (w === 'to') {
      const nextIsLikelyVerb = next && /^[a-z]/.test(next) && !DETS.has(next) && !PRONOUNS.has(next) && !PREPS.has(next) && !ALLAUX.has(next) && !COORDS.has(next);
      if (nextIsLikelyVerb) return toinf(`"to" diikuti kata kerja dasar (V1) = To Infinitive marker. Jangan anggap ini preposition! To Infinitive berfungsi sebagai: (1) Noun/Objek: "I want to learn", (2) Adjective: "a book to read", (3) Adverb tujuan: "She studies to pass exams". Kata kerja setelah "to" TIDAK boleh -s/-ed/-ing.`);
      return prep(`"to" sebagai preposition — menyatakan arah atau tujuan, diikuti noun phrase (bukan verb). Contoh: "She goes to school" (to + noun). Bedakan: "to + noun" = preposition, "to + verb" = to infinitive.`);
    }

    // Prepositions
    if (PREPS.has(w)) return prep(`"${word}" = preposition (kata depan). PENTING: setelah preposition HARUS noun phrase (bukan verb tunggal, bukan adjective tanpa noun). Posisi ini disebut "object of preposition". Jika ada noun setelahnya, noun itu adalah objek preposisi. Contoh: "in the morning" → morning = objek dari "in".`);

    // Conjunctions
    if (COORDS.has(w)) return conj('Coord. Conj', `"${word}" = coordinating conjunction (FANBOYS: For, And, Nor, But, Or, Yet, So). Menghubungkan dua elemen SETARA: dua noun, dua verb, dua klausa, atau dua kalimat. Posisi selalu di TENGAH.`);
    if (SUBS.has(w)) return conj('Sub. Conj', `"${word}" = subordinating conjunction. Memperkenalkan dependent clause (anak kalimat). Pola: [Sub.Conj + S + V], [Main S + V] atau [Main S + V] [Sub.Conj + S + V]. Dependent clause tidak bisa berdiri sendiri.`);
    if (ADVCONJS.has(w)) return conj('Adv. Conj', `"${word}" = conjunctive adverb. Menghubungkan dua kalimat terpisah dengan nuansa: pertentangan (however), sebab-akibat (therefore/consequently), penambahan (furthermore/moreover). Biasanya diikuti koma.`);

    // Position-based: after preposition → noun
    if (PREPS.has(prev) && prev !== 'to') return noun(`"${word}" adalah noun karena posisinya SETELAH preposition "${prev}". Aturan: preposition wajib diikuti noun phrase (object of preposition). Jika kamu pikir ini adjective — periksa apakah ada noun sesudahnya; jika tidak, berarti ini memang noun.`);

    // Position-based: after "to" → infinitive verb
    if (prev === 'to') return { label: 'V1 (inf)', reason: `"${word}" adalah verb bentuk dasar dalam to-infinitive. Setelah "to", verb TIDAK boleh ditambah -s/-ed/-ing. Fungsi dalam kalimat ini tergantung peran to-infinitive: subject, object, atau adverb tujuan.`, color: C.inf.text, bg: C.inf.badge };

    // Position-based: after BE → V-ing (progressive) or V3 (passive) or predicative
    if (BES.has(prev)) {
      if (w.endsWith('ing')) return vrb('V-ing (Prog)', `"${word}" berakhiran -ing setelah BE (${prev}) = Progressive/Continuous tense. Menyatakan aksi yang sedang berlangsung pada waktu tertentu. Rumus: S + is/am/are + V-ing.`);
      if (w.endsWith('ed') || w.endsWith('en') || w.endsWith('n') || true) return vrb('V3 (Passive)', `"${word}" = past participle (V3) setelah BE (${prev}) = Passive Voice. Passive: subjek DIKENAI pekerjaan, bukan melakukan. Rumus: S + is/am/are + V3 + (by + agent).`);
    }

    // Position-based: after HAVE → V3 perfect
    if (HAVES.has(prev)) return vrb('V3 (Perfect)', `"${word}" = past participle (V3) setelah "${prev}" = Perfect Tense. Rumus: S + have/has/had + V3. Menyatakan aksi yang sudah selesai tapi relevan dengan waktu kini (present perfect) atau titik waktu tertentu (past perfect).`);

    // Position-based: after DO-aux or modal → V1
    if (DOAUX.has(prev) || MODALS.has(prev)) return vrb('V1 (bare)', `"${word}" = bare infinitive (V1 tanpa -s/-ed) setelah auxiliary "${prev}". Aturan ketat: setelah modal (will/can/should/must) dan do/does/did, verb SELALU dalam bentuk dasar.`);

    // After determiner
    if (DETS.has(prev)) {
      const hasAdjSuffix = ['ful','less','ous','ive','al','ible','able','ic','ish','ent','ant'].some(s => w.endsWith(s)) || w.endsWith('ing') || w.endsWith('ed');
      if (hasAdjSuffix) return adj(`"${word}" kemungkinan adjective setelah determiner "${prev}". Adjective dalam posisi attributive (sebelum noun) menerangkan noun yang mengikutinya. Suffix adjective: -ful, -less, -ous, -ive, -al, -ible, -able.`);
      return noun(`"${word}" berada setelah determiner/article "${prev}" = kemungkinan Noun. Article/determiner selalu mendahului noun (atau adj+noun). Ini adalah head noun dari noun phrase.`);
    }

    // Suffix-based
    if (w.endsWith('ly') && w.length > 4 && !['early','only','family','likely','lonely','friendly','lovely','holy','lively','daily','weekly','monthly','yearly','manly','orderly','worldly','elderly','timely'].includes(w))
      return adv(`"${word}" berakhiran "-ly" = Adverb (kata keterangan). Biasanya terbentuk dari adjective + -ly: slow→slowly, gradual→gradually. Adverb menerangkan: (1) verb: "developed slowly", (2) adjective: "very complex", (3) adverb lain: "quite gradually".`);

    if (['tion','sion'].some(s => w.endsWith(s)) || w.endsWith('ment') || w.endsWith('ness') || w.endsWith('ity') || w.endsWith('ance') || w.endsWith('ence') || w.endsWith('ism') || w.endsWith('ship') || w.endsWith('hood') || w.endsWith('ure') || w.endsWith('age'))
      return noun(`"${word}" berakhiran noun-suffix — mengubah verb/adjective menjadi noun. Contoh suffix: -tion/-sion (information, tension), -ment (development), -ness (happiness), -ity (complexity), -ance/-ence (importance, difference).`);

    if (['ful','less','ous','ive','al','ible','able','ic','ish','ent','ant'].some(s => w.endsWith(s)))
      return adj(`"${word}" berakhiran adjective-suffix — mengubah noun/verb menjadi adjective. Contoh: power→powerful, danger→dangerous, effect→effective, reason→reasonable.`);

    if (w.endsWith('ing') && w.length > 4)
      return vrb('V-ing/Gerund', `"${word}" berakhiran "-ing". Tiga kemungkinan: (1) Progressive: setelah BE (is/am/are + V-ing), (2) Gerund = verb yang jadi noun: "Learning is fun", (3) Participial adjective: "an interesting topic". Tentukan berdasarkan posisinya!`);

    if (w.endsWith('ed') && w.length > 4)
      return vrb('V2/V3/Adj', `"${word}" berakhiran "-ed". Bisa: (1) V2 = Simple Past (tanpa aux), (2) V3 setelah BE = Passive, (3) V3 setelah have/has/had = Perfect, (4) Participial adjective: "a complicated problem". Lihat kata sebelumnya untuk menentukan!`);

    if ((w.endsWith('s') || w.endsWith('es')) && w.length > 2 && ['he','she','it','this','that','one'].includes(prev))
      return vrb('V1 s/es', `"${word}" berakhiran -s/-es setelah subjek singular "${prev}" = Simple Present Verbal Active. Aturan: He/She/It + V1 s/es (contoh: she reads, it consists, he develops).`);

    return noun(`"${word}" kemungkinan Noun berdasarkan posisi dan bentuknya. Untuk memastikan: (1) Apakah bisa didahului "the"? (2) Apakah bisa jadi subjek/objek kalimat? Jika ya, ini noun.`);
  }, []);

  const renderGrammarPassage = useCallback((text: string) => {
    const allTokens = text.split(/(\s+|[^A-Za-z'-]+)/g).filter(t => t !== '');
    const wordTokens = allTokens.filter(t => /^[A-Za-z][A-Za-z'-]*$/.test(t));
    let wordIdx = 0;

    return allTokens.map((token, i) => {
      const isWord = /^[A-Za-z][A-Za-z'-]*$/.test(token);
      if (!isWord) return <span key={`gp-${i}`}>{token}</span>;

      const currentIdx = wordIdx++;
      const prevWord = wordTokens[currentIdx - 1] ?? '';
      const nextWord = wordTokens[currentIdx + 1] ?? '';
      const posInfo = analyzePOS(token, prevWord, nextWord);

      return (
        <button
          key={`gp-${i}`}
          type="button"
          onClick={() => setGrammarPopup({ word: token, ...posInfo })}
          className="inline-flex flex-col items-center mx-0.5 align-bottom cursor-pointer group"
        >
          <span className={cn('text-sm font-medium px-0.5 rounded group-hover:underline', posInfo.color)}>
            {token}
          </span>
          <span className={cn('text-[8px] font-bold px-1 rounded leading-tight', posInfo.bg)}>
            {posInfo.label}
          </span>
        </button>
      );
    });
  }, [analyzePOS]);

  return (
    <div className="p-4 lg:p-6 max-w-4xl mx-auto space-y-6 animate-fade-in" onMouseUp={handlePassageMouseUp} onTouchEnd={handlePassageMouseUp}>
      <div className="flex items-center justify-between">
        <Link href={backHref} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" /> {backLabel}
        </Link>
        <p className="text-sm text-(--text-secondary)">
          Progress: <span className="font-semibold text-(--text)">{completedCount}/{lesson.exercises.length}</span>
        </p>
      </div>

      <div className={cn(
        'border rounded-2xl p-6',
        lesson.day === 10
          ? 'bg-primary/5 border-primary/30'
          : 'bg-(--bg-card) border-(--border)'
      )}>
        <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          {lesson.day === 10 ? 'MIDDLE TEST' : `${lesson.track.toUpperCase()} • Day ${lesson.day}`}{lesson.tutor ? ` • ${lesson.tutor}` : ""}
        </p>
        <h1 className="text-2xl font-bold text-(--text)">{lesson.title}</h1>
        <p className="text-sm text-(--text-secondary) mt-1">{renderClickableText(lesson.subtitle)}</p>
        <p className="text-sm text-(--text-secondary) mt-4 leading-relaxed">{renderClickableText(lesson.overview)}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
          <BookText className="w-5 h-5 text-primary" /> Material
        </h2>
        {lesson.track === 'grammar' ? (
          <div className="space-y-5">
            {lesson.materialSections.map((section) => (
              <div key={section.title} className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden">
                {/* Section header */}
                <div className="px-5 py-3 bg-primary/5 border-b border-(--border)">
                  <h3 className="font-semibold text-(--text) flex items-center gap-2">
                    {section.title}
                  </h3>
                </div>
                {/* Section content */}
                <div className="p-5 space-y-1">
                  {section.points.map((point, pIdx) => {
                    // Empty string = spacer between groups
                    if (!point.trim()) return <div key={`${section.title}-${pIdx}`} className="h-3" />;

                    // Annotation lines: render with M/H labels underneath words
                    if (point.includes('{{annotation:')) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="flex items-start gap-2 py-1.5 flex-wrap">
                          <span className="text-primary mt-1.5 shrink-0 text-xs">●</span>
                          <span className="text-sm text-(--text-secondary) leading-relaxed flex flex-wrap items-end gap-1">
                            {renderAnnotatedText(point)}
                          </span>
                        </div>
                      );
                    }

                    // Suffix header: starts with - and ends with :
                    const suffixHeaderMatch = point.match(/^(-\w+(?:\s*\/\s*-\w+)*)\s+\(([^)]+)\)\s*:?\s*$/);
                    if (suffixHeaderMatch) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="pt-2 pb-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-primary/15 text-primary font-bold text-sm tracking-wide">
                              {suffixHeaderMatch[1]}
                            </span>
                            <span className="text-sm text-(--text-secondary) italic">{suffixHeaderMatch[2]}</span>
                          </div>
                        </div>
                      );
                    }

                    // Indented suffix examples: starts with spaces and contains →
                    if (point.startsWith('  ') && point.includes('→')) {
                      const pairs = point.trim().split(',').map(p => p.trim()).filter(Boolean);
                      return (
                        <div key={`${section.title}-${pIdx}`} className="pl-4 pb-2">
                          <div className="flex flex-wrap gap-1.5">
                            {pairs.map((pair, i) => {
                              const parts = pair.split('→').map(s => s.trim());
                              if (parts.length === 2) {
                                return (
                                  <span key={i} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg bg-(--bg-secondary) border border-(--border)">
                                    <span className="text-(--text-secondary)">{parts[0]}</span>
                                    <span className="text-primary">→</span>
                                    <span className="font-semibold text-(--text)">{parts[1]}</span>
                                  </span>
                                );
                              }
                              return <span key={i} className="text-sm text-(--text-secondary)">{pair}</span>;
                            })}
                          </div>
                        </div>
                      );
                    }

                    // Suffix explanation line (not indented, has →)
                    if (point.includes('→') && !point.startsWith('Wrong') && !point.startsWith('Correct')) {
                      const colonIdx = point.indexOf(':');
                      // Has a rule label before colon
                      if (colonIdx > 0 && colonIdx < 80) {
                        const label = point.slice(0, colonIdx).trim();
                        const rest = point.slice(colonIdx + 1).trim();

                        // Check if it contains transformation pairs
                        const transformParts = rest.split(',').map(s => s.trim()).filter(s => s.includes('→'));
                        if (transformParts.length > 0) {
                          const nonTransformParts = rest.split(',').map(s => s.trim()).filter(s => !s.includes('→'));
                          return (
                            <div key={`${section.title}-${pIdx}`} className="py-1.5">
                              <p className="text-sm font-medium text-(--text) mb-1.5">{renderClickableText(label)}</p>
                              {nonTransformParts.length > 0 && nonTransformParts[0] && (
                                <p className="text-xs text-(--text-muted) mb-1.5 pl-3">{renderClickableText(nonTransformParts.join(', '))}</p>
                              )}
                              <div className="flex flex-wrap gap-1.5 pl-3">
                                {transformParts.map((pair, i) => {
                                  const parts = pair.split('→').map(s => s.trim());
                                  if (parts.length === 2) {
                                    return (
                                      <span key={i} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg bg-(--bg-secondary) border border-(--border)">
                                        <span className="text-(--text-secondary)">{parts[0]}</span>
                                        <span className="text-primary">→</span>
                                        <span className="font-semibold text-(--text)">{parts[1]}</span>
                                      </span>
                                    );
                                  }
                                  return <span key={i} className="text-sm text-(--text-secondary)">{pair}</span>;
                                })}
                              </div>
                            </div>
                          );
                        }
                      }

                      // Simple arrow line (like irregular verb tables)
                      const items = point.split('|').map(s => s.trim()).filter(Boolean);
                      if (items.length > 1) {
                        return (
                          <div key={`${section.title}-${pIdx}`} className="py-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {items.map((item, i) => {
                                const parts = item.split('→').map(s => s.trim());
                                return (
                                  <div key={i} className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-(--bg-secondary) border border-(--border)">
                                    {parts.map((p, j) => (
                                      <span key={j} className={cn(j === 0 ? 'text-(--text-secondary)' : 'font-semibold text-(--text)')}>
                                        {j > 0 && <span className="text-primary mr-1.5">→</span>}
                                        {p}
                                      </span>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }
                    }

                    // Wrong/Correct pattern
                    if (point.startsWith('Wrong:') || point.startsWith('Wrong ')) {
                      const correctMatch = point.match(/Correct:\s*(.+)/);
                      const wrongMatch = point.match(/Wrong:\s*"([^"]+)"/);
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1 flex flex-col sm:flex-row gap-1.5">
                          {wrongMatch && (
                            <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400">
                              <XCircle className="w-3.5 h-3.5 shrink-0" />
                              <span className="line-through">{wrongMatch[1]}</span>
                            </span>
                          )}
                          {correctMatch && (
                            <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                              <span>{correctMatch[1]}</span>
                            </span>
                          )}
                        </div>
                      );
                    }

                    // Example sentences: starts with "Example" or contains quoted text
                    if (point.match(/^(Examples?|Practical):/) || point.match(/^"[^"]+"/)) {
                      const label = point.match(/^(Examples?|Practical):\s*/)?.[0] || '';
                      const exampleText = point.slice(label.length);
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1.5 pl-3 border-l-2 border-primary/30 ml-1">
                          {label && <span className="text-xs text-primary font-semibold uppercase tracking-wider">{label.replace(':', '').trim()}</span>}
                          <p className="text-sm text-(--text-secondary) italic">{renderClickableText(exampleText)}</p>
                        </div>
                      );
                    }

                    // Numbered items (OSASCOMP-style)
                    const numberedMatch = point.match(/^(\d+)\.\s+(\w+):\s*(.+)$/);
                    if (numberedMatch) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="flex items-start gap-2.5 py-1">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold shrink-0 mt-0.5">
                            {numberedMatch[1]}
                          </span>
                          <div className="text-sm">
                            <span className="font-semibold text-(--text)">{numberedMatch[2]}: </span>
                            <span className="text-(--text-secondary)">{renderClickableText(numberedMatch[3])}</span>
                          </div>
                        </div>
                      );
                    }

                    // Rule with description: "Label: description — examples" or "Label: description"
                    const ruleMatch = point.match(/^([^:]{3,60}):\s+(.+)$/);
                    if (ruleMatch && !point.startsWith('http') && !point.startsWith('Position')) {
                      const ruleLabel = ruleMatch[1];
                      const ruleDesc = ruleMatch[2];
                      // Check if description has "—" separating rule from examples
                      const dashIdx = ruleDesc.indexOf(' — ');
                      if (dashIdx > 0) {
                        const desc = ruleDesc.slice(0, dashIdx);
                        const examples = ruleDesc.slice(dashIdx + 3);
                        return (
                          <div key={`${section.title}-${pIdx}`} className="py-1.5">
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1 shrink-0">▸</span>
                              <div>
                                <span className="text-sm font-semibold text-(--text)">{renderClickableText(ruleLabel)}: </span>
                                <span className="text-sm text-(--text-secondary)">{renderClickableText(desc)}</span>
                                <p className="text-xs text-(--text-muted) mt-1 pl-2 italic">{renderClickableText(examples)}</p>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1 flex items-start gap-2">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          <div className="text-sm">
                            <span className="font-semibold text-(--text)">{renderClickableText(ruleLabel)}: </span>
                            <span className="text-(--text-secondary)">{renderClickableText(ruleDesc)}</span>
                          </div>
                        </div>
                      );
                    }

                    // Position rules
                    if (point.startsWith('Position:')) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1.5 pl-3 border-l-2 border-amber-500/40 ml-1">
                          <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider mb-0.5">Position</p>
                          <p className="text-sm text-(--text-secondary)">{renderClickableText(point.replace('Position: ', '').replace('Position:', ''))}</p>
                        </div>
                      );
                    }

                    // Default: regular bullet point
                    return (
                      <div key={`${section.title}-${pIdx}`} className="flex items-start gap-2 py-0.5">
                        <span className="text-primary mt-1.5 shrink-0 text-xs">●</span>
                        <span className="text-sm text-(--text-secondary) leading-relaxed">
                          {renderClickableText(point)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {section.imageUrl && (
                  <div className="px-5 pb-5">
                    <img src={section.imageUrl} alt={section.title} className="w-full rounded-lg border border-(--border)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className={cn(
            lesson.track === 'listening' ? 'grid md:grid-cols-2 gap-4' : 'space-y-5'
          )}>
            {lesson.materialSections.map((section) => (
              <div key={section.title} className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden">
                <div className={cn(
                  'px-5 py-3 border-b border-(--border)',
                  lesson.track === 'reading' ? 'bg-blue-500/5' : lesson.track === 'speaking' ? 'bg-green-500/5' : 'bg-primary/5'
                )}>
                  <h3 className="font-semibold text-(--text)">{section.title}</h3>
                </div>
                <div className="p-5 space-y-1">
                  {section.points.map((point, pIdx) => {
                    if (!point.trim()) return <div key={`${section.title}-${pIdx}`} className="h-3" />;

                    // Annotation lines
                    if (point.includes('{{annotation:')) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="flex items-start gap-2 py-1.5 flex-wrap">
                          <span className="text-primary mt-1.5 shrink-0 text-xs">●</span>
                          <span className="text-sm text-(--text-secondary) leading-relaxed flex flex-wrap items-end gap-1">
                            {renderAnnotatedText(point)}
                          </span>
                        </div>
                      );
                    }

                    // Wrong/Correct pattern (speaking common mistakes)
                    if (point.startsWith('Wrong:') || point.startsWith('❌')) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1">
                          <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400">
                            <XCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{point.replace(/^(Wrong:\s*|❌\s*)/, '')}</span>
                          </span>
                        </div>
                      );
                    }

                    // Correct pattern
                    if (point.startsWith('✅')) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1">
                          <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span>{renderClickableText(point.replace(/^✅\s*/, ''))}</span>
                          </span>
                        </div>
                      );
                    }

                    // Warning/Important rule
                    if (point.startsWith('⚠️')) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1.5 px-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">{renderClickableText(point)}</p>
                        </div>
                      );
                    }

                    // Template patterns (contains "→" with Q&A) — click to reveal answer
                    if (point.includes('→') && !point.startsWith('  ')) {
                      const arrowIdx = point.indexOf('→');
                      const question = point.slice(0, arrowIdx).trim();
                      const answer = point.slice(arrowIdx + 1).trim();
                      const revealKey = `${section.title}-${pIdx}`;
                      const isRevealed = revealedAnswers.has(revealKey);
                      return (
                        <div key={revealKey} className="py-1.5">
                          <button
                            className="flex items-start gap-2 text-left w-full group"
                            onClick={() =>
                              setRevealedAnswers((prev) => {
                                const next = new Set(prev);
                                if (next.has(revealKey)) next.delete(revealKey);
                                else next.add(revealKey);
                                return next;
                              })
                            }
                          >
                            <span className="text-primary mt-1 shrink-0">▸</span>
                            <div className="text-sm">
                              <span className="font-medium text-(--text)">{renderClickableText(question)}</span>
                              {isRevealed ? (
                                <>
                                  <span className="text-primary mx-1">→</span>
                                  <span className="text-green-600 dark:text-green-400 italic font-medium">{renderClickableText(answer)}</span>
                                </>
                              ) : (
                                <span className="ml-2 text-xs text-(--text-muted) group-hover:text-primary transition-colors">(klik untuk lihat jawaban)</span>
                              )}
                            </div>
                          </button>
                        </div>
                      );
                    }

                    // Indented content (sub-items)
                    if (point.startsWith('   ') || point.startsWith('  ')) {
                      // Check for quoted example patterns
                      if (point.trim().startsWith('"') || point.trim().startsWith('\'')) {
                        return (
                          <div key={`${section.title}-${pIdx}`} className="pl-6 py-0.5">
                            <p className="text-sm text-(--text-secondary) italic border-l-2 border-primary/20 pl-3">{renderClickableText(point.trim())}</p>
                          </div>
                        );
                      }
                      return (
                        <div key={`${section.title}-${pIdx}`} className="pl-6 py-0.5">
                          <div className="flex items-start gap-2">
                            <span className="text-(--text-muted) mt-1 shrink-0 text-[10px]">○</span>
                            <span className="text-sm text-(--text-secondary)">{renderClickableText(point.trim())}</span>
                          </div>
                        </div>
                      );
                    }

                    // Rule with description: "Label: description"
                    const ruleMatch = point.match(/^([^:]{3,60}):\s+(.+)$/);
                    if (ruleMatch && !point.startsWith('http') && !point.startsWith('Ex:')) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1 flex items-start gap-2">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          <div className="text-sm">
                            <span className="font-semibold text-(--text)">{renderClickableText(ruleMatch[1])}: </span>
                            <span className="text-(--text-secondary)">{renderClickableText(ruleMatch[2])}</span>
                          </div>
                        </div>
                      );
                    }

                    // Example sentences with "Ex:"
                    if (point.startsWith('Ex:')) {
                      return (
                        <div key={`${section.title}-${pIdx}`} className="py-1 pl-3 border-l-2 border-primary/30 ml-1">
                          <p className="text-sm text-(--text-secondary) italic">{renderClickableText(point.replace('Ex: ', ''))}</p>
                        </div>
                      );
                    }

                    // Default bullet
                    return (
                      <div key={`${section.title}-${pIdx}`} className="flex items-start gap-2 py-0.5">
                        <span className="text-primary mt-1.5 shrink-0 text-xs">●</span>
                        <span className="text-sm text-(--text-secondary) leading-relaxed">{renderClickableText(point)}</span>
                      </div>
                    );
                  })}
                </div>
                {section.imageUrl && (
                  <div className="px-5 pb-5">
                    <img src={section.imageUrl} alt={section.title} className="w-full rounded-lg border border-(--border)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {lesson.track === 'listening' && lesson.passage && lesson.passage.length > 0 && (
        <TTSPlayer
          text={lesson.passage.join('\n')}
          label="Listen to Audio"
        />
      )}

      {lesson.passage && lesson.passage.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
              {lesson.track === 'reading' && <BookText className="w-5 h-5 text-blue-500" />}
              {lesson.track === 'listening' && <Volume2 className="w-5 h-5 text-primary" />}
              {lesson.track === 'speaking' && <MessageCircle className="w-5 h-5 text-green-500" />}
              {{ reading: 'Full Reading Passage', speaking: 'Sample Script', grammar: 'Grammar Examples', listening: 'Listening Script' }[lesson.track]}
            </h2>
            {lesson.track === 'reading' && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { setShowGrammarMode(v => !v); setGrammarPopup(null); }}
                  className={cn(
                    'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors',
                    showGrammarMode
                      ? 'bg-violet-500/10 border-violet-500/30 text-violet-600 dark:text-violet-400'
                      : 'bg-(--bg-secondary) border-(--border) text-(--text-muted) hover:text-(--text-secondary)'
                  )}
                >
                  <Braces className="w-3.5 h-3.5" />
                  {showGrammarMode ? 'Kelas Kata ON' : 'Kelas Kata'}
                </button>
              </div>
            )}
            {lesson.track === 'reading' && lesson.passage.some(p => p.startsWith('(') && p.endsWith(')')) && (
              <button
                type="button"
                onClick={() => setShowTranslation(v => !v)}
                className={cn(
                  'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors',
                  showTranslation
                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400'
                    : 'bg-(--bg-secondary) border-(--border) text-(--text-muted) hover:text-(--text-secondary)'
                )}
              >
                {showTranslation ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                {showTranslation ? 'Sembunyikan terjemahan' : 'Tampilkan terjemahan'}
              </button>
            )}
          </div>
          <div className={cn(
            'bg-(--bg-card) border border-(--border) rounded-xl p-5',
            lesson.track === 'reading' ? 'space-y-5' : 'space-y-4'
          )}>
            {lesson.passage.map((paragraph, idx) => {
              // Section headers (--- Title ---)
              if (paragraph.startsWith('---') && paragraph.endsWith('---')) {
                const headerText = paragraph.replace(/^-+\s*/, '').replace(/\s*-+$/, '');
                const sectionNum = headerText.match(/^(\d+)\.\s*/)?.[1];
                const normalizedHeader = headerText.toLowerCase();
                const matchedAudioTrack =
                  lesson.track === 'listening' && lesson.audioTracks?.length
                    ? lesson.audioTracks.find((track) => {
                        const title = track.title.toLowerCase();
                        if (normalizedHeader.includes('recreation') && title.includes('recreation')) return true;
                        if (normalizedHeader.includes('looking for a place to eat') && title.includes('looking for place to eat')) return true;
                        if (normalizedHeader.includes('the weather') && title.includes('weather')) return true;
                        return false;
                      })
                    : null;
                return (
                  <div key={`${lesson.id}-p-${idx}`} className="pt-4 pb-2 border-b border-(--border) first:pt-0 space-y-3">
                    <div className="flex items-center gap-2">
                      {sectionNum && (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shrink-0">
                          {sectionNum}
                        </span>
                      )}
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">{sectionNum ? headerText.replace(/^\d+\.\s*/, '') : headerText}</p>
                    </div>
                    {matchedAudioTrack && (
                      <div className="bg-(--bg-secondary) border border-(--border) rounded-lg p-3">
                        <audio controls preload="none" className="w-full">
                          <source src={matchedAudioTrack.url} type="audio/mpeg" />
                          Browser kamu tidak mendukung pemutar audio.
                        </audio>
                      </div>
                    )}
                  </div>
                );
              }
              // Indonesian translation lines — always null, handled inside the English paragraph below
              if (paragraph.startsWith('(') && paragraph.endsWith(')')) {
                return null;
              }
              // Empty spacer
              if (!paragraph.trim()) return <div key={`${lesson.id}-p-${idx}`} className="h-2" />;

              // Listening: speaker lines (Sam: / Jane:)
              if (lesson.track === 'listening' && !paragraph.includes('{{blank:')) {
                const speakerMatch = paragraph.match(/^(Sam|Jane):\s*(.*)/);
                if (speakerMatch) {
                  const speaker = speakerMatch[1];
                  const text = speakerMatch[2];
                  const isSam = speaker === 'Sam';
                  return (
                    <div key={`${lesson.id}-p-${idx}`} className="flex items-start gap-2 py-0.5">
                      <span className={cn(
                        'inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold shrink-0 mt-0.5',
                        isSam ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400' : 'bg-pink-500/15 text-pink-600 dark:text-pink-400'
                      )}>
                        {speaker[0]}
                      </span>
                      <div className="text-sm leading-7 text-(--text-secondary)">
                        <span className={cn('font-semibold', isSam ? 'text-blue-600 dark:text-blue-400' : 'text-pink-600 dark:text-pink-400')}>{speaker}: </span>
                        {renderClickableText(text)}
                      </div>
                    </div>
                  );
                }
              }

              // Listening: speaker lines with blanks
              if (lesson.track === 'listening' && paragraph.includes('{{blank:')) {
                const speakerMatch = paragraph.match(/^(Sam|Jane):\s*/);
                const speaker = speakerMatch?.[1];
                const isSam = speaker === 'Sam';

                const blankRegex = /\{\{blank:([^}]+)\}\}/g;
                const segments: Array<{ type: 'text'; value: string } | { type: 'blank'; answer: string; id: string }> = [];
                let lastIndex = 0;
                let blankCount = 0;
                let match;
                while ((match = blankRegex.exec(paragraph)) !== null) {
                  if (match.index > lastIndex) {
                    segments.push({ type: 'text', value: paragraph.slice(lastIndex, match.index) });
                  }
                  const blankId = `${idx}-${blankCount}`;
                  segments.push({ type: 'blank', answer: match[1], id: blankId });
                  blankCount++;
                  lastIndex = match.index + match[0].length;
                }
                if (lastIndex < paragraph.length) {
                  segments.push({ type: 'text', value: paragraph.slice(lastIndex) });
                }
                const isFullBlank = segments.filter(s => s.type === 'blank').length === 1 &&
                  segments.filter(s => s.type === 'text').every(s => /^[A-Za-z]+:\s*$/.test(s.value) || !s.value.trim());
                return (
                  <div key={`${lesson.id}-p-${idx}`} className="flex items-start gap-2 py-0.5">
                    {speaker && (
                      <span className={cn(
                        'inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold shrink-0 mt-0.5',
                        isSam ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400' : 'bg-pink-500/15 text-pink-600 dark:text-pink-400'
                      )}>
                        {speaker[0]}
                      </span>
                    )}
                    <div className="flex flex-wrap items-end gap-x-1 gap-y-2 text-sm leading-7 text-(--text-secondary) flex-1">
                      {segments.map((seg, sIdx) => {
                        if (seg.type === 'text') {
                          // Color the speaker name in text
                          if (speaker && sIdx === 0 && seg.value.startsWith(speaker)) {
                            const rest = seg.value.slice(speaker.length + 2);
                            return (
                              <span key={sIdx}>
                                <span className={cn('font-semibold', isSam ? 'text-blue-600 dark:text-blue-400' : 'text-pink-600 dark:text-pink-400')}>{speaker}: </span>
                                {renderClickableText(rest)}
                              </span>
                            );
                          }
                          return <span key={sIdx}>{renderClickableText(seg.value)}</span>;
                        }
                        const bId = seg.id;
                        const userAnswer = blankAnswers[bId] || '';
                        const isChecked = blankChecked[bId] === true;
                        const correctAnswer = seg.answer;
                        const isCorrect = isChecked && userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
                        const isWrong = isChecked && !isCorrect;
                        return (
                          <span key={sIdx} className="inline-flex flex-col items-center">
                            <input
                              type="text"
                              value={userAnswer}
                              onChange={(e) => {
                                setBlankAnswers(prev => ({ ...prev, [bId]: e.target.value }));
                                if (blankChecked[bId]) setBlankChecked(prev => ({ ...prev, [bId]: false }));
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') setBlankChecked(prev => ({ ...prev, [bId]: true }));
                              }}
                              placeholder={isFullBlank ? 'Tulis kalimat lengkap...' : '...'}
                              className={cn(
                                'border-b-2 bg-transparent outline-none text-center text-sm px-1 py-0.5 transition-colors',
                                isFullBlank ? 'min-w-48 w-full' : 'min-w-16',
                                !isChecked && 'border-primary/40 focus:border-primary',
                                isCorrect && 'border-green-500 text-green-600',
                                isWrong && 'border-red-500 text-red-600',
                              )}
                              style={isFullBlank ? {} : { width: `${Math.max(correctAnswer.length * 9, 60)}px` }}
                            />
                            {isCorrect && (
                              <span className="text-[10px] text-green-600 font-medium mt-0.5">Benar!</span>
                            )}
                            {isWrong && (
                              <span className="text-[10px] text-red-500 mt-0.5">{correctAnswer}</span>
                            )}
                          </span>
                        );
                      })}
                      {segments.some(s => s.type === 'blank') && (
                        <button
                          onClick={() => {
                            const blankIds = segments.filter(s => s.type === 'blank').map(s => (s as { id: string }).id);
                            setBlankChecked(prev => {
                              const next = { ...prev };
                              blankIds.forEach(id => { next[id] = true; });
                              return next;
                            });
                          }}
                          className="ml-1 text-xs px-2 py-0.5 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors shrink-0"
                        >
                          Cek
                        </button>
                      )}
                    </div>
                  </div>
                );
              }

              // Non-listening blanks (grammar/speaking/reading if any)
              if (paragraph.includes('{{blank:')) {
                const blankRegex = /\{\{blank:([^}]+)\}\}/g;
                const segments: Array<{ type: 'text'; value: string } | { type: 'blank'; answer: string; id: string }> = [];
                let lastIndex = 0;
                let blankCount = 0;
                let match;
                while ((match = blankRegex.exec(paragraph)) !== null) {
                  if (match.index > lastIndex) {
                    segments.push({ type: 'text', value: paragraph.slice(lastIndex, match.index) });
                  }
                  const blankId = `${idx}-${blankCount}`;
                  segments.push({ type: 'blank', answer: match[1], id: blankId });
                  blankCount++;
                  lastIndex = match.index + match[0].length;
                }
                if (lastIndex < paragraph.length) {
                  segments.push({ type: 'text', value: paragraph.slice(lastIndex) });
                }
                const isFullBlank = segments.filter(s => s.type === 'blank').length === 1 &&
                  segments.filter(s => s.type === 'text').every(s => /^[A-Za-z]+:\s*$/.test(s.value) || !s.value.trim());
                return (
                  <div key={`${lesson.id}-p-${idx}`} className="flex flex-wrap items-end gap-x-1 gap-y-2 text-sm leading-7 text-(--text-secondary) py-0.5">
                    {segments.map((seg, sIdx) => {
                      if (seg.type === 'text') {
                        return <span key={sIdx}>{renderClickableText(seg.value)}</span>;
                      }
                      const bId = seg.id;
                      const userAnswer = blankAnswers[bId] || '';
                      const isChecked = blankChecked[bId] === true;
                      const correctAnswer = seg.answer;
                      const isCorrect = isChecked && userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
                      const isWrong = isChecked && !isCorrect;
                      return (
                        <span key={sIdx} className="inline-flex flex-col items-center">
                          <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => {
                              setBlankAnswers(prev => ({ ...prev, [bId]: e.target.value }));
                              if (blankChecked[bId]) setBlankChecked(prev => ({ ...prev, [bId]: false }));
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') setBlankChecked(prev => ({ ...prev, [bId]: true }));
                            }}
                            placeholder={isFullBlank ? 'Tulis kalimat lengkap...' : '...'}
                            className={cn(
                              'border-b-2 bg-transparent outline-none text-center text-sm px-1 py-0.5 transition-colors',
                              isFullBlank ? 'min-w-48 w-full' : 'min-w-16',
                              !isChecked && 'border-primary/40 focus:border-primary',
                              isCorrect && 'border-green-500 text-green-600',
                              isWrong && 'border-red-500 text-red-600',
                            )}
                            style={isFullBlank ? {} : { width: `${Math.max(correctAnswer.length * 9, 60)}px` }}
                          />
                          {isCorrect && (
                            <span className="text-[10px] text-green-600 font-medium mt-0.5">Benar!</span>
                          )}
                          {isWrong && (
                            <span className="text-[10px] text-red-500 mt-0.5">{correctAnswer}</span>
                          )}
                        </span>
                      );
                    })}
                    {segments.some(s => s.type === 'blank') && (
                      <button
                        onClick={() => {
                          const blankIds = segments.filter(s => s.type === 'blank').map(s => (s as { id: string }).id);
                          setBlankChecked(prev => {
                            const next = { ...prev };
                            blankIds.forEach(id => { next[id] = true; });
                            return next;
                          });
                        }}
                        className="ml-1 text-xs px-2 py-0.5 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors shrink-0"
                      >
                        Cek
                      </button>
                    )}
                  </div>
                );
              }

              // Reading: paragraph with number indicator
              if (lesson.track === 'reading') {
                const readingParaIdx = lesson.passage!.slice(0, idx).filter(p =>
                  p.trim() && !p.startsWith('---') && !p.startsWith('(') && !p.includes('{{blank:')
                ).length + 1;

                const nextParagraph = lesson.passage?.[idx + 1];
                const hasTranslation = nextParagraph?.startsWith('(') && nextParagraph?.endsWith(')');

                if (showTranslation && hasTranslation) {
                  const translationText = nextParagraph!.slice(1, -1);
                  const splitSentences = (text: string) =>
                    text.match(/[^.!?]*[.!?]+(?=\s|$)/g)?.map(s => s.trim()).filter(Boolean) ?? [text];
                  const engSentences = splitSentences(paragraph);
                  const idSentences = splitSentences(translationText);

                  return (
                    <div key={`${lesson.id}-p-${idx}`} className="flex gap-3">
                      <span className="text-xs text-primary/40 font-mono mt-1.5 shrink-0 select-none w-4 text-right">{readingParaIdx}</span>
                      <div className="space-y-0">
                        {engSentences.map((sentence, sIdx) => (
                          <div key={sIdx}>
                            <p className="text-sm leading-7 text-(--text-secondary) text-justify">
                              {renderClickableText(sentence)}
                            </p>
                            {idSentences[sIdx] && (
                              <p className="text-xs leading-5 italic text-blue-500/70 dark:text-blue-400/60 pl-2 border-l-2 border-blue-400/30 mb-2">
                                {idSentences[sIdx]}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={`${lesson.id}-p-${idx}`} className="flex gap-3">
                    <span className={cn('font-mono shrink-0 select-none w-4 text-right', showGrammarMode ? 'text-xs text-violet-400/60 mt-3' : 'text-xs text-primary/40 mt-1.5')}>{readingParaIdx}</span>
                    {showGrammarMode ? (
                      <div className="text-sm leading-10 text-(--text-secondary) text-justify flex flex-wrap items-end gap-x-0">
                        {renderGrammarPassage(paragraph)}
                      </div>
                    ) : (
                      <p className="text-sm leading-7 text-(--text-secondary) text-justify first-letter:text-lg first-letter:font-semibold first-letter:text-(--text)">
                        {renderClickableText(paragraph)}
                      </p>
                    )}
                  </div>
                );
              }

              // Speaking: structured lines
              if (lesson.track === 'speaking') {
                // Numbered steps
                const stepMatch = paragraph.match(/^(\d+)\.\s+(.+)/);
                if (stepMatch) {
                  return (
                    <div key={`${lesson.id}-p-${idx}`} className="flex items-start gap-2.5 py-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 text-xs font-bold shrink-0 mt-0.5">
                        {stepMatch[1]}
                      </span>
                      <p className="text-sm leading-7 text-(--text-secondary) font-medium">{renderClickableText(stepMatch[2])}</p>
                    </div>
                  );
                }
                // Bullet sub-items
                if (paragraph.startsWith('   ')) {
                  return (
                    <div key={`${lesson.id}-p-${idx}`} className="pl-8 py-0.5">
                      <div className="flex items-start gap-2">
                        <span className="text-(--text-muted) mt-1 shrink-0 text-[10px]">○</span>
                        <p className="text-sm leading-7 text-(--text-secondary)">{renderClickableText(paragraph.trim())}</p>
                      </div>
                    </div>
                  );
                }
                // Quoted example
                if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                  return (
                    <div key={`${lesson.id}-p-${idx}`} className="py-1.5 pl-3 border-l-2 border-green-500/30 ml-1 bg-green-500/5 rounded-r-lg pr-3">
                      <p className="text-sm leading-7 text-(--text-secondary) italic">{renderClickableText(paragraph)}</p>
                    </div>
                  );
                }
                // Label lines (like "Structure of Self-Introduction:" or "Example Self-Introduction:")
                if (paragraph.endsWith(':')) {
                  return (
                    <div key={`${lesson.id}-p-${idx}`} className="pt-2 pb-1">
                      <p className="text-sm font-semibold text-(--text)">{renderClickableText(paragraph)}</p>
                    </div>
                  );
                }
              }

              // Regular paragraph (fallback)
              return (
                <p key={`${lesson.id}-p-${idx}`} className="text-sm leading-7 text-(--text-secondary)">
                  {renderClickableText(paragraph)}
                </p>
              );
            })}
          </div>
        </section>
      )}

      {lesson.track === 'listening' && (!lesson.audioTracks || lesson.audioTracks.length === 0) && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
            <Headphones className="w-5 h-5 text-primary" /> Audio Lesson
          </h2>

          {lesson.audioUrl ? (
            <div className="bg-(--bg-card) border border-(--border) rounded-xl p-4">
              <audio controls preload="none" className="w-full">
                <source src={lesson.audioUrl} type="audio/mpeg" />
                Browser kamu tidak mendukung pemutar audio.
              </audio>
            </div>
          ) : null}
        </section>
      )}

      {(() => {
        const middleExercises = lesson.exercises.filter((e) => e.section === 'middle');
        const finalExercises = lesson.exercises.filter((e) => e.section === 'final');
        const regularExercises = lesson.exercises.filter((e) => !e.section);
        const hasTestSections = middleExercises.length > 0 || finalExercises.length > 0;

        const renderExerciseList = (exercises: typeof lesson.exercises, startNum: number) => (
          <div className="space-y-4">
            {exercises.map((exercise, index) => {
              const isDone =
                exercise.type === 'multiple-choice' || exercise.type === 'fill-the-gap' || exercise.type === 'true-false-not-given'
                  ? Boolean(selectedOptions[exercise.id])
                  : Boolean(notes[exercise.id]?.trim());

              return (
                <div key={exercise.id} className={cn(
                  'border rounded-xl p-5 space-y-3',
                  exercise.type === 'fill-the-gap'
                    ? 'bg-violet-500/5 border-violet-500/20'
                    : exercise.type === 'true-false-not-given'
                      ? 'bg-amber-500/5 border-amber-500/20'
                      : 'bg-(--bg-card) border-(--border)'
                )}>
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm text-(--text) font-medium">
                      {startNum + index}.{' '}
                      {exercise.type === 'fill-the-gap' ? (
                        <>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/20 mr-1.5 align-middle">
                            Fill the Gap
                          </span>
                          {renderClickableText(exercise.question.replace('Fill the gap — ', ''))}
                        </>
                      ) : exercise.type === 'true-false-not-given' ? (
                        <>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20 mr-1.5 align-middle">
                            T / F / NG
                          </span>
                          {renderClickableText(exercise.question)}
                        </>
                      ) : exercise.question.startsWith('Terjemahkan: ') ? (
                        <>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20 mr-1.5 align-middle">
                            Terjemahkan
                          </span>
                          {renderClickableText(exercise.question.replace('Terjemahkan: ', ''))}
                        </>
                      ) : renderClickableText(exercise.question)}
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

                  {exercise.type === 'fill-the-gap' && exercise.options && (() => {
                    // ── Shared word bank: union of ALL fill-the-gap options in this list ──
                    const ftgAll = exercises.filter(e => e.type === 'fill-the-gap');
                    const allWords = [...new Set(ftgAll.flatMap(e => e.options ?? []))].sort();
                    // Words locked by OTHER blanks
                    const usedElsewhere = new Set(
                      ftgAll
                        .filter(e => e.id !== exercise.id)
                        .map(e => selectedOptions[e.id])
                        .filter((w): w is string => Boolean(w))
                    );

                    const selected = selectedOptions[exercise.id];
                    const hasAnswered = Boolean(selected);
                    const isCorrect = hasAnswered && selected === exercise.correctAnswer;

                    // Before answering: show shared pool minus words used by other blanks
                    // After answering: show original options (to display correct/wrong clearly)
                    const displayOptions = hasAnswered
                      ? exercise.options
                      : allWords.filter(w => !usedElsewhere.has(w));

                    // Split question into parts around ______
                    const parts = exercise.question.replace('Fill the gap — ', '').split('______');
                    const before = parts[0] ?? '';
                    const after = parts[1] ?? '';

                    return (
                      <div className="space-y-3">
                        {/* Sentence with blank */}
                        <div className="bg-(--bg) border border-(--border) rounded-lg px-4 py-3 text-sm text-(--text) leading-relaxed">
                          <span>{before}</span>
                          <span className={cn(
                            'inline-block min-w-[80px] mx-1 px-2 py-0.5 rounded border-b-2 text-center font-semibold transition-colors',
                            hasAnswered
                              ? isCorrect
                                ? 'border-green-500 text-green-700 dark:text-green-400 bg-green-500/10'
                                : 'border-red-500 text-red-700 dark:text-red-400 bg-red-500/10'
                              : selected
                                ? 'border-primary text-primary bg-primary/10'
                                : 'border-dashed border-(--text-muted) text-(--text-muted)'
                          )}>
                            {selected ?? '______'}
                          </span>
                          <span>{after}</span>
                        </div>

                        {/* Word bank chips — shared pool */}
                        <div className="flex flex-wrap gap-2">
                          {displayOptions.map((option) => {
                            const isSelected = selected === option;
                            const isAnswer = option === exercise.correctAnswer;
                            const showResult = hasAnswered && exercise.correctAnswer;

                            return (
                              <button
                                key={option}
                                disabled={hasAnswered}
                                onClick={() => { if (!hasAnswered) setSelectedOptions((prev) => ({ ...prev, [exercise.id]: option })); }}
                                className={cn(
                                  'px-3 py-1.5 rounded-full text-sm font-medium border transition-all',
                                  showResult
                                    ? isAnswer
                                      ? 'border-green-500 bg-green-500/15 text-green-700 dark:text-green-400'
                                      : isSelected
                                        ? 'border-red-500 bg-red-500/15 text-red-700 dark:text-red-400 line-through opacity-70'
                                        : 'border-(--border) text-(--text-muted) opacity-40'
                                    : isSelected
                                      ? 'border-primary bg-primary/15 text-primary scale-105'
                                      : 'border-(--border) hover:border-primary/60 hover:bg-primary/5 text-(--text-secondary) cursor-pointer'
                                )}
                              >
                                {showResult && isAnswer && <CheckCircle2 className="w-3.5 h-3.5 inline mr-1 text-green-500" />}
                                {showResult && isSelected && !isAnswer && <XCircle className="w-3.5 h-3.5 inline mr-1 text-red-500" />}
                                {option}
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

                  {exercise.type === 'true-false-not-given' && exercise.options && (() => {
                    const selected = selectedOptions[exercise.id];
                    const hasAnswered = Boolean(selected);
                    const isCorrect = hasAnswered && selected === exercise.correctAnswer;

                    const btnStyle = (option: string) => {
                      const isSelected = selected === option;
                      const isAnswer = option === exercise.correctAnswer;
                      const showResult = hasAnswered && exercise.correctAnswer;
                      if (showResult) {
                        if (isAnswer) return 'border-2 font-semibold ' + (
                          option === 'True' ? 'border-green-500 bg-green-500/15 text-green-700 dark:text-green-400' :
                          option === 'False' ? 'border-red-500 bg-red-500/15 text-red-700 dark:text-red-400' :
                          'border-amber-500 bg-amber-500/15 text-amber-700 dark:text-amber-400'
                        );
                        if (isSelected && !isAnswer) return 'border-2 border-red-400 bg-red-500/10 text-red-600 dark:text-red-400 line-through opacity-70';
                        return 'border border-(--border) text-(--text-muted) opacity-40';
                      }
                      if (isSelected) return 'border-2 font-semibold ' + (
                        option === 'True' ? 'border-green-400 bg-green-500/10 text-green-700 dark:text-green-400' :
                        option === 'False' ? 'border-red-400 bg-red-500/10 text-red-700 dark:text-red-400' :
                        'border-amber-400 bg-amber-500/10 text-amber-700 dark:text-amber-400'
                      );
                      return 'border border-(--border) hover:border-primary/50 text-(--text-secondary) cursor-pointer';
                    };

                    return (
                      <div className="space-y-3">
                        {/* TRUE / FALSE / NOT GIVEN buttons */}
                        <div className="flex gap-2 flex-wrap">
                          {exercise.options.map((option) => (
                            <button
                              key={option}
                              disabled={hasAnswered}
                              onClick={() => { if (!hasAnswered) setSelectedOptions((prev) => ({ ...prev, [exercise.id]: option })); }}
                              className={cn('px-4 py-2 rounded-lg text-sm transition-all', btnStyle(option))}
                            >
                              {option === 'True' && <CheckCircle2 className="w-3.5 h-3.5 inline mr-1.5" />}
                              {option === 'False' && <XCircle className="w-3.5 h-3.5 inline mr-1.5" />}
                              {option === 'Not Given' && <span className="mr-1.5 font-bold">?</span>}
                              {option}
                            </button>
                          ))}
                        </div>

                        {hasAnswered && exercise.correctAnswer && (
                          <div className={cn(
                            'rounded-lg px-4 py-3 text-sm flex items-start gap-2',
                            isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
                          )}>
                            {isCorrect
                              ? <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                              : <XCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />}
                            <div>
                              <p className={cn('font-medium', isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400')}>
                                {isCorrect ? 'Benar!' : 'Salah!'}
                                {!isCorrect && (
                                  <span className="font-normal text-(--text-secondary)"> Jawaban yang benar: <span className="font-semibold text-green-700 dark:text-green-400">{exercise.correctAnswer}</span></span>
                                )}
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

                  {exercise.type !== 'multiple-choice' && exercise.type !== 'fill-the-gap' && exercise.type !== 'true-false-not-given' && (() => {
                    // Fill-in-the-blank / Translate: short-answer with correctAnswer
                    if (exercise.type === 'short-answer' && exercise.correctAnswer) {
                      const isTranslate = exercise.question.startsWith('Terjemahkan: ');
                      const userInput = notes[exercise.id] ?? '';
                      const isSubmitted = submittedAnswers[exercise.id] === true;

                      const normalize = (s: string) =>
                        s.toLowerCase().trim().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
                      const isCorrect = isSubmitted && (() => {
                        const n = normalize(userInput);
                        const base = exercise.correctAnswer ?? '';
                        const variants = [
                          base,
                          base.replace(/\bhe\b/g, 'she').replace(/\bhim\b/g, 'her').replace(/\bhis\b/g, 'her'),
                          base.replace(/\bshe\b/g, 'he').replace(/\bher\b/g, 'him'),
                        ].map(normalize);
                        return variants.some((v) => n === v);
                      })();

                      return (
                        <div className="space-y-2">
                          <div className="flex gap-2 items-end">
                            {isTranslate ? (
                              <textarea
                                value={userInput}
                                onChange={(e) => {
                                  setNotes((prev) => ({ ...prev, [exercise.id]: e.target.value }));
                                  if (submittedAnswers[exercise.id]) setSubmittedAnswers((prev) => ({ ...prev, [exercise.id]: false }));
                                }}
                                placeholder="Tulis terjemahan kamu..."
                                rows={2}
                                className="flex-1 rounded-lg border border-(--border) bg-(--bg-secondary) px-3 py-2 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                              />
                            ) : (
                              <input
                                type="text"
                                value={userInput}
                                onChange={(e) => {
                                  setNotes((prev) => ({ ...prev, [exercise.id]: e.target.value }));
                                  if (submittedAnswers[exercise.id]) setSubmittedAnswers((prev) => ({ ...prev, [exercise.id]: false }));
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') setSubmittedAnswers((prev) => ({ ...prev, [exercise.id]: true }));
                                }}
                                placeholder="Tulis jawaban..."
                                className="flex-1 rounded-lg border border-(--border) bg-(--bg-secondary) px-3 py-2 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-primary/40"
                              />
                            )}
                            <button
                              onClick={() => setSubmittedAnswers((prev) => ({ ...prev, [exercise.id]: true }))}
                              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
                            >
                              Cek
                            </button>
                          </div>
                          {isSubmitted && (
                            <div className={cn(
                              'rounded-lg px-4 py-3 text-sm flex items-start gap-2',
                              isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
                            )}>
                              {isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                              ) : (
                                <XCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                              )}
                              <div>
                                <p className={cn('font-medium', isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400')}>
                                  {isCorrect ? 'Benar!' : 'Salah!'}
                                  {!isCorrect && (
                                    <span className="font-normal text-(--text-secondary)"> Jawaban yang benar: <span className="font-semibold text-green-700 dark:text-green-400">{exercise.correctAnswer}</span></span>
                                  )}
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
                    }

                    // Translate: short-answer with sampleAnswer
                    if (exercise.type === 'short-answer' && exercise.sampleAnswer) {
                      const isSubmitted = submittedAnswers[exercise.id] === true;
                      return (
                        <div className="space-y-2">
                          <textarea
                            value={notes[exercise.id] ?? ''}
                            onChange={(e) => setNotes((prev) => ({ ...prev, [exercise.id]: e.target.value }))}
                            placeholder="Tulis terjemahan kamu..."
                            className="w-full min-h-[80px] rounded-lg border border-(--border) bg-(--bg-secondary) px-3 py-2 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-primary/40"
                          />
                          <button
                            onClick={() => setSubmittedAnswers((prev) => ({ ...prev, [exercise.id]: true }))}
                            className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                          >
                            Lihat Contoh Jawaban
                          </button>
                          {isSubmitted && (
                            <div className="rounded-lg px-4 py-3 text-sm bg-blue-500/10 border border-blue-500/30 flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                              <div>
                                <p className="font-medium text-blue-700 dark:text-blue-400">Contoh jawaban:</p>
                                <p className="mt-0.5 text-(--text-secondary)">{exercise.sampleAnswer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Task / plain short-answer: just a textarea
                    return (
                      <textarea
                        value={notes[exercise.id] ?? ''}
                        onChange={(e) => setNotes((prev) => ({ ...prev, [exercise.id]: e.target.value }))}
                        placeholder="Write your answer here..."
                        className="w-full min-h-[90px] rounded-lg border border-(--border) bg-(--bg-secondary) px-3 py-2 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    );
                  })()}
                </div>
              );
            })}
          </div>
        );

        // Apakah ini mode 3-grup (regular + middle + final semua ada)?
        const isThreeGroup = regularExercises.length > 0 && hasTestSections;

        if (!hasTestSections) {
          return (
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-(--text)">Exercises</h2>
              {renderExerciseList(regularExercises, 1)}
            </section>
          );
        }

        return (
          <div className="space-y-8">
            {/* Set 1 = finalExercises (section:'final') — tampil pertama di 3-grup */}
            {isThreeGroup && finalExercises.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-(--border)" />
                  <h2 className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wider whitespace-nowrap">
                    Set 1
                  </h2>
                  <div className="h-px flex-1 bg-(--border)" />
                </div>
                {renderExerciseList(finalExercises, 1)}
              </section>
            )}

            {/* Set 2 = regularExercises (no section) */}
            {isThreeGroup && regularExercises.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-(--border)" />
                  <h2 className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wider whitespace-nowrap">
                    Set 2
                  </h2>
                  <div className="h-px flex-1 bg-(--border)" />
                </div>
                {renderExerciseList(regularExercises, 1)}
              </section>
            )}

            {/* Set 3 = middleExercises (section:'middle') — tampil terakhir di 3-grup */}
            {middleExercises.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-amber-500/30" />
                  <h2 className={cn('font-semibold flex items-center gap-2 whitespace-nowrap', isThreeGroup ? 'text-sm text-(--text-secondary) uppercase tracking-wider' : 'text-lg text-amber-600 dark:text-amber-400')}>
                    {isThreeGroup ? 'Set 3' : <><BookText className="w-5 h-5" /> Middle Test</>}
                  </h2>
                  <div className="h-px flex-1 bg-amber-500/30" />
                </div>
                {!isThreeGroup && <p className="text-xs text-(--text-muted) text-center">Tes tengah materi — cek pemahaman kamu sejauh ini!</p>}
                {renderExerciseList(middleExercises, 1)}
              </section>
            )}

            {/* Final Test — hanya tampil bila bukan 3-grup */}
            {!isThreeGroup && finalExercises.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-primary/30" />
                  <h2 className="text-lg font-semibold text-primary flex items-center gap-2 whitespace-nowrap">
                    <CheckCircle2 className="w-5 h-5" /> Final Test
                  </h2>
                  <div className="h-px flex-1 bg-primary/30" />
                </div>
                <p className="text-xs text-(--text-muted) text-center">Tes akhir — uji semua materi yang sudah dipelajari!</p>
                {renderExerciseList(finalExercises, 1)}
              </section>
            )}
          </div>
        );
      })()}

      {/* Grammar Mode Popup */}
      {grammarPopup && (
        <div className="fixed left-4 right-4 bottom-4 lg:left-auto lg:right-4 lg:w-[min(92vw,420px)] z-50 bg-(--bg-card) border border-violet-500/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
          <div className="flex items-start justify-between gap-2 px-4 pt-3 pb-2 bg-violet-500/5 border-b border-violet-500/20">
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <Braces className="w-4 h-4 text-violet-500 shrink-0" />
              <span className="text-base font-bold text-(--text)">{grammarPopup.word}</span>
              <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full', grammarPopup.bg)}>
                {grammarPopup.label}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setGrammarPopup(null)}
              className="p-1 rounded hover:bg-(--hover) shrink-0"
            >
              <X className="w-4 h-4 text-(--text-muted)" />
            </button>
          </div>
          <div className="px-4 py-3">
            <p className="text-sm text-(--text-secondary) leading-relaxed">{grammarPopup.reason}</p>
          </div>
        </div>
      )}

      {selectedWord && (
        <div className="fixed right-4 bottom-4 z-40 w-[min(92vw,380px)] bg-(--bg-card) border border-(--border) rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 px-4 pt-3 pb-2">
            <div className="flex items-center gap-2 min-w-0">
              <Languages className="w-4 h-4 text-primary shrink-0" />
              <p className="text-base font-bold text-(--text) truncate">{selectedWord}</p>
              {!blockText && (
                <button
                  type="button"
                  onClick={() => speakWord(selectedWord)}
                  className="p-1 rounded-full hover:bg-primary/10 transition-colors shrink-0"
                  aria-label="Pronounce word"
                >
                  <Volume2 className="w-4 h-4 text-primary" />
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedWord(null);
                setTranslation(null);
                setTranslationError('');
                setBlockText('');
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

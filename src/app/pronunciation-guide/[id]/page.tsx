import { notFound } from "next/navigation";
import Link from "next/link";
import { Volume2, ArrowLeft, ChevronRight, Lightbulb, AlertCircle } from "lucide-react";
import { pronunciationTopics } from "@/data/pronunciationGuide";
import { type Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return pronunciationTopics.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const topic = pronunciationTopics.find((t) => t.id === id);
  if (!topic) return { title: "Not Found" };
  return {
    title: `${topic.title} — Pronunciation Guide`,
    description: topic.shortDescription,
  };
}

const soundColors: Record<string, string> = {
  "/t/": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  "/d/": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "/ɪd/": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  "/s/": "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  "/z/": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  "/ɪz/": "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  "/θ/": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  "/ð/": "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  "/ə/": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  "/uː/ atau /ʊ/": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  "/iː/ atau /ɛ/": "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  "/oʊ/ atau /aʊ/": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "´xx": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  "x´x": "bg-lime-100 text-lime-800 dark:bg-lime-900/40 dark:text-lime-300",
  "xx´": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
  "/k/": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  "/g/": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "/dʒ/": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  "❌ K": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "❌ B": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "❌ GH": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "❌ W": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "❌ L": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "❌ H": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "❌ P": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "❌ T": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

function getSoundColor(sound: string) {
  return soundColors[sound] ?? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
}

export default async function PronunciationTopicPage({ params }: Props) {
  const { id } = await params;
  const topic = pronunciationTopics.find((t) => t.id === id);

  if (!topic) notFound();

  const currentIndex = pronunciationTopics.findIndex((t) => t.id === id);
  const prevTopic = currentIndex > 0 ? pronunciationTopics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex < pronunciationTopics.length - 1
      ? pronunciationTopics[currentIndex + 1]
      : null;

  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in max-w-4xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-(--text-muted)">
        <Link
          href="/pronunciation-guide"
          className="hover:text-primary transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Pronunciation Guide
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-(--text-secondary) font-medium">{topic.title}</span>
      </div>

      {/* Header */}
      <div className="bg-(--bg-card) border border-(--border) rounded-xl p-5">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{topic.emoji}</span>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
              <Volume2 className="w-6 h-6 text-primary" />
              {topic.title}
            </h1>
            <p className="text-sm text-(--text-secondary) mt-0.5">{topic.subtitle}</p>
            <p className="text-sm text-(--text-secondary) mt-3 leading-relaxed">{topic.intro}</p>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="space-y-6">
        {topic.rules.map((rule, idx) => (
          <div
            key={idx}
            className="bg-(--bg-card) border border-(--border) rounded-xl overflow-hidden"
          >
            {/* Rule header */}
            <div className="p-4 border-b border-(--border) flex items-start gap-3">
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 mt-0.5 font-mono ${getSoundColor(rule.sound)}`}
              >
                {rule.soundLabel}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-(--text)">{rule.context}</p>
                <p className="text-sm text-(--text-secondary) mt-1 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>

            {/* Examples table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-(--bg-secondary)">
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-(--text-muted) uppercase tracking-wider w-1/4">
                      Kata
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-(--text-muted) uppercase tracking-wider w-1/3">
                      Fonetik (IPA)
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-(--text-muted) uppercase tracking-wider w-1/4">
                      Arti
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-(--text-muted) uppercase tracking-wider">
                      Catatan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-(--border)">
                  {rule.examples.map((ex, exIdx) => (
                    <tr
                      key={exIdx}
                      className="hover:bg-(--hover) transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-(--text)">{ex.word}</td>
                      <td className="px-4 py-3 font-mono text-primary text-sm">{ex.phonetic}</td>
                      <td className="px-4 py-3 text-(--text-secondary)">{ex.translation}</td>
                      <td className="px-4 py-3 text-(--text-muted) text-xs">{ex.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      {topic.tips.length > 0 && (
        <div className="bg-(--bg-card) border border-(--border) rounded-xl p-5">
          <h2 className="text-base font-semibold text-(--text) flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            Tips & Trik
          </h2>
          <ul className="space-y-2">
            {topic.tips.map((tip, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-(--text-secondary)">
                <span className="text-yellow-500 font-bold shrink-0">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes */}
      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <div className="bg-(--bg-card) border border-(--border) rounded-xl p-5">
          <h2 className="text-base font-semibold text-(--text) flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-red-500" />
            Kesalahan Umum
          </h2>
          <div className="space-y-3">
            {topic.commonMistakes.map((mistake, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-(--border) overflow-hidden"
              >
                <div className="flex items-stretch">
                  <div className="bg-red-50 dark:bg-red-950/30 border-r border-(--border) px-4 py-3 flex flex-col gap-1 min-w-0 flex-1">
                    <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                      ❌ Salah
                    </span>
                    <span className="font-semibold text-(--text)">{mistake.word}</span>
                    <span className="font-mono text-red-600 dark:text-red-400 text-sm">
                      {mistake.wrong}
                    </span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 px-4 py-3 flex flex-col gap-1 min-w-0 flex-1">
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
                      ✓ Benar
                    </span>
                    <span className="font-mono text-green-600 dark:text-green-400 text-sm">
                      {mistake.right}
                    </span>
                    <span className="text-xs text-(--text-secondary) mt-1">{mistake.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 pt-2">
        {prevTopic ? (
          <Link
            href={`/pronunciation-guide/${prevTopic.id}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-(--border) bg-(--bg-card) hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium text-(--text-secondary) hover:text-(--text)"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <div className="text-xs text-(--text-muted)">Sebelumnya</div>
              <div>{prevTopic.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <Link
            href={`/pronunciation-guide/${nextTopic.id}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-(--border) bg-(--bg-card) hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium text-(--text-secondary) hover:text-(--text) ml-auto"
          >
            <div className="text-right">
              <div className="text-xs text-(--text-muted)">Berikutnya</div>
              <div>{nextTopic.title}</div>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            href="/pronunciation-guide"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-(--border) bg-(--bg-card) hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium text-(--text-secondary) hover:text-(--text) ml-auto"
          >
            Kembali ke Daftar
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import { tensesTopics } from '@/data/tnIntermediateGrammar';

type Props = { params: Promise<{ topic: string }> };

export async function generateStaticParams() {
  return tensesTopics.map((t) => ({ topic: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const tense = tensesTopics.find((t) => t.id === topic);
  if (!tense) return { title: 'Not Found' };
  return {
    title: `${tense.title} — TN Intermediate`,
    description: tense.shortDefinition,
  };
}

export default async function TenseDetailPage({ params }: Props) {
  const { topic } = await params;
  const tense = tensesTopics.find((t) => t.id === topic);
  if (!tense) notFound();

  const currentIndex = tensesTopics.findIndex((t) => t.id === topic);
  const prev = tensesTopics[currentIndex - 1] ?? null;
  const next = tensesTopics[currentIndex + 1] ?? null;

  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in max-w-3xl mx-auto">
      {/* Back */}
      <Link
        href="/tn-intermediate"
        className="inline-flex items-center gap-1.5 text-sm text-(--text-secondary) hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Semua Tenses
      </Link>

      {/* Title */}
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <tense.icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-(--text)">{tense.title}</h1>
          <p className="text-sm text-(--text-secondary) mt-1">{tense.shortDefinition}</p>
        </div>
      </div>

      {/* Formula */}
      <section className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-3">
        <h2 className="text-sm font-bold text-(--text) uppercase tracking-wider">Rumus</h2>
        <div className="space-y-2">
          {(
            [
              { label: '(+)', value: tense.formula.positive, color: 'text-green-600 bg-green-50 dark:bg-green-950/30 border-green-200/60' },
              { label: '(−)', value: tense.formula.negative, color: 'text-red-600   bg-red-50   dark:bg-red-950/30   border-red-200/60' },
              { label: '(?)', value: tense.formula.question, color: 'text-blue-600  bg-blue-50  dark:bg-blue-950/30  border-blue-200/60' },
            ] as const
          ).map(({ label, value, color }) => (
            <div key={label} className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 ${color}`}>
              <span className="font-bold text-sm w-6 shrink-0">{label}</span>
              <code className="text-sm font-mono">{value}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold text-(--text) uppercase tracking-wider flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-yellow-500" /> Kapan Dipakai?
        </h2>
        <ul className="space-y-2">
          {tense.usage.map((u, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-(--text-secondary)">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              {u}
            </li>
          ))}
        </ul>
      </section>

      {/* Signal Words */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold text-(--text) uppercase tracking-wider">Kata Kunci (Signal Words)</h2>
        <div className="flex flex-wrap gap-2">
          {tense.signalWords.map((w) => (
            <span
              key={w}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-(--bg-secondary) border border-(--border) text-(--text-secondary)"
            >
              {w}
            </span>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold text-(--text) uppercase tracking-wider">Contoh Kalimat</h2>
        <div className="space-y-3">
          {tense.examples.map((ex, i) => (
            <div
              key={i}
              className="bg-(--bg-card) border border-(--border) rounded-xl px-4 py-3 space-y-1"
            >
              <p className="text-base font-semibold text-(--text)">{ex.sentence}</p>
              <p className="text-sm text-(--text-secondary)">{ex.translation}</p>
              {ex.note && (
                <p className="text-xs text-primary/80 bg-primary/5 rounded-md px-2 py-1 mt-1 inline-block">
                  💡 {ex.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Wrong vs Right */}
      {tense.wrongRight && tense.wrongRight.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-(--text) uppercase tracking-wider">Kesalahan Umum</h2>
          <div className="space-y-3">
            {tense.wrongRight.map((wr, i) => (
              <div key={i} className="bg-(--bg-card) border border-(--border) rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-red-500 font-semibold uppercase mb-0.5">Salah</p>
                    <p className="text-sm font-mono text-(--text) line-through decoration-red-400">{wr.wrong}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-green-600 font-semibold uppercase mb-0.5">Benar</p>
                    <p className="text-sm font-mono text-(--text)">{wr.right}</p>
                  </div>
                </div>
                <p className="text-xs text-(--text-muted) pl-6">{wr.note}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <div className="flex gap-3 pt-2">
        {prev && (
          <Link
            href={`/tn-intermediate/${prev.id}`}
            className="flex-1 flex items-center gap-2 border border-(--border) rounded-xl px-4 py-3 hover:bg-(--hover) transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-(--text-muted) group-hover:text-primary transition-colors shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] text-(--text-muted) uppercase">Sebelumnya</p>
              <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors truncate">{prev.title}</p>
            </div>
          </Link>
        )}
        {next && (
          <Link
            href={`/tn-intermediate/${next.id}`}
            className="flex-1 flex items-center justify-end gap-2 border border-(--border) rounded-xl px-4 py-3 hover:bg-(--hover) transition-colors group text-right"
          >
            <div className="min-w-0">
              <p className="text-[10px] text-(--text-muted) uppercase">Selanjutnya</p>
              <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors truncate">{next.title}</p>
            </div>
            <ArrowLeft className="w-4 h-4 text-(--text-muted) group-hover:text-primary transition-colors rotate-180 shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}

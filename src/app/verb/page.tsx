"use client";

import { useMemo, useState } from "react";
import { Search, BookOpen, Languages } from "lucide-react";
import VerbTable from "@/components/verb/VerbTable";
import { irregularVerbs, regularVerbs } from "@/data/verbs";

const VERB_FORMS = [
  {
    label: "V1",
    subtitle: "Base Form",
    desc: "Present simple & setelah modal verb",
    example: "I walk every day.",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    label: "Vs/es",
    subtitle: "Third Person Singular",
    desc: "He / She / It — present simple",
    example: "She walks to school.",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    label: "V2",
    subtitle: "Past Form",
    desc: "Simple past — aksi yang sudah selesai",
    example: "I walked yesterday.",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    label: "V3",
    subtitle: "Past Participle",
    desc: "Perfect tense & passive voice",
    example: "She has gone home.",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "V-ing",
    subtitle: "Present Participle",
    desc: "Continuous tense & gerund",
    example: "I am walking. / Swimming is fun.",
    badge: "bg-rose-100 text-rose-700",
  },
];

export default function VerbPage() {
  const [search, setSearch] = useState("");
  const [showMeaning, setShowMeaning] = useState(false);

  const filteredIrregular = useMemo(
    () =>
      irregularVerbs.filter(
        (v) =>
          v.base.toLowerCase().includes(search.toLowerCase()) ||
          v.meaning.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  const filteredRegular = useMemo(
    () =>
      regularVerbs.filter(
        (v) =>
          v.base.toLowerCase().includes(search.toLowerCase()) ||
          v.meaning.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-(--text) flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          Verb Learning Module
        </h1>
        <p className="text-sm text-(--text-secondary) mt-1">
          Pelajari bentuk-bentuk verb bahasa Inggris — Regular dan Irregular —
          beserta penggunaannya dalam kalimat.
        </p>
      </div>

      {/* Verb Forms Cards */}
      <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-5">
        <h2 className="text-sm font-semibold text-(--text) mb-4">
          Bentuk Verb &amp; Fungsinya
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {VERB_FORMS.map((f) => (
            <div
              key={f.label}
              className="border border-(--border) rounded-xl p-3 bg-(--bg-secondary) space-y-1.5"
            >
              <span
                className={`inline-block text-xs font-bold px-2 py-0.5 rounded-md ${f.badge}`}
              >
                {f.label}
              </span>
              <p className="text-xs font-semibold text-(--text)">{f.subtitle}</p>
              <p className="text-xs text-(--text-secondary)">{f.desc}</p>
              <p className="text-xs text-(--text-muted) italic">
                &ldquo;{f.example}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Search + Controls Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs text-(--text-secondary)">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            {filteredIrregular.length} irregular verbs
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            {filteredRegular.length} regular verbs
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Translation Toggle */}
          <button
            onClick={() => setShowMeaning((v) => !v)}
            className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-colors ${
              showMeaning
                ? "bg-primary text-white border-primary"
                : "border-(--border) text-(--text-secondary) hover:bg-(--hover)"
            }`}
          >
            <Languages size={13} />
            {showMeaning ? "Sembunyikan Arti" : "Tampilkan Arti"}
          </button>
          {/* Search */}
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
            />
            <input
              type="text"
              placeholder="Cari verb atau arti..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-52 border border-(--border) rounded-lg pl-8 pr-3 py-2 text-xs bg-(--bg-card) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
            />
          </div>
        </div>
      </div>

      {/* Irregular Verbs Section */}
      <section className="bg-(--bg-card) border border-(--border) rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-(--border) flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-(--text)">
              Irregular Verbs
            </h2>
            <p className="text-xs text-(--text-secondary) mt-0.5">
              V2 dan V3 tidak mengikuti aturan -ed. Harus dihafal!
              <span className="ml-2 font-medium text-(--text)">
                ex: sing → sang → sung
              </span>
            </p>
          </div>
          <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 font-semibold">
            {filteredIrregular.length} verbs
          </span>
        </div>
        <VerbTable verbs={filteredIrregular} type="irregular" showMeaning={showMeaning} />
      </section>

      {/* Regular Verbs Section */}
      <section className="bg-(--bg-card) border border-(--border) rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-(--border) flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-(--text)">
              Regular Verbs
            </h2>
            <p className="text-xs text-(--text-secondary) mt-0.5">
              V2 dan V3 dibentuk dengan menambahkan -ed. V2 = V3.
              <span className="ml-2 font-medium text-(--text)">
                ex: work → worked → worked
              </span>
            </p>
          </div>
          <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
            {filteredRegular.length} verbs
          </span>
        </div>
        <VerbTable verbs={filteredRegular} type="regular" showMeaning={showMeaning} />
      </section>
    </div>
  );
}

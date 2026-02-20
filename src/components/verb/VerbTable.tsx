"use client";

import { Fragment, useState } from "react";
import { VerbItem } from "@/data/verbs";
import { ChevronDown } from "lucide-react";

type VerbTableProps = {
  verbs: VerbItem[];
  type: "irregular" | "regular";
  showMeaning: boolean;
};

function getContextualMeanings(verb: VerbItem) {
  const m = verb.meaning;
  return [
    { form: "Base", word: verb.base,  label: "Dasar",              context: m },
    { form: "V1",   word: verb.v1,    label: "Present / I-You-We-They", context: m },
    { form: "Vs/es",word: verb.v1,    label: "Present / He-She-It",     context: m },
    { form: "V2",   word: verb.v2,    label: "Simple Past",         context: `${m} (lampau)` },
    { form: "V3",   word: verb.v3,    label: "Past Participle",     context: `sudah ${m} / di-${m} (perfect/passive)` },
    { form: "V-ing",word: verb.ing,   label: "Present Participle",  context: `sedang ${m} (continuous/gerund)` },
  ];
}

export default function VerbTable({ verbs, type, showMeaning }: VerbTableProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (base: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(base)) next.delete(base);
      else next.add(base);
      return next;
    });
  };

  const baseClass =
    type === "irregular"
      ? "text-amber-600 font-semibold"
      : "text-emerald-600 font-semibold";

  const accentBg =
    type === "irregular"
      ? "bg-amber-50/60 border-amber-200/50"
      : "bg-emerald-50/60 border-emerald-200/50";

  const badgeClass =
    type === "irregular"
      ? "bg-amber-100 text-amber-700"
      : "bg-emerald-100 text-emerald-700";

  if (verbs.length === 0) {
    return (
      <p className="text-center text-sm text-(--text-muted) py-10">
        Tidak ada verb yang ditemukan.
      </p>
    );
  }

  const colCount = showMeaning ? 6 : 5;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-(--bg-secondary) text-xs uppercase tracking-wide text-(--text-muted)">
            <th className="px-5 py-3 text-left font-semibold">Base</th>
            {showMeaning && (
              <th className="px-5 py-3 text-left font-semibold text-primary/70">Arti</th>
            )}
            <th className="px-5 py-3 text-left font-semibold">V1</th>
            <th className="px-5 py-3 text-left font-semibold">V2</th>
            <th className="px-5 py-3 text-left font-semibold">V3</th>
            <th className="px-5 py-3 text-left font-semibold">V-ing</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-(--border)">
          {verbs.map((verb, i) => {
            const isOpen = expanded.has(verb.base);
            const rows = getContextualMeanings(verb);
            return (
              <Fragment key={`${verb.base}-${i}`}>
                <tr
                  onClick={() => toggle(verb.base)}
                  className="hover:bg-(--hover) transition-colors cursor-pointer select-none"
                >
                  <td className={`px-5 py-3 ${baseClass}`}>
                    <span className="flex items-center gap-1.5">
                      {verb.base}
                      <ChevronDown
                        size={12}
                        className={`text-(--text-muted) transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </td>
                  {showMeaning && (
                    <td className="px-5 py-3 text-primary/80 text-xs italic">{verb.meaning}</td>
                  )}
                  <td className="px-5 py-3 text-(--text)">{verb.v1}</td>
                  <td className="px-5 py-3 text-(--text)">{verb.v2}</td>
                  <td className="px-5 py-3 text-(--text)">{verb.v3}</td>
                  <td className="px-5 py-3 text-(--text)">{verb.ing}</td>
                </tr>

                {isOpen && (
                  <tr>
                    <td colSpan={colCount} className={`px-5 py-3 border-t ${accentBg}`}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {rows.map((r) => (
                          <div key={r.form} className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${badgeClass}`}>
                                {r.form}
                              </span>
                              <span className="text-xs font-semibold text-(--text)">{r.word}</span>
                            </div>
                            <span className="text-[11px] text-(--text-secondary) pl-0.5">{r.label}</span>
                            <span className="text-[11px] text-(--text-muted) italic pl-0.5">{r.context}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

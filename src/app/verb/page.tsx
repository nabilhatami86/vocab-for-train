"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import VerbTable from "@/components/verb/VerbTable";
import { irregularVerbs, regularVerbs } from "@/data/verbs";

export default function VerbPage() {
  const [search, setSearch] = useState("");

  const filteredIrregular = useMemo(() => {
    return irregularVerbs.filter((verb) =>
      verb.base.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const filteredRegular = useMemo(() => {
    return regularVerbs.filter((verb) =>
      verb.base.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#B73A44] px-6 py-14">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        {/* HEADER */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-[#B73A44]">
            Verb Learning Module
          </h1>
          <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto">
            Understand how English verbs change form in different tenses. Study
            regular and irregular verbs in a structured way.
          </p>
        </header>

        {/* VERB FORM EXPLANATION */}
        <section className="mb-12">
          <h2 className="text-base font-semibold text-[#B73A44] mb-4">
            Verb Forms & Their Functions
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-600 leading-relaxed">
            <div className="border rounded-md p-4">
              <strong className="text-gray-800">V1 (Base Form)</strong>
              <p className="mt-1">
                Used for present simple (I/You/They/We), after modal verbs, and
                commands.
                <br />
                Example: I walk every day.
              </p>
            </div>

            <div className="border rounded-md p-4">
              <strong className="text-gray-800">V-s / es</strong>
              <p className="mt-1">
                Used in present simple for he, she, it.
                <br />
                Example: She walks to school.
              </p>
            </div>

            <div className="border rounded-md p-4">
              <strong className="text-gray-800">V2 (Past Form)</strong>
              <p className="mt-1">
                Used for past simple (completed actions).
                <br />
                Example: I walked yesterday.
              </p>
            </div>

            <div className="border rounded-md p-4">
              <strong className="text-gray-800">V3 (Past Participle)</strong>
              <p className="mt-1">
                Used with have/has/had (perfect tense) and passive voice.
                <br />
                Example: She has gone home.
              </p>
            </div>

            <div className="border rounded-md p-4 sm:col-span-2">
              <strong className="text-gray-800">V-ing</strong>
              <p className="mt-1">
                Used for continuous tense and gerund (verb as noun).
                <br />
                Example: I am walking. / Swimming is fun.
              </p>
            </div>
          </div>
        </section>

        {/* SLIM SEARCH */}
        <div className="flex justify-end mb-8">
          <div className="relative w-56">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                border border-gray-300
                rounded-md
                pl-8 pr-3 py-1.5
                text-xs
                focus:outline-none
                focus:ring-1 focus:ring-[#F2C572]
                focus:border-[#F2C572]
                transition
              "
            />
          </div>
        </div>

        {/* IRREGULAR SECTION */}
        <section className="mb-14">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-[#B73A44]">
              Irregular Verbs
            </h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Irregular verbs do not follow the standard -ed rule. Example: go →
              went → gone.
            </p>
            <div className="h-px bg-gray-200 mt-3" />
          </div>

          <VerbTable
            title=""
            description=""
            verbs={filteredIrregular}
            accentColor="#F2C572"
          />
        </section>

        {/* REGULAR SECTION */}
        <section>
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-[#B73A44]">
              Regular Verbs
            </h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Regular verbs add -ed to form V2 and V3. Example: walk → walked →
              walked.
            </p>
            <div className="h-px bg-gray-200 mt-3" />
          </div>

          <VerbTable
            title=""
            description=""
            verbs={filteredRegular}
            accentColor="#F2C572"
          />
        </section>
      </div>
    </div>
  );
}

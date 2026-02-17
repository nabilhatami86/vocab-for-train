import { VerbItem } from "@/data/verbs";

type VerbTableProps = {
  title: string;
  description: string;
  verbs: VerbItem[];
  accentColor: string;
};

export default function VerbTable({
  title,
  description,
  verbs,
  accentColor,
}: VerbTableProps) {
  return (
    <section className="mb-20">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: accentColor }}
          >
            Verb Collection
          </span>
        </div>

        <h2 className="text-4xl font-bold tracking-tight">{title}</h2>

        <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Table Card */}
      <div className="relative rounded-3xl border border-gray-200/70 bg-white shadow-lg shadow-gray-200/40 overflow-hidden">
        {/* Accent Top Bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(to right, ${accentColor}, transparent)`,
          }}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            {/* Table Head */}
            <thead className="bg-gray-50/80 backdrop-blur sticky top-0 z-10">
              <tr className="text-gray-600 uppercase tracking-wider text-xs">
                <th className="px-6 py-4 text-left font-semibold">Base</th>
                <th className="px-6 py-4 text-left font-semibold">V1</th>
                <th className="px-6 py-4 text-left font-semibold">V2</th>
                <th className="px-6 py-4 text-left font-semibold">V3</th>
                <th className="px-6 py-4 text-left font-semibold">V-ing</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {verbs.map((verb, index) => (
                <tr
                  key={`${verb.base}-${verb.v2}`}
                  className={`
                    transition-all duration-200
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    hover:bg-gray-100/70
                  `}
                >
                  <td
                    className="px-6 py-4 font-semibold"
                    style={{ color: accentColor }}
                  >
                    {verb.base}
                  </td>

                  <td className="px-6 py-4 text-gray-700">{verb.v1}</td>
                  <td className="px-6 py-4 text-gray-700">{verb.v2}</td>
                  <td className="px-6 py-4 text-gray-700">{verb.v3}</td>
                  <td className="px-6 py-4 text-gray-700">{verb.ing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

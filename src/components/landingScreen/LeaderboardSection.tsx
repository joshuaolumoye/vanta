import React, { useState } from "react";

/* ─── Data ─── */
const rows = [
  { position: "1st",  character: "Urukojin",    universe: "VantaOrigin" },
  { position: "2nd",  character: "SwitchBlade",  universe: "Headline Comics" },
  { position: "3rd",  character: "Hope Breaker", universe: "DTR Daily C." },
  { position: "4th",  character: "Storm Boltz",  universe: "Dark Worlds Comics" },
  { position: "5th",  character: "Sabaleye",     universe: "Obisidian Dreamhouse" },
  { position: "6th",  character: "Urukojin",     universe: "Dreburk Universe" },
  { position: "7th",  character: "Laserz",       universe: "DTR Daily C." },
  { position: "8th",  character: "TUFF Ring",    universe: "Dark Worlds Comics" },
  { position: "9th",  character: "SwitchBlade",  universe: "Obisidian Dreamhouse" },
  { position: "10th", character: "Hope Breaker", universe: "VantaOrigin" },
];

/* ─── Column filter dropdown arrow ─── */
const FilterArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline-block ml-1 flex-shrink-0">
    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type SortKey = "position" | "character" | "universe";

const LeaderboardSection: React.FC = () => {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);

  const handleSort = (key: SortKey) => {
    setSortKey(key === sortKey ? null : key);
  };

  const sorted = sortKey
    ? [...rows].sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
    : rows;

  return (
    <section className="relative w-full bg-[#111827] py-5 sm:py-5 pb-20 sm:pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* ── Card ── */}
        <div
          className="
            rounded-2xl sm:rounded-3xl
            bg-[#141d2e]
            border border-white/5
            shadow-2xl shadow-black/40
            overflow-hidden
          "
        >
          {/* Header */}
          <div className="text-center pt-8 sm:pt-10 pb-6 sm:pb-8 px-6">
            <p className="text-xs font-semibold text-emerald-400 tracking-wide mb-2">
              Season progress
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Leaderboard
            </h2>
          </div>

          {/* Table wrapper — horizontal scroll on very small screens */}
          <div className="overflow-x-auto px-4 sm:px-8 pb-8 sm:pb-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <table className="w-full min-w-[340px] border-collapse">

              {/* Column headers */}
              <thead>
                <tr>
                  {(
                    [
                      { key: "position" as SortKey,  label: "POSITIONS" },
                      { key: "character" as SortKey, label: "CHARACTERS" },
                      { key: "universe" as SortKey,  label: "UNIVERSE" },
                    ] as { key: SortKey; label: string }[]
                  ).map(({ key, label }) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      className="
                        text-left pb-3
                        text-[10px] sm:text-xs font-semibold tracking-widest
                        text-slate-400
                        cursor-pointer select-none
                        hover:text-white transition-colors
                      "
                      style={{ paddingRight: "2rem" }}
                    >
                      {label}
                      <FilterArrow />
                    </th>
                  ))}
                </tr>

                {/* Divider */}
                <tr>
                  <td colSpan={3} className="pb-3">
                    <div className="h-px w-full bg-white/10" />
                  </td>
                </tr>
              </thead>

              {/* Rows */}
              <tbody>
                {sorted.map((row, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-white/[0.03] transition-colors"
                  >
                    {/* Position */}
                    <td
                      className="py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white whitespace-nowrap"
                      style={{ paddingRight: "2rem" }}
                    >
                      {row.position}
                    </td>

                    {/* Character */}
                    <td
                      className="py-3 sm:py-3.5 text-sm sm:text-base text-white whitespace-nowrap"
                      style={{ paddingRight: "2rem" }}
                    >
                      {row.character}
                    </td>

                    {/* Universe */}
                    <td className="py-3 sm:py-3.5 text-sm sm:text-base text-white whitespace-nowrap">
                      {row.universe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA button */}
          <div className="flex justify-center pb-10 sm:pb-12 px-6">
            <button
              className="
                px-8 py-3
                rounded-full
                bg-indigo-600 hover:bg-indigo-500
                active:scale-95
                transition-all duration-200
                text-sm sm:text-base font-semibold text-white
                shadow-lg shadow-indigo-500/25
              "
            >
              Join the Next War
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeaderboardSection;
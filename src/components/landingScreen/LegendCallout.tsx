import React from "react";

/* ========= JSON content ========= */
const calloutContent = {
  title: "Where Legends Are Forged — And You Hold the Flame",
  description: `The realms have been revealed, but their stories are far from complete.
Heroes rise, kingdoms fall, and creators breathe life into worlds yet unseen.
At VantaOrigin, imagination isn’t just welcomed — it’s valued.
Forge your story, shape your destiny, and become part of a living mythos
that grows with every creator who dares to dream.`,
  cta: "Learn more",
};

/* ========= Component ========= */
const LegendCallout: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111827] py-28">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <div className="relative w-full max-w-3xl rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-white/5 backdrop-blur-xl px-10 py-14 text-center">
          {/* glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-purple-600/20 blur-3xl" />

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-snug">
            {calloutContent.title}
          </h2>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-10 whitespace-pre-line">
            {calloutContent.description}
          </p>

          <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-slate-700/70 hover:bg-slate-600/80 transition text-sm font-medium text-white">
            {calloutContent.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LegendCallout;

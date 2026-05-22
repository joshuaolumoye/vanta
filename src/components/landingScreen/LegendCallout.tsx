import React from "react";

const calloutContent = {
  title: "You Don't Find Your Legend Here. You Build It!",
  description: `The realms exist. But the stories inside them? Still unwritten. Your character hasn't shown up yet. Your kingdom hasn't fallen or risen. Come build the part only you can build.`,
  cta: "Learn more",
};

const LegendCallout: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111827] py-16 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">
        <div className="relative w-full max-w-3xl rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-white/5 backdrop-blur-xl px-6 sm:px-10 py-10 sm:py-14 text-center">
          {/* glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-purple-600/20 blur-3xl" />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-5 sm:mb-6 leading-snug">
            {calloutContent.title}
          </h2>

          <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-8 sm:mb-10 whitespace-pre-line">
            {calloutContent.description}
          </p>

          <button className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full bg-slate-700/70 hover:bg-slate-600/80 transition text-sm font-medium text-white">
            {calloutContent.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LegendCallout;
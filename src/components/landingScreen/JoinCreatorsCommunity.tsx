import React from "react";

const JoinCreatorsCommunity: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111827] py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/95 border border-white/5 backdrop-blur-xl">
          {/* TEXT */}
          <div className="p-6 sm:p-10 lg:p-14 max-w-3xl">
            <h3 className="text-base sm:text-lg font-semibold text-emerald-400 mb-3">
              Join the Creator's Community
            </h3>

            <p className="text-sm text-slate-300 mb-4 sm:mb-6 leading-relaxed">
              Find artists, writers, and world builders who are deep in the same process as you. Share your work, get real eyes on it, and collaborate with people who understand what you're actually building — not just what it looks like on the surface.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Building a world alone is slow. Building it with the right people changes everything. This is the space where your ideas get challenged, expanded, and seen by the people most likely to help them grow.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[200px] sm:h-[260px] lg:h-[300px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/community-bg.png)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6">
              <button className="px-5 sm:px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-400 transition text-sm font-medium text-white shadow-lg">
                Join the Community
              </button>
            </div>
          </div>

          {/* subtle ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
};

export default JoinCreatorsCommunity;
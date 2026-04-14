import React from "react";

const JoinCreatorsCommunity: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111827] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/95 border border-white/5 backdrop-blur-xl">
          {/* TEXT */}
          <div className="p-10 lg:p-14 max-w-3xl">
            <h3 className="text-lg font-semibold text-emerald-400 mb-3">
              Join the Creator’s Community
            </h3>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Connect with artists, storytellers, and dreamers from every realm
              of the Originverse. Collaborate, share your vision, and grow with a
              community that celebrates imagination without limits.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              At VantaOrigin, creation isn’t a solo journey — it’s a shared
              evolution. Whether you’re crafting stories, building worlds, or
              shaping ideas together, this is where your story finds its origin.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[260px] lg:h-[300px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/community-bg.png)" }}
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* CTA */}
            <div className="absolute bottom-6 left-6">
              <button className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-400 transition text-sm font-medium text-white shadow-lg">
                Join the Community
              </button>
            </div>
          </div>

          {/* subtle border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
};

export default JoinCreatorsCommunity;

import React from "react";

const VantaPassCard: React.FC = () => {
  const bgImage =
    "/vanta-hero.png";

  return (
    <section className="relative w-full bg-[#111827] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-10">
          <p className="text-xs text-emerald-400 mb-2 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            VantaOrigin multiverse
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rise Among the Legends
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-400 leading-relaxed">
            Join the ranks of visionaries shaping the VantaOrigin multiverse.
            Share your art, build your following, and let your stories echo
            across realms.
          </p>
        </div>

        {/* main card */}
        <div
          className="
            relative
            rounded-2xl
            overflow-hidden
            border border-white/10
            bg-slate-900
            shadow-2xl
          "
        >
          {/* background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />

          {/* content */}
          <div className="relative z-10 p-8 md:p-10 max-w-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              VantaPass Season 3
            </h3>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Join the Realm Wars and unlock exclusive rewards, characters and
              story elements. Battle for supremacy across the mythic realms.
            </p>

            {/* checklist */}
            <ul className="space-y-3 text-sm text-slate-300 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Exclusive OG slots and customizations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Premium comic publishing tools
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Seasonal badges and achievements
              </li>
            </ul>

            {/* button */}
            <button
              className="
                inline-flex items-center justify-center
                px-6 py-3
                rounded-full
                bg-gradient-to-r from-indigo-500 to-purple-600
                hover:from-indigo-400 hover:to-purple-500
                transition
                text-sm font-medium text-white
                shadow-lg shadow-purple-500/20
              "
            >
              Unlock VantaPass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VantaPassCard;

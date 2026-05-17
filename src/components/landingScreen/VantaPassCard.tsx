import React from "react";

const checkItems = [
  "Exclusive OC slots and customization",
  "Premium comic publishing tools",
  "Seasonal badges and achievements",
];

/* Checkmark SVG — matches the thin ✓ style in the Figma */
const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="flex-shrink-0 mt-0.5"
  >
    <path
      d="M3 8.5L6.5 12L13 5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VantaPassCard: React.FC = () => {
  const bgImage = "/vanta-hero.png";

  return (
    <section className="relative w-full bg-[#111827] py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Cinematic card ── */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">

          {/* 1. Full-bleed background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          {/* 2. Dark gradient overlay
               - Mobile:  top-to-bottom heavy (character still peeks through at bottom)
               - Desktop: left-to-right — solid left → transparent right so character shines */}
          <div
            className="absolute inset-0"
            style={{
              background: [
                /* mobile fallback — rendered when sm gradient not supported */
                "linear-gradient(180deg, rgba(10,8,20,0.88) 0%, rgba(10,8,20,0.75) 60%, rgba(10,8,20,0.30) 100%)",
              ].join(","),
            }}
          />
          {/* desktop override via a second absolutely-positioned layer */}
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,8,20,0.92) 0%, rgba(10,8,20,0.80) 38%, rgba(10,8,20,0.40) 62%, rgba(10,8,20,0.00) 100%)",
            }}
          />

          {/* 3. Content — sits above both overlay layers */}
          <div className="relative z-10 px-7 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 max-w-[520px]">

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              VantaPass Season 3
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-7 sm:mb-8 max-w-md">
              Earn always free rewards from the community and sometimes the
              platform by participating in events and games with other creators,
              share your art, build your fanbase, and let your creative mind
              echo across realms worldwide
            </p>

            {/* Checklist */}
            <ul className="space-y-3 sm:space-y-4 mb-9 sm:mb-10">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-white">
                  <Check />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA button — warm gradient pill matching Figma */}
            <button
              className="
                inline-flex items-center justify-center
                px-7 py-3
                rounded-full
                text-sm sm:text-base font-semibold text-white
                transition-all duration-200
                active:scale-95
                shadow-lg shadow-black/30
              "
              style={{
                background:
                  "linear-gradient(90deg, #9CA3AF 0%, #F97316 100%)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(90deg, #6B7280 0%, #EA6B00 100%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(90deg, #9CA3AF 0%, #F97316 100%)";
              }}
            >
              Access VantaPass
            </button>
          </div>

          {/* 4. Invisible height prop so card fills out on mobile
               (content height drives it on desktop naturally) */}
          <div className="sm:hidden h-48" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
};

export default VantaPassCard;
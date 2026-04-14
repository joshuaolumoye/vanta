import React from "react";
import SwipeableCardStack from "./SwipeableCardStack";
import { MOBILE_ASSETS } from "./mobileAssets";

// ── Flame icon (orange teardrop) ─────────────────────────────────────────────
const FlameIcon = () => (
  <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
    <path
      d="M10 0C10 0 16 7 16 13C16 16.866 13.314 20 10 20C6.686 20 4 16.866 4 13C4 7 10 0 10 0Z"
      fill="#e07014"
    />
    <path
      d="M10 12C10 12 13 15.5 13 18C13 19.657 11.657 21 10 21C8.343 21 7 19.657 7 18C7 15.5 10 12 10 12Z"
      fill="#f9a825"
    />
  </svg>
);

// ── Realm data ────────────────────────────────────────────────────────────────
const REALMS = [
  {
    id: "realm-1",
    name: "Obaalu — The Emberforge of Creation",
    members: "789k",
    flameVariant: "fire",
  },
  {
    id: "realm-2",
    name: "Eganon — The Core of Eternity",
    members: "1.2M",
    flameVariant: "fire",
  },
  {
    id: "realm-3",
    name: "Iyanu — The Eternal Flow",
    members: "456k",
    flameVariant: "fire",
  },
  {
    id: "realm-4",
    name: "Urukojin — The Celestial Drift",
    members: "892k",
    flameVariant: "fire",
  },
  {
    id: "realm-5",
    name: "Vantara — The Infinite Veil",
    members: "3.1M",
    flameVariant: "fire",
  },
];

// ── Single realm card content ─────────────────────────────────────────────────
const RealmCardContent: React.FC<{
  name: string;
  members: string;
}> = ({ name, members }) => (
  <div className="relative w-full h-full flex flex-col items-center justify-end pb-8 overflow-hidden">
    {/* Flame illustration (top centre) */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
      <FlameIcon />
    </div>

    {/* Pink/purple flame art image */}
    <img
      src={MOBILE_ASSETS.realmFlame}
      alt=""
      aria-hidden
      className="absolute bottom-0 right-0 w-[55%] pointer-events-none select-none"
    />

    {/* Title + members + CTA */}
    <div className="relative z-10 flex flex-col items-center px-6 gap-3 w-full">
      <h3 className="text-white font-black text-[26px] text-center leading-tight tracking-[-0.1px]">
        {name}
      </h3>
      <p className="text-white text-[18px] font-semibold">
        <strong className="font-black">{members}</strong> members
      </p>
      <button className="px-8 py-3 rounded-full bg-[#7faef8] hover:bg-blue-400 text-white font-black text-[18px] transition-all w-full text-center">
        Join the discussion
      </button>
    </div>
  </div>
);

// ── Main section ──────────────────────────────────────────────────────────────
const MobileRealmsSection: React.FC = () => {
  const cards = REALMS.map((r) => ({
    id: r.id,
    content: <RealmCardContent name={r.name} members={r.members} />,
  }));

  return (
    <div className="flex flex-col items-center gap-6 pb-8">
      {/* Section button */}
      <button className="px-7 py-3 rounded-full bg-[#9333ea] text-white font-black text-[18px]">
        Realms
      </button>

      {/* Swipeable stack */}
      <SwipeableCardStack cards={cards} />
    </div>
  );
};

export default MobileRealmsSection;
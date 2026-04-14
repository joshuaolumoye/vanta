import React from "react";
import SwipeableCardStack from "./SwipeableCardStack";

// ── Plus icon ────────────────────────────────────────────────────────────────
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ── Empty character card ──────────────────────────────────────────────────────
const EmptyCharacterCard: React.FC<{ onCreateClick?: () => void }> = ({
  onCreateClick,
}) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-6">
    <p className="text-[#7faef8] text-[16px] text-center leading-relaxed font-normal">
      Nothing to show here. Start by creating your first character.
    </p>
    <button
      onClick={onCreateClick}
      className="flex items-center gap-2 px-8 py-3 rounded-full border border-white text-white font-bold text-[18px] hover:bg-white/10 transition-all"
    >
      <PlusIcon />
      Create
    </button>
  </div>
);

// ── Static "behind" card — same dark style, empty ────────────────────────────
// (The back cards in the character section are just blank dark cards)
const BlankCard: React.FC = () => (
  <div className="w-full h-full bg-[#1a2337] rounded-[22px] border border-[#2c3957]" />
);

// ── Character data (currently all empty) ─────────────────────────────────────
// Extend this when real character data is available
const CHARACTER_CARDS = [
  { id: "char-1", hasContent: true },
  { id: "char-2", hasContent: false },
  { id: "char-3", hasContent: false },
];

// ── Main section ──────────────────────────────────────────────────────────────
interface MobileCharactersSectionProps {
  onCreate?: () => void;
}

const MobileCharactersSection: React.FC<MobileCharactersSectionProps> = ({
  onCreate,
}) => {
  const cards = CHARACTER_CARDS.map((c) => ({
    id: c.id,
    content: c.hasContent ? (
      <EmptyCharacterCard onCreateClick={onCreate} />
    ) : (
      <BlankCard />
    ),
  }));

  return (
    <div className="flex flex-col items-center gap-6 pb-16">
      {/* Section button */}
      <button className="px-7 py-3 rounded-full bg-[#9333ea] text-white font-black text-[18px]">
        Characters
      </button>

      {/* Swipeable stack */}
      <SwipeableCardStack cards={cards} />
    </div>
  );
};

export default MobileCharactersSection;
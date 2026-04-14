import React from "react";

interface LevelProgressProps {
  levelLabel?: string;
  score?: string;
  progressPercent?: number; // 0-100
  multiplier?: string;
}

// ── Multiplier "card" badge (the angled card with xN text) ──────────────────
const MultiplierBadge: React.FC<{ label: string }> = ({ label }) => (
  <div className="relative w-[25px] h-[30px]">
    {/* back card (grey) */}
    <div
      className="absolute w-[16px] h-[22px] rounded-[1px] rotate-[10.29deg] left-[5px] top-[4px]"
      style={{
        background: "linear-gradient(to bottom, #a1a0b0, #5b5368)",
      }}
    />
    {/* front card (pink-purple gradient) */}
    <div
      className="absolute w-[21px] h-[27px] rounded-[2px] rotate-[-9.42deg] left-0 top-0"
      style={{
        background:
          "linear-gradient(135deg, #5d0e5f, #820f63, #a60f68, #f01070)",
      }}
    />
    <span className="absolute inset-0 flex items-center justify-center text-white text-[12px] font-black rotate-[-9.42deg]">
      {label}
    </span>
  </div>
);

// ── Desktop level row (shown right-aligned on the profile info row) ──────────
export const DesktopLevelProgress: React.FC<LevelProgressProps> = ({
  levelLabel = "Vanta Level Creator 3",
  score = "362/268",
  progressPercent = 76,
  multiplier = "x2",
}) => (
  <div className="hidden md:flex items-center gap-3 flex-shrink-0">
    <span className="text-[#fc187b] font-bold text-[18px] whitespace-nowrap">
      {levelLabel}
    </span>

    {/* Progress bar */}
    <div className="relative w-[293px] h-[6px] bg-[#111827] rounded-[2px] overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full rounded-l-[2px]"
        style={{
          width: `${progressPercent}%`,
          background: "linear-gradient(to right, #fc187b 49%, #9333ea 86%)",
        }}
      />
    </div>

    <span className="text-[#97adcf] text-[14px] font-black tracking-[-0.5px] whitespace-nowrap">
      {score}
    </span>

    <MultiplierBadge label={multiplier} />
  </div>
);

// ── Mobile level display (shown top-left of profile area) ───────────────────
export const MobileLevelDisplay: React.FC<LevelProgressProps> = ({
  score = "362/598",
  progressPercent = 67,
  level = "Lvl  3",
  multiplier = "x2",
  multiplier2 = "x7",
}: LevelProgressProps & {
  level?: string;
  multiplier2?: string;
}) => (
  <div className="md:hidden flex flex-col gap-1">
    {/* Progress bar */}
    <div className="relative w-[78px] h-[6px] bg-black rounded-[2px] overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full rounded-l-[2px]"
        style={{
          width: `${progressPercent}%`,
          background: "linear-gradient(to right, #fc187b 49%, #9333ea 86%)",
        }}
      />
    </div>

    <span className="text-white text-[14px] font-black tracking-[-0.5px]">
      {score}
    </span>

    <span className="text-white text-[18px] font-black">{level}</span>

    <div className="flex gap-2 mt-1">
      <MultiplierBadge label={multiplier} />
      <MultiplierBadge label={multiplier2} />
    </div>
  </div>
);
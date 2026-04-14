import React from "react";
import { MOBILE_ASSETS } from "./mobileAssets";

// ── Icons ────────────────────────────────────────────────────────────────────
const ThreeDotIcon = () => (
  <svg width="4" height="18" viewBox="0 0 4 18" fill="none">
    <circle cx="2" cy="2" r="2" fill="white" />
    <circle cx="2" cy="9" r="2" fill="white" />
    <circle cx="2" cy="16" r="2" fill="white" />
  </svg>
);

// Angled card badge (x2 or x7)
const CardBadge: React.FC<{
  label: string;
  gradient: string; // css gradient string
}> = ({ label, gradient }) => (
  <div className="relative w-[26px] h-[32px]">
    {/* Back card — grey */}
    <div
      className="absolute w-[17px] h-[23px] rounded-[2px]"
      style={{
        background: "linear-gradient(to bottom, #a1a0b0, #5b5368)",
        transform: "rotate(10.29deg)",
        top: "4px",
        left: "5px",
      }}
    />
    {/* Front card — colour gradient */}
    <div
      className="absolute w-[22px] h-[28px] rounded-[2px] flex items-center justify-center"
      style={{
        background: gradient,
        transform: "rotate(-9.42deg)",
        top: 0,
        left: 0,
      }}
    >
      <span
        className="text-white font-black text-[12px] select-none"
        style={{ transform: "rotate(-9.42deg)" }}
      >
        {label}
      </span>
    </div>
  </div>
);

// ── Component ────────────────────────────────────────────────────────────────
const MobileCoverHeader: React.FC = () => {
  return (
    <div className="relative w-full" style={{ height: "200px" }}>
      {/* Cover background image */}
      <img
        src={MOBILE_ASSETS.coverBg}
        alt="Cover"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Dark overlay at bottom for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111827]/80" />

      {/* ── Row 1: progress bar + score + 3-dot ── */}
      <div className="absolute top-[52px] left-0 right-0 px-4 flex items-center gap-3">
        {/* Progress bar */}
        <div className="flex-1 flex flex-col gap-0.5">
          <div className="relative h-[6px] bg-black rounded-[2px] w-[78px]">
            <div
              className="absolute left-0 top-0 h-full rounded-l-[2px]"
              style={{
                width: "67%",
                background: "linear-gradient(to right, #fc187b 49%, #9333ea 86%)",
              }}
            />
          </div>
          <span className="text-white font-black text-[14px] tracking-[-0.5px]">
            362/598
          </span>
        </div>
        {/* Spacer */}
        <div className="flex-1" />
        {/* 3-dot vertical icon */}
        <button className="w-8 h-8 flex items-center justify-center">
          <ThreeDotIcon />
        </button>
      </div>

      {/* ── Row 2: level + badges (left) | profile pic (right) ── */}
      <div className="absolute top-[100px] left-0 right-0 px-4 flex items-center justify-between">
        {/* Left: level text + badges */}
        <div className="flex flex-col gap-1">
          <span className="text-white font-black text-[20px] leading-tight">
            Lvl&nbsp;3&apos;
          </span>
          <div className="flex items-center gap-2">
            <CardBadge
              label="x2"
              gradient="linear-gradient(135deg, #5d0e5f, #820f63, #a60f68, #f01070)"
            />
            <CardBadge
              label="x7"
              gradient="linear-gradient(135deg, #edc214, #d59a23, #bd7132, #deb232, #fef331)"
            />
          </div>
        </div>

        {/* Right: Profile picture */}
        <div
          className="rounded-full overflow-hidden border-[2px]"
          style={{
            width: "59px",
            height: "59px",
            borderColor: "#111827",
          }}
        >
          <img
            src={MOBILE_ASSETS.avatar}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileCoverHeader;
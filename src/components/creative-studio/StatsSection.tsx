import React from "react";
import { ASSETS } from "./assets";

// ── Types ────────────────────────────────────────────────────────────────────
interface Stat {
  label: string;
  value: string;
  showViewBtn?: boolean;
  underlineSrc?: string;
  underlineAltSrc?: string;
}

// ── "View" gold button ────────────────────────────────────────────────────────
const ViewButton: React.FC = () => (
  <button
    className="px-4 py-1 rounded-full text-white font-black text-[15px] whitespace-nowrap hover:opacity-90 transition"
    style={{ background: "linear-gradient(to bottom, #deac17, #bd7132)" }}
  >
    View
  </button>
);

// ── Desktop stats row ─────────────────────────────────────────────────────────
const DESKTOP_STATS: Stat[] = [
  {
    label: "Vanta Tokens",
    value: "893K",
    underlineSrc: ASSETS.underlineGreen,
    underlineAltSrc: ASSETS.underlineGreenAlt,
  },
  {
    label: "Current Tiers",
    value: "Lvl 3",
    underlineSrc: ASSETS.underlinePinkAlt,
    underlineAltSrc: ASSETS.underlinePinkAlt,
  },
  {
    label: "Followers",
    value: "2.8M",
    showViewBtn: true,
    underlineSrc: ASSETS.underlinePink,
    underlineAltSrc: ASSETS.underlinePinkAlt,
  },
  {
    label: "Following",
    value: "789K",
    showViewBtn: true,
    underlineSrc: ASSETS.underlinePink,
    underlineAltSrc: ASSETS.underlinePinkAlt,
  },
];

export const DesktopStatsSection: React.FC = () => (
  <div
    className="hidden md:block w-full"
    style={{
      background: "linear-gradient(to bottom, #21335d, #1a2337)",
    }}
  >
    {/* Top divider */}
    <div className="h-px bg-white/10 mx-6" />

    <div className="grid grid-cols-4 divide-x divide-white/10">
      {DESKTOP_STATS.map((stat, i) => (
        <div key={i} className="relative flex flex-col items-start px-16 py-6 overflow-hidden">
          {/* Decorative lightning bolts */}
          <img
            src={i % 2 === 0 ? ASSETS.lightningUp : ASSETS.lightningDown}
            alt=""
            className="absolute top-0 left-4 h-[51px] w-[54px] pointer-events-none"
            style={{ transform: i % 2 !== 0 ? "scaleY(-1) rotate(180deg)" : "none" }}
          />
          <img
            src={i % 2 === 0 ? ASSETS.lightningUp : ASSETS.lightningDown}
            alt=""
            className="absolute top-0 right-4 h-[51px] w-[54px] pointer-events-none opacity-60"
            style={{ transform: i % 2 === 0 ? "scaleY(-1) rotate(180deg)" : "none" }}
          />

          {/* Stat label */}
          <div className="flex items-center gap-3 mt-8 mb-1">
            <span className="text-white font-bold text-[18px]">{stat.label}</span>
            {stat.showViewBtn && <ViewButton />}
          </div>

          {/* Stat value (large) */}
          <div className="relative">
            <span className="text-white font-bold text-[70px] leading-none">
              {stat.value}
            </span>
            {/* Underline decorative image */}
            {stat.underlineSrc && (
              <img
                src={stat.underlineSrc}
                alt=""
                className="absolute -bottom-2 left-0 w-[120px] pointer-events-none"
              />
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom divider */}
    <div className="h-px bg-white/10 mx-6" />
  </div>
);

// ── Mobile stats card ─────────────────────────────────────────────────────────
export const MobileStatsCard: React.FC = () => (
  <div className="md:hidden mx-5 my-4 relative rounded-[15px] overflow-hidden">
    {/* Card background image */}
    <img
      src={ASSETS.statsCardBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />
    {/* Overlay to darken slightly */}
    <div className="absolute inset-0 bg-[#1a2337]/60" />

    {/* Stats 2×2 grid */}
    <div className="relative grid grid-cols-2 gap-0 divide-x divide-y divide-white/10">
      {/* Vanta Tokens */}
      <div className="px-5 pt-6 pb-4">
        <p className="text-white font-bold text-[18px]">Vanta Tokens</p>
        <p className="text-white font-bold text-[50px] leading-none">893K</p>
      </div>
      {/* Current Tiers */}
      <div className="px-5 pt-6 pb-4">
        <p className="text-white font-bold text-[18px]">Current Tiers</p>
        <p className="text-white font-bold text-[50px] leading-none">Lvl 3</p>
      </div>
      {/* Followers */}
      <div className="px-5 pt-4 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-white font-bold text-[18px]">Followers</p>
        </div>
        <p className="text-white font-bold text-[50px] leading-none">2.8M</p>
      </div>
      {/* Following */}
      <div className="px-5 pt-4 pb-6">
        <p className="text-white font-bold text-[18px]">Following</p>
        <p className="text-white font-bold text-[50px] leading-none">789K</p>
      </div>
    </div>

    {/* Decorative swoosh wave at bottom */}
    <img
      src={ASSETS.mobileWave}
      alt=""
      className="absolute bottom-0 left-0 w-full pointer-events-none opacity-60"
    />
  </div>
);
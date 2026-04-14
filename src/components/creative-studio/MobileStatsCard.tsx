import React from "react";
import { MOBILE_ASSETS } from "./mobileAssets";

// ── Component ────────────────────────────────────────────────────────────────
const MobileStatsCard: React.FC = () => {
  return (
    <div className="mx-5 mb-1 rounded-[18px] overflow-hidden bg-[#1a2337]">
      {/* Top half: Vanta Tokens | Current Tiers */}
      <div className="grid grid-cols-2 px-5 pt-5 pb-4 relative">
        {/* ── Vanta Tokens ── */}
        <div className="flex flex-col">
          <span className="text-white font-bold text-[17px] mb-1">
            Vanta Tokens
          </span>
          <div className="relative inline-block">
            <span className="text-white font-bold text-[48px] leading-none">
              893K
            </span>
            {/* Blue lightning / swoosh decorative */}
            <img
              src={MOBILE_ASSETS.lightningBlue}
              alt=""
              aria-hidden
              className="absolute -bottom-3 -left-2 w-[90px] pointer-events-none"
            />
          </div>
        </div>

        {/* ── Current Tiers ── */}
        <div className="flex flex-col">
          <span className="text-white font-bold text-[17px] mb-1">
            Current Tiers
          </span>
          <div className="relative inline-block">
            <span className="text-white font-bold text-[48px] leading-none">
              Lvl 3
            </span>
            {/* Green swoosh decorative */}
            <img
              src={MOBILE_ASSETS.swooshGreen}
              alt=""
              aria-hidden
              className="absolute -bottom-2 right-0 w-[60px] pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-white/10" />

      {/* Bottom half: Followers | Following */}
      <div className="grid grid-cols-2 px-5 pt-4 pb-5 relative">
        {/* ── Followers ── */}
        <div className="flex flex-col">
          <span className="text-white font-bold text-[17px] mb-1">
            Followers
          </span>
          <div className="relative inline-block">
            <span className="text-white font-bold text-[48px] leading-none">
              2.8M
            </span>
            {/* Blue wave line through number */}
            <img
              src={MOBILE_ASSETS.waveBlue}
              alt=""
              aria-hidden
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-80"
            />
          </div>
        </div>

        {/* ── Following ── */}
        <div className="flex flex-col">
          <span className="text-white font-bold text-[17px] mb-1">
            Following
          </span>
          <div className="relative inline-block">
            <span className="text-white font-bold text-[48px] leading-none">
              789K
            </span>
            {/* Pink wave line */}
            <img
              src={MOBILE_ASSETS.wavePink}
              alt=""
              aria-hidden
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStatsCard;
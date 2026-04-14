import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ASSETS } from "./assets";

interface BannerProps {
  onReplace?: () => void;
  onRemove?: () => void;
}

const Banner: React.FC<BannerProps> = ({ onReplace, onRemove }) => {
  const navigate = useNavigate();
  const [desktopBannerSrc, setDesktopBannerSrc] = useState<string>(ASSETS.bannerDesktop);
  const [desktopProfileSrc, setDesktopProfileSrc] = useState<string>(ASSETS.profilePic);

  return (
    <div className="relative">
      {/* ── Desktop banner ── */}
      <div className="hidden md:block relative h-[290px] w-full overflow-hidden">
        {/* Banner image */}
        <img
          src={desktopBannerSrc}
          alt="Profile banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          onError={() => setDesktopBannerSrc(ASSETS.bannerMobile)}
        />

        {/* Gradient overlay (bottom fade) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[28%] to-[#1a2337]" />

        {/* "Change banner image" overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-bold mb-2">Change banner image</h2>
          <p className="text-base font-semibold text-white/80 mb-5">
            Recommended Dimension 1728 X 290pixels
          </p>
          <div className="flex gap-4">
            <button
              onClick={onReplace}
              className="px-6 py-2 rounded-full bg-[#9333ea] text-white font-bold text-base hover:bg-purple-700 transition"
            >
              Replace
            </button>
            <button
              onClick={onRemove}
              className="text-white font-bold text-base hover:text-white/70 transition"
            >
              Remove
            </button>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate("/profile")}
          className="absolute top-4 left-4 text-white/80 hover:text-white transition z-10"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* ── Mobile banner ── */}
      <div className="md:hidden relative h-[183px] w-full overflow-hidden">
        <img
          src={ASSETS.bannerMobile}
          alt="Profile banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111827]/80" />

        {/* Back button */}
        <button
          onClick={() => navigate("/profile")}
          className="absolute top-4 left-4 text-white/80 hover:text-white transition z-10"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* ── Profile avatar — shared, centred at banner bottom ── */}
      {/* Desktop: centred */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-12 z-10">
        <div className="w-24 h-24 rounded-full border-4 border-[#1a2337] overflow-hidden">
          <img
            src={desktopProfileSrc}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={() => setDesktopProfileSrc(ASSETS.profilePicMobile)}
          />
        </div>
      </div>

      {/* Mobile: top-right corner */}
      <div className="md:hidden absolute right-4 top-[106px] z-10">
        <div className="w-[59px] h-[59px] rounded-full border-[1.844px] border-[#111827] overflow-hidden">
          <img
            src={ASSETS.profilePicMobile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
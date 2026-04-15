import React from "react";
import { DesktopLevelProgress } from "./LevelProgress";

// ── Icons ────────────────────────────────────────────────────────────────────
const SendIcon = () => (
  <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
    <path
      d="M1 1L17 7.5L1 14V9L12 7.5L1 6V1Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const BellIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
    <path
      d="M7 0.5C5.07 0.5 3.5 2.07 3.5 4V4.5C1.8 5.3 0.5 7 0.5 9V11.5H13.5V9C13.5 7 12.2 5.3 10.5 4.5V4C10.5 2.07 8.93 0.5 7 0.5Z"
      stroke="white"
      strokeWidth="1.2"
    />
    <path
      d="M5.5 11.5C5.5 12.3 6.2 13 7 13C7.8 13 8.5 12.3 8.5 11.5"
      stroke="white"
      strokeWidth="1.2"
    />
  </svg>
);

const ChevronDown = () => (
  <svg width="7" height="4" viewBox="0 0 7 4" fill="none">
    <path
      d="M1 1L3.5 3.5L6 1"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// ── Types ────────────────────────────────────────────────────────────────────
type StudioTab = "general" | "creative-studio" | "analytics" | "settings";

interface ProfileInfoProps {
  name?: string;
  handle?: string;
  activeTab: StudioTab;
  onTabChange: (tab: StudioTab) => void;
  onEdit?: () => void;
  onMessageClick?: () => void;
  onNotificationClick?: () => void;
}

// ── Component ────────────────────────────────────────────────────────────────
const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name = "Anthony Joseph",
  handle = "@Josephmaroon021",
  activeTab,
  onTabChange,
  onEdit,
  onMessageClick,
  onNotificationClick,
}) => {
  return (
    <div className="w-full">
      {/* ── Desktop ── */}
      <div className="hidden md:block">
        {/* Name + handle + edit */}
        <div className="text-center mb-6 mt-2">
          <div className="flex items-center justify-center gap-4">
            <div className="text-left">
              <h1 className="text-[25px] font-bold text-white leading-tight">
                {name}
              </h1>

              <p className="text-[#7faef8] text-[17px] font-black tracking-[-0.5px] mt-1">
                {handle}
              </p>
            </div>

            <button
              onClick={onEdit}
              className="mt-2 px-4 py-1.5 rounded-full bg-[#386add] text-white font-black text-[15px] hover:bg-blue-600 transition"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Tab bar row */}
        <div className="flex items-center justify-between px-8 py-3 relative">
          {/* Left: tab buttons + icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onTabChange("general")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-[18px] transition-all ${
                activeTab === "general"
                  ? "bg-[#9333ea] text-white"
                  : "bg-[#252f46] text-white hover:bg-[#2d3a56]"
              }`}
            >
              General
              <svg width="19" height="15" viewBox="0 0 19 15" fill="none">
                <rect y="0" width="19" height="2.5" rx="1.25" fill="white" />
                <rect y="6" width="14" height="2.5" rx="1.25" fill="white" />
                <rect y="12" width="10" height="2.5" rx="1.25" fill="white" />
              </svg>
            </button>

            <div className="relative">
              <span
                className="absolute -top-5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[13px] font-black text-white rounded-[15px] whitespace-nowrap"
                style={{
                  background: "linear-gradient(to bottom, #fc187b, #9333ea)",
                }}
              >
                Coming soon
              </span>

              <button
                onClick={() => onTabChange("creative-studio")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-[18px] transition-all ${
                  activeTab === "creative-studio"
                    ? "bg-[#9333ea] text-white"
                    : "bg-[#252f46] text-white hover:bg-[#2d3a56]"
                }`}
              >
                Creator Studio
                <ChevronDown />
              </button>
            </div>

            {/* Message */}
            <button
              onClick={onMessageClick}
              className="relative p-2 text-gray-400 hover:text-white transition"
            >
              <SendIcon />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border border-[#0d0d1a]" />
            </button>

            {/* Notification */}
            <button
              onClick={onNotificationClick}
              className="relative p-2 text-gray-400 hover:text-white transition"
            >
              <BellIcon />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full border border-[#0d0d1a]" />
            </button>
          </div>

          {/* Right: level progress */}
          <DesktopLevelProgress />
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[20px] font-bold text-white leading-tight">
              {name}
            </h1>
            <p className="text-[#7faef8] text-[15px] font-semibold mt-0.5">
              {handle}
            </p>
          </div>

          <button
            onClick={onEdit}
            className="px-4 py-1 rounded-full bg-[#386add] text-white font-black text-[10px] hover:bg-blue-600 transition"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
import React, { useState } from "react";
import MessagesModal from "../MessagesModal";
import NotificationsModal from "../../components/NotificationsModal";

interface Tab {
  label: string;
  comingSoon?: boolean;
  active?: boolean;
  hasDropdown?: boolean;
}

const tabs: Tab[] = [
  { label: "Creator Studio", comingSoon: true, hasDropdown: true },
  { label: "Realm" },
  { label: "Characters" },
  { label: "Create Clan", comingSoon: true },
  { label: "Feed", active: true },
];

interface FeedSubNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const FeedSubNav: React.FC<FeedSubNavProps> = ({
  activeTab = "Feed",
  onTabChange,
}) => {
  const [msgOpen, setMsgOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block w-full bg-[#0d0d1a] border-b border-white/5 sticky top-0 z-20">
        <div className="flex items-center px-4 py-3">

          {/* LEFT: Icons */}
          

          {/* CENTER: Tabs */}
          <div className="flex items-center justify-center gap-2 flex-1">
            {tabs.map((tab) => {
              const isActive =
                (tab.active && activeTab === "Feed") ||
                activeTab === tab.label;

              return (
                <div key={tab.label} className="relative">
                  {tab.comingSoon && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap z-10">
                      Coming soon
                    </span>
                  )}

                  <button
                    onClick={() => onTabChange?.(tab.label)}
                    className={`flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-150
                      ${
                        isActive
                          ? "bg-pink-600 text-white shadow-lg shadow-pink-900/40"
                          : "bg-[#1a1a2e] text-gray-300 hover:text-white hover:bg-[#222240] border border-white/5"
                      }`}
                  >
                    {tab.label}
                    {tab.hasDropdown && (
                      <span className="text-xs opacity-70">▾</span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Modals */}
      {msgOpen && <MessagesModal onClose={() => setMsgOpen(false)} />}
      {notifOpen && <NotificationsModal onClose={() => setNotifOpen(false)} />}
    </>
  );
};

export default FeedSubNav;
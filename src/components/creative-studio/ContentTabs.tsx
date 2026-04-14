import React from "react";

export type ContentTab =
  | "realms"
  | "characters"
  | "create-clan"
  | "feed"
  | "daily-chronicles"
  | "versus-matches"
  | "achievements";

interface Tab {
  id: ContentTab;
  label: string;
  comingSoon?: boolean;
}

const TABS: Tab[] = [
  { id: "realms", label: "Realm" },
  { id: "characters", label: "Characters" },
  { id: "create-clan", label: "Create Clan", comingSoon: true },
  { id: "feed", label: "Feed" },
];

interface ContentTabsProps {
  activeTab: ContentTab;
  onTabChange: (tab: ContentTab) => void;
}

const ContentTabs: React.FC<ContentTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="hidden md:flex items-center justify-center gap-4 px-8 py-6 overflow-x-auto">
      {TABS.map((tab) => (
        <div key={tab.id} className="relative flex flex-col items-center">
          {tab.comingSoon && (
            <span
              className="mb-1.5 px-2 py-0.5 text-[13px] font-black text-white rounded-[15px] whitespace-nowrap"
              style={{
                background: "linear-gradient(to bottom, #fc187b, #9333ea)",
              }}
            >
              Coming soon
            </span>
          )}
          <button
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-3 rounded-full font-black text-[18px] whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "bg-[#9333ea] text-white"
                : "bg-[#252f46] text-white hover:bg-[#2d3a56]"
            }`}
          >
            {tab.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContentTabs;
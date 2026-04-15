import React, { useState } from "react";
import { Search, Bell, MessageCircle } from "lucide-react";
import MessagesModal from "../../components/MessagesModal";
import NotificationsModal from "../../components/NotificationsModal";

const navLinks = [
  { label: "Discover", link: "feed" },
  { label: "Creators' Hub", link: "profile" },
  { label: "Vanta Wars", link: "feed" },
  { label: "Marketplace", link: "feed" },
  { label: "Kickstart Projects", link: "feed" },
  { label: "Contest", link: "feed" },
  { label: "Community", link: "feed" },
];

const Navbar: React.FC = () => {
  const [msgOpen, setMsgOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block w-full bg-[#0d0d1a] sticky top-0 z-50">
        
        {/* ── Row 1 ── */}
        <div className="flex items-center justify-center gap-6 px-6 py-2 border-b border-white/5">
          <div className="flex items-center flex-shrink-0 mr-2">
            <div className="w-7 h-7 flex items-center justify-center">
              <img
                src="/vantaorigin.png"
                alt="VantaOrigin"
                className="w-7 h-7 object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>

          <div className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.link}
                className="px-3 py-1.5 text-gray-300 hover:text-white text-xs font-medium whitespace-nowrap transition-colors duration-150 hover:bg-white/5 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Row 2 ── */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
          
          {/* LEFT: Message + Notification + Level */}
          <div className="flex items-center gap-2">
            
             

            <div className="w-px h-4 bg-white/10 mx-1" />

            {/* Level */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-orange-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[9px] font-black">Lv</span>
              </div>
              <span className="text-white text-xs font-semibold whitespace-nowrap">
                Lvl 3 Creator
              </span>
              <div className="w-16 h-1.5 bg-gray-700 rounded-full">
                <div className="w-3/4 h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
              </div>
              <span className="text-gray-400 text-[10px]">362/268</span>
              <span className="text-yellow-400 text-xs">⚡</span>
            </div>
          </div>

          {/* CENTER: Search */}
          <div className="relative w-56">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-[#1a1a2e] border border-white/10 px-3 py-1.5 rounded-lg">
              <span className="text-yellow-400 text-sm">🪙</span>
              <span className="text-white text-xs font-bold">2,450 VP</span>
            </div>

            <button className="w-7 h-7 bg-[#1a1a2e] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition text-xs">
              🎒
            </button>

            <button className="w-7 h-7 bg-[#1a1a2e] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition text-xs">
              ⚡
            </button>

            <div className="w-7 h-7 rounded-full bg-gray-600 overflow-hidden border border-white/10 flex-shrink-0">
              <img
                src="/avatar.png"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <button className="text-gray-400 hover:text-white text-xs">▾</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {msgOpen && <MessagesModal onClose={() => setMsgOpen(false)} />}
      {notifOpen && <NotificationsModal onClose={() => setNotifOpen(false)} />}
    </>
  );
};

export default Navbar;
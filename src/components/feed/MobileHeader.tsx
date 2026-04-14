import React, { useState } from "react";
import { X, MessageSquare, Settings, Compass, Swords, ShoppingBag, Trophy, Users } from "lucide-react";
import MessagesModal from "../MessagesModal";

const navLinks = [
  { label: "Discover", Icon: Compass },
  { label: "Creators' Hub", Icon: Trophy },
  { label: "Vanta Wars", Icon: Swords },
  { label: "Marketplace", Icon: ShoppingBag },
  { label: "Community", Icon: Users },
];

const MobileHeader: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const [messages, setMessages] = useState(false);

  return (
    <>
      {/* Fixed mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-[#080814]">
        <button
          onClick={() => setSidebar(true)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
        >
          <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
            <path d="M3 4L15 27L27 4H21L15 17.5L9 4H3Z" fill="#ec4899"/>
          </svg>
        </button>

        <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden border-2 border-purple-500/30">
          <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover"
            onError={e => (e.currentTarget.style.display = "none")} />
        </div>
      </div>

      {/* Spacer */}
      <div className="md:hidden h-14" />

      {/* Sidebar */}
      {sidebar && (
        <div className="md:hidden fixed inset-0 z-50 flex" onClick={() => setSidebar(false)}>
          {/* Panel */}
          <div
            className="w-72 h-full bg-[#0d0d1a] border-r border-white/[0.06] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Top icons */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/[0.05]">
              <button
                onClick={() => { setMessages(true); setSidebar(false); }}
                className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:bg-[#2a2a45] transition"
                style={{ border: "none", cursor: "pointer" }}
              >
                <MessageSquare size={17} className="text-purple-400" />
              </button>
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
                <path d="M3 4L15 27L27 4H21L15 17.5L9 4H3Z" fill="#ec4899"/>
              </svg>
              <button
                className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:bg-[#2a2a45] transition"
                style={{ border: "none", cursor: "pointer" }}
              >
                <Settings size={17} className="text-gray-400" />
              </button>
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center py-6 border-b border-white/[0.05]">
              <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden border-2 border-purple-500/30 mb-3">
                <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover"
                  onError={e => (e.currentTarget.style.display = "none")} />
              </div>
              <p className="text-white font-bold text-sm m-0">Joseph Frank</p>
              <p className="text-gray-500 text-xs mt-0.5">@josephjuice009</p>
            </div>

            {/* Nav links */}
            <nav className="flex-1 py-2">
              {navLinks.map(({ label, Icon }) => (
                <button key={label}
                  className="w-full flex items-center gap-3 px-5 py-3 text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <Icon size={16} className="text-gray-500 flex-shrink-0" />
                  {label}
                </button>
              ))}
            </nav>

            <div className="p-4">
              <button
                onClick={() => setSidebar(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] text-gray-400 text-sm hover:bg-white/10 transition"
                style={{ border: "none", cursor: "pointer" }}
              >
                <X size={14} /> Close menu
              </button>
            </div>
          </div>

          {/* Dim right side */}
          <div className="flex-1 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {messages && <MessagesModal onClose={() => setMessages(false)} />}
    </>
  );
};

export default MobileHeader;
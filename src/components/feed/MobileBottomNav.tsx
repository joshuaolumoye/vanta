import React from "react";
import { Globe, Search, Bell } from "lucide-react";

const MobileBottomNav: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0d0d1a] border-t border-white/5 z-50">
      <div className="flex items-center justify-around px-6 py-3">
        {/* Coffee / Home */}
        <button className="relative flex flex-col items-center text-gray-400 hover:text-white transition">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
          </svg>
          {/* Red dot */}
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Globe */}
        <button className="flex flex-col items-center text-gray-400 hover:text-white transition">
          <Globe size={20} />
        </button>

        {/* Skull */}
        <button className="flex flex-col items-center text-gray-400 hover:text-white transition">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 3C4 3 2 7 2 10c0 2.4 1.3 4.5 3 5.7V18a1 1 0 001 1h10a1 1 0 001-1v-2.3c1.7-1.2 3-3.3 3-5.7 0-3-2-7-7-7H9zM9 18v2M15 18v2M9 14a1 1 0 100-2 1 1 0 000 2zM15 14a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        </button>

        {/* Search */}
        <button className="flex flex-col items-center text-gray-400 hover:text-white transition">
          <Search size={20} />
        </button>

        {/* Bell */}
        <button className="flex flex-col items-center text-gray-400 hover:text-white transition">
          <Bell size={20} />
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
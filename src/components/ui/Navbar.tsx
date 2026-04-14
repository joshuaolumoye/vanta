import React from "react";
import { Search, Bell, Coins } from "lucide-react";

const navLinks = [
  { label: "Discover" },
  { label: "Creators' Hub" },
  { label: "Vanta Wars" },
  { label: "Marketplace" },
  { label: "Kickstart Projects" },
  { label: "Community" },
];

const Navbar: React.FC = () => {
  return (
    <div className="w-full sticky top-0 z-30">
      <div className="flex justify-center px-4 py-3">
        <nav className="w-full max-w-[1200px] bg-black text-white rounded-full px-6 py-1 shadow-lg">
          <div className="flex items-center gap-0">
            {/* Left: Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 rounded-md  flex items-center justify-center">
                <img src="/vantaorigin.png" alt="VantaOrigin Logo" className="w-10 h-10" />
              </div>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="px-3 py-1.5 rounded-full font-medium text-xs text-gray-300 hover:bg-[#2a2a3a] hover:text-white transition-all duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Search Icon */}
              <button 
                className="p-2 rounded-full hover:bg-[#2a2a3a] transition-colors" 
                aria-label="Search"
              >
                <Search size={18} className="text-gray-300" />
              </button>
              
              {/* Notification Icon */}
              <button 
                className="p-2 rounded-full hover:bg-[#2a2a3a] transition-colors" 
                aria-label="Notifications"
              >
                <Bell size={18} className="text-gray-300" />
              </button>
              
              {/* Coins Button */}
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0a0a0f] rounded-lg font-semibold text-sm hover:bg-[#14141f] transition-colors whitespace-nowrap">
                <Coins size={16} className="text-yellow-400" />
                <span className="text-white font-bold">2,450 VP</span>
              </button>
              
              {/* Join VantaOrigin Button */}
              <button className="px-5 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 text-sm shadow-lg shadow-purple-900/30 whitespace-nowrap">
                Join VantaOrigin
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
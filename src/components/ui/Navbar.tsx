import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, Coins, X } from "lucide-react";

const navLinks = [
  { label: "Discover", path: "/feed" },
  { label: "Creators' Hub", path: "/profile" },
  { label: "Vanta Wars", path: "/vanta-wars" },
  { label: "Marketplace", path: "/marketplace" },
  { label: "Kickstart Projects", path: "/kickstart-projects" },
  { label: "Community", path: "/community" },
];

/* Three-dash (≡) hamburger icon */
const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4"  width="16" height="2" rx="1" fill="white" />
    <rect x="2" y="9"  width="16" height="2" rx="1" fill="white" />
    <rect x="2" y="14" width="16" height="2" rx="1" fill="white" />
  </svg>
);

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-30">

      {/* ── MOBILE bar (< lg) ── */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2.5 bg-black text-white">
        {/* Left: hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#2a2a3a] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} className="text-white" /> : <HamburgerIcon />}
        </button>

        {/* Center: logo + wordmark */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/vantaorigin.png" alt="VantaOrigin Logo" className="w-8 h-8" />
          <span className="text-white font-bold text-sm tracking-wide uppercase">
            Vanta Origin
          </span>
        </Link>

        {/* Right: Join button */}
        <Link
          to="/onboarding"
          className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg text-xs shadow-lg shadow-purple-900/30 whitespace-nowrap transition-all"
        >
          Join VantaOrigin
        </Link>
      </div>

      {/* Mobile slide-down drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 z-50">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-[#2a2a3a] hover:text-white transition-all"
              >
                {link.label}
              </Link>
            ))}
            {/* VP balance in drawer */}
            <div className="mt-3 pt-3 border-t border-white/10">
              <button className="flex items-center gap-2 px-3 py-2 bg-[#0a0a0f] rounded-lg hover:bg-[#14141f] transition-colors">
                <Coins size={15} className="text-yellow-400" />
                <span className="text-white font-bold text-xs">2,450 VP</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DESKTOP bar (lg+) ── */}
      <div className="hidden lg:flex justify-center px-4 py-3">
        <nav className="w-full max-w-[1200px] bg-black text-white rounded-full px-6 py-1 shadow-lg">
          <div className="flex items-center gap-0">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center">
              <img src="/vantaorigin.png" alt="VantaOrigin Logo" className="w-10 h-10" />
            </Link>

            {/* Center nav links */}
            <div className="flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="px-3 py-1.5 rounded-full font-medium text-xs text-gray-300 hover:bg-[#2a2a3a] hover:text-white transition-all duration-200 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button className="p-2 rounded-full hover:bg-[#2a2a3a] transition-colors" aria-label="Search">
                <Search size={18} className="text-gray-300" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#2a2a3a] transition-colors" aria-label="Notifications">
                <Bell size={18} className="text-gray-300" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0a0a0f] rounded-lg font-semibold text-sm hover:bg-[#14141f] transition-colors whitespace-nowrap">
                <Coins size={16} className="text-yellow-400" />
                <span className="text-white font-bold">2,450 VP</span>
              </button>
              <Link
                to="/onboarding"
                className="px-5 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 text-sm shadow-lg shadow-purple-900/30 whitespace-nowrap"
              >
                Join VantaOrigin
              </Link>
            </div>
          </div>
        </nav>
      </div>

    </div>
  );
};

export default Navbar;
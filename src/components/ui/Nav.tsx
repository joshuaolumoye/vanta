import React from "react";

const navLinks = [
  { label: "Discover", anchor: "/feed" },
  { label: "Creators' Hub", anchor: "/profile" },
  { label: "Vanta Wars", anchor: "" },
  { label: "Marketplace", anchor: "" },
  { label: "Kickstart Projects", anchor: "" },
  { label: "Contest", anchor: "" },
  { label: "Community", anchor: "" },
];

const NavbarMain: React.FC = () => {
  return (
    <div className="w-full bg-[#0d0d1a] sticky top-0 z-50">
      <div className="flex items-center justify-center gap-6 px-6 py-2 border-b border-white/5">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-2">
          <div className="w-7 h-7 flex items-center justify-center">
            <img
              src="/vantaorigin.png"
              alt="VantaOrigin"
              className="w-7 h-7 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Fallback icon */}
            <svg
              className="w-6 h-6 text-pink-400 hidden"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.anchor}
              className="px-3 py-1.5 text-gray-300 hover:text-white text-xs font-medium whitespace-nowrap transition-colors duration-150 hover:bg-white/5 rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NavbarMain;
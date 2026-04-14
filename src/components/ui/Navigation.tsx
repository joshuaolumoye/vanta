import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="w-full bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">Vanta Origin</div>
          <div className="flex items-center gap-4">
            <button className="text-white/70 hover:text-white transition">
              Explore
            </button>
            <button className="text-white/70 hover:text-white transition">
              Create
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

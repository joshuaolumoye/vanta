import React from "react";
import { Eye } from "lucide-react";

const StatsOverview: React.FC = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-sm mb-3">Stats Overview</h2>

      {/* Vanta Points card */}
      <div className="bg-[#12121f] border border-white/5 rounded-2xl overflow-hidden mb-3">
        <div className="p-4">
          <div className="flex justify-end mb-2">
            <button className="text-[10px] bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded-full font-semibold transition">
              Buy
            </button>
          </div>

          {/* Coin image */}
          <div className="flex justify-center my-3">
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src="/vanta-coins.png"
                alt="Vanta Points"
                className="w-20 h-20 object-contain drop-shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* fallback emoji */}
              <span className="text-5xl">🪙</span>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mb-1">Vanta Points</p>
          <p className="text-center text-white text-3xl font-black">278</p>

          {/* Payment providers */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="border border-gray-600 text-gray-400 text-[9px] px-2 py-0.5 rounded font-medium tracking-wide">
              flutterwave
            </span>
            <span className="border border-gray-600 text-gray-400 text-[9px] px-2 py-0.5 rounded italic font-medium">
              stripe
            </span>
            <span className="border border-blue-500 text-blue-400 text-[9px] px-2 py-0.5 rounded font-bold">
              PayPal
            </span>
          </div>
        </div>
      </div>

      {/* Level / Followers card */}
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-pink-900/80 via-rose-900/70 to-purple-900/80 border border-pink-500/20 relative">
        {/* decorative glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/20 rounded-full -translate-y-6 translate-x-6 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/20 rounded-full translate-y-4 -translate-x-4 blur-xl" />
        </div>

        <div className="relative p-4">
          <p className="text-pink-300 text-[10px] font-semibold uppercase tracking-widest mb-1">
            Current Tiers
          </p>
          <p className="text-white text-3xl font-black mb-4">Lvl 3</p>

          <div className="mb-4">
            <p className="text-gray-300 text-xs mb-1">Followers</p>
            <div className="flex items-end justify-between">
              <p className="text-white text-2xl font-black">3.2M</p>
              <button className="flex items-center gap-1 text-[10px] text-pink-300 border border-pink-500/40 px-2.5 py-1 rounded-full hover:bg-pink-500/10 transition">
                <Eye size={10} />
                View
              </button>
            </div>
          </div>

          <div>
            <p className="text-gray-300 text-xs mb-1">Following</p>
            <div className="flex items-end justify-between">
              <p className="text-white text-2xl font-black">789k</p>
              <button className="flex items-center gap-1 text-[10px] text-pink-300 border border-pink-500/40 px-2.5 py-1 rounded-full hover:bg-pink-500/10 transition">
                <Eye size={10} />
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
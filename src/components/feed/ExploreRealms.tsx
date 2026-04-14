import React from "react";
import { Search } from "lucide-react";

const realms = [
  {
    name: "Fire Realm",
    members: "978k members",
    icon: "🔥",
    image: "/realm-fire.png",
  },
  {
    name: "Water Realm",
    members: "779k members",
    icon: "💧",
    image: "/realm-water.png",
  },
  {
    name: "Air Realm",
    members: "1.3m members",
    icon: "🌪️",
    image: "/realm-air.png",
  },
  {
    name: "Stone Realm",
    members: "2.8m members",
    icon: "🪨",
    image: "/realm-stone.png",
  },
];

const ExploreRealms: React.FC = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-sm mb-3">Explore Realms</h2>

      <div className="bg-[#12121f] border border-white/5 rounded-2xl overflow-hidden">
        {/* Search */}
        <div className="p-4 pb-3">
          <div className="relative mb-3">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search communities"
              className="w-full bg-[#1e1e35] border border-white/10 rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
            />
          </div>

          <p className="text-gray-400 text-xs leading-relaxed">
            Unite with creators, readers, and dreamers shaping the future of
            mythic storytelling.
          </p>
        </div>

        {/* Realm list */}
        <div className="divide-y divide-white/5">
          {realms.map((realm) => (
            <div
              key={realm.name}
              className="flex items-center gap-3 px-4 py-3"
            >
              {/* Realm image/icon */}
              <div className="w-9 h-9 rounded-lg bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={realm.image}
                  alt={realm.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-lg">{realm.icon}</span>
              </div>

              {/* Name + members */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-semibold truncate">
                  {realm.name}
                </p>
                <p className="text-gray-500 text-[10px]">{realm.members}</p>
              </div>

              {/* Join button */}
              <button className="bg-blue-500 hover:bg-blue-400 text-white text-[10px] font-semibold px-3 py-1 rounded-full transition flex-shrink-0">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreRealms;
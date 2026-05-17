import React from "react";

const realms = [
  { id: "fire",  label: "Fire Realm",  color: "bg-orange-400", icon: "🔥", progress: 75 },
  { id: "water", label: "Water Realm", color: "bg-sky-300",    icon: "💧", progress: 55 },
  { id: "air",   label: "Air Realm",   color: "bg-slate-200",  icon: "🌪️", progress: 40 },
  { id: "stone", label: "Stone Realm", color: "bg-lime-400",   icon: "💎", progress: 30 },
];

const SeasonProgressCard: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111827] py-14 sm:py-20 flex justify-center px-4 sm:px-6">
      <div
        className="
          w-full max-w-md sm:max-w-lg md:max-w-2xl
          rounded-2xl
          bg-gradient-to-b from-slate-800/80 to-slate-900/90
          border border-white/5
          backdrop-blur-xl
          shadow-2xl
          p-6 sm:p-8
          text-white
        "
      >
        <p className="text-xs text-center text-slate-400 mb-5 sm:mb-6">Season progress</p>

        {/* countdown */}
        <div className="flex justify-center gap-6 sm:gap-8 mb-7 sm:mb-8">
          {[
            { value: "28", label: "DAYS" },
            { value: "09", label: "HOURS" },
            { value: "20", label: "MINS" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-base sm:text-lg font-semibold">{item.value}</div>
              <div className="text-[10px] tracking-widest text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>

        {/* realm bars */}
        <div className="space-y-5 sm:space-y-6">
          {realms.map((realm) => (
            <div key={realm.id}>
              <div className="flex items-center justify-center gap-2 mb-1.5 text-xs text-slate-300">
                <span>{realm.icon}</span>
                <span>{realm.label}</span>
              </div>
              <div className="relative h-1.5 rounded-full bg-slate-700/60 overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full rounded-full ${realm.color}`}
                  style={{ width: `${realm.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 transition text-xs font-medium shadow-lg shadow-indigo-500/20">
            Join the Next War
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeasonProgressCard;
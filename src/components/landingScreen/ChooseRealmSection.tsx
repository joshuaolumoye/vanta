import React from "react";

/* ========= data ========= */
const realms = [
  {
    id: "obaalu",
    icon: "🔥",
    title: "Obaalu — The Emberforge of Creation",
    description:
      "Born of flame and molten will, Obaalu represents the relentless spirit of creation.",
    members: "789k members",
  },
  {
    id: "iyanu",
    icon: "💧",
    title: "Iyanu — The Eternal Flow",
    description:
      "The realm of dreams and reflection. Iyanu embodies creativity in motion.",
    members: "789k members",
  },
  {
    id: "urukojin",
    icon: "🌪️",
    title: "Urukojin — The Celestial Drift",
    description:
      "Forged from the unseen and untamed. Urukojin is freedom incarnate.",
    members: "789k members",
  },
  {
    id: "aethera",
    icon: "✨",
    title: "Aethera — The Silent Ascension",
    description:
      "A realm of clarity and higher purpose. Aethera nurtures strategists.",
    members: "642k members",
  },
];

/* ========= Card ========= */
const RealmCard = ({
  icon,
  title,
  description,
  members,
}: {
  icon: string;
  title: string;
  description: string;
  members: string;
}) => (
  <div
    className="
      min-w-[320px] max-w-[320px]
      h-[380px]
      rounded-2xl
      bg-gradient-to-b from-slate-800/80 to-slate-900/90
      border border-white/5
      p-6
      backdrop-blur-xl
      flex flex-col
      select-none
    "
  >
    {/* top content grows */}
    <div className="flex-1">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>

    {/* bottom always aligned */}
    <div className="flex items-center justify-between pt-6">
      <button className="px-4 py-2 text-sm font-medium rounded-full bg-purple-600 hover:bg-purple-500 transition text-white">
        Open
      </button>
      <span className="text-xs text-slate-400">{members}</span>
    </div>
  </div>
);

/* ========= Section ========= */
const ChooseRealmSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111827] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="mb-10">
          <p className="text-xs text-slate-400 mb-2">VantaOrigin</p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose your Realms
          </h2>
          <p className="max-w-xl text-slate-400 text-sm">
            Every creator draws their power from one of the four realms.
          </p>
        </div>

        {/* swipe-only slider */}
        <div
          className="
            flex gap-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
            touch-pan-x
            cursor-grab active:cursor-grabbing
          "
        >
          {realms.map((realm) => (
            <div key={realm.id} className="snap-start">
              <RealmCard {...realm} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseRealmSection;

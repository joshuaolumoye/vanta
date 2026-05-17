import React, { useRef } from "react";

/* ─── Realm SVG icons (matches Figma — swap emojis for proper icons) ─── */
const RealmIcon = ({ id }: { id: string }) => {
  switch (id) {
    case "obaalu":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#7C3AED" fillOpacity="0.25" />
          <path d="M18 8c0 0-7 6-7 11a7 7 0 0014 0c0-5-7-11-7-11z" fill="#A78BFA" />
          <path d="M18 16c0 0-3 3-3 5a3 3 0 006 0c0-2-3-5-3-5z" fill="#EDE9FE" />
        </svg>
      );
    case "iyanu":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#1E3A5F" fillOpacity="0.5" />
          {/* water drop — matches the Figma icon */}
          <path
            d="M18 9C18 9 11 16.5 11 21.5C11 25.09 14.13 28 18 28C21.87 28 25 25.09 25 21.5C25 16.5 18 9 18 9Z"
            fill="#60A5FA"
          />
          <path
            d="M15 22C15 22 15 24.5 18 24.5"
            stroke="#BFDBFE"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "urukojin":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#1F2937" fillOpacity="0.6" />
          <path d="M18 8 L20 16 L28 18 L20 20 L18 28 L16 20 L8 18 L16 16 Z" fill="#94A3B8" />
        </svg>
      );
    case "aethera":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#312E81" fillOpacity="0.35" />
          <path d="M18 10 L19.5 16 L26 18 L19.5 20 L18 26 L16.5 20 L10 18 L16.5 16 Z" fill="#A5B4FC" />
          <circle cx="18" cy="18" r="2" fill="#E0E7FF" />
        </svg>
      );
    default:
      return null;
  }
};

/* ─── Data — add `bgImage` (path) and `leadText` (bold opening sentence) ─── */
const realms = [
  {
    id: "obaalu",
    title: "Obaalu — The Emberforge of Creation",
    leadText: "Born of flame and molten will, Obaalu represents the relentless spirit of creation.",
    bodyText: "Here, legends are forged through sacrifice, and every scar is a story etched in fire.",
    members: "789k",
    bgImage: "/images/creation.png", // 🔁 replace with your actual image path
  },
  {
    id: "iyanu",
    title: "Iyanu — The Eternal Flow",
    leadText: "The realm of dreams and reflection, Iyanu embodies creativity in motion.",
    bodyText: "Here, stories ripple like waves — ever-changing, ever-evolving. Its dwellers are poets, healers, and visionaries who shape emotion into art.",
    members: "789k",
    bgImage: "/images/flow.png", // 🔁 replace with your actual image path
  },
  {
    id: "urukojin",
    title: "Urukojin — The Celestial Drift",
    leadText: "Forged from the unseen and untamed, Urukojin is freedom incarnate.",
    bodyText: "A realm of wanderers and wind-walkers. Those who belong here follow no path — they carve their own.",
    members: "789k",
    bgImage: "/images/drift.png", // 🔁 replace with your actual image path
  },
  {
    id: "aethera",
    title: "Aethera — The Silent Ascension",
    leadText: "A realm of clarity and higher purpose, Aethera nurtures strategists.",
    bodyText: "In the stillness between stars, Aethera's children think in centuries and build in silence — until the moment they strike.",
    members: "642k",
    bgImage: "/images/flow.png", // 🔁 replace with your actual image path
  },
];

/* ─── Card ─── */
const RealmCard = ({
  id,
  title,
  leadText,
  bodyText,
  members,
  bgImage,
}: {
  id: string;
  title: string;
  leadText: string;
  bodyText: string;
  members: string;
  bgImage: string;
}) => (
  <div
    className="
      relative flex-shrink-0 overflow-hidden
      w-[280px] sm:w-[300px] md:w-[320px]
      h-[420px] sm:h-[440px]
      rounded-2xl
      bg-[#131c2e]
      border border-white/5
      flex flex-col
      select-none
    "
  >
    {/* ── decorative bottom bg image ── */}
    {bgImage && (
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] bg-bottom bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
    )}

    {/* ── subtle bottom fade so text stays readable over the bg image ── */}
    <div
      className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
      style={{
        background:
          "linear-gradient(to top, #131c2e 35%, transparent 100%)",
      }}
      aria-hidden="true"
    />

    {/* ── content (sits above decorations) ── */}
    <div className="relative z-10 flex flex-col flex-1 p-6">
      {/* icon */}
      <div className="mb-5">
        <RealmIcon id={id} />
      </div>

      {/* title */}
      <h3 className="text-xl font-bold text-white leading-snug mb-4">
        {title}
      </h3>

      {/* description — bold lead + regular body */}
      <p className="text-sm text-white leading-relaxed flex-1">
        <span className="font-bold">{leadText}</span>
        {bodyText ? ` ${bodyText}` : ""}
      </p>

      {/* footer */}
      <div className="flex items-center justify-between pt-5 mt-auto">
        <button className="px-5 py-2 text-sm font-semibold rounded-full bg-purple-600 hover:bg-purple-500 active:scale-95 transition-all text-white">
          Open
        </button>
        <span className="text-sm text-white">
          <span className="font-bold">{members}</span> members
        </span>
      </div>
    </div>
  </div>
);

/* ─── Section ─── */
const ChooseRealmSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };
  const stop = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
  };

  return (
    <section className="relative w-full bg-[#111827] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* section header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs text-slate-400 mb-2">VantaOrigin</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Choose your Realms
          </h2>
          <p className="max-w-xl text-slate-400 text-sm">
            Every creator draws their power from one of the four realms.
          </p>
        </div>

        {/* horizontal scroll row */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: "grab",
          }}
          onMouseDown={onMouseDown}
          onMouseLeave={stop}
          onMouseUp={stop}
          onMouseMove={onMouseMove}
        >
          {realms.map((realm) => (
            <div key={realm.id} className="snap-start">
              <RealmCard {...realm} />
            </div>
          ))}
          {/* trailing spacer */}
          <div className="flex-shrink-0 w-4 sm:w-6" />
        </div>
      </div>
    </section>
  );
};

export default ChooseRealmSection;
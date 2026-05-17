import React, { useRef } from "react";

/* ========= JSON data ========= */
const creations = [
  {
    id: "boy-saviour",
    title: "The Boy Saviour",
    author: "@DFX",
    image: "/images/saviour.png",
  },
  {
    id: "nakamora",
    title: "Nakamora",
    author: "@Valerian",
    image: "/images/Nakamora.png",
  },
  {
    id: "shou-monk",
    title: "Shou monk",
    author: "@Famejr",
    image: "/images/Shoumonk.png",
  },
  {
    id: "bloody-vampire",
    title: "Bloody vampire",
    author: "@Voltex",
    image: "/images/Bloodyvampire.png",
    hasArrow: true,
  },
];

/* ========= Card ========= */
interface CreationCardProps {
  title: string;
  author: string;
  image: string;
  hasArrow?: boolean;
  onArrowClick?: () => void;
}

const CreationCard: React.FC<CreationCardProps> = ({
  title,
  author,
  image,
  hasArrow,
  onArrowClick,
}) => (
  <div className="group flex-shrink-0 w-[200px] sm:w-[220px] md:w-[260px]">
    <div className="relative h-[280px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden bg-slate-800">
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Arrow — sits on the right edge of the last card, vertically centered */}
      {hasArrow && (
        <button
          onClick={onArrowClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>

    {/* Caption */}
    <p className="mt-3 text-xs sm:text-sm font-medium text-white">
      {title}{" "}
      <span className="text-blue-400 font-normal">by {author}</span>
    </p>
  </div>
);

/* ========= Section ========= */
const StoryNeverEndsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const stop = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleArrowClick = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-16 sm:py-28 bg-[#111827] overflow-hidden">
      {/* Header — respects max-width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-[10px] tracking-widest text-slate-400 uppercase mb-2 sm:mb-3">
            Stay inspired. Stay infinite. Stay Vanta.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            The Story Never Ends — It Evolves with You
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Every idea, every sketch, every tale adds a spark to the Originverse.
            Join a community where creators and fans shape worlds together —
            one story, one legend, one origin at a time.
          </p>
        </div>
      </div>

      {/* Cards — left-aligned to content edge, bleed fully to right */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-4 mb-10 sm:mb-16"
        style={{
          paddingLeft: "clamp(16px, calc((100vw - 1280px) / 2 + 24px), 50vw)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseLeave={stop}
        onMouseUp={stop}
        onMouseMove={onMouseMove}
      >
        {creations.map((item) => (
          <CreationCard
            key={item.id}
            {...item}
            onArrowClick={handleArrowClick}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <button className="px-7 sm:px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm font-medium text-white">
          Join the discussion
        </button>
      </div>
    </section>
  );
};

export default StoryNeverEndsSection;
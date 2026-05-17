import React, { useRef } from "react";

const creations = [
  { id: "boy-saviour",    title: "The Boy Saviour",   author: "@DFX",      image: "/creation-boy.png" },
  { id: "nakamora",       title: "Nakamora",           author: "@Velarian", image: "/creation-nakamora.png" },
  { id: "shou-monk",      title: "Shou monk",          author: "@Famjr",    image: "/creation-shou.png" },
  { id: "bloody-vampire", title: "Bloody vampire",     author: "@Voltex",   image: "/creation-vampire.png", hasPreview: true },
];

interface CreationCardProps {
  title: string;
  author: string;
  image: string;
  hasPreview?: boolean;
}

const CreationCard: React.FC<CreationCardProps> = ({ title, author, image, hasPreview }) => (
  <div className="group flex-shrink-0">
    <div className="relative w-[200px] sm:w-[220px] md:w-[260px] h-[280px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden bg-slate-800">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      {hasPreview && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="#0f172a" />
            </svg>
          </div>
        </div>
      )}
    </div>
    <p className="mt-3 text-xs sm:text-sm font-medium text-white">
      {title} <span className="text-slate-400">by {author}</span>
    </p>
  </div>
);

const StoryNeverEndsSection: React.FC = () => {
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
    scrollRef.current.scrollLeft =
      scrollLeft.current - (e.pageX - scrollRef.current.offsetLeft - startX.current) * 1.5;
  };

  return (
    <section className="relative w-full py-16 sm:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-xs text-slate-400 mb-2 sm:mb-3">
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

        {/* cards — horizontal scroll on all sizes */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-4 mb-10 sm:mb-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab" }}
          onMouseDown={onMouseDown}
          onMouseLeave={stop}
          onMouseUp={stop}
          onMouseMove={onMouseMove}
        >
          {creations.map((item) => (
            <CreationCard key={item.id} {...item} />
          ))}
          <div className="flex-shrink-0 w-4" />
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-7 sm:px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm font-medium text-white">
            Join the discussion
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoryNeverEndsSection;
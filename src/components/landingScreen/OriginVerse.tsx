import React from "react";

/* ========= JSON data ========= */
const stories = [
  {
    id: "iyanu-etere",
    tag: "STORIES FORGED IN THE ORIGIN",
    category: "Featured comics",
    title: "Iyanu-Etere: The Song Beneath the Waves",
    description:
      "In the depths of the shifting seas, where silence hums with ancient power, Iyanu-Etere reigns. Born from the heart of the primordial tides, her every movement ripples across oceans, shaping storms and calming chaos.",
    cta: "Read Now",
    image: "/yemoja.png",
  },
  {
    id: "urukojin-whispers",
    tag: "STORIES FORGED IN THE ORIGIN",
    category: "Top picks",
    title: "Urukojin — Whispers of the Wind",
    description:
      "Where the horizon bends and the skies breathe freedom, Urukojin drifts. A tale of wanderers, unseen paths, and voices carried by the wind.",
    cta: "Read Now",
    image: "/story-urukojin.png",
  },
  {
    id: "obaalu-embers",
    tag: "STORIES FORGED IN THE ORIGIN",
    category: "Editor's choice",
    title: "Obaalu — Embers That Shape Worlds",
    description:
      "From molten stone and relentless fire, legends are forged. Obaalu tells the story of creation through sacrifice, fury, and rebirth.",
    cta: "Read Now",
    image: "/story-obaalu.png",
  },
];

/* ========= Card ========= */
interface StoryCardProps {
  tag: string;
  category: string;
  title: string;
  description: string;
  cta: string;
  image: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  tag,
  category,
  title,
  description,
  cta,
  image,
}) => {
  return (
    <div className="min-w-[720px] h-[360px] rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/95 border border-white/5 backdrop-blur-xl overflow-hidden flex">
      {/* text */}
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <p className="text-[10px] tracking-widest text-emerald-400 mb-3">
            {tag}
          </p>
          <p className="text-xs text-slate-400 mb-2">{category}</p>
          <h3 className="text-xl font-semibold text-white mb-4">
            {title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        <button className="self-start px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-400 transition text-sm font-medium text-white">
          {cta}
        </button>
      </div>

      {/* image */}
      <div
        className="w-[260px] bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

/* ========= Section ========= */
const OriginVerse: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111827] py-24">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-3xl text-start font-bold text-white mb-4">
          Your universe awaits, fueled by imagination, built by you!!! 
        </h2>
        <p className="max-w-2xl text-start text-white text-sm">
          Step beyond the pages and into a living universe shaped by its storytellers. From epic comics to character chronicles, every creation adds a new chapter to the expanding VantaOrigin realm. Connect, collaborate, and rise among legends — your journey begins here.
        </p>
      </div>

      {/* slider */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            flex gap-8
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
            cursor-grab active:cursor-grabbing
          "
        >
          {stories.map((story) => (
            <div key={story.id} className="snap-start">
              <StoryCard {...story} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginVerse;
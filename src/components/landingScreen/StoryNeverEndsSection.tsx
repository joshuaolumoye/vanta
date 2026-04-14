import React from "react";

/* ========= DATA ========= */
const creations = [
  {
    id: "boy-saviour",
    title: "The Boy Saviour",
    author: "@DFX",
    image: "/creation-boy.png",
  },
  {
    id: "nakamora",
    title: "Nakamora",
    author: "@Velarian",
    image: "/creation-nakamora.png",
  },
  {
    id: "shou-monk",
    title: "Shou monk",
    author: "@Famjr",
    image: "/creation-shou.png",
  },
  {
    id: "bloody-vampire",
    title: "Bloody vampire",
    author: "@Voltex",
    image: "/creation-vampire.png",
    hasPreview: true,
  },
];

/* ========= CARD ========= */
interface CreationCardProps {
  title: string;
  author: string;
  image: string;
  hasPreview?: boolean;
}

const CreationCard: React.FC<CreationCardProps> = ({
  title,
  author,
  image,
  hasPreview,
}) => {
  return (
    <div className="group">
      <div className="relative w-[260px] h-[360px] rounded-2xl overflow-hidden bg-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />

        {hasPreview && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 5v14l11-7L8 5z"
                  fill="#0f172a"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm font-medium text-white">
        {title} <span className="text-slate-400">by {author}</span>
      </p>
    </div>
  );
};

/* ========= SECTION ========= */
const StoryNeverEndsSection: React.FC = () => {
  return (
    <section className="relative w-full py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs text-slate-400 mb-3">
            Stay inspired. Stay infinite. Stay Vanta.
          </p>

          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            The Story Never Ends — It Evolves with You
          </h2>

          <p className="text-sm text-slate-400 leading-relaxed">
            Every idea, every sketch, every tale adds a spark to the Originverse.
            Join a community where creators and fans shape worlds together —
            one story, one legend, one origin at a time.
          </p>
        </div>

        {/* cards */}
        <div className="flex gap-8 mb-16">
          {creations.map((item) => (
            <CreationCard key={item.id} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm font-medium text-white">
            Join the discussion
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoryNeverEndsSection;

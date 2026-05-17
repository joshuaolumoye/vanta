import React from "react";

const projects = [
  {
    id: "dragon-king",
    title: "The Last Dragon King",
    description: "An epic 12-chapter comic series about the final dragon ruler.",
    image: "last_dragon.png",
    progress: 78,
    raised: "15,248 VP raised",
    timeLeft: "12 Days left",
  },
  {
    id: "boy-saviour",
    title: "The Boy Saviour",
    description: "A cyberpunk thriller set in the year 1948 eroding the old spark.",
    image: "last_boy.png",
    progress: 90,
    raised: "24,248 VP raised",
    timeLeft: "14 Days left",
  },
  {
    id: "academy-arcanes",
    title: "Academy of Arcanes",
    description: "Young mages discover the darkest secret within their school walls.",
    image: "academy_arcanes.png",
    progress: 53,
    raised: "9,248 VP raised",
    timeLeft: "10 Days left",
  },
];

const FoundryCard = ({
  title, description, image, progress, raised, timeLeft,
}: {
  title: string; description: string; image: string;
  progress: number; raised: string; timeLeft: string;
}) => (
  <div className="rounded-xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-white/5 overflow-hidden backdrop-blur-xl shadow-xl flex flex-col">
    <div className="relative h-36 sm:h-40 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
    <div className="p-4 sm:p-5 flex-1 flex flex-col">
      <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
      <p className="text-xs text-slate-400 mb-4 leading-relaxed">{description}</p>
      <div className="mt-auto">
        <div className="flex justify-between text-[10px] text-slate-400 mb-1">
          <span>Progress</span>
          <span>{progress}% funded</span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-700/60 overflow-hidden mb-2.5 sm:mb-3">
          <div className="h-full bg-lime-400 rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between text-[10px] text-slate-400">
          <span>{raised}</span>
          <span>{timeLeft}</span>
        </div>
      </div>
    </div>
  </div>
);

const VantaFoundrySection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111827] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 max-w-2xl">
          <p className="text-xs text-slate-400 mb-2">VantaOrigin</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            VantaFoundry — Forge and Fund the Next Generation of Mythic Stories
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Support visionary creators, back extraordinary worlds, and help
            shape the stories that will define the Originverse. Every
            contribution sparks a new legend — every legend begins with you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <FoundryCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VantaFoundrySection;
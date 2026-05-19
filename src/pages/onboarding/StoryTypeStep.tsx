import React, { useState } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';

interface StoryTypeStepProps {
  onNext: (selected: string) => void;
  onBack: () => void;
  onSkip?: () => void;
  onClose?: () => void;
}

// ── Category config ──────────────────────────────────────────────────────────
// Replace the `cards` arrays with your own imported image paths/URLs.
// Each category shows 2–3 stacked card images fanned out.
const storyTypes = [
  {
    id: 'anime',
    name: 'Anime',
    // Add your own image paths here, e.g. import animeCard1 from './assets/anime1.png'
    cards: [
      '/assets/story-types/anime-card1.png',
      '/assets/story-types/anime-card2.png',
      '/assets/story-types/anime-card3.png',
    ],
    // Fallback gradient shown if images don't load
    gradient: 'from-violet-600/60 to-blue-700/60',
  },
  {
    id: 'comics-manga',
    name: 'Comics/Manga',
    cards: [
      '/assets/story-types/comics-card1.png',
      '/assets/story-types/comics-card2.png',
      '/assets/story-types/comics-card3.png',
    ],
    gradient: 'from-yellow-600/60 to-orange-600/60',
  },
  {
    id: 'furry-fandom',
    name: 'Furry fandom',
    cards: [
      '/assets/story-types/furry-card1.png',
      '/assets/story-types/furry-card2.png',
      '/assets/story-types/furry-card3.png',
    ],
    gradient: 'from-pink-700/60 to-purple-800/60',
  },
  {
    id: 'gaming-streaming',
    name: 'Gaming/Streaming',
    cards: [
      '/assets/story-types/gaming-card1.png',
      '/assets/story-types/gaming-card2.png',
      '/assets/story-types/gaming-card3.png',
    ],
    gradient: 'from-cyan-700/60 to-indigo-700/60',
  },
];

// Fan angles for the three stacked cards inside each tile
const FAN_ANGLES = [-14, 0, 14];

// ── Component ────────────────────────────────────────────────────────────────
const StoryTypeStep: React.FC<StoryTypeStepProps> = ({ onNext, onBack, onSkip, onClose }) => {
  const [selected, setSelected] = useState('');

  return (
    <div className="min-h-screen bg-[#0f1624] flex flex-col">

      {/* ── Hero banner (same style as WelcomeScreen) ── */}
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: 'clamp(160px, 20vw, 280px)' }}>
        {/* Background scene — same hero image used elsewhere in the app */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(vanta-hero.png)', backgroundColor: '#1a1a2e' }}
        />
        {/* Ambient glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        {/* Bottom fade into page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1624]/20 to-[#0f1624]" />
      </div>

      {/* ── Content ── */}
      <div className="flex-1 px-4 pb-10 md:px-8 lg:px-16 -mt-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Close (X) button — centered, just like in the screenshot */}
          <div className="flex justify-center mb-6">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition"
            >
              <X size={16} />
            </button>
          </div>

          {/* Progress dots — 2 total, second active */}
          <div className="flex justify-center gap-2 mb-7">
            {[0, 1].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === 0 ? 'w-6 bg-blue-400' : 'w-1.5 bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-white mb-3 leading-snug">
              What kind of stories spark your imagination?
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              From cosmic battles to slice-of-life adventures — tell us what kind of comics make you lose track of time.
            </p>
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-3xl mx-auto mb-9">
            {storyTypes.map((type) => {
              const isSelected = selected === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelected(type.id)}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'ring-2 ring-blue-400 scale-[1.03]'
                      : 'hover:scale-[1.03] ring-1 ring-white/10'
                  }`}
                  style={{ background: '#141e30' }}
                >
                  {/* Selected checkmark */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-20 shadow-md">
                      <Check size={13} className="text-white" strokeWidth={3} />
                    </div>
                  )}

                  {/* Card fan artwork area */}
                  <div className={`relative w-full bg-gradient-to-br ${type.gradient}`}
                       style={{ height: 'clamp(130px, 16vw, 210px)' }}>

                    {/* Fanned cards */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {type.cards.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt=""
                          aria-hidden
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          className="absolute object-cover rounded-lg shadow-xl"
                          style={{
                            width: 'clamp(55px, 7vw, 90px)',
                            height: 'clamp(72px, 9.5vw, 118px)',
                            transform: `rotate(${FAN_ANGLES[idx]}deg) translateX(${(idx - 1) * 18}px)`,
                            zIndex: idx + 1,
                            transformOrigin: 'bottom center',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="bg-[#141e30] px-3 py-3 text-left">
                    <p className="text-white font-semibold text-sm">{type.name}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Actions row — matches screenshot: Back | Continue | Skip for now */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={onBack}
              className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition"
            >
              Back
            </button>

            <button
              onClick={() => selected && onNext(selected)}
              disabled={!selected}
              className={`px-10 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                selected
                  ? 'bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white shadow-lg shadow-purple-500/40 transform hover:scale-105'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              Welcome
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default StoryTypeStep;
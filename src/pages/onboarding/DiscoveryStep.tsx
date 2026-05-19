import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface DiscoveryStepProps {
  onNext: (selected: string) => void;
  onBack: () => void;
  onSkip?: () => void;
  onClose?: () => void;
}

const discoveryOptions = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook',  label: 'Facebook'  },
  { id: 'youtube',   label: 'YouTube'   },
  { id: 'tiktok',    label: 'TikTok'    },
  { id: 'friend',    label: 'From a friend' },
  { id: 'others',    label: 'Others'    },
];

const DiscoveryStep: React.FC<DiscoveryStepProps> = ({ onNext, onBack, onSkip, onClose }) => {
  const [selected, setSelected] = useState('');

  return (
    <div className="min-h-screen bg-[#0f1624] flex flex-col">

      {/* ── Hero banner ── */}
      <div
        className="relative w-full overflow-hidden flex-shrink-0"
        style={{ height: 'clamp(160px, 20vw, 280px)' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(vanta-hero.png)', backgroundColor: '#1a1a2e' }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1624]/20 to-[#0f1624]" />
      </div>

      {/* ── Content ── */}
      <div className="flex-1 px-4 pb-10 md:px-8 lg:px-16 -mt-6 relative z-10">
        <div className="max-w-md mx-auto">

          {/* X close button */}
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
                  i === 1 ? 'w-6 bg-blue-400' : 'w-1.5 bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Heading */}
          <div className="text-center mb-7">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
              How did you discover the Vanta Realm?
            </h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto">
              Was it a post, a friend, or a whisper through the comic feed? We'd love to know how you found your way here.
            </p>
          </div>

          {/* Options list — compact, no icons */}
          <div className="space-y-2 mb-8">
            {discoveryOptions.map((option) => {
              const isSelected = selected === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelected(option.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'bg-[#1a2540] border-blue-400 ring-1 ring-blue-400/40'
                      : 'bg-[#141e30] border-white/10 hover:border-white/25 hover:bg-[#1a2540]'
                  }`}
                >
                  <span className="text-white font-medium text-sm">{option.label}</span>

                  {/* Radio / check indicator */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      isSelected ? 'border-blue-400 bg-blue-500' : 'border-slate-500'
                    }`}
                  >
                    {isSelected && <Check size={9} className="text-white" strokeWidth={3} />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Actions row */}
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
              Continue
            </button>

            <button
              onClick={onSkip}
              className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
            >
              Skip for now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DiscoveryStep;
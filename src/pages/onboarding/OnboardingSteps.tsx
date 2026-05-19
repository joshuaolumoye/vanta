import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';
import EmailVerificationScreen from './EmailVerificationScreen';
import OnboardingSteps from './OnboardingSteps';
import { ArrowLeft, Check } from 'lucide-react';

type Screen = 'welcome' | 'signup' | 'verification' | 'story-type' | 'discovery' | 'complete';

// ── Story Type Step ──────────────────────────────────────────────────────────

interface StoryTypeStepProps {
  onNext: (selected: string) => void;
  onBack: () => void;
}

const storyTypes = [
  { id: 'comics', name: 'Comics' },
  { id: 'graphic-novels', name: 'Graphic Novels' },
  { id: 'manga', name: 'Manga' },
  { id: 'web-comics', name: 'Web Comics' },
];

const StoryTypeStep: React.FC<StoryTypeStepProps> = ({ onNext, onBack }) => {
  const [selected, setSelected] = useState('');

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col">
      {/* Hero banner */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(120px, 18vw, 220px)' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(vanta-hero.png)', backgroundColor: '#1a1a2e' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/15 via-purple-900/20 to-[#111827]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="flex-1 px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="text-purple-300 text-sm flex items-center gap-2 hover:text-purple-200 transition mb-8"
          >
            <ArrowLeft size={16} /> Back
          </button>

          {/* Progress: step 1 of 2 */}
          <div className="flex justify-center gap-2 mb-8">
            {[0, 1].map((i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-purple-500' : 'w-2 bg-slate-600'}`}
              />
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              What kind of stories spark your imagination?
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto px-4">
              From cosmic battles to slice-of-life adventures — tell us what kind of comics make you lose track of time.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-10">
            {storyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelected(type.id)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  selected === type.id ? 'ring-2 ring-purple-400 scale-105' : 'hover:scale-105'
                }`}
              >
                {selected === type.id && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center z-10">
                    <Check size={14} className="text-white" />
                  </div>
                )}
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-900/40 to-pink-900/40 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/50 text-xs text-center px-4">{type.name}</span>
                  </div>
                </div>
                <div className="bg-[#1a1a2e] p-3">
                  <p className="text-white font-semibold text-sm">{type.name}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => selected && onNext(selected)}
              disabled={!selected}
              className={`w-full sm:w-auto px-12 py-4 rounded-full font-semibold transition-all duration-300 ${
                selected
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transform hover:scale-105 shadow-lg shadow-purple-500/50'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
            <button
              onClick={() => onNext('')}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Discovery Step ───────────────────────────────────────────────────────────

interface DiscoveryStepProps {
  onNext: (selected: string) => void;
  onBack: () => void;
}

const discoveryOptions = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'youtube', label: 'Youtube' },
  { id: 'others', label: 'Others' },
];

const DiscoveryStep: React.FC<DiscoveryStepProps> = ({ onNext, onBack }) => {
  const [selected, setSelected] = useState('');

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col">
      {/* Hero banner */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(120px, 18vw, 220px)' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(vanta-hero.png)', backgroundColor: '#1a1a2e' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/15 via-purple-900/20 to-[#111827]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="flex-1 px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="text-purple-300 text-sm flex items-center gap-2 hover:text-purple-200 transition mb-8"
          >
            <ArrowLeft size={16} /> Back
          </button>

          {/* Progress: step 2 of 2 */}
          <div className="flex justify-center gap-2 mb-8">
            {[0, 1].map((i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${i === 1 ? 'w-8 bg-purple-500' : 'w-2 bg-slate-600'}`}
              />
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              How did you discover the Vanta Realm?
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto px-4">
              Was it info, a friend, or a whisper through the comic feed? We'd love to know how you found your way here.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-3 mb-10">
            {discoveryOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                  selected === option.id
                    ? 'bg-purple-500/20 border-2 border-purple-400'
                    : 'bg-[#252F46] border-2 border-[#7FAEF8]/30 hover:border-purple-400/50'
                }`}
              >
                <span className="text-white font-medium">{option.label}</span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selected === option.id ? 'border-purple-400 bg-purple-500' : 'border-slate-400'
                  }`}
                >
                  {selected === option.id && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => selected && onNext(selected)}
              disabled={!selected}
              className={`w-full sm:w-auto px-12 py-4 rounded-full font-semibold transition-all duration-300 ${
                selected
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transform hover:scale-105 shadow-lg shadow-purple-500/50'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
            <button
              onClick={() => onNext('')}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Complete Screen ──────────────────────────────────────────────────────────

const CompleteScreen: React.FC = () => (
  <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center px-6 relative overflow-hidden">
    {/* Background glows */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 text-center max-w-md">
      {/* Check badge */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-purple-500/40">
        <Check size={36} className="text-white" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Welcome to VantaOrigin!
      </h1>
      <p className="text-slate-300 text-base mb-10 leading-relaxed">
        Your realm awaits. Dive into stories, discover creators, and make your mark across the realms of imagination.
      </p>

      <button
        onClick={() => { window.location.href = '/feed'; }}
        className="px-14 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
      >
        Enter the Realm
      </button>
    </div>
  </div>
);

// ── Main Flow ────────────────────────────────────────────────────────────────

const OnboardingFlow: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [isAnimating, setIsAnimating] = useState(false);

  const navigateTo = (newScreen: Screen) => {
    setIsAnimating(true);
    setTimeout(() => {
      setScreen(newScreen);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {screen === 'welcome' && (
        <WelcomeScreen onJoinRealm={() => navigateTo('signup')} />
      )}

      {screen === 'signup' && (
        <SignUpScreen
          onSignUp={() => navigateTo('verification')}
          onBack={() => navigateTo('welcome')}
        />
      )}

      {screen === 'verification' && (
        <EmailVerificationScreen
          onVerify={() => navigateTo('story-type')}
          onBack={() => navigateTo('signup')}
        />
      )}

      {screen === 'story-type' && (
        <StoryTypeStep
          onNext={() => navigateTo('discovery')}
          onBack={() => navigateTo('verification')}
        />
      )}

      {screen === 'discovery' && (
        <DiscoveryStep
          onNext={() => navigateTo('complete')}
          onBack={() => navigateTo('story-type')}
        />
      )}

      {screen === 'complete' && <CompleteScreen />}
    </div>
  );
};

export default OnboardingFlow;
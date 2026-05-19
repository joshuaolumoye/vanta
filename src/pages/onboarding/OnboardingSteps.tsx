import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';
import EmailVerificationScreen from './EmailVerificationScreen';
import StoryTypeStep from './StoryTypeStep';
import DiscoveryStep from './DiscoveryStep';
import { Check } from 'lucide-react';

type Screen = 'welcome' | 'signup' | 'verification' | 'story-type' | 'discovery' | 'complete';

// ── Complete Screen ──────────────────────────────────────────────────────────

const CompleteScreen: React.FC = () => (
  <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center px-6 relative overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
    <div className="relative z-10 text-center max-w-md">
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
        onClick={() => { window.location.href = '/profile'; }}
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
          onSkip={() => navigateTo('discovery')}
          onClose={() => navigateTo('welcome')}
        />
      )}

      {screen === 'discovery' && (
        <DiscoveryStep
          onNext={() => navigateTo('complete')}
          onBack={() => navigateTo('story-type')}
          onSkip={() => navigateTo('complete')}
          onClose={() => navigateTo('welcome')}
        />
      )}

      {screen === 'complete' && <CompleteScreen />}
    </div>
  );
};

export default OnboardingFlow;
import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';
import EmailVerificationScreen from './EmailVerificationScreen';
import StoryTypeStep from './StoryTypeStep';
import DiscoveryStep from './DiscoveryStep';

interface OnboardingStepsProps {
  onComplete: () => void;
  onBack: () => void;
}

type Screen = 'welcome' | 'signup' | 'verification' | 'story-type' | 'discovery';

const OnboardingFlow: React.FC<OnboardingStepsProps> = ({ onComplete, onBack }) => {
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
          onBack={onBack}
          onSkip={() => navigateTo('discovery')}
          onClose={onBack}
        />
      )}

      {screen === 'discovery' && (
        <DiscoveryStep
          onNext={() => onComplete()}
          onBack={() => navigateTo('story-type')}
          onSkip={() => onComplete()}
          onClose={onBack}
        />
      )}
    </div>
  );
};

export default OnboardingFlow;
import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';
import EmailVerificationScreen from './EmailVerificationScreen';
import OnboardingSteps from './OnboardingSteps';

type Screen = 'welcome' | 'signup' | 'verification' | 'onboarding' | 'complete';

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
          onVerify={() => navigateTo('onboarding')}
          onBack={() => navigateTo('signup')} 
        />
      )}
      
      {screen === 'onboarding' && (
        <OnboardingSteps
          onComplete={() => navigateTo('complete')}
          onBack={() => navigateTo('verification')}
        />
      )}
      
      {screen === 'complete' && (
        <div className="min-h-screen bg-[#111827] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to VantaOrigin!
            </h1>
            <p className="text-slate-300 mb-8">
              Your journey begins now...
            </p>
            <button 
              onClick={() => {
                // Navigate to main app
                console.log('Navigating to main app...');
                // You can add your navigation logic here
              }}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              Enter the Realm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnboardingFlow;
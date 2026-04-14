import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ResetPasswordVerificationScreen from './ResetPasswordVerificationScreen';
import EnterNewPasswordScreen from './EnterNewPasswordScreen';

const ForgotPasswordFlow: React.FC = () => {
  const [screen, setScreen] = useState<'forgot' | 'verification' | 'newpassword'>('forgot');
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (newScreen: 'forgot' | 'verification' | 'newpassword') => {
    setIsAnimating(true);
    setTimeout(() => {
      setScreen(newScreen);
      setIsAnimating(false);
    }, 300);
  };

  const handleBack = () => {
    navigate('/signin');
  };

  const handleComplete = () => {
    // After password reset is complete, redirect to sign in
    navigate('/signin');
  };

  return (
    <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {screen === 'forgot' && (
        <ForgotPasswordScreen
          onProceed={() => navigateTo('verification')}
          onBack={handleBack}
        />
      )}
      {screen === 'verification' && (
        <ResetPasswordVerificationScreen
          onVerify={() => navigateTo('newpassword')}
          onBack={() => navigateTo('forgot')}
        />
      )}
      {screen === 'newpassword' && (
        <EnterNewPasswordScreen
          onSubmit={handleComplete}
          onBack={() => navigateTo('verification')}
        />
      )}
    </div>
  );
};

export default ForgotPasswordFlow;
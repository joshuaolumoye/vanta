import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface EmailVerificationScreenProps {
  onBack: () => void;
  onVerify: () => void;
}

const EmailVerificationScreen: React.FC<EmailVerificationScreenProps> = ({ onBack, onVerify }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(39);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    if (code.every((digit) => digit !== '')) {
      setTimeout(() => onVerify(), 500);
    }
  }, [code, onVerify]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col lg:flex-row">
      {/* Left Side — full bleed image */}
      <div className="h-48 lg:h-auto lg:w-[45%] relative overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("vanta-hero.png")` }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

        <div
          className="absolute inset-x-0 bottom-0 h-24 lg:hidden pointer-events-none"
          style={{ background: 'linear-gradient(to top, #111827, transparent)' }}
        />
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-40 pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent, #111827)' }}
        />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 lg:py-16 bg-[#111827]">
        <div className="w-full max-w-md">
          <button
            onClick={onBack}
            className="text-slate-400 text-sm flex items-center gap-2 hover:text-white transition mb-10"
          >
            <ArrowLeft size={15} /> Back home
          </button>

          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Email verification
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We sent a 4-digit code to the email address associated with this account.
            </p>
          </div>

          <div className="space-y-6">
            {/* Code inputs */}
            <div className="flex justify-center gap-3">
              {code.map((digit, i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-16 h-16 text-center text-2xl font-semibold rounded-2xl bg-[#1e2a3a] border-2 border-[#3a5070] text-white focus:outline-none focus:border-purple-400 transition"
                />
              ))}
            </div>

            {/* Timer / Resend */}
            <div className="text-center">
              {timer > 0 ? (
                <p className="text-slate-500 text-sm">
                  Resend in{' '}
                  <span className="text-white font-medium">
                    00:{timer.toString().padStart(2, '0')}
                  </span>
                </p>
              ) : (
                <button
                  onClick={() => setTimer(39)}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium transition"
                >
                  Resend code
                </button>
              )}
            </div>

            <button
              onClick={() => code.every((d) => d) && onVerify()}
              disabled={code.some((d) => !d)}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationScreen;
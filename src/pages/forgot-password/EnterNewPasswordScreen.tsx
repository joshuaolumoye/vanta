import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface EnterNewPasswordScreenProps {
  onSubmit: () => void;
  onBack: () => void;
}

const EnterNewPasswordScreen: React.FC<EnterNewPasswordScreenProps> = ({ onSubmit, onBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (password && confirmPassword && password === confirmPassword) {
      onSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col lg:flex-row">
      {/* Top/Left Side - Full Background Image with Dark Fade */}
      <div className="h-32 lg:h-auto lg:w-[40%] relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("vanta-hero.png")`,
          }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Glowing effects */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
          
          {/* Decorative geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-2xl rotate-12"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-white/20 rounded-full"></div>
        </div>
        
        {/* Dark gradient fade - bottom on mobile, right on desktop */}
        <div 
          className="absolute inset-x-0 bottom-0 h-16 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-32 lg:h-auto pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #111827, transparent)',
          }}
        ></div>
        <div 
          className="hidden lg:block absolute inset-y-0 right-0 w-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, #111827)'
          }}
        ></div>
      </div>

      {/* Right/Bottom Side - Form */}
      <div className="flex-1 p-6 lg:p-16 flex items-center justify-center bg-[#111827]">
        <div className="w-full max-w-md space-y-8">
          <div>
            <button
              onClick={onBack}
              className="text-purple-300 text-sm flex items-center gap-2 hover:text-purple-200 transition mb-8"
            >
              <ArrowLeft size={16} /> Back home
            </button>

            <h2 className="text-4xl font-bold text-white mb-4">
              Enter New Password
            </h2>
            <p className="text-slate-300">
              Enter a new password to continue to log in
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#252F46] border border-[#7FAEF8] text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 transition pr-12"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Re-Enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#252F46] border border-[#7FAEF8] text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 transition pr-12"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!password || !confirmPassword || password !== confirmPassword}
              className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterNewPasswordScreen;
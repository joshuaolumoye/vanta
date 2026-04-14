import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Handle sign in logic
    console.log('Sign in clicked');
  };

  const handleBack = () => {
    navigate('/');
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
        <div className="w-full max-w-sm space-y-8">
          <div>
            <button
              onClick={handleBack}
              className="text-purple-300 text-sm flex items-center gap-2 hover:text-purple-200 transition mb-8"
            >
              <ArrowLeft size={16} /> Back home
            </button>

            <h2 className="text-4xl font-bold text-white mb-3">
              Welcome Back to VantaOrigin
            </h2>
            <p className="text-slate-300">
              Log in to explore new stories, manage your creations, and stay connected with the world of imagination.
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email/Phone number"
              className="w-full px-4 py-3 font-bold rounded-lg bg-[#252F46] border-2 border-[#2C3957] text-white placeholder-slate-400 focus:outline-none focus:border-[#7FAEF8] transition"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-3 font-bold rounded-lg bg-[#252F46] border border-[#2C3957] text-[#7E99D9] placeholder-slate-400 focus:outline-none focus:border-[#7FAEF8] transition pr-12"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <label className="flex items-center gap-3 text-sm text-slate-300 cursor-pointer">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mt-0 w-6 h-6 rounded border-[#7FAEF8] bg-[#252F46]" 
              />
              <span>Remember me</span>
            </label>

            <button
              onClick={handleSignIn}
              className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              Log in
            </button>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex-1 h-px bg-slate-600"></div>
              <span className="text-slate-400 text-sm">OR</span>
              <div className="flex-1 h-px bg-slate-600"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-white hover:bg-gray-100 text-gray-800 font-bold transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Log in with Google
            </button>

            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-white hover:bg-gray-200 text-black font-bold transition border border-white/20">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Log in with Apple
            </button>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">
              By joining you agree to the{' '}
              <a href="#" className="text-purple-400 hover:underline">
                codes
              </a>{' '}
              of the realms.
            </p>
            <a href="/forgot-password" className="text-sm text-pink-400 hover:text-pink-300 font-medium">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
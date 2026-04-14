import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface WelcomeScreenProps {
  onJoinRealm: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onJoinRealm }) => {
  const cards = [
    { img: '/vanta-hero.png', rotation: -12 },
    { img: '/vanta-hero.png', rotation: 0 },
    { img: '/vanta-hero.png', rotation: 12 },
    { img: '/vanta-hero.png', rotation: -8 },
    { img: '/vanta-hero.png', rotation: 8 },
    { img: '/vanta-hero.png', rotation: -10 },
    { img: '/vanta-hero.png', rotation: 10 },
  ];

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col relative overflow-hidden">
      {/* Responsive card spacing styles */}
      <style>{`
        .card-item-0 { --spacing: calc(-3 * var(--card-spacing)); }
        .card-item-1 { --spacing: calc(-2 * var(--card-spacing)); }
        .card-item-2 { --spacing: calc(-1 * var(--card-spacing)); }
        .card-item-3 { --spacing: 0px; }
        .card-item-4 { --spacing: calc(1 * var(--card-spacing)); }
        .card-item-5 { --spacing: calc(2 * var(--card-spacing)); }
        .card-item-6 { --spacing: calc(3 * var(--card-spacing)); }
        
        .cards-container {
          --card-spacing: 90px;
        }
        
        @media (min-width: 768px) {
          .cards-container {
            --card-spacing: 130px;
          }
        }
        
        @media (min-width: 1024px) {
          .cards-container {
            --card-spacing: 160px;
          }
        }
        
        .card-item {
          transform: translateX(calc(-50% + var(--spacing))) rotate(var(--rotation));
        }
      `}</style>
      
      {/* Top Section with Cards */}
      <div className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(vanta-hero.png)',
            backgroundColor: '#1a1a2e', // Fallback color
          }}
        >
          {/* Dark overlay gradient - very light for visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/15 via-purple-900/20 to-[#111827]"></div>
        </div>

        {/* Purple orbs background effect - minimal intensity */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Cards */}
        <div className="absolute inset-0 flex items-start justify-center pt-10 md:pt-12 lg:pt-14">
          <div className="relative w-full max-w-7xl px-4 cards-container">
            <div className="relative h-40 md:h-48 lg:h-56">
              {cards.map((card, i) => {
                const totalCards = cards.length;
                const middleIndex = (totalCards - 1) / 2;
                const offsetFromCenter = i - middleIndex;
                
                return (
                  <div
                    key={i}
                    className={`absolute left-1/2 transition-all duration-300 hover:scale-110 hover:z-50 cursor-pointer card-item card-item-${i}`}
                    style={{
                      ['--rotation' as any]: `${card.rotation}deg`,
                      top: `${Math.abs(offsetFromCenter) * 4}px`,
                      zIndex: 20 - Math.abs(offsetFromCenter),
                    }}
                  >
                    {/* Card container with responsive sizing */}
                    <div 
                      className="w-24 h-32 md:w-28 md:h-40 lg:w-32 lg:h-44 rounded-lg shadow-2xl overflow-hidden border-2 border-white/30 backdrop-blur-md"
                      style={{
                        background: `linear-gradient(135deg, rgba(${100 + i * 20}, ${80 + i * 15}, ${200 - i * 10}, 0.5), rgba(${150 + i * 10}, ${100 + i * 20}, ${220 - i * 15}, 0.4))`,
                      }}
                    >
                      {/* Card image */}
                      <img 
                        src={card.img} 
                        alt={`Card ${i + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback content */}
                      <div className="w-full h-full hidden items-center justify-center text-white/90 text-sm font-medium">
                        Card {i + 1}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Form Section (Unchanged) */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-2xl">
          {/* Content */}
          <div className="text-center space-y-6">
            <button className="text-white text-sm flex items-center gap-2 hover:text-purple-200 transition mx-auto md:mx-0">
              <ArrowLeft size={16} /> Back home
            </button>

            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Welcome to VantaOrigin - Where Stories Awaken
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto">
              Create, discover, and rule the realms of imagination. Read comics, fight creators, and compete for glory.
            </p>

            {/* Buttons */}
            <div className="space-y-3 pt-6">
              <button
                onClick={onJoinRealm}
                className="w-full max-w-sm mx-auto block py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Join the Realm
              </button>

              <button 
                onClick={() => window.location.href = '/signup'}
                className="w-full max-w-sm mx-auto block py-4 rounded-full bg-white hover:bg-gray-200 text-black font-bold backdrop-blur-sm border border-white/10 transition"
              >
                I Already Belong
              </button>

              <div className="flex items-center gap-4 max-w-sm mx-auto pt-4">
                <div className="flex-1 h-px bg-slate-600"></div>
                <span className="text-slate-400 text-sm">OR</span>
                <div className="flex-1 h-px bg-slate-600"></div>
              </div>

              <button className="w-full max-w-sm mx-auto flex items-center justify-center gap-3 py-3 rounded-full bg-white hover:bg-gray-100 text-black font-bold transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Log in with Google
              </button>

              <button className="w-full max-w-sm mx-auto flex items-center justify-center gap-3 py-3 rounded-full bg-white hover:bg-gray-900 text-black font-bold transition border border-white/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Log in with Apple
              </button>
            </div>

            <p className="text-xs text-slate-400 pt-4">
              By joining you agree to the{' '}
              <a href="#" className="text-purple-400 hover:underline">
                codes
              </a>{' '}
              of the realms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
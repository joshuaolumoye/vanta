import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Figma asset URLs (valid for 7 days)
const imgBackground = 'https://www.figma.com/api/mcp/asset/32cbcee9-a965-49d2-ac87-040847097bd4';
const imgCard1 = 'https://www.figma.com/api/mcp/asset/f1b448ce-a902-4813-bb78-29aa43134ab7';
const imgCard2 = 'https://www.figma.com/api/mcp/asset/bcea7827-c907-4d04-b54f-81638b809a90';
const imgCard3 = 'https://www.figma.com/api/mcp/asset/9c32cde7-0b43-4ff7-b7b3-d77bb9d2680c';
const imgCard4 = 'https://www.figma.com/api/mcp/asset/b8fa204b-c5d5-4327-8c4a-5ee4399ffb68';
const imgCard5 = 'https://www.figma.com/api/mcp/asset/67185b42-0a0a-4e57-8d9e-65b84c0b8437';
const imgCard6 = 'https://www.figma.com/api/mcp/asset/7fa00d8b-3b0f-4774-86dc-795321f3da71';
const imgCard7 = 'https://www.figma.com/api/mcp/asset/f4802d1c-259f-44b9-83fb-c69743e212c9';

// Glossy card overlay images (Subtract = shiny highlight overlay)
const imgShine1 = 'https://www.figma.com/api/mcp/asset/18d6a419-513a-4818-9d0e-2f41cd1c44e7';
const imgShine2 = 'https://www.figma.com/api/mcp/asset/4da597f9-fbfb-4208-92b5-f8abe883a3a0';
const imgShine3 = 'https://www.figma.com/api/mcp/asset/b8fdbbc5-8d09-4d10-b880-64686f9b81f8';
const imgShine4 = 'https://www.figma.com/api/mcp/asset/5dce38db-a497-47be-8ea0-76d51b226aaa';
const imgShine5 = 'https://www.figma.com/api/mcp/asset/b213837b-519d-491b-a2c1-7570c9593ddb';
const imgShine6 = 'https://www.figma.com/api/mcp/asset/71311a16-f34c-4254-91cf-fbc91c06938a';
const imgShine7 = 'https://www.figma.com/api/mcp/asset/c8f302d8-81f4-46e3-a361-2eec9dba0e99';

const imgGoogleIcon = 'https://www.figma.com/api/mcp/asset/c6286e02-26d5-4fde-b734-38eab2e40eb9';
const imgAppleIcon = 'https://www.figma.com/api/mcp/asset/7026991e-2a4a-49f3-8158-5110c1577953';

interface WelcomeScreenProps {
  onJoinRealm?: () => void;
}

// Card data ordered left → right (positions as % of container width)
const CARDS = [
  { img: imgCard1, shine: imgShine1, rotation: -18.46, leftPct: 10.0,  topPx: 31  },
  { img: imgCard3, shine: imgShine3, rotation:   3.19, leftPct: 22.2,  topPx: 94  },
  { img: imgCard5, shine: imgShine5, rotation:  14.72, leftPct: 31.8,  topPx: 17  },
  { img: imgCard7, shine: imgShine7, rotation:  -3.84, leftPct: 43.7,  topPx: 87  }, // center, slightly larger
  { img: imgCard6, shine: imgShine6, rotation: -16.99, leftPct: 54.0,  topPx: 6   },
  { img: imgCard4, shine: imgShine4, rotation:  -9.94, leftPct: 65.3,  topPx: 81  },
  { img: imgCard2, shine: imgShine2, rotation:  25.88, leftPct: 77.0,  topPx: 13  },
];

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onJoinRealm }) => {
  return (
    <div className="min-h-screen bg-[#111827] flex flex-col relative overflow-hidden">

      {/* ── HERO CARD SECTION ───────────────────────────────── */}
      <div className="relative w-full" style={{ height: 'clamp(200px, 22vw, 320px)' }}>

        {/* Background scene image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgBackground})` }}
        />

        {/* Bottom fade into page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111827]" />
        {/* Extra darken at very bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#111827]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }} />

        {/* Cards */}
        <div className="absolute inset-0">
          {CARDS.map((card, i) => {
            const isCenterCard = i === 3;
            // Scale card dimensions with viewport; center card slightly bigger
            const baseW = isCenterCard ? 146 : 135;
            const baseH = isCenterCard ? 192 : 178;

            return (
              <div
                key={i}
                className="absolute transition-transform duration-200 hover:scale-110 hover:z-50 cursor-pointer"
                style={{
                  left: `${card.leftPct}%`,
                  top: `clamp(${card.topPx * 0.5}px, ${card.topPx / 320 * 100}vw, ${card.topPx}px)`,
                  transform: `rotate(${card.rotation}deg)`,
                  zIndex: 10 - Math.abs(i - 3),
                  width: `clamp(${baseW * 0.45}px, ${baseW / 1728 * 100}vw, ${baseW}px)`,
                  height: `clamp(${baseH * 0.45}px, ${baseH / 1728 * 100}vw, ${baseH}px)`,
                }}
              >
                {/* Card image */}
                <img
                  src={card.img}
                  alt={`Card ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-[clamp(4px,0.63vw,10.9px)]"
                  style={{ borderRadius: 'clamp(4px, 0.63vw, 10.9px)' }}
                />
                {/* Glossy shine overlay */}
                <img
                  src={card.shine}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  aria-hidden
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CONTENT SECTION ─────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center px-4 pb-12 pt-6 md:pt-10 relative z-10">

        {/* Back home — left-aligned on desktop */}
        <div className="w-full max-w-2xl mb-6 md:mb-8">
          <button className="flex items-center gap-2 text-white text-sm md:text-base hover:text-purple-300 transition-colors">
            <ArrowLeft size={16} />
            <span>Back home</span>
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-white font-extrabold text-center leading-tight mb-4 max-w-2xl"
            style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}>
          Welcome to VantaOrigin - Where Stories Awaken
        </h1>

        {/* Subtitle */}
        <p className="text-[#f5f5f5] text-center mb-8 max-w-xl"
           style={{ fontSize: 'clamp(14px, 1.5vw, 23px)', letterSpacing: '-0.005em' }}>
          Create, discover, and rule the realms of imagination. Read comics, fund creators, and compete for glory.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-3 w-full max-w-xs md:max-w-sm">

          {/* Join the Realm — gradient with white border */}
          <button
            onClick={onJoinRealm}
            className="w-full py-[18px] rounded-full border-2 border-white font-bold text-white transition-opacity hover:opacity-90 active:scale-95"
            style={{
              fontSize: 'clamp(16px, 1.2vw, 20px)',
              background: 'linear-gradient(135deg, #fc187b 0%, #c726b2 50%, #9333ea 100%)',
            }}
          >
            Join the Realm
          </button>

          {/* I Already Belong */}
          <button
            onClick={() => window.location.href = '/signin'}
            className="w-full py-[18px] rounded-full bg-white font-bold text-black transition-colors hover:bg-gray-100 active:scale-95"
            style={{ fontSize: 'clamp(16px, 1.2vw, 20px)' }}
          >
            I Already Belong
          </button>

          {/* OR divider */}
          <div className="flex items-center gap-3 w-full py-1">
            <div className="flex-1 h-px bg-white/30" />
            <span className="text-white text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-white/30" />
          </div>

          {/* Sign up with Google */}
          <button className="w-full py-[14px] rounded-full bg-white font-bold text-black flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors active:scale-95"
                  style={{ fontSize: 'clamp(15px, 1.1vw, 20px)' }}>
            <img src={imgGoogleIcon} alt="Google" className="w-5 h-5 object-contain" />
            Sign up with Google
          </button>

          {/* Sign up with Apple */}
          <button className="w-full py-[14px] rounded-full bg-white font-bold text-black flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors active:scale-95"
                  style={{ fontSize: 'clamp(15px, 1.1vw, 20px)' }}>
            <img src={imgAppleIcon} alt="Apple" className="w-5 h-5 object-contain" />
            Sign up with Apple
          </button>
        </div>

        {/* Footer terms */}
        <p className="text-[#f5f5f5] text-center mt-8 max-w-xs"
           style={{ fontSize: 'clamp(12px, 1vw, 18px)', letterSpacing: '-0.005em' }}>
          By joining you agree to the{' '}
          <a href="#" className="text-[#fc187b] font-bold hover:underline">codes</a>
          {' '}of the realms.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
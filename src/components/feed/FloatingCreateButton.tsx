import React from "react";

interface Props {
  onClick: () => void;
}

const FloatingCreateButton: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <style>{`
        @keyframes fab-float {
          0%   { transform: translateY(0px) rotate(0deg); }
          25%  { transform: translateY(-7px) rotate(-2deg); }
          50%  { transform: translateY(-11px) rotate(0deg); }
          75%  { transform: translateY(-7px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes fab-glow {
          0%, 100% { box-shadow: 0 4px 24px 2px rgba(139,92,246,0.45), 0 2px 8px rgba(0,0,0,0.5); }
          50%       { box-shadow: 0 8px 36px 6px rgba(139,92,246,0.75), 0 2px 8px rgba(0,0,0,0.5); }
        }
        @keyframes fab-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .fab-btn {
          animation: fab-float 3.5s ease-in-out infinite,
                     fab-glow  3.5s ease-in-out infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .fab-btn:hover {
          animation: fab-glow 3.5s ease-in-out infinite;
          transform: scale(1.12) translateY(-4px) !important;
        }
        .fab-ring {
          animation: fab-ring 2.2s ease-out infinite;
        }
        .fab-ring-delay {
          animation: fab-ring 2.2s ease-out 1.1s infinite;
        }
      `}</style>

      {/* Fixed wrapper — mobile only, stays above bottom nav */}
      <div className="md:hidden fixed z-40 bottom-[88px] right-5 pointer-events-none">
        {/* Pulse rings */}
        <div className="fab-ring absolute inset-0 rounded-2xl bg-purple-500/30" />
        <div className="fab-ring-delay absolute inset-0 rounded-2xl bg-purple-500/20" />

        {/* Main button */}
        <button
          onClick={onClick}
          className="fab-btn relative pointer-events-auto w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center cursor-pointer overflow-visible"
          aria-label="Create post"
        >
          {/* Biro / edit-pen icon */}
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>

          {/* Small image badge */}
          <div className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-[#0d0d1a] border-2 border-purple-500 rounded-full flex items-center justify-center shadow-md">
            <svg
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingCreateButton;
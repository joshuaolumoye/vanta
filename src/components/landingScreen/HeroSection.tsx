import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Announcement Bar */}
        <div className="inline-flex items-center justify-between gap-2 bg-[#5F6F8C] rounded-xl mb-6 text-white text-xs sm:text-sm max-w-full overflow-hidden">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#9333EA]">
              <ShoppingCart size={13} />
            </span>
            <span className="truncate pr-1">
              <strong>"Obaalu – The Iron Law"</strong>{" "}
              <span className="hidden xs:inline">Chapter 3 now live!</span>
            </span>
          </div>
          <button className="flex-shrink-0 flex items-center gap-1 px-2.5 sm:px-3 py-1 h-9 sm:h-10 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-purple-800 transition whitespace-nowrap">
            Read now
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Your World Has Been Waiting Long Enough.
        </h1>

        {/* Sub */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto px-2">
          Build your universe. Forge your character identity. Fund your vision. Share your stories worldwide. Grow your fandom.
        </p>

        {/* CTA */}
        <div className="flex flex-row items-center justify-center ">
          {/* <Link
            to="/feed"
            className="w-full sm:w-auto inline-block px-8 py-3 text-base font-semibold text-white bg-[#9333EA] rounded-full hover:bg-purple-700 transition shadow-lg shadow-purple-500/50 text-center"
          >
            Start Reading
          </Link> */}
          <Link
            to="/onboarding"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-bold text-black bg-white border-white/20 rounded-full hover:bg-white/90 transition text-center"
          >
            Start Building and exploring worlds
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
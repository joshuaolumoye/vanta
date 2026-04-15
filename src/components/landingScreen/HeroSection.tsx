import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Announcement Bar */}
        <div className="inline-flex items-center justify-between gap-3 bg-[#5F6F8C] rounded-xl mb-6 text-white text-xs sm:text-sm">
          {/* Left: Icon + Text */}
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#9333EA]">
              <ShoppingCart size={14} />
            </span>
            <span>
              <strong>“Obaalu – The Iron Law”</strong> Chapter 3 now live!
            </span>
          </div>

          {/* Right: Read Now */}
          <button className="flex items-center gap-1 px-3 py-1 h-10 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-purple-800 transition">
            Read now
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Enter the Origin of Worlds— Where Every
          <br />
          Story Becomes Eternal.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Create, discover, and rule the realms of imagination. Read comics, fund creators, and compete for glory.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/feed"
            className="inline-block px-8 py-3 text-base font-semibold text-white bg-[#9333EA] rounded-full hover:from-purple-500 hover:to-pink-500 transition shadow-lg shadow-purple-500/50"
          >
            Start Reading
          </Link>
          <Link 
            to="/onboarding"
            className="px-8 py-3 text-base font-bold  text-black bg-white border-white/20 rounded-full hover:bg-white/20 transition">
            Become a Creator
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

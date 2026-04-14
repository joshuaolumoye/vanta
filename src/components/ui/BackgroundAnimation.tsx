import React from "react";

interface BackgroundAnimationProps {
  imageUrl?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({
  imageUrl = "/vanta-hero.png",
}) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Cinematic moving background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-110 animate-[slowZoom_40s_linear_infinite]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Dynamic light sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[lightSweep_12s_linear_infinite]" />

      {/* Dark + color depth */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black/30 to-indigo-900/40" />

      {/* Massive drifting blobs (parallax feel) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[140px] animate-[float1_28s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[140px] animate-[float2_32s_ease-in-out_infinite]" />
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[160px] animate-[float3_36s_ease-in-out_infinite]" />

      {/* Subtle animated grid */}
      <div
        className="absolute inset-0 opacity-[0.08] animate-[gridMove_20s_linear_infinite]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-[particleFloat_18s_linear_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay animate-[grain_1.5s_steps(2)_infinite] bg-[url('/noise.png')]" />

      {/* Custom keyframes */}
      <style>
        {`
          @keyframes slowZoom {
            0%,100% { transform: scale(1.1) translate(0,0); }
            50% { transform: scale(1.2) translate(-2%, -2%); }
          }
          @keyframes float1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(120px, 80px); }
          }
          @keyframes float2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-140px, 100px); }
          }
          @keyframes float3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(100px, -120px); }
          }
          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 120px 120px; }
          }
          @keyframes lightSweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes particleFloat {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(-120vh) scale(0.5); opacity: 0; }
          }
          @keyframes grain {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-5%,5%); }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundAnimation;

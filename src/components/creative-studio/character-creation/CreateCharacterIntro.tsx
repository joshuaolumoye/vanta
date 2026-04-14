import React, { useState, useEffect } from "react";

const IMG_COVER  = "/images/create-char-cover.png";
const IMG_CHAR_1 = "/images/char-preview-1.png";
const IMG_CHAR_2 = "/images/char-preview-2.png";
const IMG_CHAR_3 = "/images/char-preview-3.png";

// ── Detect screen width ───────────────────────────────────────────────────────
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

// ── Step dots ─────────────────────────────────────────────────────────────────
const StepDots: React.FC<{ active: number; total: number }> = ({ active, total }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        style={{
          height: 5,
          width: i === active ? 29 : 5,
          borderRadius: 5,
          background: "#49649d",
        }}
      />
    ))}
  </div>
);

// ── Vanta characters banner ───────────────────────────────────────────────────
const VantaBanner: React.FC = () => (
  <div
    style={{
      position: "relative",
      width: "100%",
      borderRadius: 10,
      overflow: "hidden",
      border: "1px solid #7faef8",
      background: "linear-gradient(to right, rgba(147,51,234,0.7), rgba(24,59,179,0.7))",
      boxShadow: "0 0 10px 0 rgba(147,51,234,0.5)",
      minHeight: 130,
      display: "flex",
      alignItems: "stretch",
    }}
  >
    <div style={{ flex: 1, padding: "16px 14px 16px 16px", zIndex: 1, maxWidth: "55%" }}>
      <p style={{ color: "white", fontWeight: 600, fontSize: 15, margin: "0 0 8px" }}>
        Vanta characters
      </p>
      <p style={{ color: "#f5f5f5", fontWeight: 400, fontSize: 11, lineHeight: 1.6, margin: 0 }}>
        Craft their identity, backstory, and abilities. Every character begins as an idea — yours becomes a legend here.
      </p>
    </div>
    {/* angled character cards */}
    <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "55%", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -10, right: 90, width: 75, height: 105, borderRadius: 8, overflow: "hidden", transform: "rotate(-40deg)", transformOrigin: "bottom center" }}>
        <img src={IMG_CHAR_1} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ position: "absolute", bottom: -10, right: 46, width: 75, height: 105, borderRadius: 8, overflow: "hidden", transform: "rotate(-27deg)", transformOrigin: "bottom center" }}>
        <img src={IMG_CHAR_2} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ position: "absolute", bottom: -10, right: 4, width: 76, height: 112, borderRadius: 8, overflow: "hidden", transform: "rotate(-14deg)", transformOrigin: "bottom center", border: "2px solid #eab308" }}>
        <img src={IMG_CHAR_3} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
  </div>
);

// ── Arrow right icon ──────────────────────────────────────────────────────────
const ArrowRight: React.FC = () => (
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
    <path d="M1 8H19M12 1L19 8L12 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Doc icon ──────────────────────────────────────────────────────────────────
const DocIcon: React.FC = () => (
  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" style={{ flexShrink: 0 }}>
    <rect x="1" y="1" width="11" height="13" rx="2" stroke="#7faef8" strokeWidth="1.3" />
    <path d="M3.5 5H9.5M3.5 8H9.5M3.5 11H6" stroke="#7faef8" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// ── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  onBack: () => void;
  onLetsGo: (name: string) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
const CreateCharacterIntro: React.FC<Props> = ({ onBack, onLetsGo }) => {
  const [name, setName] = useState("");
  const isMobile = useIsMobile();
  const hasName = name.trim().length > 0;

  // ── MOBILE layout ─────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div style={{ minHeight: "100vh", background: "#111827", color: "white", display: "flex", flexDirection: "column" }}>
        {/* Cover image */}
        <div style={{ position: "relative", height: 220, flexShrink: 0 }}>
          <img src={IMG_COVER} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #111827)" }} />
        </div>
        {/* Body */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "4px 20px 32px" }}>
          <h1 style={{ color: "white", fontWeight: 600, fontSize: 27, textAlign: "center", lineHeight: 1.3, margin: "0 0 16px" }}>
            Introduce a New Presence to the Ever-Growing VantaOrigin Universe
          </h1>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <StepDots active={0} total={5} />
          </div>
          <p style={{ color: "white", fontSize: 15, textAlign: "center", lineHeight: 1.7, margin: "0 0 24px", fontWeight: 400 }}>
            Step into the elemental worlds that shape existence where every realm holds its own power, story, and destiny.
          </p>
          <div style={{ height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 24 }} />
          <h2 style={{ color: "white", fontWeight: 600, fontSize: 27, textAlign: "center", margin: "0 0 20px" }}>
            Bring your characters to life
          </h2>
          <VantaBanner />
          <div style={{ flex: 1, minHeight: 28 }} />
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <button
              onClick={() => onLetsGo(name)}
              style={{
                padding: "14px 48px",
                borderRadius: 50,
                border: "none",
                background: "#9333ea",
                color: "white",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                minWidth: 183,
              }}
            >
              {"Let's Go"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── DESKTOP layout ────────────────────────────────────────────────────────
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#1a2337", color: "white" }}>
      {/* Navbar */}
      <div style={{ display: "flex", alignItems: "center", background: "#0e0e0e", height: 71, padding: "0 32px", flexShrink: 0 }}>
        <button
          onClick={onBack}
          style={{ display: "flex", alignItems: "center", gap: 8, color: "white", background: "none", border: "none", fontSize: 16, cursor: "pointer", fontWeight: 400 }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M17 7H1M8 1L1 7L8 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back home
        </button>
      </div>

      {/* Centered content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>

        {/* Card */}
        <div style={{ width: "100%", maxWidth: 740, background: "#252f46", border: "1px solid #465578", borderRadius: 10, overflow: "hidden" }}>

          {/* Section 1: Intro */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "32px 32px 24px", position: "relative" }}>
            {/* X close icon (top centre, matches image) */}
            <div style={{ marginBottom: 12 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" stroke="#465578" strokeWidth="1.5" />
                <path d="M7 7L15 15M15 7L7 15" stroke="#7faef8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h1 style={{ color: "white", fontWeight: 700, fontSize: 22, lineHeight: 1.4, maxWidth: 500, margin: "0 0 12px" }}>
              Introduce a New Presence to the Ever-Growing VantaOrigin Universe
            </h1>
            <StepDots active={0} total={5} />
            <p style={{ color: "#f5f5f5", fontSize: 13, lineHeight: 1.7, maxWidth: 440, margin: "12px 0 0", fontWeight: 400 }}>
              Define their identity, origin, and purpose. Every character you create shapes the mythos and the world around them.
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "#3a4a6a" }} />

          {/* Section 2: Forge input */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "24px 32px" }}>
            <h2 style={{ color: "white", fontWeight: 600, fontSize: 20, margin: "0 0 16px" }}>Forge a new entity</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                borderRadius: 10,
                border: hasName ? "1.5px solid #7e99d9" : "1px solid #465578",
                background: "#2c3a59",
                padding: "12px 16px",
                boxShadow: hasName ? "0 0 10px 0 rgba(126,153,217,0.5)" : "none",
                transition: "border 0.2s, box-shadow 0.2s",
              }}
            >
              <DocIcon />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Pick a figure that resonates — an anime hero, manga favorite, movie legend, or a real-world celebrity..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: hasName ? "white" : "#7489b8",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              />
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "#3a4a6a" }} />

          {/* Section 3: Vanta banner */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "24px 32px" }}>
            <h2 style={{ color: "white", fontWeight: 600, fontSize: 20, margin: "0 0 16px" }}>Bring your characters to life</h2>
            <VantaBanner />
          </div>
        </div>

        {/* Let's Go button — blue when empty, gradient when name typed */}
        <div style={{ marginTop: 24 }}>
          <button
            onClick={() => onLetsGo(name)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 30px",
              borderRadius: 50,
              border: "none",
              background: hasName
                ? "linear-gradient(106deg, #9333ea 4%, #ba0f5c 54%)"
                : "#1976d2",
              color: "white",
              fontWeight: 700,
              fontSize: 17,
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            {"Let's Go"}
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCharacterIntro;
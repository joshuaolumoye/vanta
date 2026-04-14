import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../ui/Nav";

export interface CharacterData {
  name: string;
  tagline?: string;
  origin?: string;
  realm?: string;
  coverImage: string | null;
  isPrivate?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-header
// ─────────────────────────────────────────────────────────────────────────────
const SubHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 24px", background: "#0f1623", borderBottom: "1px solid rgba(70,85,120,0.35)", gap: 12 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "white", fontSize: 14, cursor: "pointer", fontWeight: 500, whiteSpace: "nowrap" }}>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M15 6H1M7 1L1 6L7 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Back
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ position: "relative", width: 120, height: 6, background: "#111827", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "76%", background: "linear-gradient(to right, #fc187b, #9333ea)", borderRadius: 3 }} />
        </div>
        <span style={{ color: "#97adcf", fontSize: 13, fontWeight: 700 }}>362/268</span>
        <div style={{ position: "relative", width: 22, height: 26 }}>
          <div style={{ position: "absolute", top: 3, left: 4, width: 14, height: 20, borderRadius: 2, background: "linear-gradient(to bottom, #a1a0b0, #5b5368)", transform: "rotate(10deg)" }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: 18, height: 23, borderRadius: 2, background: "linear-gradient(135deg, #5d0e5f, #f01070)", transform: "rotate(-9deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 10, fontWeight: 900, transform: "rotate(-9deg)" }}>x2</span>
          </div>
        </div>
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, #9333ea, #ec4899)", border: "2px solid #1a2337", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <span style={{ color: "white", fontSize: 12 }}>A</span>
        </div>
      </div>
    </div>
    <div style={{ display: "flex", gap: 10 }}>
      <button style={{ padding: "8px 20px", borderRadius: 50, background: "linear-gradient(to right, #fc187b, #e11d48)", border: "none", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Challenge</button>
      <button style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 20px", borderRadius: 50, background: "linear-gradient(135deg, #9333ea, #6d28d9)", border: "none", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="11.5" cy="2.5" r="1.5" stroke="white" strokeWidth="1.2" /><circle cx="2.5" cy="7" r="1.5" stroke="white" strokeWidth="1.2" /><circle cx="11.5" cy="11.5" r="1.5" stroke="white" strokeWidth="1.2" /><path d="M4 6L10 3.5M4 8L10 10.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" /></svg>
        Share
      </button>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Hero Section — full-height card image, blurred bg, margin + border-radius
// ─────────────────────────────────────────────────────────────────────────────
const HeroSection: React.FC<{ data: CharacterData }> = ({ data }) => {
  // User will set this URL — currently uses coverImage as blur source
  const bgUrl = data.coverImage || "/images/character-hero-bg.jpg";

  return (
    <div style={{ padding: "16px 24px" }}>
      <div
        style={{
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          display: "flex",
          gap: 0,
          minHeight: 320,
        }}
      >
        {/* ── Blurred background image ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(18px)",
            transform: "scale(1.08)", // prevent blur edge artifacts
            zIndex: 0,
          }}
        />
        {/* dark overlay on top of blur */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,14,30,0.62)", zIndex: 1 }} />

        {/* ── Content over blur ── */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", gap: 28, padding: "20px", width: "100%", alignItems: "stretch" }}>

          {/* Character card — fills full height */}
          <div
            style={{
              flexShrink: 0,
              width: 200,
              borderRadius: 14,
              overflow: "hidden",
              border: "3px solid #eab308",
              alignSelf: "stretch",
            }}
          >
            {data.coverImage ? (
              <img
                src={data.coverImage}
                alt={data.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            ) : (
              <div style={{ width: "100%", height: "100%", minHeight: 280, background: "linear-gradient(135deg, #1e1b4b, #581c87, #7c3aed)" }} />
            )}
          </div>

          {/* Text side */}
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", marginBottom: 6 }}>
              <h1 style={{ color: "white", fontWeight: 800, fontSize: 22, margin: 0, lineHeight: 1.3 }}>
                {data.realm || "Obaalu — The Emberforge of Creation"}
              </h1>
              <span style={{ fontSize: 18 }}>&#128293;</span>
              <span style={{ color: "#4ade80", fontWeight: 700, fontSize: 16 }}>
                {data.tagline || "The One Who Becomes Anyone"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ color: "#7faef8", fontWeight: 700, fontSize: 15 }}>Origin Story</span>
              <span style={{ fontSize: 16 }}>&#129505;</span>
              <span style={{ fontSize: 16 }}>&#128099;</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 14, lineHeight: 1.8, margin: 0, fontWeight: 400, maxWidth: 620 }}>
              {data.origin ||
                "Born in the underground city of Vantora District 7, Switch Face was once a top-tier illusion engineer — an elite specialist who designed holographic masks for espionage operatives. After a betrayal by his own unit, his face was erased from identity records, leaving him legally nonexistent. In revenge, he fused prototype illusion tech into his nervous system, granting him the ability to shift his appearance at will.\n\nNow he moves between worlds, never showing the same face twice — both hero and ghost, both legend and lie."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Weapons Section — centered upload, taller boxes, auto-add slot, arrow scroll
// ─────────────────────────────────────────────────────────────────────────────
const INITIAL_SLOTS = 4; // starting number of weapon slots

const WeaponsSection: React.FC = () => {
  const [images, setImages] = useState<(string | null)[]>(
    Array(INITIAL_SLOTS).fill(null)
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Build one ref per slot (always keep in sync with images.length)
  const fileRefsMap = useRef<Map<number, HTMLInputElement | null>>(new Map());

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    checkScroll();
  }, [images]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -260 : 260, behavior: "smooth" });
    setTimeout(checkScroll, 320);
  };

  const handleFile = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const url = ev.target?.result as string;
      setImages((prev) => {
        const next = [...prev];
        next[idx] = url;
        // If this was the LAST slot, append a new empty one
        if (idx === next.length - 1) {
          next.push(null);
        }
        return next;
      });
      setTimeout(checkScroll, 50);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: "16px 24px", position: "relative" }}>
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          style={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(30,40,65,0.9)",
            border: "1px solid rgba(70,85,120,0.6)",
            color: "white",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          &#8592;
        </button>
      )}

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: 2,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: 230,
              height: 280,
              borderRadius: 14,
              background: "#1a2337",
              border: "1px solid rgba(70,85,120,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Background image if uploaded */}
            {img && (
              <img
                src={img}
                alt=""
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}

            {/* Hidden file input */}
            <input
              ref={(el) => { fileRefsMap.current.set(i, el); }}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleFile(i, e)}
            />

            {/* Upload button — always visible, centered */}
            <button
              onClick={() => fileRefsMap.current.get(i)?.click()}
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "9px 18px",
                borderRadius: 50,
                border: "1.5px solid rgba(255,255,255,0.6)",
                background: img ? "rgba(0,0,0,0.45)" : "transparent",
                color: "white",
                fontWeight: 500,
                fontSize: 13,
                cursor: "pointer",
                backdropFilter: img ? "blur(4px)" : "none",
                whiteSpace: "nowrap",
              }}
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M6 0.5C6 0.5 10 4.5 10 7.5C10 9.7 8.2 11.5 6 11.5C3.8 11.5 2 9.7 2 7.5C2 4.5 6 0.5 6 0.5Z" fill="#a78bfa" />
              </svg>
              Upload weapons
            </button>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          style={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(30,40,65,0.9)",
            border: "1px solid rgba(70,85,120,0.6)",
            color: "white",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          &#8594;
        </button>
      )}

      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Ability Card
// ─────────────────────────────────────────────────────────────────────────────
const AbilityCard: React.FC<{
  title: string;
  accentColor: string;
  hasExtras?: boolean;
  hasBorder?: boolean;
  flameBg?: boolean;
  flexVal?: number;
}> = ({ title, accentColor, hasExtras = false, hasBorder = false, flameBg = false, flexVal = 1 }) => {
  const [name, setName]   = useState("");
  const [desc, setDesc]   = useState("");
  const [extras, setExtras] = useState(["", "", ""]);

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    background: "#253047",
    border: "1px solid rgba(70,85,120,0.4)",
    borderRadius: 8,
    padding: "9px 12px",
    color: "white",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  return (
    <div
      style={{
        flex: flexVal,
        borderRadius: 14,
        background: hasBorder
          ? "linear-gradient(135deg, rgba(236,72,153,0.12), rgba(147,51,234,0.12))"
          : "#1a2337",
        border: hasBorder
          ? "1.5px solid rgba(236,72,153,0.5)"
          : "1px solid rgba(70,85,120,0.35)",
        padding: "20px 18px",
        position: "relative",
        overflow: "hidden",
        minWidth: 0,
      }}
    >
      {/* Flame illustration */}
      {flameBg && (
        <div style={{ position: "absolute", bottom: -10, right: -10, width: 140, height: 140, opacity: 0.6, pointerEvents: "none" }}>
          <svg viewBox="0 0 120 140" fill="none">
            <path d="M60 130 C30 110 10 85 20 60 C25 45 35 38 40 30 C42 40 38 50 45 55 C48 40 55 30 60 10 C65 30 72 40 75 55 C82 50 78 40 80 30 C85 38 95 45 100 60 C110 85 90 110 60 130Z" fill="url(#fg1)" />
            <defs>
              <linearGradient id="fg1" x1="60" y1="10" x2="60" y2="130" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ec4899" /><stop offset="0.5" stopColor="#a855f7" /><stop offset="1" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      <h3 style={{ color: accentColor, fontWeight: 700, fontSize: 16, margin: "0 0 14px" }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative", zIndex: 1 }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" style={fieldStyle} />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Describe ability" rows={3} style={{ ...fieldStyle, resize: "none" }} />
        {hasExtras && extras.map((ex, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: accentColor, fontSize: 18, fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>+</span>
            <input
              type="text" value={ex}
              onChange={(e) => { const n = [...extras]; n[i] = e.target.value; setExtras(n); }}
              placeholder="Enter name of ability"
              style={{ ...fieldStyle, flex: 1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Character Stats table
// ─────────────────────────────────────────────────────────────────────────────
const DEFAULT_STATS = [
  { attribute: "Attack",                level: "6/10",  notes: "Relies on deception not brute force" },
  { attribute: "Speed",                 level: "8/10",  notes: "Vulnerable when illusions break" },
  { attribute: "Defence",               level: "4/10",  notes: "Agile, evasive movement" },
  { attribute: "Intelligence",          level: "10/10", notes: "Highly strategic, adaptive" },
  { attribute: "Special Ability Power", level: "10/10", notes: "Illusions are elite-tier" },
];

const StatsTable: React.FC = () => {
  const cellStyle: React.CSSProperties = { padding: "11px 8px", borderBottom: "1px solid rgba(70,85,120,0.3)", fontSize: 14, color: "white", fontWeight: 400 };
  return (
    <div style={{ flex: 1, borderRadius: 14, background: "#1a2337", border: "1px solid rgba(70,85,120,0.35)", padding: "20px" }}>
      <h3 style={{ color: "#7faef8", fontWeight: 700, fontSize: 16, margin: "0 0 16px" }}>Character Stats</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Attributes", "Level", "Notes"].map((h) => (
              <th key={h} style={{ ...cellStyle, color: "#4ade80", fontWeight: 600, fontSize: 13, textAlign: "left" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DEFAULT_STATS.map((row, i) => (
            <tr key={i}>
              <td style={cellStyle}>{row.attribute}</td>
              <td style={{ ...cellStyle, color: "#a78bfa", fontWeight: 600 }}>{row.level}</td>
              <td style={{ ...cellStyle, color: "rgba(255,255,255,0.7)" }}>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────────────────────────
interface Props {
  character: CharacterData;
  onBack: () => void;
  onUpdated?: (updated: CharacterData) => void;
}

const CharacterDetailPage: React.FC<Props> = ({ character, onBack }) => (
  <div style={{ minHeight: "100vh", background: "#111827", color: "white" }}>
    <Navbar />
    <SubHeader onBack={onBack} />

    {/* Hero */}
    <HeroSection data={character} />

    {/* Weapons */}
    <div style={{ height: 1, background: "rgba(70,85,120,0.3)", margin: "0 24px" }} />
    <WeaponsSection />

    {/* Abilities — Core Ability wider (flex 2), Signature + Weakness equal (flex 1) */}
    <div style={{ height: 1, background: "rgba(70,85,120,0.3)", margin: "0 24px" }} />
    <div style={{ display: "flex", gap: 14, padding: "18px 24px" }}>
      <AbilityCard title="Core Ability"     accentColor="#7faef8" hasExtras hasBorder flexVal={2} />
      <AbilityCard title="Signature Move"   accentColor="#7faef8" flameBg   flexVal={1} />
      <AbilityCard title="Weakness"         accentColor="#f87171" flexVal={1} />
    </div>

    {/* Alignment + Stats */}
    <div style={{ display: "flex", gap: 14, padding: "0 24px 40px", alignItems: "stretch" }}>
      {/* Alignment */}
      <div style={{ width: 240, flexShrink: 0, borderRadius: 14, background: "#1a2337", border: "1px solid rgba(70,85,120,0.35)", padding: "20px 18px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -20, right: -20, width: 160, height: 160, opacity: 0.4, pointerEvents: "none" }}>
          <svg viewBox="0 0 120 140" fill="none">
            <path d="M60 130 C30 110 10 85 20 60 C25 45 35 38 40 30 C42 40 38 50 45 55 C48 40 55 30 60 10 C65 30 72 40 75 55 C82 50 78 40 80 30 C85 38 95 45 100 60 C110 85 90 110 60 130Z" fill="url(#fg2)" />
            <defs>
              <linearGradient id="fg2" x1="60" y1="10" x2="60" y2="130" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ec4899" /><stop offset="0.5" stopColor="#a855f7" /><stop offset="1" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h3 style={{ color: "#7faef8", fontWeight: 700, fontSize: 16, margin: "0 0 14px", position: "relative", zIndex: 1 }}>Alignment</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative", zIndex: 1 }}>
          <input type="text" placeholder="Enter name" style={{ width: "100%", background: "#253047", border: "1px solid rgba(70,85,120,0.4)", borderRadius: 8, padding: "9px 12px", color: "white", fontSize: 14, outline: "none", boxSizing: "border-box" as const, fontFamily: "inherit" }} />
          <textarea placeholder="Describe ability" rows={3} style={{ width: "100%", background: "#253047", border: "1px solid rgba(70,85,120,0.4)", borderRadius: 8, padding: "9px 12px", color: "white", fontSize: 14, outline: "none", boxSizing: "border-box" as const, resize: "none", fontFamily: "inherit" }} />
        </div>
      </div>
      <StatsTable />
    </div>
  </div>
);

export default CharacterDetailPage;
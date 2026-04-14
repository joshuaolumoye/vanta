import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/ui/Nav";

// Desktop
import Banner from "../../components/creative-studio/Banner";
import ProfileInfo from "../../components/creative-studio/ProfileInfo";
import { DesktopStatsSection } from "../../components/creative-studio/StatsSection";
import ContentTabs from "../../components/creative-studio/ContentTabs";
import type { ContentTab } from "../../components/creative-studio/ContentTabs";
import RealmsSection from "../../components/creative-studio/RealmsSection";
import EmptyState from "../../components/creative-studio/EmptyState";

// Mobile
import MobileCoverHeader from "../../components/creative-studio/MobileCoverHeader";
import MobileProfileRow from "../../components/creative-studio/MobileProfileRow";
import MobileStatsCard from "../../components/creative-studio/MobileStatsCard";
import MobileRealmsSection from "../../components/creative-studio/MobileRealmsSection";

// Character creation + detail
import { CharacterCreationFlow } from "../../components/creative-studio/character-creation";
import SavedCharacterCard from "../../components/creative-studio/character-creation/SavedCharacterCard";
import CharacterDetailPage from "../../components/creative-studio/character-creation/CharacterDetailPage";
import type { CharacterFormData } from "../../components/creative-studio/character-creation";
import type { CharacterData } from "../../components/creative-studio/character-creation/CharacterDetailPage";

// ─────────────────────────────────────────────────────────────────────────────

type StudioTab = "general" | "creative-studio" | "analytics" | "settings";

interface SavedCharacter extends CharacterData {}

const CARD_W = 215;
const CARD_H = 268;

// ── + Create placeholder ──────────────────────────────────────────────────────
const CreatePlaceholderCard: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div style={{ width: CARD_W, height: CARD_H, borderRadius: 12, background: "#1e293b", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <button
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 22px", borderRadius: 50, border: "1.5px solid rgba(255,255,255,0.6)", background: "transparent", color: "white", fontWeight: 500, fontSize: 16, cursor: "pointer" }}
    >
      + Create
    </button>
  </div>
);

// ── Clickable character card ───────────────────────────────────────────────────
const ClickableCharacterCard: React.FC<{
  character: SavedCharacter;
  onClick: () => void;
}> = ({ character, onClick }) => (
  <div
    onClick={onClick}
    style={{ width: CARD_W, height: CARD_H, borderRadius: 12, overflow: "hidden", border: "3px solid #eab308", background: "#1a2337", flexShrink: 0, cursor: "pointer", transition: "transform 0.15s, box-shadow 0.15s" }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(234,179,8,0.3)"; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
  >
    {character.coverImage ? (
      <img src={character.coverImage} alt={character.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    ) : (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1e1b4b, #581c87, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 48 }}>+</span>
      </div>
    )}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────

const CreativeStudioPage: React.FC = () => {
  const navigate = useNavigate();
  const [studioTab, setStudioTab]     = useState<StudioTab>("creative-studio");
  const [contentTab, setContentTab]   = useState<ContentTab>("characters");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEditProfile = () => navigate('/settings');

  // flow states
  const [showCreateFlow, setShowCreateFlow]     = useState(false);
  const [selectedCharIdx, setSelectedCharIdx]   = useState<number | null>(null);
  const [savedCharacters, setSavedCharacters]   = useState<SavedCharacter[]>([]);

  const handleContentTabChange = (tab: ContentTab) => {
    if (tab === contentTab) return;
    setIsAnimating(true);
    setTimeout(() => { setContentTab(tab); setIsAnimating(false); }, 150);
  };

  const handleCreateCharacter   = () => setShowCreateFlow(true);
  const handleBackFromCreate    = () => setShowCreateFlow(false);

  const handleCharacterComplete = (data: CharacterFormData) => {
    setSavedCharacters((prev) => [...prev, {
      name: data.name,
      tagline: data.tagline,
      origin: data.origin,
      realm: data.realm,
      coverImage: data.coverImage,
      isPrivate: true,
    }]);
    setShowCreateFlow(false);
  };

  const handleCharacterUpdated = (idx: number, updated: CharacterData) => {
    setSavedCharacters((prev) => {
      const next = [...prev];
      next[idx] = updated;
      return next;
    });
  };

  // ── Full-screen creation flow ───────────────────────────────────────────
  if (showCreateFlow) {
    return <CharacterCreationFlow onBack={handleBackFromCreate} onComplete={handleCharacterComplete} />;
  }

  // ── Character detail page ───────────────────────────────────────────────
  if (selectedCharIdx !== null && savedCharacters[selectedCharIdx]) {
    return (
      <CharacterDetailPage
        character={savedCharacters[selectedCharIdx]}
        onBack={() => setSelectedCharIdx(null)}
        onUpdated={(updated) => handleCharacterUpdated(selectedCharIdx, updated)}
      />
    );
  }

  // ── Desktop characters panel ────────────────────────────────────────────
  const DesktopCharactersPanel: React.FC = () => {
    if (savedCharacters.length === 0) {
      return (
        <div style={{ display: "flex", justifyContent: "center", padding: "0 32px 40px" }}>
          <div style={{ width: "100%", maxWidth: 1097, background: "#252f46", borderRadius: 15, minHeight: 366, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <EmptyState message="Nothing to show here. Start by creating your first character." buttonLabel="Create" onAction={handleCreateCharacter} showPlus />
          </div>
        </div>
      );
    }
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "0 32px 40px" }}>
        <div style={{ width: "100%", maxWidth: 1097, background: "#252f46", borderRadius: 15, padding: 24 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start" }}>
            {savedCharacters.map((char, i) => (
              <ClickableCharacterCard key={i} character={char} onClick={() => setSelectedCharIdx(i)} />
            ))}
            <CreatePlaceholderCard onClick={handleCreateCharacter} />
          </div>
        </div>
      </div>
    );
  };

  // ── Desktop tab content ─────────────────────────────────────────────────
  const renderDesktopContent = () => {
    const wrap = { display: "flex", justifyContent: "center", padding: "0 32px 40px" } as React.CSSProperties;
    const card = { width: "100%", maxWidth: 1097, background: "#252f46", borderRadius: 15, minHeight: 366, display: "flex", alignItems: "center", justifyContent: "center" } as React.CSSProperties;

    switch (contentTab) {
      case "characters":    return <DesktopCharactersPanel />;
      case "realms":        return <RealmsSection onCreate={() => {}} />;
      case "daily-chronicles": return <div style={wrap}><div style={card}><EmptyState message="No daily chronicles yet." buttonLabel="Start Writing" showPlus={false} /></div></div>;
      case "versus-matches":   return <div style={wrap}><div style={card}><EmptyState message="No versus matches yet." buttonLabel="Create Match" showPlus={false} /></div></div>;
      case "achievements":     return <div style={wrap}><div style={card}><EmptyState message="No achievements unlocked yet." buttonLabel="View All Achievements" showPlus={false} /></div></div>;
      default:                 return <div style={wrap}><div style={card}><EmptyState message="Nothing here yet." buttonLabel="Get Started" showPlus={false} /></div></div>;
    }
  };

  // ── Mobile characters section ───────────────────────────────────────────
  const MobileCharactersContent: React.FC = () => {
    if (savedCharacters.length === 0) {
      return (
        <div style={{ margin: "0 20px 32px", background: "#1a2337", border: "1px solid #2c3957", borderRadius: 25, minHeight: 380, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: "0 24px" }}>
          <p style={{ color: "#7faef8", fontSize: 16, textAlign: "center", lineHeight: 1.6, fontWeight: 400 }}>
            Nothing to show here. Start by creating your first character.
          </p>
          <button onClick={handleCreateCharacter} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 28px", borderRadius: 50, border: "1.5px solid rgba(255,255,255,0.6)", background: "transparent", color: "white", fontWeight: 500, fontSize: 16, cursor: "pointer" }}>
            + Create
          </button>
        </div>
      );
    }
    return (
      <div style={{ padding: "0 20px 32px", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
        {savedCharacters.map((char, i) => (
          <div key={i} onClick={() => setSelectedCharIdx(i)} style={{ cursor: "pointer" }}>
            <SavedCharacterCard characterName={char.name} tagline={char.tagline} coverImage={char.coverImage} />
          </div>
        ))}
        <CreatePlaceholderCard onClick={handleCreateCharacter} />
      </div>
    );
  };

  return (
    <>
      {/* ══  MOBILE  ══ */}
      <div className="md:hidden" style={{ minHeight: "100vh", background: "#111827", color: "white" }}>
        <MobileCoverHeader />
        <MobileProfileRow name="Anthony Joseph" handle="@Josephmaroon021" onEdit={handleEditProfile} />
        <div style={{ marginTop: 12 }}><MobileStatsCard /></div>
        <div style={{ marginTop: 40 }}><MobileRealmsSection /></div>
        <div style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, paddingBottom: 64 }}>
          <button style={{ padding: "12px 28px", borderRadius: 50, background: "#9333ea", color: "white", fontWeight: 700, fontSize: 18, border: "none", cursor: "pointer" }}>
            Characters
          </button>
          <MobileCharactersContent />
        </div>
      </div>

      {/* ══  DESKTOP  ══ */}
      <div className="hidden md:block" style={{ minHeight: "100vh", background: "#1a2337", color: "white" }}>
        <Navbar />
        <Banner />
        <div style={{ height: 56 }} />
        <ProfileInfo activeTab={studioTab} onTabChange={setStudioTab} onEdit={handleEditProfile} />
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: 24 }}>
          <button style={{ padding: "12px 28px", borderRadius: 50, background: "#1976d2", color: "white", fontWeight: 600, fontSize: 16, border: "none", cursor: "pointer" }}>
            My Dashboard
          </button>
        </div>
        <DesktopStatsSection />
        <ContentTabs activeTab={contentTab} onTabChange={handleContentTabChange} />
        <div style={{ opacity: isAnimating ? 0 : 1, transition: "opacity 0.15s" }}>
          {renderDesktopContent()}
        </div>
      </div>
    </>
  );
};

export default CreativeStudioPage;
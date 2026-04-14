import React from "react";

interface Props {
  characterName: string;
  tagline?: string;
  coverImage: string | null;
}

const CARD_W = 215;
const CARD_H = 268;

const SavedCharacterCard: React.FC<Props> = ({ characterName, coverImage }) => {
  return (
    <div
      style={{
        width: CARD_W,
        height: CARD_H,
        borderRadius: 12,
        overflow: "hidden",
        border: "3px solid #eab308",
        flexShrink: 0,
        background: "#1a2337",
      }}
    >
      {coverImage ? (
        <img
          src={coverImage}
          alt={characterName}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #1e1b4b, #581c87, #7c3aed)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 48 }}>+</span>
        </div>
      )}
    </div>
  );
};

export default SavedCharacterCard;
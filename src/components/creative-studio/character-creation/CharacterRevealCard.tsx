import React from "react";

interface Props {
  characterName: string;
  tagline?: string;
  origin?: string;
  coverImage: string | null;
  onClose: () => void;
}

const CharacterRevealCard: React.FC<Props> = ({
  characterName,
  tagline,
  origin,
  coverImage,
  onClose,
}) => {
  const title =
    tagline && tagline.trim().length > 0
      ? characterName + ": " + tagline
      : characterName;

  const storyBold =
    "In the depths of the shifting seas, where silence hums with ancient power, " +
    characterName +
    " reigns";

  const storyRest =
    origin && origin.trim().length > 0
      ? origin
      : " — a being born from the heart of the primordial tides. Their every movement ripples across oceans, shaping storms, calming chaos, and awakening forgotten spirits.";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(10,14,26,0.82)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: 660,
          background: "#1e2a42",
          border: "1px solid #2c3957",
          borderRadius: 20,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          minHeight: 360,
        }}
        className="flex-col-mobile"
      >
        {/* LEFT: text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "28px 28px 28px 28px",
            position: "relative",
            minWidth: 0,
          }}
        >
          {/* Close (X) */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            x
          </button>

          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Label */}
            <p
              style={{
                color: "#4ade80",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Stories Forged in the Origin
            </p>

            {/* Books icon (text, no emoji) */}
            <div style={{ fontSize: 26 }}>&#128218;</div>

            {/* Title */}
            <h2
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: 20,
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {title}
            </h2>

            {/* Story */}
            <p
              style={{
                color: "white",
                fontSize: 13,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong>{storyBold}</strong>
              {storyRest}
            </p>
          </div>

          {/* Share button */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "auto", paddingTop: 24 }}>
            <button
              onClick={onClose}
              style={{
                padding: "12px 40px",
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(to right, #9333ea, #ec4899)",
                color: "white",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Share
            </button>
          </div>
        </div>

        {/* RIGHT: image */}
        <div
          style={{
            width: 260,
            flexShrink: 0,
            overflow: "hidden",
            minHeight: 280,
          }}
          className="reveal-image-col"
        >
          {coverImage ? (
            <img
              src={coverImage}
              alt={characterName}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 280 }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: 280,
                background: "linear-gradient(135deg, #1e1b4b, #581c87, #7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 48 }}>+</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .flex-col-mobile { flex-direction: column !important; }
          .reveal-image-col { width: 100% !important; height: 220px !important; }
        }
      `}</style>
    </div>
  );
};

export default CharacterRevealCard;
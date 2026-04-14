import React, { useState } from "react";

interface Props {
  onGoBack: () => void;
  onSave: (isPrivate: boolean) => void;
}

const Toggle: React.FC<{ on: boolean; color: "green" | "blue"; onToggle: () => void }> = ({
  on,
  color,
  onToggle,
}) => {
  const bg = on
    ? color === "green"
      ? "#4ade80"
      : "#6366f1"
    : "#374151";

  return (
    <button
      type="button"
      onClick={onToggle}
      style={{
        width: 52,
        height: 30,
        borderRadius: 15,
        background: bg,
        position: "relative",
        border: "none",
        cursor: "pointer",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: 3,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "white",
          transform: on ? "translateX(22px)" : "translateX(0)",
          transition: "transform 0.2s",
          display: "block",
        }}
      />
    </button>
  );
};

const SaveIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="14" height="14" rx="2" stroke="white" strokeWidth="1.5" />
    <rect x="4" y="1" width="8" height="5" rx="1" fill="white" />
    <rect x="3" y="9" width="10" height="5" rx="1" stroke="white" strokeWidth="1.3" />
  </svg>
);

const CharacterPrivacyModal: React.FC<Props> = ({ onGoBack, onSave }) => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
        background: "rgba(10,14,26,0.78)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "#1e2a42",
          border: "1px solid #2c3957",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {/* Title */}
        <div style={{ padding: "32px 32px 24px", textAlign: "center" }}>
          <p style={{ color: "white", fontWeight: 700, fontSize: 17, lineHeight: 1.5, margin: 0 }}>
            Would you like to keep your character private or publish publicly for the community to use?
          </p>
        </div>

        {/* Toggle rows */}
        <div
          style={{
            margin: "0 24px 20px",
            background: "#253047",
            border: "1px solid #334466",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid rgba(51,68,102,0.5)",
            }}
          >
            <span style={{ color: "white", fontWeight: 700, fontSize: 16 }}>Keep Private</span>
            <Toggle on={isPrivate} color="green" onToggle={() => setIsPrivate(true)} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
            }}
          >
            <span style={{ color: "white", fontWeight: 700, fontSize: 16 }}>Make Public</span>
            <Toggle on={!isPrivate} color="blue" onToggle={() => setIsPrivate(false)} />
          </div>
        </div>

        {/* Checkbox */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 24,
            padding: "0 24px",
          }}
        >
          <button
            type="button"
            onClick={() => setAgreed((a) => !a)}
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              border: `2px solid ${agreed ? "#9333ea" : "#465578"}`,
              background: agreed ? "#9333ea" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              padding: 0,
            }}
          >
            {agreed && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <span style={{ color: "white", fontSize: 13 }}>
            I have read and agree with{" "}
            <button
              type="button"
              style={{
                color: "#9333ea",
                fontWeight: 600,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: 13,
              }}
            >
              Community Guidelines
            </button>
          </span>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: "0 24px 32px",
          }}
        >
          <button
            onClick={onGoBack}
            style={{
              padding: "12px 24px",
              borderRadius: 50,
              border: "2px solid white",
              background: "transparent",
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Go Back
          </button>

          <button
            onClick={() => agreed && onSave(isPrivate)}
            disabled={!agreed}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 50,
              border: "1px solid #465578",
              background: agreed ? "#2c3a59" : "#1e2a42",
              color: agreed ? "white" : "rgba(255,255,255,0.35)",
              fontWeight: 700,
              fontSize: 15,
              cursor: agreed ? "pointer" : "not-allowed",
            }}
          >
            <SaveIcon />
            Save Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterPrivacyModal;
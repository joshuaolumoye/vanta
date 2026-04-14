import React, { useState, useRef } from "react";

export interface CharacterFormData {
  name: string;
  origin: string;
  realm: string;
  tagline: string;
  coverImage: string | null;
}

const REALMS = [
  "Obaalu — The Emberforge",
  "Eganon — The Core of Eternity",
  "Iyanu — The Eternal Flow",
  "Urukojin — The Celestial Drift",
  "Vantara — The Infinite Veil",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#2c3957",
  border: "2px solid #465578",
  borderRadius: 10,
  padding: "12px 16px",
  color: "white",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
};

interface Props {
  characterName: string;
  onBack: () => void;
  onSubmit: (data: CharacterFormData) => void;
}

const CreateCharacterForm: React.FC<Props> = ({ characterName, onBack, onSubmit }) => {
  const [name, setName]         = useState(characterName);
  const [origin, setOrigin]     = useState("");
  const [realm, setRealm]       = useState("");
  const [tagline, setTagline]   = useState("");
  const [cover, setCover]       = useState<string | null>(null);
  const [realmOpen, setRealmOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setCover(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    onSubmit({ name, origin, realm, tagline, coverImage: cover });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#1a2337", color: "white" }}>
      {/* Desktop navbar */}
      <div className="hidden md:flex" style={{ alignItems: "center", background: "#0e0e0e", height: 71, padding: "0 32px" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 8, color: "white", background: "none", border: "none", fontSize: 16, cursor: "pointer", fontWeight: 500 }}>
          {"< Back home"}
        </button>
      </div>

      {/* Mobile back */}
      <div className="md:hidden" style={{ display: "flex", alignItems: "center", gap: 8, padding: "48px 16px 12px" }}>
        <button onClick={onBack} style={{ color: "rgba(255,255,255,0.8)", background: "none", border: "none", fontSize: 15, cursor: "pointer", fontWeight: 500 }}>
          {"< Back"}
        </button>
      </div>

      {/* Body */}
      <div
        style={{ maxWidth: 860, margin: "0 auto", padding: "24px 20px 40px" }}
        className="form-body"
      >
        <div className="form-inner">
          {/* LEFT: image */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <div
              onClick={() => !cover && fileRef.current?.click()}
              style={{
                width: 190,
                height: 250,
                borderRadius: 15,
                overflow: "hidden",
                border: "2px solid #465578",
                background: "#2c3a59",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: cover ? "default" : "pointer",
                position: "relative",
              }}
            >
              {cover ? (
                <>
                  <img src={cover} alt="cover" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.5)", borderRadius: 50, padding: "4px 12px", display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>
                    <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>View preview</span>
                  </div>
                </>
              ) : (
                <span style={{ color: "#7faef8", fontSize: 13, fontWeight: 600 }}>Tap to upload</span>
              )}
            </div>

            <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />

            <button
              onClick={() => fileRef.current?.click()}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 50, border: "2px solid white", background: "transparent", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
            >
              Upload Cover
            </button>

            {cover && (
              <button
                onClick={() => setCover(null)}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 50, border: "2px solid #f64e62", background: "transparent", color: "#f64e62", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
              >
                Remove
              </button>
            )}
          </div>

          {/* RIGHT: fields */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Name */}
            <div>
              <label style={{ display: "block", color: "white", fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Character Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter character name"
                style={{ ...inputStyle, borderColor: name ? "#97adcf" : "#465578" }}
              />
            </div>

            {/* Origin */}
            <div>
              <label style={{ display: "block", color: "white", fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Character Origin</label>
              <textarea
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Tell us more of what inspired your character"
                rows={4}
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            {/* Realm */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <label style={{ color: "white", fontWeight: 700, fontSize: 17 }}>Choose Their Realm</label>
                <span style={{ padding: "2px 10px", borderRadius: 50, background: "linear-gradient(to bottom, #9333ea, #fc187b)", color: "white", fontWeight: 900, fontSize: 11 }}>New</span>
              </div>
              <div style={{ position: "relative" }}>
                <button
                  type="button"
                  onClick={() => setRealmOpen((o) => !o)}
                  style={{ ...inputStyle, display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left", cursor: "pointer" }}
                >
                  <span style={{ color: realm ? "white" : "#97adcf" }}>{realm || "Select"}</span>
                  <span style={{ color: "#97adcf", fontSize: 12 }}>{realmOpen ? "^" : "v"}</span>
                </button>
                {realmOpen && (
                  <div style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 40, marginTop: 4, background: "#2c3957", border: "2px solid #465578", borderRadius: 10, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                    {REALMS.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => { setRealm(r); setRealmOpen(false); }}
                        style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 16px", color: "white", fontSize: 14, background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(70,85,120,0.4)" }}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Tagline */}
            <div>
              <label style={{ display: "block", color: "white", fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Tagline</label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Enter tagline"
                style={inputStyle}
              />
            </div>

            {/* Submit */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleSubmit}
                style={{
                  padding: "14px 40px",
                  borderRadius: 32,
                  border: "none",
                  background: "linear-gradient(to right, #ba0f5c, #386add)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 17,
                  cursor: "pointer",
                  minWidth: 260,
                }}
              >
                Create Character
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-inner {
          display: flex;
          flex-direction: row;
          gap: 40px;
          align-items: flex-start;
        }
        @media (max-width: 640px) {
          .form-inner {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default CreateCharacterForm;
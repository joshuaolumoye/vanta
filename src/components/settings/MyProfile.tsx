import React, { useRef, useState } from "react";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";

interface Props {
  mobile?: boolean;
  onBack?: () => void;
}

export default function MyProfile({ mobile, onBack }: Props) {
  const [banner, setBanner]   = useState<string | null>(null);
  const [avatar, setAvatar]   = useState<string | null>(null);
  const bannerRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  const pickBanner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setBanner(URL.createObjectURL(f));
  };
  const pickAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setAvatar(URL.createObjectURL(f));
  };

  // ── MOBILE ────────────────────────────────────────────────────
  if (mobile) return (
    <div style={{ background:"#0d111c", minHeight:"100vh", color:"#fff" }}>
      {/* header */}
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"20px 20px 16px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", padding:4 }}>
          <ArrowLeft size={20} color="#9ca3af" />
        </button>
        <span style={{ fontWeight:700, fontSize:18 }}>My Profile</span>
      </div>

      <div style={{ padding:"24px 24px 0" }}>
        {/* Avatar */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:28 }}>
          <div style={{ width:90, height:90, borderRadius:"50%", overflow:"hidden", background:"#1e2a40", marginBottom:20, border:"2px solid rgba(255,255,255,0.15)" }}>
            {avatar
              ? <img src={avatar} style={{ width:"100%", height:"100%", objectFit:"cover" }} alt="avatar" />
              : <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="#4b5563"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#4b5563" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>}
          </div>
          <div style={{ display:"flex", gap:12 }}>
            <button onClick={() => setAvatar(null)}
              style={{ display:"flex", alignItems:"center", gap:6, padding:"10px 18px", borderRadius:50, border:"1.5px solid #ef4444", background:"none", color:"#ef4444", fontWeight:600, fontSize:14, cursor:"pointer" }}>
              <Trash2 size={14} /> Remove
            </button>
            <button onClick={() => avatarRef.current?.click()}
              style={{ display:"flex", alignItems:"center", gap:6, padding:"10px 18px", borderRadius:50, border:"1.5px solid rgba(255,255,255,0.5)", background:"none", color:"#fff", fontWeight:600, fontSize:14, cursor:"pointer" }}>
              <Pencil size={14} /> Edit
            </button>
            <input ref={avatarRef} type="file" accept="image/*" style={{ display:"none" }} onChange={pickAvatar} />
          </div>
        </div>

        {/* Banner */}
        <div style={{ borderRadius:14, overflow:"hidden", position:"relative", height:120, background:"#1e2a40", marginBottom:16 }}>
          {banner
            ? <img src={banner} style={{ width:"100%", height:"100%", objectFit:"cover" }} alt="banner" />
            : <div style={{ width:"100%", height:"100%", background:"linear-gradient(135deg,#1a1035,#3b0764)" }} />}
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <button onClick={() => bannerRef.current?.click()}
              style={{ display:"flex", alignItems:"center", gap:6, padding:"10px 22px", borderRadius:50, border:"1.5px solid rgba(255,255,255,0.7)", background:"rgba(0,0,0,0.35)", color:"#fff", fontWeight:600, fontSize:14, cursor:"pointer" }}>
              <Pencil size={14} /> Edit
            </button>
          </div>
          <input ref={bannerRef} type="file" accept="image/*" style={{ display:"none" }} onChange={pickBanner} />
        </div>
      </div>
    </div>
  );

  // ── DESKTOP ───────────────────────────────────────────────────
  return (
    <div>
      {/* Banner */}
      <div style={{ borderRadius:12, overflow:"hidden", position:"relative", height:180, background:"#0d111c", marginBottom:0 }}>
        {banner
          ? <img src={banner} style={{ width:"100%", height:"100%", objectFit:"cover" }} alt="banner" />
          : <div style={{ width:"100%", height:"100%", background:"#0d111c", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6 }}>
              <span style={{ color:"#fff", fontWeight:700, fontSize:18 }}>Change banner image</span>
              <span style={{ color:"#9ca3af", fontSize:13 }}>Recommended Dimension 1728 X 290pixels</span>
              <div style={{ display:"flex", gap:12, marginTop:8 }}>
                <button onClick={() => bannerRef.current?.click()}
                  style={{ background:"#9333ea", color:"#fff", border:"none", borderRadius:50, padding:"9px 22px", fontWeight:700, fontSize:14, cursor:"pointer" }}>
                  Replace
                </button>
                <button onClick={() => setBanner(null)}
                  style={{ background:"none", color:"#fff", border:"none", fontWeight:600, fontSize:14, cursor:"pointer" }}>
                  Remove
                </button>
              </div>
            </div>}
        {banner && (
          <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.4)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6 }}>
            <span style={{ color:"#fff", fontWeight:700, fontSize:18 }}>Change banner image</span>
            <span style={{ color:"rgba(255,255,255,0.7)", fontSize:13 }}>Recommended Dimension 1728 X 290pixels</span>
            <div style={{ display:"flex", gap:12, marginTop:8 }}>
              <button onClick={() => bannerRef.current?.click()}
                style={{ background:"#9333ea", color:"#fff", border:"none", borderRadius:50, padding:"9px 22px", fontWeight:700, fontSize:14, cursor:"pointer" }}>
                Replace
              </button>
              <button onClick={() => setBanner(null)}
                style={{ background:"none", color:"#fff", border:"none", fontWeight:600, fontSize:14, cursor:"pointer" }}>
                Remove
              </button>
            </div>
          </div>
        )}
        <input ref={bannerRef} type="file" accept="image/*" style={{ display:"none" }} onChange={pickBanner} />
      </div>

      {/* Avatar */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"28px 0 0" }}>
        <div style={{ width:80, height:80, borderRadius:"50%", overflow:"hidden", background:"#1e2a40", marginBottom:16, border:"2px solid rgba(255,255,255,0.1)" }}>
          {avatar
            ? <img src={avatar} style={{ width:"100%", height:"100%", objectFit:"cover" }} alt="avatar" />
            : <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="#4b5563"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#4b5563" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>}
        </div>

        <div style={{ display:"flex", gap:12 }}>
          {avatar && (
            <button onClick={() => setAvatar(null)}
              style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 18px", borderRadius:50, border:"1.5px solid #ef4444", background:"none", color:"#ef4444", fontWeight:600, fontSize:13, cursor:"pointer" }}>
              <Trash2 size={13} /> Remove Avatar
            </button>
          )}
          <button onClick={() => avatarRef.current?.click()}
            style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 20px", borderRadius:50, border:"1.5px solid rgba(255,255,255,0.5)", background:"none", color:"#fff", fontWeight:600, fontSize:13, cursor:"pointer" }}>
            <Pencil size={13} /> Edit
          </button>
          <input ref={avatarRef} type="file" accept="image/*" style={{ display:"none" }} onChange={pickAvatar} />
        </div>
      </div>
    </div>
  );
}
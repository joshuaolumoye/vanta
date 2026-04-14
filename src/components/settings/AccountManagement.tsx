import { useState } from "react";
import { ArrowLeft, Pencil, Link2, PlusCircle, Trash2, LogOut } from "lucide-react";

interface Props { desktop?: boolean; onBack?: () => void; }

const SOCIALS = ["Facebook", "WhatsApp", "Instagram", "X(Formerly Twitter)", "Discord"];

export default function AccountManagement({ desktop, onBack }: Props) {
  const [email]    = useState("josephmaroon677@gmail.com");
  const [curPw, setCurPw]   = useState("");
  const [newPw, setNewPw]   = useState("");
  const [confPw, setConfPw] = useState("");

  const pwInput = (val: string, set: (v: string) => void, ph: string) => (
    <input className="sp-input" type="password" placeholder={ph} value={val}
      onChange={e => set(e.target.value)} style={{ marginBottom:0 }} />
  );

  const content = (isMobile: boolean) => (
    <>
      {/* Email */}
      <section style={{ marginBottom: isMobile ? 28 : 24 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
          <label className="sp-label" style={{ margin:0 }}>Email Address</label>
          <Pencil size={14} color="#9ca3af" />
        </div>
        <input className="sp-input" value={email} readOnly style={{ color:"#9ca3af" }} />
      </section>

      {/* Change Password */}
      <section style={{ marginBottom: isMobile ? 28 : 28 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
          <h3 style={{ margin:0, fontWeight:700, fontSize: isMobile ? 17 : 18, color:"#fff" }}>Change Password</h3>
          {isMobile
            ? <button style={{ background:"none", border:"none", color:"#3b82f6", fontWeight:700, fontSize:15, cursor:"pointer" }}>Update</button>
            : <button className="sp-btn-primary" style={{ borderRadius:50 }}>Update</button>}
        </div>
        <div className="sp-field"><label className="sp-label">Current password</label>{pwInput(curPw, setCurPw, "Enter password")}</div>
        <div className="sp-field"><label className="sp-label">New password</label>{pwInput(newPw, setNewPw, "Enter password")}</div>
        <div className="sp-field"><label className="sp-label">Confirm new password</label>{pwInput(confPw, setConfPw, "Enter password")}</div>
      </section>

      {/* Social links */}
      <section style={{ marginBottom: isMobile ? 28 : 28 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
          <h3 style={{ margin:0, fontWeight:700, fontSize: isMobile ? 17 : 18, color:"#fff" }}>Connect your social link</h3>
          <Link2 size={15} color="#9ca3af" />
        </div>
        {SOCIALS.map(s => (
          <div key={s} className="sp-social">
            <span>{s}</span>
            <PlusCircle size={20} color="#22c55e" />
          </div>
        ))}
      </section>

      {/* Actions */}
      <div style={{ display:"flex", gap:12 }}>
        <button className="sp-btn-red">
          <Trash2 size={15} /> Delete Account
        </button>
        {!isMobile && (
          <button className="sp-btn-red">
            <LogOut size={15} /> Log out
          </button>
        )}
      </div>
    </>
  );

  // ── MOBILE ──────────────────────────────────────────────────────
  if (!desktop) return (
    <div style={{ background:"#0d111c", minHeight:"100vh", color:"#fff" }}>
      <style>{`
        .sp-input { width:100%; background:#161d2e; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:14px 16px; color:#fff; font-size:15px; outline:none; box-sizing:border-box; }
        .sp-input::placeholder{ color:#4b5563; }
        .sp-label { color:#fff; font-weight:700; font-size:15px; margin-bottom:10px; display:block; }
        .sp-field { margin-bottom:22px; }
        .sp-social { display:flex; align-items:center; justify-content:space-between; background:#161d2e; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:14px 16px; margin-bottom:10px; cursor:pointer; }
        .sp-social span{ color:#6b7280; font-size:15px; }
        .sp-btn-red { background:#0d111c; color:#ef4444; border:1px solid rgba(239,68,68,0.4); border-radius:10px; padding:14px; font-weight:600; font-size:15px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; flex:1; }
      `}</style>
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"20px 20px 16px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", padding:4 }}>
          <ArrowLeft size={20} color="#9ca3af" />
        </button>
        <span style={{ fontWeight:700, fontSize:18 }}>Account Management</span>
      </div>
      <div style={{ padding:"16px 24px 40px" }}>{content(true)}</div>
    </div>
  );

  // ── DESKTOP ──────────────────────────────────────────────────────
  return (
    <div>
      <h2 style={{ margin:"0 0 24px", fontWeight:700, fontSize:20 }}>Account Management</h2>
      {content(false)}
    </div>
  );
}
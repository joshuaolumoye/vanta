import React, { useState } from "react";
import { ArrowLeft, Pencil, Calendar } from "lucide-react";

interface Props { desktop?: boolean; onBack?: () => void; }

export default function PersonalInformation({ desktop, onBack }: Props) {
  const [form, setForm] = useState({ firstName:"", lastName:"", username:"@josephmaroon001", dob:"", bio:"" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const fields = (
    <>
      {/* First + Last name */}
      <div style={{ display:"grid", gridTemplateColumns: desktop ? "1fr 1fr" : "1fr", gap:16, marginBottom:20 }}>
        <div>
          <label className="sp-label">First Name</label>
          <input className="sp-input" placeholder="Enter  first name" value={form.firstName} onChange={set("firstName")} />
        </div>
        <div>
          <label className="sp-label">Last Name</label>
          <input className="sp-input" placeholder="Enter last name" value={form.lastName} onChange={set("lastName")} />
        </div>
      </div>

      <div className="sp-field">
        <label className="sp-label">Username</label>
        <input className="sp-input" value={form.username} onChange={set("username")} />
      </div>

      <div className="sp-field">
        <label className="sp-label">Date of Birth</label>
        <div style={{ position:"relative" }}>
          <input className="sp-input" placeholder="DD - MM - YY" value={form.dob} onChange={set("dob")}
            style={{ paddingRight:44 }} />
          <Calendar size={16} color="#4b5563" style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }} />
        </div>
      </div>

      <div className="sp-field">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
          <label className="sp-label" style={{ margin:0 }}>Bio</label>
          <Pencil size={14} color="#9ca3af" />
        </div>
        <textarea className="sp-input" placeholder="Tell us a bit about yourself..." value={form.bio}
          onChange={set("bio")} rows={4}
          style={{ resize:"none", fontFamily:"inherit" }} />
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
      `}</style>
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"20px 20px 16px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", padding:4 }}>
          <ArrowLeft size={20} color="#9ca3af" />
        </button>
        <span style={{ fontWeight:700, fontSize:18 }}>Personal Information</span>
      </div>
      <div style={{ padding:"16px 24px 32px" }}>
        {fields}
        <button style={{ width:"100%", background:"#3b82f6", color:"#fff", border:"none", borderRadius:50, padding:"14px", fontWeight:700, fontSize:16, cursor:"pointer", marginTop:8 }}>
          Save
        </button>
      </div>
    </div>
  );

  // ── DESKTOP ──────────────────────────────────────────────────────
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28 }}>
        <h2 style={{ margin:0, fontWeight:700, fontSize:20 }}>Personal Informations</h2>
        <button className="sp-btn-primary">Save</button>
      </div>
      {fields}
    </div>
  );
}
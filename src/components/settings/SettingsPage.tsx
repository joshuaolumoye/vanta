import { useState } from "react";
import { ArrowLeft, Settings2, ChevronRight, User, Info, Database, LogOut } from "lucide-react";
import MyProfile from "./MyProfile";
import PersonalInformation from "./PersonalInformation";
import AccountManagement from "./AccountManagement";

export type SettingsTab = "my-profile" | "personal-info" | "account";

const TABS = [
  { id: "my-profile",    label: "My Profile",          icon: <User size={18} /> },
  { id: "personal-info", label: "Personal Information", icon: <Info size={18} /> },
  { id: "account",       label: "Account Management",   icon: <Database size={18} /> },
] as const;

export default function SettingsPage({ onBack }: { onBack: () => void }) {
  const [tab, setTab]         = useState<SettingsTab>("my-profile");
  const [mobile, setMobile]   = useState<SettingsTab | null>(null); // which sub-page on mobile

  // ── shared styles ──────────────────────────────────────────────
  const S = `
    .sp-page  { min-height:100vh; background:#0d111c; color:#fff; font-family:inherit; }
    .sp-topbar{ display:flex; justify-content:center; padding:20px 24px 16px; }
    .sp-back  { display:flex; align-items:center; gap:8px; background:#22c55e; color:#fff; font-weight:700; font-size:14px; border:none; border-radius:50px; padding:10px 20px; cursor:pointer; }
    .sp-layout{ display:flex; gap:0; max-width:1100px; margin:0 auto; padding:0 24px 48px; }

    /* sidebar */
    .sp-sidebar{ width:220px; flex-shrink:0; background:#161d2e; border-radius:12px; padding:8px; margin-right:20px; height:fit-content; }
    .sp-sidebar-hdr{ display:flex; align-items:center; gap:8px; padding:12px 14px; color:#fff; font-weight:600; font-size:14px; border-bottom:1px solid rgba(255,255,255,0.07); margin-bottom:8px; }
    .sp-tab   { display:flex; align-items:center; gap:0; width:100%; border:none; border-radius:8px; padding:11px 14px; cursor:pointer; font-size:14px; font-weight:500; transition:background .15s; text-align:left; }
    .sp-tab.active { background:#9333ea; color:#fff; }
    .sp-tab:not(.active){ background:none; color:#cbd5e1; }
    .sp-tab:not(.active):hover{ background:rgba(255,255,255,0.06); }

    /* content panel */
    .sp-content{ flex:1; background:#161d2e; border-radius:12px; padding:32px 36px; min-height:520px; }

    /* inputs */
    .sp-input { width:100%; background:#0d111c; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:13px 16px; color:#fff; font-size:14px; outline:none; box-sizing:border-box; }
    .sp-input::placeholder{ color:#4b5563; }
    .sp-input:focus{ border-color:rgba(147,51,234,0.5); }
    .sp-label { color:#fff; font-weight:600; font-size:14px; margin-bottom:8px; display:block; }
    .sp-field { margin-bottom:20px; }

    /* buttons */
    .sp-btn-primary{ background:#3b82f6; color:#fff; border:none; border-radius:50px; padding:10px 28px; font-weight:700; font-size:14px; cursor:pointer; }
    .sp-btn-outline{ background:none; color:#fff; border:1.5px solid rgba(255,255,255,0.5); border-radius:50px; padding:10px 22px; font-weight:600; font-size:14px; cursor:pointer; display:flex; align-items:center; gap:7px; }
    .sp-btn-red   { background:#0d111c; color:#ef4444; border:1px solid rgba(239,68,68,0.4); border-radius:10px; padding:13px; font-weight:600; font-size:14px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; flex:1; }

    /* social row */
    .sp-social { display:flex; align-items:center; justify-content:space-between; background:#0d111c; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:13px 16px; margin-bottom:10px; cursor:pointer; }
    .sp-social span{ color:#6b7280; font-size:14px; }

    /* ── Mobile ── */
    @media(max-width:768px){
      .sp-layout  { display:none; }
      .sp-topbar  { display:none; }
      .sp-mobile  { display:block; }
    }
    @media(min-width:769px){
      .sp-mobile  { display:none; }
    }
  `;

  return (
    <>
      <style>{S}</style>
      <div className="sp-page">

        {/* ══ DESKTOP ══ */}
        <div className="sp-topbar">
          <button className="sp-back" onClick={onBack}>
            <ArrowLeft size={16} /> Back to profile
          </button>
        </div>

        <div className="sp-layout">
          {/* Sidebar */}
          <aside className="sp-sidebar">
            <div className="sp-sidebar-hdr">
              <Settings2 size={16} color="#9ca3af" /> General Settings
              <ChevronRight size={14} color="#9ca3af" style={{ marginLeft:"auto" }} />
            </div>
            {TABS.map(t => (
              <button key={t.id} className={`sp-tab${tab === t.id ? " active" : ""}`} onClick={() => setTab(t.id as SettingsTab)}>
                {t.label}
              </button>
            ))}
          </aside>

          {/* Content */}
          <div className="sp-content">
            {tab === "my-profile"    && <MyProfile />}
            {tab === "personal-info" && <PersonalInformation desktop />}
            {tab === "account"       && <AccountManagement desktop />}
          </div>
        </div>

        {/* ══ MOBILE ══ */}
        <div className="sp-mobile">
          {mobile === null && (
            <MobileMenu onSelect={setMobile} onBack={onBack} />
          )}
          {mobile === "my-profile" && (
            <MyProfile mobile onBack={() => setMobile(null)} />
          )}
          {mobile === "personal-info" && (
            <PersonalInformation onBack={() => setMobile(null)} />
          )}
          {mobile === "account" && (
            <AccountManagement onBack={() => setMobile(null)} />
          )}
        </div>

      </div>
    </>
  );
}

// ── Mobile menu (General Settings list) ───────────────────────────
function MobileMenu({ onSelect, onBack }: { onSelect: (t: SettingsTab) => void; onBack: () => void }) {
  const rows = [
    { id: "my-profile",    label: "My Profile",          icon: <User size={20} /> },
    { id: "personal-info", label: "Personal Information", icon: <Info size={20} /> },
    { id: "account",       label: "Account Management",   icon: <Database size={20} /> },
    { id: "logout",        label: "Log Out",              icon: <LogOut size={20} /> },
  ];
  return (
    <div style={{ padding: "0 0 40px" }}>
      {/* header */}
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"20px 20px 16px", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", padding:4 }}>
          <ArrowLeft size={20} color="#9ca3af" />
        </button>
        <span style={{ color:"#fff", fontWeight:700, fontSize:18 }}>General Settings</span>
      </div>
      <div style={{ padding:"12px 0" }}>
        {rows.map(r => (
          <button key={r.id} onClick={() => r.id !== "logout" && onSelect(r.id as SettingsTab)}
            style={{ display:"flex", alignItems:"center", gap:14, width:"100%", padding:"16px 24px", background:"none", border:"none", cursor:"pointer", borderBottom:"1px solid rgba(255,255,255,0.05)", textAlign:"left" }}>
            <span style={{ color:"#9ca3af" }}>{r.icon}</span>
            <span style={{ color:"#fff", fontSize:16, fontWeight:500, flex:1 }}>{r.label}</span>
            {r.id !== "logout" && <ChevronRight size={18} color="#4b5563" />}
          </button>
        ))}
      </div>
    </div>
  );
}
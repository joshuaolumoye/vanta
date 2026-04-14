import React, { useState } from "react";
import { ArrowLeft, Link2, Mail } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────
type Notif = {
  id: string;
  icon: React.ReactNode;   // left emoji/icon
  img: string;             // post thumbnail
  title: string;
  body: React.ReactNode;
  unread?: boolean;
};

// ── Icon components ────────────────────────────────────────────────
const Sparkles = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" fill="#a78bfa"/>
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" fill="#a78bfa"/>
  </svg>
);
const Heart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);
const Party = () => <span style={{ fontSize: 16 }}>🎉</span>;
const Person = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#60a5fa"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const Dollar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/>
    <path d="M12 6v12M9 9h4.5a1.5 1.5 0 010 3H10.5a1.5 1.5 0 000 3H15" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const Gift = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="8" width="18" height="13" rx="1" stroke="#f472b6" strokeWidth="2"/>
    <path d="M21 12H3M12 8v13" stroke="#f472b6" strokeWidth="2"/>
    <path d="M12 8C12 8 8 8 8 5a2 2 0 014 0M12 8c0 0 4 0 4-3a2 2 0 00-4 0" stroke="#f472b6" strokeWidth="2"/>
    <rect x="1" y="5" width="22" height="4" rx="1" stroke="#f472b6" strokeWidth="2"/>
  </svg>
);
const Book = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="#fb923c" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="#fb923c" strokeWidth="2"/>
  </svg>
);

// ── Placeholder thumbnails (colored rects as fallback) ─────────────
function Thumb({ src, color }: { src?: string; color: string }) {
  const [err, setErr] = useState(false);
  if (src && !err)
    return <img src={src} alt="" onError={() => setErr(true)}
      style={{ width: 52, height: 52, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />;
  return <div style={{ width: 52, height: 52, borderRadius: 10, background: color, flexShrink: 0 }} />;
}

// ── Notification data ──────────────────────────────────────────────
const NOTIFS: Notif[] = [
  {
    id: "1", unread: true, icon: <Sparkles />, img: "/thumb1.png",
    title: "New Comment on Your Post",
    body: <><b>@Josephmaroon021</b> commented on your post "I love your art style and also feels very..."</>,
  },
  {
    id: "2", unread: true, icon: <Heart />, img: "/thumb2.png",
    title: "New Reaction Received",
    body: <><b>@Josephmaroon021</b> reacted to your post "I love your art style and also feels very..."</>,
  },
  {
    id: "3", icon: <Party />, img: "/thumb3.png",
    title: "Multiple Reaction Alert",
    body: <>Your post <b>"Into the Vantaverse"</b> is making waves in the community.</>,
  },
  {
    id: "4", icon: <Person />, img: "/thumb4.png",
    title: "New Followers",
    body: <><b>@Josephmaroon021</b> started following you.</>,
  },
  {
    id: "5", icon: <Party />, img: "/thumb5.png",
    title: "Creator milestone",
    body: <>You've reached [X] followers. Your audience is growing.</>,
  },
  {
    id: "6", icon: <Dollar />, img: "/thumb6.png",
    title: "New Donations Received",
    body: <><b>@Josephmaroon021</b> donated <b>50VP Coins (3.5$)</b> to your post "I love your art style..."</>,
  },
  {
    id: "7", icon: <Gift />, img: "/thumb7.png",
    title: "Gift on your Comic",
    body: <><b>@Josephmaroon021</b> sent a gift <b>50VP Coins (3.5$)</b> on your comic "Switchface..."</>,
  },
  {
    id: "8", icon: <Gift />, img: "/thumb8.png",
    title: "Gift on your Novel",
    body: <><b>@Josephmaroon021</b> sent a gift <b>50VP Coins (3.5$)</b> on your novel "Switchface..."</>,
  },
  {
    id: "9", icon: <Book />, img: "/thumb9.png",
    title: "Support message",
    body: <><b>@Josephmaroon021</b> commented on your comic book <b>"DeathNote"</b></>,
  },
  {
    id: "10", icon: <Party />, img: "/thumb10.png",
    title: "Support Milestone",
    body: <>Your project <b>"DeathNote"</b> has reached <b>2,300VP Coins(250$)</b> total in donations.</>,
  },
];

// ── Thumb accent colors per item ───────────────────────────────────
const COLORS = ["#1a1035","#2d0a1f","#0f2a1a","#0a1f2d","#1a0a2d","#0a2d1a","#2d1a0a","#1a2d0a","#2d0a2d","#0a2d2d"];

// ── Component ─────────────────────────────────────────────────────
export default function NotificationsModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <style>{`
        .np { position:fixed; inset:0; z-index:60; display:flex; justify-content:flex-end; }
        .np-dim { position:absolute; inset:0; background:rgba(0,0,0,0.6); }
        .np-panel { position:relative; z-index:1; width:420px; height:100dvh; background:#0a0a1a; display:flex; flex-direction:column; overflow:hidden; }
        .np-scroll { overflow-y:auto; flex:1; scrollbar-width:thin; scrollbar-color:rgba(255,255,255,0.1) transparent; }
        .np-scroll::-webkit-scrollbar { width:3px; }
        .np-scroll::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:10px; }
        .np-row { display:flex; align-items:flex-start; gap:12px; padding:14px 20px; border-bottom:1px solid rgba(255,255,255,0.05); cursor:pointer; transition:background .15s; text-align:left; width:100%; background:none; border-left:none; border-right:none; border-top:none; }
        .np-row:hover { background:rgba(255,255,255,0.03); }
        @media(max-width:640px) { .np-panel { width:100%; } .np-dim { display:none; } }
      `}</style>

      <div className="np" onClick={e => e.target === e.currentTarget && onClose()}>
        <div className="np-dim" onClick={onClose} />
        <div className="np-panel">

          {/* ── Top bar ── */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px 12px", flexShrink:0 }}>
            <button onClick={onClose} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", padding:4 }}>
              <ArrowLeft size={20} color="#9ca3af" />
            </button>
            <div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(139,92,246,0.15)", border:"1px solid rgba(139,92,246,0.25)", borderRadius:20, padding:"3px 10px 3px 8px" }}>
              <Mail size={13} color="#a78bfa" />
              <span style={{ color:"#a78bfa", fontWeight:700, fontSize:12 }}>3</span>
            </div>
          </div>

          {/* ── Header row: gradient circle + link + title ── */}
          <div style={{ display:"flex", alignItems:"center", gap:10, padding:"4px 20px 16px", borderBottom:"1px solid rgba(255,255,255,0.07)", flexShrink:0 }}>
            <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#ec4899,#a855f7)", flexShrink:0 }} />
            <Link2 size={15} color="#4b5563" style={{ flexShrink:0 }} />
            <span style={{ color:"#fff", fontWeight:800, fontSize:26, letterSpacing:"-0.5px" }}>Notifications</span>
          </div>

          {/* ── List ── */}
          <div className="np-scroll">
            {NOTIFS.map((n, i) => (
              <button key={n.id} className="np-row">
                {/* Left icon */}
                <div style={{ width:32, display:"flex", alignItems:"center", justifyContent:"center", paddingTop:2, flexShrink:0 }}>
                  {n.icon}
                </div>

                {/* Thumbnail */}
                <div style={{ position:"relative", flexShrink:0 }}>
                  <Thumb src={n.img} color={COLORS[i % COLORS.length]} />
                  {n.unread && (
                    <div style={{ position:"absolute", top:4, right:4, width:8, height:8, background:"#3b82f6", borderRadius:"50%", border:"1.5px solid #0a0a1a" }} />
                  )}
                </div>

                {/* Text */}
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ color:"#fff", fontWeight:700, fontSize:13, margin:"0 0 3px" }}>{n.title}</p>
                  <p style={{ color:"#9ca3af", fontSize:12, margin:0, lineHeight:1.5 }}>{n.body}</p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
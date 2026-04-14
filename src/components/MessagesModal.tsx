import { useState } from "react";
import { ArrowLeft, Send, Image as ImageIcon, Shield, Mail } from "lucide-react";

const CONVOS = [
  { id: "1", name: "Joseph Frank",  handle: "@josephjuice009", img: "/avatar.png" },
  { id: "2", name: "Cyberpunk DC",  handle: "@josephjuice009", img: "/avatar2.png" },
  { id: "3", name: "Vanta Team",    handle: "@TeamAdmin" },
  { id: "4", name: "Cyberpunk DC",  handle: "@josephjuice009" },
  { id: "5", name: "Cyberpunk DC",  handle: "@josephjuice009" },
];

const SEED = [
  { id: "1", fromMe: true,  time: "9:30PM", text: "Hey! I am a huge fan of your art style and stuff, can we collaborate on a project that i am currently working on?" },
  { id: "2", fromMe: false, time: "9:30PM", text: "Yikes! we will reach out to you when there's an opening for a collaboration but thanks for taking an interest and liking our stuff though." },
];

const BG = ["#7c3aed","#db2777","#0891b2","#059669","#9333ea"];

function Avatar({ name, img, size = 40 }: { name: string; img?: string; size?: number }) {
  const [err, setErr] = useState(false);
  const bg = BG[name.charCodeAt(0) % BG.length];
  return img && !err
    ? <img src={img} alt={name} onError={() => setErr(true)} style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
    : <div style={{ width: size, height: size, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: size * 0.38 }}>{name[0]}</span>
      </div>;
}

const Check = () => (
  <span style={{ width: 15, height: 15, background: "#22c55e", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#fff", fontWeight: 700, flexShrink: 0 }}>✓</span>
);

const LinkIcon = ({ color = "#4b5563" }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" style={{ flexShrink: 0 }}>
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
);

export default function MessagesModal({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState<typeof CONVOS[0] | null>(null);
  const [msgs, setMsgs] = useState(SEED);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMsgs(p => [...p, { id: Date.now().toString(), fromMe: true, time: "Just now", text: input }]);
    setInput("");
  };

  return (
    <>
      <style>{`
        .mp { position:fixed; inset:0; z-index:60; display:flex; justify-content:flex-end; }
        .mp-dim { position:absolute; inset:0; background:rgba(0,0,0,0.6); }
        .mp-panel { position:relative; z-index:1; width:420px; height:100dvh; background:#0a0a1a; display:flex; flex-direction:column; overflow:hidden; }
        .mp-scroll { overflow-y:auto; scrollbar-width:thin; scrollbar-color:rgba(255,255,255,0.1) transparent; }
        .mp-scroll::-webkit-scrollbar { width:3px; }
        .mp-scroll::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:10px; }
        .conv-row { display:flex; align-items:center; gap:12px; padding:13px 20px; width:100%; background:none; border:none; border-bottom:1px solid rgba(255,255,255,0.05); cursor:pointer; text-align:left; transition:background .15s; }
        .conv-row:hover { background:rgba(255,255,255,0.03); }
        .mp-hdr { display:flex; align-items:center; gap:10px; padding:18px 20px; border-bottom:1px solid rgba(255,255,255,0.06); flex-shrink:0; }
        .mp-btn { background:none; border:none; cursor:pointer; display:flex; padding:4px; }
        .mp-input { display:flex; align-items:center; gap:10px; background:#12122a; border:1px solid rgba(255,255,255,0.08); border-radius:30px; padding:10px 10px 10px 16px; }
        @media(max-width:640px) { .mp-panel { width:100%; } .mp-dim { display:none; } }
      `}</style>

      <div className="mp" onClick={e => e.target === e.currentTarget && onClose()}>
        <div className="mp-dim" onClick={onClose} />
        <div className="mp-panel">

          {/* ── LIST ── */}
          {!active && <>
            <div className="mp-hdr">
              <button className="mp-btn" onClick={onClose}><ArrowLeft size={20} color="#9ca3af" /></button>
              <div style={{ width:38, height:38, borderRadius:"50%", background:"linear-gradient(135deg,#a855f7,#ec4899)", flexShrink:0 }} />
              <span style={{ color:"#fff", fontWeight:700, fontSize:20, flex:1 }}>All Messages</span>
              <div style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(139,92,246,0.15)", border:"1px solid rgba(139,92,246,0.25)", borderRadius:20, padding:"4px 12px" }}>
                <Mail size={13} color="#a78bfa" />
                <span style={{ color:"#a78bfa", fontWeight:700, fontSize:12 }}>3</span>
              </div>
            </div>

            <div className="mp-scroll" style={{ flex:1 }}>
              {CONVOS.map(c => (
                <button key={c.id} className="conv-row" onClick={() => { setActive(c); setMsgs(SEED); }}>
                  <Avatar name={c.name} img={c.img} size={44} />
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:2 }}>
                      <span style={{ color:"#fff", fontWeight:700, fontSize:14 }}>{c.name}</span>
                      <Check />
                    </div>
                    <span style={{ color:"#6b7280", fontSize:12 }}>{c.handle}</span>
                  </div>
                  <LinkIcon color="#374151" />
                  <div style={{ background:"#3b82f6", borderRadius:20, padding:"3px 12px", marginLeft:8, flexShrink:0 }}>
                    <span style={{ color:"#fff", fontSize:11, fontWeight:700 }}>2 New Replies</span>
                  </div>
                </button>
              ))}
            </div>
          </>}

          {/* ── CHAT ── */}
          {active && <>
            {/* Top bar: back arrow + purple "3" badge */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px 12px", flexShrink:0 }}>
              <button className="mp-btn" onClick={() => setActive(null)}><ArrowLeft size={20} color="#9ca3af" /></button>
              <div style={{ width:24, height:24, background:"#9333ea", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ color:"#78053C", fontSize:8, fontWeight:900 }}>3</span>
              </div>
            </div>
            {/* Profile row: avatar + name + verified */}
            <div style={{ display:"flex", alignItems:"center", gap:10, padding:"0 20px 16px", margin:"0 10px", borderBottom:"1px solid rgb(255, 255, 255)", flexShrink:0 }}>
              <Avatar name={active.name} img={active.img} size={44} />
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ color:"#fff", fontWeight:800, fontSize:22 }}>{active.name}</span>
                  <Check />
                </div>
                {/* <span style={{ color:"#6b7280", fontSize:12 }}>Active now</span> */}
              </div>
            </div>

            {/* Security */}
            <div style={{ display:"flex", justifyContent:"center", padding:"16px 0 4px", flexShrink:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(234,179,8,0.12)", border:"1px solid rgba(234,179,8,0.25)", borderRadius:24, padding:"7px 16px" }}>
                <Shield size={12} color="#eab308" />
                <span style={{ color:"#eab308", fontSize:12, fontWeight:600 }}>All chats are secured and encrypted.</span>
              </div>
            </div>
            <p style={{ textAlign:"center", color:"#4b5563", fontSize:12, margin:"6px 0 10px", flexShrink:0 }}>Friday, September 3rd</p>

            {/* Messages */}
            <div className="mp-scroll" style={{ flex:1, padding:"0 16px 16px", display:"flex", flexDirection:"column", gap:20 }}>
              {msgs.map(m => (
                <div key={m.id} style={{ display:"flex", alignItems:"flex-start", flexDirection: m.fromMe ? "row-reverse" : "row", gap:8 }}>
                  <Avatar name={m.fromMe ? "Me" : active.name} img={m.fromMe ? "/avatar.png" : active.img} size={32} />

                  <div style={{ maxWidth:"72%", display:"flex", flexDirection:"column", alignItems: m.fromMe ? "flex-end" : "flex-start" }}>
                    <div style={{ position:"relative" }}>
                      {/* Tail: top-right for sent, top-left for received — pointing UP */}
                      <div style={{
                        position:"absolute", top:0,
                        ...(m.fromMe
                          ? { right:-8, borderWidth:"0 0 10px 10px", borderColor:"transparent transparent #7c3aed transparent" }
                          : { left:-8,  borderWidth:"0 10px 10px 0", borderColor:"transparent transparent #5b21b6 transparent" }),
                        width:0, height:0, borderStyle:"solid",
                      }} />
                      <div style={{
                        background: m.fromMe ? "#7c3aed" : "#5b21b6",
                        borderRadius: m.fromMe ? "14px 0 14px 14px" : "0 14px 14px 14px",
                        padding:"11px 15px",
                      }}>
                        <p style={{ color:"#fff", fontSize:13, margin:0, lineHeight:1.6 }}>{m.text}</p>
                      </div>
                    </div>
                    <span style={{ color:"#4b5563", fontSize:10, marginTop:4 }}>{m.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{ padding:"10px 16px 24px", borderTop:"1px solid rgba(255,255,255,0.05)", flexShrink:0 }}>
              <div className="mp-input">
                <button className="mp-btn" style={{ padding:0 }}><ImageIcon size={18} color="#4b5563" /></button>
                <input
                  value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
                  placeholder="Write a reply..."
                  style={{ flex:1, background:"none", border:"none", outline:"none", color:"#fff", fontSize:13, caretColor:"#a78bfa" }}
                />
                <button onClick={send} style={{ width:34, height:34, background:"#3b82f6", border:"none", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", flexShrink:0 }}>
                  <Send size={14} color="#fff" />
                </button>
              </div>
            </div>
          </>}

        </div>
      </div>
    </>
  );
}
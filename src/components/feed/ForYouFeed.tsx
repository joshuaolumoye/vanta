import React, { useState } from "react";
import PostCard, { type PostData } from "./PostCard";
import PostModal from "./PostModal";
import CreatePostModal from "./CreatePostModal";

const posts: PostData[] = [
  {
    id: "1",
    author: "Abraham Lincoln",
    avatar: "/avatar.png",
    verified: true,
    time: "38 minutes ago",
    title: "Into the vantaverse originals",
    type: "collaborate",
    image: "/post-image-1.png",
    likes: "689k",
    views: "789k",
    comments: "1.3M",
  },
  {
    id: "2",
    author: "Abraham Lincoln",
    avatar: "/avatar.png",
    verified: true,
    time: "38 minutes ago",
    title: "Into the origin of worlds...",
    type: "collaborate",
    image: "/post-image-2.png",
    likes: "689k",
    views: "789k",
    comments: "1.3M",
    isDynamic: true,
    dynamicLabel: "DYNAMIC",
    enduringLabel: "ENDURING",
    characterName: "NGUYEN\nTHUY LINH",
  },
  {
    id: "3",
    author: "Abraham Lincoln",
    avatar: "/avatar.png",
    verified: true,
    time: "38 minutes ago",
    title: "🔥 A New Challenger Approaches the Battlegrounds! 🔥",
    type: "challenge",
    image: "/post-image-3.png",
    challengeHandle: "@kintoxx",
    challengeBody:
      "SwitchFace has officially entered the Vanta Arena — and the realm trembles. Their mask has shifted, their stance has solidified, and now they await a worthy opponent brave enough to step forward.\n\nDo you dare challenge them?\nProve your strength. Test your legend. Face the ever-changing terror that is SwitchFace — if you think your character has the will to endure",
    challengeUrl:
      "https://vantaorigin.com/battle/SWITCHFACE-OPEN-CHALLENGE-49273",
    rewards: [
      "💰 +250 VP Coins",
      "🃏 +120 XP Battle Cards",
      "🏆 Eternal bragging rights across the realms.",
      "Step forward... or step aside.",
      "Only one will walk away from this clash of legends.",
    ],
    likes: "689k",
    views: "789k",
    comments: "1.3M",
  },
  {
    id: "4",
    author: "Abraham Lincoln",
    avatar: "/avatar.png",
    verified: true,
    time: "38 minutes ago",
    title: "Into the vantaverse originals",
    type: "collaborate",
    images: ["/post-image-4a.png", "/post-image-4b.png"],
    likes: "689k",
    views: "789k",
    comments: "1.3M",
  },
];

const ForYouFeed: React.FC = () => {
  const [activePost, setActivePost] = useState<PostData | null>(null);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    /* Relative container so the sticky FAB is anchored to this column */
    <div className="relative">
      <h2 className="text-white font-bold text-sm mb-3">For you</h2>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onCommentClick={(p) => setActivePost(p)}
        />
      ))}

      {/* ── Desktop sticky FAB — sits at the bottom-right of this column ── */}
      <div className="hidden md:block sticky bottom-10 pointer-events-none">
        <div className="flex justify-end pr-2 pointer-events-none">
          <>
            <style>{`
              @keyframes fab-float {
                0%   { transform: translateY(0px) rotate(0deg); }
                25%  { transform: translateY(-7px) rotate(-2deg); }
                50%  { transform: translateY(-11px) rotate(0deg); }
                75%  { transform: translateY(-7px) rotate(2deg); }
                100% { transform: translateY(0px) rotate(0deg); }
              }
              @keyframes fab-glow {
                0%, 100% { box-shadow: 0 4px 24px 2px rgba(139,92,246,0.45), 0 2px 8px rgba(0,0,0,0.5); }
                50%       { box-shadow: 0 8px 36px 6px rgba(139,92,246,0.75), 0 2px 8px rgba(0,0,0,0.5); }
              }
              @keyframes fab-ring-d {
                0%   { transform: scale(1);   opacity: 0.6; }
                100% { transform: scale(1.9); opacity: 0; }
              }
              .fab-btn-d {
                animation: fab-float 3.5s ease-in-out infinite,
                           fab-glow  3.5s ease-in-out infinite;
              }
              .fab-btn-d:hover {
                animation: fab-glow 3.5s ease-in-out infinite;
                transform: scale(1.12) translateY(-4px) !important;
              }
              .fab-ring-d  { animation: fab-ring-d 2.2s ease-out infinite; }
              .fab-ring-d2 { animation: fab-ring-d 2.2s ease-out 1.1s infinite; }
            `}</style>

            <div className="relative pointer-events-auto">
              <div className="fab-ring-d  absolute inset-0 rounded-2xl bg-purple-500/30" />
              <div className="fab-ring-d2 absolute inset-0 rounded-2xl bg-purple-500/20" />

              <button
                onClick={() => setCreateOpen(true)}
                className="fab-btn-d relative w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center cursor-pointer overflow-visible"
                aria-label="Create post"
              >
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-[#0d0d1a] border-2 border-purple-500 rounded-full flex items-center justify-center shadow-md">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </button>
            </div>
          </>
        </div>
      </div>

      {/* Post comment modal */}
      {activePost && (
        <PostModal post={activePost} onClose={() => setActivePost(null)} />
      )}

      {/* Create post modal */}
      {createOpen && <CreatePostModal onClose={() => setCreateOpen(false)} />}
    </div>
  );
};

export default ForYouFeed;
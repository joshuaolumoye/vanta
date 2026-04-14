import React, { useState } from "react";
import { X, Flame, Droplet, MessageCircle, Share2 } from "lucide-react";
import PostModal from "./PostModal";
import { type PostData } from "./PostCard";

const realmPills = [
  { name: "Fire Realm", members: "978k members", icon: "🔥", closeable: true },
  { name: "Water Re...", members: "978k mem...", icon: "💧" },
];

// Reuse PostData shape for mobile posts
const mobilePosts: PostData[] = [
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
    title: "Into the vantaverse originals",
    type: "collaborate",
    image: "/post-image-spider.png",
    likes: "689k",
    views: "789k",
    comments: "1.3M",
  },
];

const MobileFeed: React.FC = () => {
  const [activePost, setActivePost] = useState<PostData | null>(null);

  return (
    <>
      <div className="md:hidden flex flex-col bg-[#080814] min-h-screen pb-20">
        {/* Realm pills */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
          {realmPills.map((pill, i) => (
            <div
              key={pill.name}
              className={`relative flex items-center gap-2 bg-[#1a1a2e] border ${
                i === 0 ? "border-white/20" : "border-white/5"
              } rounded-xl px-3 py-2 flex-shrink-0`}
            >
              {pill.closeable && (
                <button className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center z-10 hover:bg-gray-500 transition">
                  <X size={8} className="text-white" />
                </button>
              )}
              <span className="text-base">{pill.icon}</span>
              <div>
                <p className="text-white text-xs font-semibold leading-none mb-0.5">
                  {pill.name}
                </p>
                <p className="text-gray-500 text-[10px]">{pill.members}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Posts */}
        <div className="px-3">
          {mobilePosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#12121f] border border-white/5 rounded-2xl mb-3 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-3 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                    <img
                      src={post.avatar || "/avatar.png"}
                      alt={post.author}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-white text-sm font-semibold">
                        {post.author}
                      </span>
                      {post.verified && (
                        <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-[10px]">• {post.time}</p>
                  </div>
                </div>
                <button className="text-purple-400 text-xs font-semibold hover:text-purple-300 transition">
                  Follow
                </button>
              </div>

              {/* Title */}
              <p className="px-3 pb-2 text-white font-semibold text-sm">
                {post.title}
              </p>

              {/* Image */}
              {post.image && (
                <div className="mx-3 mb-3 rounded-xl overflow-hidden">
                  <div className="w-full aspect-video bg-gray-800">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              )}

              {/* Stats — evenly spaced */}
              <div className="flex items-center justify-around px-3 py-2 border-t border-white/5">
                <button className="flex items-center gap-1 text-gray-400 text-xs">
                  <Flame size={13} className="text-pink-500" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-400 text-xs">
                  <Droplet size={13} className="text-blue-400" />
                  <span>{post.views}</span>
                </button>
                <button
                  className="flex items-center gap-1 text-gray-400 text-xs"
                  onClick={() => setActivePost(post)}
                >
                  <MessageCircle size={13} />
                  <span>{post.comments}</span>
                </button>
                <button className="text-gray-500">
                  <Share2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal (handles both desktop and mobile layouts internally) */}
      {activePost && (
        <PostModal post={activePost} onClose={() => setActivePost(null)} />
      )}
    </>
  );
};

export default MobileFeed;
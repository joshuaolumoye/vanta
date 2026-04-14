import React from "react";
import { Flame, Droplet, MessageCircle, Share2 } from "lucide-react";

export interface PostData {
  id: string;
  author: string;
  avatar?: string;
  verified?: boolean;
  time: string;
  title: string;
  type: "collaborate" | "challenge";
  image?: string;
  images?: string[];
  likes: string;
  views: string;
  comments: string;
  // challenge-specific
  challengeHandle?: string;
  challengeBody?: string;
  challengeUrl?: string;
  rewards?: string[];
  // post 2 specific
  isDynamic?: boolean;
  dynamicLabel?: string;
  enduringLabel?: string;
  characterName?: string;
}

interface PostCardProps {
  post: PostData;
  onCommentClick?: (post: PostData) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onCommentClick }) => {
  const isChallenge = post.type === "challenge";

  return (
    <div className="bg-[#12121f] border border-white/5 rounded-2xl mb-4 overflow-hidden">
      {/* ── Header ── */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
            <img
              src={post.avatar || "/avatar.png"}
              alt={post.author}
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-white text-sm font-semibold leading-none">
                {post.author}
              </span>
              {post.verified && (
                <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[9px] text-white font-bold leading-none flex-shrink-0">
                  ✓
                </span>
              )}
              {isChallenge && post.challengeHandle && (
                <span className="text-gray-500 text-xs">
                  • {post.challengeHandle}
                </span>
              )}
              {isChallenge && (
                <span className="text-gray-500 text-xs">▶</span>
              )}
            </div>
            <p className="text-gray-500 text-[11px] mt-0.5">{post.time}</p>
          </div>
        </div>

        {isChallenge ? (
          <button className="bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition shadow-lg shadow-pink-900/30">
            Accept Challenge
          </button>
        ) : (
          <button className="bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition shadow-lg shadow-pink-900/30">
            Collaborate
          </button>
        )}
      </div>

      {/* ── Challenge body ── */}
      {isChallenge && (
        <div className="px-4 pb-3">
          <p className="text-white font-bold text-sm mb-2">{post.title}</p>
          {post.challengeBody && (
            <p className="text-gray-300 text-xs leading-relaxed whitespace-pre-line">
              {post.challengeBody}
            </p>
          )}
          {post.challengeUrl && (
            <a
              href={post.challengeUrl}
              className="text-blue-400 text-xs hover:underline block mt-2 break-all"
            >
              {post.challengeUrl}
            </a>
          )}
        </div>
      )}

      {/* ── Regular title ── */}
      {!isChallenge && (
        <p className="px-4 pb-2 text-white font-semibold text-sm">
          {post.title}
        </p>
      )}

      {/* ── Single image ── */}
      {post.image && (
        <div className="mx-3 mb-3 rounded-xl overflow-hidden relative">
          <div
            className="w-full bg-gray-800"
            style={{ aspectRatio: post.isDynamic ? "16/9" : "4/3" }}
          >
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />

            {/* Dynamic / Enduring labels */}
            {post.isDynamic && (
              <>
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  {post.dynamicLabel || "DYNAMIC"}
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  {post.enduringLabel || "ENDURING"}
                </div>
                {post.characterName && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-white text-lg font-black tracking-widest whitespace-pre-line leading-tight drop-shadow-lg">
                      {post.characterName}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* AI badge */}
            {!post.isDynamic && !isChallenge && (
              <div className="absolute bottom-3 right-3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-[10px] font-bold">AI</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Dual images ── */}
      {post.images && post.images.length > 0 && (
        <div className="mx-3 mb-3 grid grid-cols-2 gap-2">
          {post.images.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden aspect-square bg-gray-800"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          ))}
        </div>
      )}

      {/* ── Challenge rewards ── */}
      {isChallenge && post.rewards && post.rewards.length > 0 && (
        <div className="px-4 pb-3">
          <p className="text-white text-xs font-bold mb-1">Victory brings:</p>
          {post.rewards.map((r, i) => (
            <p key={i} className="text-gray-300 text-xs leading-6">
              {r}
            </p>
          ))}
        </div>
      )}

      {/* ── Footer stats — evenly spaced ── */}
      <div className="flex items-center justify-around px-4 py-3 border-t border-white/5">
        <button className="flex items-center gap-1.5 text-gray-400 hover:text-pink-400 transition text-xs">
          <Flame size={14} className="text-pink-500" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition text-xs">
          <Droplet size={14} className="text-blue-400" />
          <span>{post.views}</span>
        </button>
        <button
          className="flex items-center gap-1.5 text-gray-400 hover:text-gray-200 transition text-xs"
          onClick={() => onCommentClick?.(post)}
        >
          <MessageCircle size={14} />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-1.5 text-gray-400 hover:text-white transition text-xs">
          <Share2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
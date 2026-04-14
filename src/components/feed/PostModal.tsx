import React, { useState } from "react";
import { X, Flame, Droplet, MessageCircle, Share2 } from "lucide-react";
import { type PostData } from "./PostCard";

interface Comment {
  id: string;
  author: string;
  avatar?: string;
  verified?: boolean;
  time: string;
  text: string;
}

const staticComments: Comment[] = [
  {
    id: "1",
    author: "Joseph Frank",
    avatar: "/avatar.png",
    time: "38 minutes ago",
    text: "Hey this shit looks really dope and i love your art style.",
  },
  {
    id: "2",
    author: "Cyberpunk DC",
    avatar: "/avatar2.png",
    verified: true,
    time: "38 minutes ago",
    text: "Just maybe we could be on some collaboration the future mate.",
  },
];

// ── Shared comment item used on both desktop and mobile ──
const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => (
  <div className="mb-5">
    {/* Row 1: Avatar + Name / Time */}
    <div className="flex items-center gap-3 mb-1">
      <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
        <img
          src={comment.avatar || "/avatar.png"}
          alt={comment.author}
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-white text-xs font-semibold">{comment.author}</span>
        {comment.verified && (
          <span className="w-3.5 h-3.5 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold flex-shrink-0">
            ✓
          </span>
        )}
        <span className="text-gray-500 text-[10px]">• {comment.time}</span>
      </div>
    </div>

    {/* Row 2: L-shaped connector + comment body */}
    <div className="flex gap-3">
      {/*
        Connector column — same width as avatar (36px = w-9).
        The inner div is 18px wide (= avatar centre offset) and uses
        border-left + border-bottom + border-bottom-left-radius to draw the ⌐ shape.
      */}
      <div className="flex-shrink-0 ml-4" style={{ width: 36 }}>
        <div
          style={{
            width: 18,
            minHeight: 44,
            borderLeft: "1.5px solid rgba(255,255,255,0.13)",
            borderBottom: "1.5px solid rgba(255,255,255,0.13)",
            borderBottomLeftRadius: 8,
          }}
        />
      </div>

      {/* Comment text + Reply */}
      <div className="flex-1 pt-1">
        <p className="text-gray-300 text-xs leading-relaxed">{comment.text}</p>
        <button className="text-purple-400 text-[11px] font-semibold mt-2 hover:text-purple-300 transition">
          Reply
        </button>
      </div>
    </div>
  </div>
);

interface PostModalProps {
  post: PostData | null;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>(staticComments);

  if (!post) return null;

  const handleSubmit = () => {
    if (!commentText.trim()) return;
    setComments([
      ...comments,
      {
        id: Date.now().toString(),
        author: "You",
        avatar: "/avatar.png",
        time: "Just now",
        text: commentText,
      },
    ]);
    setCommentText("");
  };

  const imageUrl =
    post.image || (post.images && post.images[0]) || "/post-image-1.png";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/75 backdrop-blur-sm px-0 md:px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* ────────────── MOBILE: bottom sheet ────────────── */}
      <div
        className="md:hidden w-full bg-[#0d0d1a] rounded-t-3xl border-t border-white/10 flex flex-col"
        style={{ maxHeight: "82vh" }}
      >
        {/* Drag handle + header */}
        <div className="flex flex-col items-center pt-3 pb-2 px-4">
          <div className="w-10 h-1 bg-white/20 rounded-full mb-3" />
          <div className="flex items-center justify-between w-full">
            <span className="text-white font-semibold text-sm">Comments</span>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition text-gray-400"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Comments */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {comments.map((c) => (
            <CommentItem key={c.id} comment={c} />
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-4 border-t border-white/5">
          <div className="flex items-center gap-3 bg-[#1a1a2e] border border-white/10 rounded-2xl px-4 py-3">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Write a comment..."
              className="flex-1 bg-transparent text-white text-xs placeholder-gray-500 outline-none"
            />
            {commentText.trim() && (
              <button
                onClick={handleSubmit}
                className="text-purple-400 text-xs font-semibold hover:text-purple-300 transition flex-shrink-0"
              >
                Post
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ────────────── DESKTOP: full modal ────────────── */}
      {/*
        width: min(95vw, 1100px)  →  much wider, tiny outer margin
        left panel: 42%  →  right panel: 58% (more content space)
      */}
      <div
        className="hidden md:flex bg-[#0d0d1a] rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
        style={{ width: "min(95vw, 1100px)", maxHeight: "90vh" }}
      >
        {/* LEFT: image panel — 42% */}
        <div
          className="relative flex-shrink-0 bg-black flex items-center justify-center overflow-hidden"
          style={{ width: "65%" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 bg-white text-black text-xs font-bold px-5 py-2 rounded-full hover:bg-gray-200 transition shadow-lg"
          >
            Cancel
          </button>

          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* RIGHT: content panel — flex-1 takes remaining 58% */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {/* Post info header */}
          <div className="p-5 border-b border-white/5 flex-shrink-0">
            {/* Author row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                  <img
                    src={post.avatar || "/avatar.png"}
                    alt={post.author}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm font-bold">{post.author}</span>
                    {post.verified && (
                      <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-[11px] mt-0.5">{post.time}</p>
                </div>
              </div>
              <button className="border border-purple-500/60 text-purple-400 text-xs font-semibold px-5 py-1.5 rounded-full hover:bg-purple-500/10 transition">
                Follow
              </button>
            </div>

            {/* Title */}
            <p className="text-white font-bold text-sm mb-2">
              Artwork Description — Into The Vantaverse Originals
            </p>

            {/* Description */}
            <p className="text-gray-400 text-xs leading-relaxed">
              This animated artwork reimagines Spider-Man: Homecoming through a bold,
              stylized visual lens, capturing the youthful energy and grounded heroism
              that define Peter Parker's journey.
            </p>

            {/* Stats — evenly spaced */}
            <div className="flex items-center justify-around mt-4 pt-4 border-t border-white/5">
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-pink-400 transition text-xs">
                <Flame size={14} className="text-pink-500" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition text-xs">
                <Droplet size={14} className="text-blue-400" />
                <span>{post.views}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-gray-200 transition text-xs">
                <MessageCircle size={14} />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-white transition text-xs">
                <Share2 size={14} />
                <span>{post.views}</span>
              </button>
            </div>
          </div>

          {/* Comments */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {comments.map((c) => (
              <CommentItem key={c.id} comment={c} />
            ))}
          </div>

          {/* Comment input */}
          <div className="px-5 py-4 border-t border-white/5 flex-shrink-0">
            <div className="flex items-center gap-3 bg-[#1a1a2e] border border-white/10 rounded-2xl px-4 py-3">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Write a comment..."
                className="flex-1 bg-transparent text-white text-xs placeholder-gray-500 outline-none"
              />
              {commentText.trim() && (
                <button
                  onClick={handleSubmit}
                  className="text-purple-400 text-xs font-semibold hover:text-purple-300 transition flex-shrink-0"
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
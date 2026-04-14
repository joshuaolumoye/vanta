import React from "react";

const FeedHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 py-5">
      {/* Game controller icon */}
      <span className="text-xl">🎮</span>
      <h1 className="text-white text-xl font-bold tracking-wide">Feeds</h1>
    </div>
  );
};

export default FeedHeader;
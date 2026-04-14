import React, { useRef, useState } from "react";

interface CardItem {
  id: string | number;
  content: React.ReactNode;
}

interface SwipeableCardStackProps {
  cards: CardItem[];
}

// Rotation angles for the stacked cards (back to front)
// Matches Figma: cards alternate slightly right/left
const CARD_ROTATIONS = [4.36, -1.55, 5.39, 3.9]; // degrees, back→front

/**
 * Renders a stack of cards with:
 *  - Back cards slightly offset/rotated behind the front card
 *  - Touch-swipe left/right to cycle to next/prev card
 */
const SwipeableCardStack: React.FC<SwipeableCardStackProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0 && activeIndex < cards.length - 1) {
        setActiveIndex((i) => i + 1);
      } else if (delta > 0 && activeIndex > 0) {
        setActiveIndex((i) => i - 1);
      }
    }
    touchStartX.current = null;
  };

  // Show up to 3 cards in the stack (the active one + 2 behind)
  const visibleIndices = [activeIndex, activeIndex + 1, activeIndex + 2].filter(
    (i) => i < cards.length
  );
  // Reverse so back cards render first (under front)
  const renderOrder = [...visibleIndices].reverse();

  return (
    <div
      className="relative w-full mx-auto"
      style={{ height: "420px", maxWidth: "360px" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {renderOrder.map((cardIdx) => {
        const isFront = cardIdx === activeIndex;
        const depth = visibleIndices.indexOf(cardIdx); // 0=front, 1=mid, 2=back
        const rotDeg = CARD_ROTATIONS[depth] ?? 0;
        const scale = 1 - depth * 0.03;
        const topOffset = depth * 10; // back cards slide down slightly

        return (
          <div
            key={cards[cardIdx].id}
            className="absolute inset-x-5"
            style={{
              top: `${topOffset}px`,
              bottom: 0,
              transform: `rotate(${rotDeg}deg) scale(${scale})`,
              transformOrigin: "center center",
              zIndex: isFront ? 10 : 10 - depth,
              transition: "transform 0.2s ease",
            }}
          >
            <div
              className="w-full h-full rounded-[22px] overflow-hidden border border-[#2c3957]"
              style={{ background: "#1a2337" }}
            >
              {isFront && cards[cardIdx].content}
            </div>
          </div>
        );
      })}

      {/* Dot indicators */}
      {cards.length > 1 && (
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-1.5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex
                  ? "w-5 bg-[#9333ea]"
                  : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SwipeableCardStack;
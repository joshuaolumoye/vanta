import React from "react";
import EmptyState from "./EmptyState";

interface CharactersTabProps {
  onCreate?: () => void;
}

const CharactersTab: React.FC<CharactersTabProps> = ({ onCreate }) => {
  return (
    <>
      {/* ── Desktop: centred card ── */}
      <div className="hidden md:flex justify-center px-8 pb-10">
        <div
          className="w-full max-w-[1097px] rounded-[15px] flex items-center justify-center"
          style={{
            background: "#252f46",
            minHeight: "366px",
          }}
        >
          <EmptyState
            message="Nothing to show here. Start by creating your first character."
            buttonLabel="Create"
            onAction={onCreate}
          />
        </div>
      </div>

      {/* ── Mobile: full-width card ── */}
      <div className="md:hidden mx-5 mb-8">
        <div className="bg-[#1a2337] border border-[#2c3957] rounded-[25px] min-h-[407px] flex items-center justify-center">
          <EmptyState
            message="Nothing to show here. Start by creating your first character."
            buttonLabel="Create"
            onAction={onCreate}
            showPlus={true}
          />
        </div>
      </div>
    </>
  );
};

export default CharactersTab;
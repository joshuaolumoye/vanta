import React from "react";
import EmptyState from "./EmptyState";

interface RealmsSectionProps {
  onCreate?: () => void;
}

/**
 * On desktop → shown inside the ContentTabs content area (empty state).
 * On mobile  → shown as a full section with stacked placeholder cards.
 */
const RealmsSection: React.FC<RealmsSectionProps> = ({ onCreate }) => {
  return (
    <>
      {/* ── Desktop empty state ── */}
      <div className="hidden md:flex justify-center px-8 pb-10">
        <div
          className="w-full max-w-[1097px] rounded-[15px] flex items-center justify-center"
          style={{ background: "#252f46", minHeight: "366px" }}
        >
          <EmptyState
            message="No realms created yet."
            buttonLabel="Create Realm"
            onAction={onCreate}
            showPlus={false}
          />
        </div>
      </div>

      {/* ── Mobile stacked card placeholders ── */}
      <div className="md:hidden px-5 pb-6">
        {/* Stacked-card visual (back layers) */}
        <div className="relative h-[400px]">
          {/* Back card 2 (most behind) */}
          <div
            className="absolute inset-x-[46px] top-[20px] h-[340px] rounded-[15px] border border-[#2c3957] bg-[#1a2337]"
            style={{ transform: "rotate(4.36deg)" }}
          />
          {/* Back card 1 */}
          <div
            className="absolute inset-x-[37px] top-[10px] h-[360px] rounded-[15px] border border-[#2c3957] bg-[#1a2337]"
            style={{ transform: "rotate(-1.55deg)" }}
          />
          {/* Front card */}
          <div
            className="absolute inset-x-5 top-0 h-[380px] rounded-[22px] border-2 border-[#2c3957] bg-[#1a2337] overflow-hidden flex flex-col items-center justify-end pb-8"
          >
            <EmptyState
              message="No realms created yet."
              buttonLabel="Create Realm"
              onAction={onCreate}
              showPlus={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RealmsSection;
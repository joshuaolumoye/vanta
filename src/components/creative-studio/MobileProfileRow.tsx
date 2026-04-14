import React from "react";

// ── Icons ────────────────────────────────────────────────────────────────────
const SendIcon = () => (
  <div className="relative w-[22px] h-[19px]">
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none">
      <path
        d="M1 1.5L21 9.5L1 17.5V12.5L15 9.5L1 6.5V1.5Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
    {/* Purple dot */}
    <span
      className="absolute -top-0.5 -right-0.5 w-[8px] h-[8px] rounded-full bg-[#9333ea]"
    />
  </div>
);

const BellIcon = () => (
  <div className="relative w-[18px] h-[20px]">
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path
        d="M9 0.5C9 0.5 9 0.5 9 0.5C6.24 0.5 4 2.74 4 5.5V6.18C2.23 7.16 1 9.04 1 11.5V14.5H17V11.5C17 9.04 15.77 7.16 14 6.18V5.5C14 2.74 11.76 0.5 9 0.5Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 14.5C6.5 15.88 7.62 17 9 17C10.38 17 11.5 15.88 11.5 14.5"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
    {/* Purple dot */}
    <span
      className="absolute -top-0.5 -right-0.5 w-[8px] h-[8px] rounded-full bg-[#9333ea]"
    />
  </div>
);

// ── Component ────────────────────────────────────────────────────────────────
interface MobileProfileRowProps {
  name?: string;
  handle?: string;
  onEdit?: () => void;
}

const MobileProfileRow: React.FC<MobileProfileRowProps> = ({
  name = "Anthony Joseph",
  handle = "@Josephmaroon021",
  onEdit,
}) => {
  return (
    <div className="flex items-start justify-between px-5 pt-5 pb-4 bg-[#111827]">
      {/* Left: name + handle */}
      <div className="flex flex-col gap-0.5">
        {/* Name row + Edit inline */}
        <div className="flex items-center gap-2.5">
          <span className="text-white font-bold text-[20px] leading-tight">
            {name}
          </span>
          <button
            onClick={onEdit}
            className="px-3 py-[3px] rounded-full bg-[#386add] text-white font-black text-[10px] hover:bg-blue-600 transition"
          >
            Edit
          </button>
        </div>
        {/* Handle */}
        <span className="text-[#7faef8] font-semibold text-[14px]">
          {handle}
        </span>
      </div>

      {/* Right: icons */}
      <div className="flex items-center gap-4 mt-1">
        <button className="flex items-center justify-center">
          <SendIcon />
        </button>
        <button className="flex items-center justify-center">
          <BellIcon />
        </button>
      </div>
    </div>
  );
};

export default MobileProfileRow;
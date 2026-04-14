import React from "react";

interface EmptyStateProps {
  message: string;
  buttonLabel: string;
  onAction?: () => void;
  /** Show a "+" icon before label (default true) */
  showPlus?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  buttonLabel,
  onAction,
  showPlus = true,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-6 px-4 text-center">
      <p className="text-[#7faef8] font-semibold text-[18px] max-w-[400px]">
        {message}
      </p>
      <button
        onClick={onAction}
        className="flex items-center gap-1.5 px-8 py-3 rounded-full bg-[#1976d2] hover:bg-blue-700 text-white font-bold text-[18px] transition-all hover:scale-105 active:scale-100"
      >
        {showPlus && <span className="text-xl leading-none">+</span>}
        {buttonLabel}
      </button>
    </div>
  );
};

export default EmptyState;
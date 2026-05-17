import React, { useState } from "react";

/* ── shared select styles ── */
const selectStyle: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.5rem center",
  appearance: "none" as const,
};

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const RegionHeader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-2.5">

        {/* ── MOBILE layout (< sm) ── */}
        <div className="flex sm:hidden items-center gap-2">
          {/* 1. Info icon – circular gray bg */}
          <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" />
              <line x1="12" y1="12" x2="12" y2="16" />
            </svg>
          </div>

          {/* 2. Country dropdown */}
          <select
            className="flex-1 min-w-0 rounded-md bg-white px-2.5 py-1.5 text-xs text-black outline-none focus:ring-2 focus:ring-green-500"
            defaultValue="Nigeria"
            style={selectStyle}
          >
            <option value="Nigeria">🇳🇬 Nigeria</option>
            <option value="Ghana">🇬🇭 Ghana</option>
            <option value="Kenya">🇰🇪 Kenya</option>
          </select>

          {/* 3. Confirm button */}
          <button
            type="button"
            className="flex-shrink-0 rounded-md bg-gray-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 transition"
          >
            Confirm
          </button>

          {/* 4. X close icon */}
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-600 transition"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* ── DESKTOP layout (sm+) ── */}
        <div className="hidden sm:flex flex-row items-center justify-center gap-3">
          {/* descriptive text */}
          <p className="text-xs text-gray-300 text-center leading-snug">
            Features and services vary by region. Pick your country for a
            personalized experience.
          </p>

          {/* controls */}
          <div className="flex items-center gap-2">
            <select
              className="rounded-md bg-white px-2.5 py-1.5 text-xs text-black outline-none focus:ring-2 focus:ring-green-500 w-36"
              defaultValue="Nigeria"
              style={selectStyle}
            >
              <option value="Nigeria">🇳🇬 Nigeria</option>
              <option value="Ghana">🇬🇭 Ghana</option>
              <option value="Kenya">🇰🇪 Kenya</option>
            </select>

            <button
              type="button"
              className="rounded-md bg-gray-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 transition"
            >
              Confirm
            </button>

            <button
              type="button"
              onClick={() => setVisible(false)}
              className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600 hover:border-gray-400 transition"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default RegionHeader;
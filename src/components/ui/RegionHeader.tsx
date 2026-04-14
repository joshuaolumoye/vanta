import React from "react";

const RegionHeader: React.FC = () => {
  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          {/* Left text */}
          <p className="text-sm text-gray-300 text-center">
            Features and services vary by region. Pick your country for
            personalized experience.
          </p>

          {/* Right controls */}
          <div className="flex items-center justify-center gap-2">
            <select
              className="rounded-md bg-white px-3 py-2 pr-8 text-sm text-black outline-none focus:ring-2 focus:ring-green-500 w-40"
              defaultValue="Nigeria"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                appearance: 'none'
              }}
            >
              <option value="Nigeria">🇳🇬 Nigeria</option>
              <option value="Ghana">🇬🇭 Ghana</option>
              <option value="Kenya">🇰🇪 Kenya</option>
            </select>

            <button
              type="button"
              className="rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 transition"
            >
              Confirm
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-600 hover:border-gray-400 transition"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RegionHeader;
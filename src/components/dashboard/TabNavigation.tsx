import React from 'react';

export type TabType = 'realms' | 'characters' | 'create-deck' | 'feed';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8 overflow-x-auto pb-2">
      <button
        onClick={() => onTabChange('realms')}
        className={`relative px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all overflow-hidden ${
          activeTab === 'realms'
            ? 'text-white'
            : 'bg-[#141824] text-slate-300 hover:bg-[#1a1f35]'
        }`}
      >
        {activeTab === 'realms' && (
          <div 
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}
          ></div>
        )}
        <span className="relative z-10">Realms</span>
      </button>

      <button
        onClick={() => onTabChange('characters')}
        className={`relative px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all overflow-hidden ${
          activeTab === 'characters'
            ? 'text-white'
            : 'bg-[#141824] text-slate-300 hover:bg-[#1a1f35]'
        }`}
      >
        {activeTab === 'characters' && (
          <div 
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}
          ></div>
        )}
        <span className="relative z-10">Characters</span>
      </button>

      <button
        onClick={() => onTabChange('create-deck')}
        className={`relative px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all overflow-hidden ${
          activeTab === 'create-deck'
            ? 'text-white'
            : 'bg-[#141824] text-slate-300 hover:bg-[#1a1f35]'
        }`}
      >
        {activeTab === 'create-deck' && (
          <div 
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}
          ></div>
        )}
        <span className="relative z-10">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-2 py-0.5 text-[10px] font-bold mr-1">
            COMING SOON
          </span>
          Create Deck
        </span>
      </button>

      <button
        onClick={() => onTabChange('feed')}
        className={`relative px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all overflow-hidden ${
          activeTab === 'feed'
            ? 'text-white'
            : 'bg-[#141824] text-slate-300 hover:bg-[#1a1f35]'
        }`}
      >
        {activeTab === 'feed' && (
          <div 
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}
          ></div>
        )}
        <span className="relative z-10">Feed</span>
      </button>
    </div>
  );
};

export default TabNavigation;
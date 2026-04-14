import React, { useState } from 'react';
import { ArrowLeft, Bell, Star, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TabNavigation, { type TabType } from '../../components/dashboard/TabNavigation';

interface Realm {
  id: string;
  name: string;
  subtitle: string;
  members: string;
  icon: string;
  gradient: string;
}

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('realms');
  const [isAnimating, setIsAnimating] = useState(false);

  const realms: Realm[] = [
    {
      id: 'obaalu',
      name: 'Obaalu — The Emberforge of Creation',
      subtitle: 'Realm of Fire',
      members: '789k members',
      icon: '🔥',
      gradient: 'from-pink-500 via-purple-600 to-pink-500'
    },
    {
      id: 'kyael',
      name: 'Kyael — The Eternal Flow',
      subtitle: 'Realm of Water',
      members: '654k members',
      icon: '💧',
      gradient: 'from-blue-400 via-cyan-500 to-blue-600'
    },
    {
      id: 'urdaban',
      name: 'Urdaban — The Celestial Drift',
      subtitle: 'Realm of Air',
      members: '523k members',
      icon: '🌪️',
      gradient: 'from-indigo-400 via-blue-500 to-indigo-600'
    },
    {
      id: 'eginon',
      name: 'Eginon — The Core of Reverie',
      subtitle: 'Realm of Earth',
      members: '701k members',
      icon: '🌍',
      gradient: 'from-amber-400 via-yellow-500 to-amber-600'
    }
  ];

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#1A2337] text-white">
      {/* Header with Banner */}
      <div className="relative">
        {/* Banner Background */}
        <div className="h-32 md:h-40 lg:h-48 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #581c87 25%, #7c3aed 50%, #581c87 75%, #1e1b4b 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient 15s ease infinite'
            }}
          >
            {/* Purple glow effects */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
          </div>
          
          {/* Decorative text overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <p className="text-6xl md:text-8xl font-bold text-white">Change banner image</p>
          </div>
        </div>

        {/* Top Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:px-6">
          <button 
            onClick={() => navigate(-1)}
            className="text-white/80 hover:text-white transition"
          >
            <ArrowLeft size={24} />
          </button>
        </div>

        {/* Recommended Dimension Text */}
        <div className="absolute top-12 md:top-16 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white/60 text-xs md:text-sm">
            Recommended Dimension 1720 X 239Pixels
          </p>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition">
            Replace
          </button>
          <button className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition">
            Remove
          </button>
        </div>

        {/* Profile Picture */}
        <div className="absolute -bottom-12 md:-bottom-14 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#0a0e1a] overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1f35]">
                <img 
                  src="/api/placeholder/120/120" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="pt-16 md:pt-20 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Username and Badges */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h1 className="text-xl md:text-2xl font-bold">Anthony Joseph</h1>
              <span className="px-2 py-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded text-xs font-bold">
                PRO
              </span>
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <p className="text-slate-400 text-sm">@josephanthony021</p>
          </div>

          {/* Action Bar with General, Creator Studio, and Level Progress */}
          <div className="flex items-center justify-between mb-6 gap-2 flex-wrap">
            {/* Left Side - Buttons and Icons */}
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-[#141824] hover:bg-[#1a1f35] rounded-lg text-white text-sm font-medium transition flex items-center gap-2">
                General
                <span className="text-slate-400">≡</span>
              </button>
              
              <button className="px-3 py-1.5 bg-[#141824] hover:bg-[#1a1f35] rounded-lg text-white text-sm font-medium transition flex items-center gap-2 relative">
                <Star size={16} className="text-purple-400" />
                Creator Studio
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-[9px] font-bold whitespace-nowrap">
                  COMING SOON
                </span>
              </button>

              <button className="p-2 bg-[#141824] hover:bg-[#1a1f35] rounded-lg transition">
                <MessageCircle size={18} className="text-slate-400" />
              </button>

              <button className="p-2 bg-[#141824] hover:bg-[#1a1f35] rounded-lg transition">
                <Bell size={18} className="text-slate-400" />
              </button>
            </div>

            {/* Right Side - Level Progress */}
            <div className="flex items-center gap-2">
              <div className="flex flex-row items-end gap-x-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#FC187B] text-sm font-medium">Vanta Level Creator 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-48 bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#FC187B] to-purple-600" 
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                  <span className="text-slate-400 text-xs whitespace-nowrap">362/264</span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Star size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Dashboard Button */}
          <div className="flex justify-center mb-8">
            <button 
              onClick={() => navigate('/creative-studio')}
              className="px-8 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              My Dashboard
            </button>
          </div>
        </div>

        {/* Stats Grid with Unified Background Image - FULL WIDTH */}
        <div 
          className="relative rounded-2xl overflow-hidden mb-8"
          style={{
            backgroundImage: 'url(/vanta-hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Unified Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-pink-900/80"></div>
          
          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
            {/* Vanta Tokens */}
            <div className="text-center p-4 cursor-pointer transition-transform hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-slate-300 text-xs font-medium">Vanta Tokens</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                893K
              </div>
            </div>

            {/* Current Tiers */}
            <div className="text-center p-4 cursor-pointer transition-transform hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-slate-300 text-xs font-medium">Current Tiers</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                Lvl 3
              </div>
            </div>

            {/* Followers */}
            <div className="text-center p-4 cursor-pointer transition-transform hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-slate-300 text-xs font-medium">Followers</span>
                <span className="px-2 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-[10px] font-bold">
                  FIRE
                </span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                2.8M
              </div>
            </div>

            {/* Following */}
            <div className="text-center p-4 cursor-pointer transition-transform hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-slate-300 text-xs font-medium">Following</span>
                <span className="px-2 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-[10px] font-bold">
                  FIRE
                </span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                789K
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation and Content - Back in Container */}
        <div className="max-w-6xl mx-auto px-4">
          {/* Animated Tab Navigation Component */}
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

          {/* Tab Content */}
          <div className={`transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {/* Realms Tab */}
            {activeTab === 'realms' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {realms.map((realm) => (
                    <div
                      key={realm.id}
                      className="group relative rounded-2xl overflow-hidden bg-[#141824] hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                      <div 
                        className={`h-48 md:h-56 bg-gradient-to-br ${realm.gradient} p-6 flex flex-col items-center justify-center text-center relative overflow-hidden`}
                      >
                        {/* Icon */}
                        <div className="text-5xl md:text-6xl mb-4 relative z-10">
                          {realm.icon}
                        </div>
                        
                        {/* Realm Name */}
                        <h3 className="text-white font-bold text-sm md:text-base mb-1 relative z-10 line-clamp-2">
                          {realm.name}
                        </h3>
                        
                        {/* Members Count */}
                        <p className="text-white/80 text-xs relative z-10">
                          {realm.members}
                        </p>

                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* See More Button */}
                <div className="flex justify-center pt-4">
                  <button className="px-8 py-3 rounded-full bg-[#141824] hover:bg-[#1a1f35] text-white font-semibold transition-all border border-slate-700 hover:border-purple-500/50">
                    See More Realms
                  </button>
                </div>
              </div>
            )}

            {/* Characters Tab */}
            {activeTab === 'characters' && (
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="text-center max-w-md mx-auto">
                  <p className="text-slate-300 mb-6">
                    Nothing to show here. Start by creating your first character.
                  </p>
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold transition-all transform hover:scale-105">
                    Create
                  </button>
                </div>
              </div>
            )}

            {/* Create Deck Tab */}
            {activeTab === 'create-deck' && (
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="text-center max-w-md mx-auto">
                  <p className="text-slate-300 mb-6">
                    Start building your deck. Create powerful combinations.
                  </p>
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold transition-all transform hover:scale-105">
                    Create Deck
                  </button>
                </div>
              </div>
            )}

            {/* Feed Tab */}
            {activeTab === 'feed' && (
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="text-center max-w-md mx-auto">
                  <p className="text-slate-300 mb-6">
                    Your feed is empty. Start following creators to see their content.
                  </p>
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold transition-all transform hover:scale-105">
                    Discover Creators
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inline styles for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

interface OnboardingStepsProps {
  onComplete: () => void;
  onBack: () => void;
}

interface RealmOption {
  id: string;
  name: string;
  subtitle: string;
  members: string;
  icon: string;
  gradient: string;
}

interface StoryTypeOption {
  id: string;
  name: string;
  image: string;
}

const OnboardingSteps: React.FC<OnboardingStepsProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRealm, setSelectedRealm] = useState<string>('');
  const [selectedStoryType, setSelectedStoryType] = useState<string>('');
  const [selectedDiscovery, setSelectedDiscovery] = useState<string>('');
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const totalSteps = 5;

  const realms: RealmOption[] = [
    {
      id: 'obaalu',
      name: 'Obaalu — The Emberforge of Creation',
      subtitle: 'Realm of Fire',
      members: '789k members',
      icon: '🔥',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      id: 'tyeela',
      name: 'Tyeela — The Eternal Flow',
      subtitle: 'Realm of Water',
      members: '654k members',
      icon: '💧',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'urdaban',
      name: 'Urdaban — The Celestial Drift',
      subtitle: 'Realm of Air',
      members: '523k members',
      icon: '🌪️',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'eginon',
      name: 'Eginon — The Core of Reverie',
      subtitle: 'Realm of Earth',
      members: '701k members',
      icon: '🌍',
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const storyTypes: StoryTypeOption[] = [
    { id: 'comics', name: 'Comics', image: '/api/placeholder/200/250' },
    { id: 'graphic-novels', name: 'Graphic Novels', image: '/api/placeholder/200/250' },
    { id: 'manga', name: 'Manga', image: '/api/placeholder/200/250' },
    { id: 'web-comics', name: 'Web Comics', image: '/api/placeholder/200/250' }
  ];

  const discoveryOptions = [
    { id: 'instagram', label: 'Instagram' },
    { id: 'facebook', label: 'Facebook' },
    { id: 'youtube', label: 'Youtube' },
    { id: 'others', label: 'Others' }
  ];

  const themes = [
    'Boys\' Love', 'Steampunk', 'Crossover', 'Feminist', 'Mystery', 'NSFW', 'Romance',
    'Boys\' Love', 'Family', 'Girls\' Love', 'Manga', 'Dystopian', 'Holiday', 'Cooking',
    'Boys\' Love', 'Family', 'Girls\' Love', 'Manga', 'Dystopian', 'Holiday', 'Cooking'
  ];

  const genres = [
    'Fantasy', 'Steampunk', 'Slice of Life', 'Mythology', 'Supernatural', 'Dark Fantasy', 'Romance',
    'Post-Apocalyptic', 'Drama', 'Action & Adventure', 'Sci-Fi', 'Post-Apocalyptic',
    'Marvel\'s Realms', 'Comedy', 'Horror & Thriller'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const toggleTheme = (theme: string) => {
    setSelectedThemes(prev =>
      prev.includes(theme)
        ? prev.filter(t => t !== theme)
        : [...prev, theme]
    );
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const canContinue = () => {
    switch (currentStep) {
      case 0: return selectedRealm !== '';
      case 1: return selectedStoryType !== '';
      case 2: return selectedDiscovery !== '';
      case 3: return selectedThemes.length > 0;
      case 4: return selectedGenres.length > 0;
      default: return false;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 0: return 'Choose your realms';
      case 1: return 'What kind of stories spark your imagination?';
      case 2: return 'How did you discover the Vanta Realm?';
      case 3: return 'Choose the themes that call to your soul.';
      case 4: return 'Explore list of favorite genres';
      default: return '';
    }
  };

  const getStepSubtitle = () => {
    switch (currentStep) {
      case 0: return 'Step into the elemental worlds that shape existence — where every realm holds its own power, story, and destiny.';
      case 1: return 'From cosmic battles to slice-of-life adventures — tell us what kind of comics make you lose track of time.';
      case 2: return 'Was it info, a friend, or a whisper through the comic feed? We\'d love to know how you found your way here.';
      case 3: return 'Pick the vibes, worlds, and emotions that shape your perfect realm. The more you choose, the better your experience becomes.';
      case 4: return 'Dive into diverse worlds — explore stories shaped by every imagination, from epic fantasy to urban legend.';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col">
      {/* Top Section with Cards Background */}
      <div className="relative w-full h-32 md:h-40 lg:h-48 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(vanta-hero.png)',
            backgroundColor: '#1a1a2e',
          }}
        >
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/15 via-purple-900/20 to-[#111827]"></div>
        </div>

        {/* Purple orbs background effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="text-purple-300 text-sm flex items-center gap-2 hover:text-purple-200 transition mb-8"
          >
            <ArrowLeft size={16} /> Back
          </button>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'w-8 bg-purple-500'
                    : 'w-2 bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Title and Subtitle */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {getStepTitle()}
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto px-4">
              {getStepSubtitle()}
            </p>
          </div>

          {/* Step Content */}
          <div className="mb-10">
            {/* Step 1: Choose Realms */}
            {currentStep === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                {realms.map((realm) => (
                  <button
                    key={realm.id}
                    onClick={() => setSelectedRealm(realm.id)}
                    className={`relative p-6 rounded-2xl transition-all duration-300 ${
                      selectedRealm === realm.id
                        ? 'ring-2 ring-purple-400 scale-105'
                        : 'hover:scale-105'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(168, 85, 247, 0.1))`
                    }}
                  >
                    {selectedRealm === realm.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                    
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="text-4xl mb-2">{realm.icon}</div>
                      <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                        {realm.name}
                      </h3>
                      <p className="text-slate-400 text-xs">{realm.subtitle}</p>
                      <p className="text-purple-300 text-xs font-medium">{realm.members}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Story Types */}
            {currentStep === 1 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                {storyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedStoryType(type.id)}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      selectedStoryType === type.id
                        ? 'ring-2 ring-purple-400 scale-105'
                        : 'hover:scale-105'
                    }`}
                  >
                    {selectedStoryType === type.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center z-10">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                    
                    <div className="aspect-[3/4] bg-gradient-to-br from-purple-900/40 to-pink-900/40 relative">
                      {/* Placeholder for image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/50 text-xs text-center px-4">
                          {type.name}
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1a1a2e] p-3">
                      <p className="text-white font-semibold text-sm">{type.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Discovery Source */}
            {currentStep === 2 && (
              <div className="max-w-md mx-auto space-y-3">
                {discoveryOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedDiscovery(option.id)}
                    className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                      selectedDiscovery === option.id
                        ? 'bg-purple-500/20 border-2 border-purple-400'
                        : 'bg-[#252F46] border-2 border-[#7FAEF8]/30 hover:border-purple-400/50'
                    }`}
                  >
                    <span className="text-white font-medium">{option.label}</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedDiscovery === option.id
                        ? 'border-purple-400 bg-purple-500'
                        : 'border-slate-400'
                    }`}>
                      {selectedDiscovery === option.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 4: Themes */}
            {currentStep === 3 && (
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap gap-3 justify-center">
                  {themes.map((theme, index) => (
                    <button
                      key={`${theme}-${index}`}
                      onClick={() => toggleTheme(`${theme}-${index}`)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedThemes.includes(`${theme}-${index}`)
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-105'
                          : 'bg-[#252F46] text-slate-300 hover:bg-[#2d3854] border border-[#7FAEF8]/30'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Genres */}
            {currentStep === 4 && (
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap gap-3 justify-center">
                  {genres.map((genre, index) => (
                    <button
                      key={`${genre}-${index}`}
                      onClick={() => toggleGenre(`${genre}-${index}`)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedGenres.includes(`${genre}-${index}`)
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-105'
                          : 'bg-[#252F46] text-slate-300 hover:bg-[#2d3854] border border-[#7FAEF8]/30'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button
              onClick={handleNext}
              disabled={!canContinue()}
              className={`w-full sm:w-auto px-12 py-4 rounded-full font-semibold transition-all duration-300 ${
                canContinue()
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transform hover:scale-105 shadow-lg shadow-purple-500/50'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              {currentStep === totalSteps - 1 ? 'Start Reading' : 'Continue'}
            </button>

            <button
              onClick={handleSkip}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSteps;
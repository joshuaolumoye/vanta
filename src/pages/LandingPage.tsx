import RegionHeader from "../components/ui/RegionHeader";
import Navbar from "../components/ui/Navbar";
import HeroSection from "../components/landingScreen/HeroSection";
import BackgroundAnimation from "../components/ui/BackgroundAnimation";
import ChooseRealmSection from "../components/landingScreen/ChooseRealmSection";
import DiscoverStoriesSection from "../components/landingScreen/DiscoverStoriesSection";
import LegendCallout from "../components/landingScreen/LegendCallout";
import OriginVerse from "../components/landingScreen/OriginVerse";
import VantaPassCard from "../components/landingScreen/VantaPassCard";
import SeasonProgressCard from "../components/landingScreen/SeasonProgressCard";
import LeaderboardSection from "../components/landingScreen/LeaderboardSection";
import VantaFoundrySection from "../components/landingScreen/VantaFoundrySection";
import ExploreCreationSection from "../components/landingScreen/ExploreCreationSection";
import StoryNeverEndsSection from "../components/landingScreen/StoryNeverEndsSection";
import JoinCreatorsCommunity from "../components/landingScreen/JoinCreatorsCommunity";
import Footer from "../components/ui/Footer";

function App() {
  return (
    <>
      <BackgroundAnimation />
      <RegionHeader />
      <Navbar />
      <HeroSection />
      <ChooseRealmSection />
      <DiscoverStoriesSection />
      <LegendCallout />
      <OriginVerse />
      <VantaPassCard />
      <SeasonProgressCard />
      <LeaderboardSection />
      <VantaFoundrySection />
      <ExploreCreationSection />
      <StoryNeverEndsSection />
      <JoinCreatorsCommunity />
      <Footer />
    </>
  );
}

export default App;
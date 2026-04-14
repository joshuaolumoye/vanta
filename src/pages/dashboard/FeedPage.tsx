import React, { useState } from "react";
import Navbar from "../../components/ui/FeedNavbar";
import FeedSubNav from "../../components/feed/FeedSubNav";
import FeedHeader from "../../components/feed/FeedHeader";
import StatsOverview from "../../components/feed/StatsOverview";
import ForYouFeed from "../../components/feed/ForYouFeed";
import ExploreRealms from "../../components/feed/ExploreRealms";
import MobileFeed from "../../components/feed/MobileFeed";
import MobileBottomNav from "../../components/feed/MobileBottomNav";
import MobileHeader from "../../components/feed/MobileHeader";
import FloatingCreateButton from "../../components/feed/FloatingCreateButton";
import CreatePostModal from "../../components/feed/CreatePostModal";
const FeedPage: React.FC = () => {
  const [mobileCreateOpen, setMobileCreateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080814] text-white">
      {/* Desktop navbar */}
      <Navbar />

      {/* Mobile header (V logo + profile + sidebar) */}
      <MobileHeader />

      <FeedSubNav />

      {/* Desktop layout */}
      <div className="hidden md:block">
        <FeedHeader />
        <div className="max-w-[1200px] mx-auto px-6 pb-16">
          <div className="grid grid-cols-[280px_1fr_280px] gap-6">
            <aside><StatsOverview /></aside>
            <main><ForYouFeed /></main>
            <aside><ExploreRealms /></aside>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <MobileFeed />
      <MobileBottomNav />

      {/* Mobile FAB */}
      <FloatingCreateButton onClick={() => setMobileCreateOpen(true)} />

      {mobileCreateOpen && <CreatePostModal onClose={() => setMobileCreateOpen(false)} />}
    </div>
  );
};

export default FeedPage;
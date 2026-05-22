import React, { useState } from "react";
import Navbar from "../../components/ui/FeedNavbar";
import FeedSubNav from "../../components/feed/FeedSubNav";
import FeedHeader from "../../components/feed/FeedHeader";
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
          <div className="flex gap-6">
            <main className="flex-1 min-w-0"><ForYouFeed /></main>
            <aside className="w-[240px] flex-shrink-0">
              <div className="fixed w-[240px] top-[calc(var(--navbar-height,64px)+theme(spacing.12))] h-[calc(100vh-var(--navbar-height,64px)-theme(spacing.12))] overflow-y-auto">
                <ExploreRealms />
              </div>
            </aside>
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
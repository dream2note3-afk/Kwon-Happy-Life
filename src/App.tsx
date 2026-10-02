import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorksGallery } from './components/WorksGallery';
import { LightboxModal } from './components/LightboxModal';
import { YouTubeShowcase } from './components/YouTubeShowcase';
import { FacebookEssaySection } from './components/FacebookEssaySection';
import { GearPhilosophy } from './components/GearPhilosophy';
import { MoodboardDrawer } from './components/MoodboardDrawer';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';
import { WorkItem, WORKS_DATA } from './data/studioData';
import { Volume2, VolumeX, Sparkles, Check } from 'lucide-react';

export default function App() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('kyw_moodboard');
      return saved ? new Set(JSON.parse(saved)) : new Set(['film-01', 'night-01']);
    } catch {
      return new Set(['film-01', 'night-01']);
    }
  });

  const [isMoodboardOpen, setIsMoodboardOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryInitialMessage, setInquiryInitialMessage] = useState('');
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kyw_moodboard', JSON.stringify(Array.from(bookmarkedIds)));
    } catch {
      // ignore
    }
  }, [bookmarkedIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('무드보드에서 제거되었습니다.');
      } else {
        next.add(id);
        showToast('무드보드에 작품이 추가되었습니다.');
      }
      return next;
    });
  };

  const handleClearAllBookmarks = () => {
    setBookmarkedIds(new Set());
    showToast('무드보드를 모두 비웠습니다.');
  };

  const handlePlayShowreel = () => {
    // Open the first featured film in modal
    const showreel = WORKS_DATA.find((w) => w.id === 'film-01') || WORKS_DATA[0];
    setSelectedWork(showreel);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'films') {
      const el = document.getElementById('works');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'snaps') {
      const el = document.getElementById('works');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiryWithMoodboard = (itemsSummary: string) => {
    setInquiryInitialMessage(itemsSummary);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#ededed] flex flex-col font-sans">
      {/* Top Bar following Top Bar Contract */}
      <Navbar
        moodboardCount={bookmarkedIds.size}
        onOpenMoodboard={() => setIsMoodboardOpen(true)}
        onOpenInquiry={() => {
          setInquiryInitialMessage('');
          setIsInquiryOpen(true);
        }}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onPlayShowreel={handlePlayShowreel}
          onExploreWorks={() => handleNavigate('works')}
          onOpenInquiry={() => {
            setInquiryInitialMessage('');
            setIsInquiryOpen(true);
          }}
        />

        {/* Curated Works Gallery */}
        <WorksGallery
          onSelectWork={(work) => setSelectedWork(work)}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* YouTube Showcase Theatre */}
        <YouTubeShowcase />

        {/* Facebook Photo Essay Section */}
        <FacebookEssaySection />

        {/* Gear & Artist Philosophy */}
        <GearPhilosophy />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      {selectedWork && (
        <LightboxModal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
          onSelectWork={(work) => setSelectedWork(work)}
          isBookmarked={bookmarkedIds.has(selectedWork.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      )}

      {/* Moodboard Drawer */}
      <MoodboardDrawer
        isOpen={isMoodboardOpen}
        onClose={() => setIsMoodboardOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onRemoveBookmark={(id) => handleToggleBookmark(id)}
        onClearAll={handleClearAllBookmarks}
        onSelectWork={(work) => setSelectedWork(work)}
        onOpenInquiryWithMoodboard={handleOpenInquiryWithMoodboard}
      />

      {/* Inquiry / Booking Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialMessage={inquiryInitialMessage}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-amber-500/30 bg-[#161924]/95 px-4 py-3 text-xs font-medium text-amber-200 shadow-2xl backdrop-blur-md animate-fadeIn">
          <Check className="h-4 w-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

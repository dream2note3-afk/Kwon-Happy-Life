import React from 'react';
import { Bookmark, Send, Menu, X, Play } from 'lucide-react';

interface NavbarProps {
  moodboardCount: number;
  onOpenMoodboard: () => void;
  onOpenInquiry: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  moodboardCount,
  onOpenMoodboard,
  onOpenInquiry,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'works', label: '작품 갤러리' },
    { id: 'films', label: '시네마틱 영상' },
    { id: 'snaps', label: '일상 스냅' },
    { id: 'youtube-theater', label: '유튜브 채널' },
    { id: 'philosophy', label: '작가 철학 & 장비' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1f222b] bg-[#0c0d12]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left text-lg font-semibold tracking-wider text-neutral-100 hover:text-amber-400 transition-colors uppercase cursor-pointer"
        >
          <span className="font-editorial text-2xl tracking-normal mr-2 italic">Studio</span>
          <span>권용우</span>
        </button>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-normal text-neutral-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors cursor-pointer py-1 ${
                  isActive
                    ? 'text-amber-400 border-b border-amber-400 font-medium'
                    : 'hover:text-neutral-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Moodboard button */}
          <button
            onClick={onOpenMoodboard}
            className="relative flex items-center gap-2 rounded-lg border border-[#272b38] bg-[#14161f] px-3.5 py-2 text-xs font-medium text-neutral-300 hover:border-neutral-500 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            title="저장한 무드보드 보기"
          >
            <Bookmark className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden sm:inline">무드보드</span>
            {moodboardCount > 0 && (
              <span className="ml-1 inline-flex items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black w-4 h-4 tabular-nums">
                {moodboardCount}
              </span>
            )}
          </button>

          {/* Shooting Inquiry button */}
          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-amber-400 active:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap shadow-sm shadow-amber-500/10"
          >
            <Send className="h-3.5 w-3.5" />
            <span>협업·촬영 문의</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white md:hidden cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#1f222b] bg-[#0c0d12] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-neutral-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left py-2 hover:text-amber-400 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-[#1f222b] flex items-center justify-between text-xs text-neutral-400">
              <span>일상의 찰나와 시네마틱 스냅</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <Play className="h-3 w-3 fill-current" /> YouTube
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

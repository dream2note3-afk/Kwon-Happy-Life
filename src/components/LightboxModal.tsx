import React, { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
  Share2,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Camera,
  MapPin,
  Calendar,
  Layers,
  Sliders,
  Check,
} from 'lucide-react';
import { WorkItem, WORKS_DATA } from '../data/studioData';

interface LightboxModalProps {
  work: WorkItem | null;
  onClose: () => void;
  onSelectWork: (work: WorkItem) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  work,
  onClose,
  onSelectWork,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!work) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [work]);

  if (!work) return null;

  const currentIndex = WORKS_DATA.findIndex((w) => w.id === work.id);
  const totalCount = WORKS_DATA.length;

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalCount) % totalCount;
    onSelectWork(WORKS_DATA[prevIndex]);
    setIsPlayingVideo(false);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalCount;
    onSelectWork(WORKS_DATA[nextIndex]);
    setIsPlayingVideo(false);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-6 animate-fadeIn">
      {/* Container */}
      <div className="relative flex flex-col lg:flex-row h-full max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-[#272b3a] bg-[#0f1118] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer border border-white/10"
          aria-label="닫기"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-all cursor-pointer border border-white/10 shadow-lg"
          aria-label="이전 작품"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-[420px] top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-all cursor-pointer border border-white/10 shadow-lg"
          aria-label="다음 작품"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Left Side: Media Display Zone */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[320px] lg:min-h-[580px]">
          {work.mediaType === 'video' && isPlayingVideo ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-black">
              {/* Simulated 4K Cinematic Playback Player */}
              <div className="relative w-full aspect-video max-h-full">
                <img
                  src={work.image}
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-black shadow-lg hover:scale-105 transition-transform"
                    >
                      <Pause className="h-6 w-6" />
                    </button>
                  </div>
                  <span className="mt-3 text-xs font-mono text-amber-300">
                    4K S-Log3 Cinematic Playback · {work.runtime}
                  </span>
                </div>

                {/* Progress bar simulation */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs">
                  <span className="font-mono text-amber-400">02:14</span>
                  <div className="flex-1 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-amber-500 rounded-full" />
                  </div>
                  <span className="font-mono text-neutral-400">{work.runtime}</span>
                  <a
                    href={work.socialUrl.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 flex items-center gap-1 text-amber-400 hover:underline"
                  >
                    YouTube 본편 <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
              <img
                src={work.image}
                alt={work.title}
                referrerPolicy="no-referrer"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />

              {work.mediaType === 'video' && (
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-2xl hover:scale-110 hover:bg-amber-500 hover:text-black transition-all cursor-pointer group"
                >
                  <Play className="h-8 w-8 fill-current ml-1 group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>
          )}

          {/* Bottom film strip controls */}
          <div className="absolute bottom-3 left-4 text-xs font-mono text-neutral-400 bg-black/60 px-3 py-1 rounded-md border border-white/10 backdrop-blur-md">
            <span>{currentIndex + 1} / {totalCount}</span>
            <span className="mx-2 text-neutral-600">·</span>
            <span>{work.mediaType === 'video' ? '4K Cinema Video' : 'Fine Art Photography'}</span>
          </div>
        </div>

        {/* Right Side: Editorial Info & Technical Specs Panel */}
        <div className="w-full lg:w-[420px] flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-[#232737] bg-[#12141c] p-6 lg:p-8">
          <div>
            {/* Top Tag & Actions */}
            <div className="flex items-center justify-between text-xs text-neutral-400 pb-4 border-b border-[#1f222f]">
              <span className="font-semibold text-amber-400 uppercase tracking-wider">
                {work.categoryLabel}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => onToggleBookmark(work.id, e)}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-amber-500 text-black border-amber-400'
                      : 'border-[#2c3042] bg-[#181a25] text-neutral-300 hover:text-white'
                  }`}
                >
                  {isBookmarked ? (
                    <>
                      <BookmarkCheck className="h-3.5 w-3.5" />
                      <span>무드보드 저장됨</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="h-3.5 w-3.5" />
                      <span>무드보드에 담기</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleShare}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2c3042] bg-[#181a25] text-neutral-300 hover:text-white cursor-pointer"
                  title="링크 복사"
                >
                  {copiedLink ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Title & English Subtitle */}
            <h2 className="mt-4 text-2xl font-bold text-white tracking-tight">
              {work.title}
            </h2>
            <p className="mt-1 text-sm font-serif italic text-neutral-400">
              {work.englishTitle}
            </p>

            {/* Location & Date */}
            <div className="mt-4 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-neutral-400">
              <span className="flex items-center gap-1 text-neutral-300">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                {work.location}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1 text-neutral-400">
                <Calendar className="h-3.5 w-3.5" />
                {work.date}
              </span>
            </div>

            {/* Story / Behind the shot */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                작가의 시선 & 기록 노트
              </h4>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed bg-[#171a25] p-4 rounded-xl border border-[#232737]">
                "{work.story}"
              </p>
            </div>

            {/* Camera & Technical EXIF Specs */}
            <div className="mt-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                <Sliders className="h-3.5 w-3.5 text-amber-400" />
                <span>기술 사양 & 촬영 메타데이터</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="rounded-lg bg-[#171a24] p-2.5 border border-[#232737]">
                  <span className="text-[10px] text-neutral-500 block uppercase">Camera</span>
                  <span className="font-semibold text-neutral-200 mt-0.5 block truncate">{work.camera}</span>
                </div>
                <div className="rounded-lg bg-[#171a24] p-2.5 border border-[#232737]">
                  <span className="text-[10px] text-neutral-500 block uppercase">Lens</span>
                  <span className="font-semibold text-neutral-200 mt-0.5 block truncate">{work.lens}</span>
                </div>
                <div className="rounded-lg bg-[#171a24] p-2.5 border border-[#232737]">
                  <span className="text-[10px] text-neutral-500 block uppercase">Focal / Aperture</span>
                  <span className="font-semibold text-neutral-200 mt-0.5 block">{work.exif.focalLength} · {work.exif.aperture}</span>
                </div>
                <div className="rounded-lg bg-[#171a24] p-2.5 border border-[#232737]">
                  <span className="text-[10px] text-neutral-500 block uppercase">Exposure / ISO</span>
                  <span className="font-semibold text-neutral-200 mt-0.5 block">{work.exif.shutterSpeed} · {work.exif.iso}</span>
                </div>
              </div>

              <div className="mt-2 rounded-lg bg-[#171a24] p-2.5 border border-[#232737] text-xs font-mono">
                <span className="text-[10px] text-neutral-500 block uppercase">Color Grade Profile</span>
                <span className="font-semibold text-amber-400 mt-0.5 block">{work.exif.colorProfile}</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 pt-4 border-t border-[#1f222f] flex items-center justify-between">
            <a
              href={work.socialUrl.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>{work.socialUrl.label}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white rounded border border-[#272b38] bg-[#151722]"
              >
                이전
              </button>
              <button
                onClick={handleNext}
                className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white rounded border border-[#272b38] bg-[#151722]"
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

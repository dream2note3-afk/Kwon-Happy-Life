import React from 'react';
import { Play, ArrowRight, Video, Camera, Sparkles, Youtube, Facebook } from 'lucide-react';
import { STUDIO_PROFILE } from '../data/studioData';
import heroImage from '../assets/images/hero_cinematic_snap_1790917285112.jpg';

interface HeroProps {
  onPlayShowreel: () => void;
  onExploreWorks: () => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlayShowreel,
  onExploreWorks,
  onOpenInquiry,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-[#1b1e27] bg-[#0c0d12] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient subtle glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7">
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>CINEMATOGRAPHER & STREET DOCUMENTARIAN</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">SEOUL</span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] leading-[1.15]" style={{ textWrap: 'balance' }}>
              일상의 찰나와 시네마틱 스냅을{' '}
              <span className="font-editorial italic font-normal text-amber-300">영상과 사진</span>으로 기록합니다.
            </h1>

            {/* Subtitle / Artist Statement */}
            <p className="mt-6 max-w-2xl text-base text-neutral-300 leading-relaxed sm:text-lg">
              흘러가는 도시의 무심한 틈새, 해 질 녘 골목길에 내려앉은 따스한 온도.
              유튜브 채널의 <strong className="font-semibold text-neutral-100">4K 시네마틱 영상</strong>과 
              페이스북의 <strong className="font-semibold text-neutral-100">일상 사진 에세이</strong>로 
              당신의 일상을 영화의 한 장면으로 남깁니다.
            </p>

            {/* Channel Links & Tech specs line */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1 text-neutral-300">
                <Video className="h-3.5 w-3.5 text-amber-400" />
                4K DCI · S-Log3 Cinema
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1 text-neutral-300">
                <Camera className="h-3.5 w-3.5 text-amber-400" />
                35mm & 50mm Prime Snaps
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">
                Sony FX3 · Leica Q2
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onPlayShowreel}
                className="group flex items-center gap-2.5 rounded-lg bg-neutral-100 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-white hover:shadow-lg hover:shadow-amber-500/10 active:bg-neutral-200 transition-all cursor-pointer"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-black group-hover:scale-110 transition-transform">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </div>
                <span>2026 대표 쇼릴 감상하기</span>
              </button>

              <button
                onClick={onExploreWorks}
                className="flex items-center gap-2 rounded-lg border border-[#272b38] bg-[#14161f] px-5 py-3 text-sm font-medium text-neutral-200 hover:border-neutral-500 hover:text-white transition-colors cursor-pointer"
              >
                <span>작품 갤러리 탐색</span>
                <ArrowRight className="h-4 w-4 text-neutral-400" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 font-medium transition-colors cursor-pointer py-2 px-1"
              >
                촬영 및 협업 문의하기 →
              </button>
            </div>

            {/* Adjacent Proof Metrics */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#1f222b] pt-6 sm:grid-cols-4">
              {STUDIO_PROFILE.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-editorial text-2xl lg:text-3xl font-bold tracking-tight text-white tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Container & Channel Cards */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Media Card Container */}
              <div className="relative overflow-hidden rounded-2xl border border-[#272a38] bg-[#13151e] shadow-2xl transition-all">
                {/* Visual Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={heroImage}
                    alt="황금빛 오후 서울 골목길 시네마틱 스냅"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle cinema letterbox scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play badge trigger */}
                  <button
                    onClick={onPlayShowreel}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    aria-label="시네마틱 영상 재생"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black">
                      <Play className="h-6 w-6 fill-current ml-1" />
                    </div>
                  </button>

                  {/* Top-right resolution indicator */}
                  <div className="absolute top-3 right-3 rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-neutral-200 border border-white/10">
                    4K DCI · 60 FPS
                  </div>

                  {/* Bottom caption inside media */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-semibold text-white">
                      Seoul Alleyway Film: 황금빛 오후의 기억
                    </p>
                    <div className="mt-0.5 flex items-center gap-2 text-[11px] text-neutral-300">
                      <span>Sony FX3</span>
                      <span aria-hidden="true">·</span>
                      <span>FE 35mm F1.4 GM</span>
                      <span aria-hidden="true">·</span>
                      <span>종로구 삼청동</span>
                    </div>
                  </div>
                </div>

                {/* Sub-bar with direct channel links */}
                <div className="grid grid-cols-2 divide-x divide-[#202330] border-t border-[#202330] bg-[#11131c] text-xs">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 text-neutral-300 hover:text-amber-400 hover:bg-[#161824] transition-colors"
                  >
                    <Youtube className="h-4 w-4 text-red-500" />
                    <span className="font-medium">유튜브 채널 구독</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 text-neutral-300 hover:text-amber-400 hover:bg-[#161824] transition-colors"
                  >
                    <Facebook className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">페이스북 사진노트</span>
                  </a>
                </div>
              </div>

              {/* Decorative signature corner quote */}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                <span className="italic font-editorial text-sm text-neutral-400">
                  "Life, captured in 24 frames of genuine warmth."
                </span>
                <span>© Kwon Yong-woo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

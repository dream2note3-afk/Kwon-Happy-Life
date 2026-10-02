import React from 'react';
import { ArrowUp, Youtube, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { STUDIO_PROFILE } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1b1e27] bg-[#07080b] py-14 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Statement */}
          <div className="md:col-span-6 space-y-3">
            <span className="font-editorial text-2xl font-bold text-white tracking-tight">
              KWON YONG WOO STUDIO
            </span>
            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              일상의 찰나와 시네마틱 스냅을 유튜브 영상과 페이스북 사진으로 기록합니다.
              보통의 하루가 영화처럼 반짝이는 순간을 포착하는 시네마토그래퍼 & 포토그래퍼 권용우의 공식 아카이브입니다.
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-500 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-amber-500/80" />
                Seoul, South Korea
              </span>
              <span>·</span>
              <a
                href={`mailto:${STUDIO_PROFILE.email}`}
                className="flex items-center gap-1 text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {STUDIO_PROFILE.email}
              </a>
            </div>
          </div>

          {/* Channels */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              공식 채널 바로가기
            </h5>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Youtube className="h-4 w-4 text-red-500" />
                  <span>유튜브: {STUDIO_PROFILE.youtube.name}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Facebook className="h-4 w-4 text-blue-500" />
                  <span>페이스북: {STUDIO_PROFILE.facebook.name}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4 text-pink-500" />
                  <span>인스타그램: @yongwoo_snap</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links & Back to top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer group"
            >
              <span>맨 위로 이동</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#232737] bg-[#12141d] group-hover:border-amber-400">
                <ArrowUp className="h-3.5 w-3.5" />
              </div>
            </button>

            <div className="text-left md:text-right text-[11px] text-neutral-600 space-y-1">
              <p>© {new Date().getFullYear()} Kwon Yong-woo Studio. All rights reserved.</p>
              <p>4K DCI · S-Log3 Workflow · 35mm Prime Photography</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

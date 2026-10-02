import React from 'react';
import { Facebook, ExternalLink, Quote, BookOpen, Heart, MessageSquare, Share2 } from 'lucide-react';
import { PHOTO_ESSAY_NOTES, STUDIO_PROFILE } from '../data/studioData';
import windowPortraitImg from '../assets/images/snap_portrait_window_1790917311144.jpg';
import coastalImg from '../assets/images/snap_coastal_travel_1790917320770.jpg';

export const FacebookEssaySection: React.FC = () => {
  return (
    <section className="border-b border-[#1b1e27] bg-[#0c0d12] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-blue-400 tracking-wider">
              <Facebook className="h-4 w-4" />
              <span>FACEBOOK PHOTO ESSAYS</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">DAILY REFLECTIONS</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl" style={{ textWrap: 'balance' }}>
              권용우의 페이스북 사진노트
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              한 장의 사진과 함께 기록하는 일상의 단상들. 매일 마주하는 도시의 틈새에서 건져 올린 사색의 문장들입니다.
            </p>
          </div>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#272b3a] bg-[#141622] px-4 py-2 text-xs font-semibold text-neutral-200 hover:text-white hover:border-blue-500/50 transition-colors whitespace-nowrap self-start sm:self-end"
          >
            <Facebook className="h-4 w-4 text-blue-500" />
            <span>페이스북 페이지 방문 ({STUDIO_PROFILE.facebook.followers})</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Featured Essay Card & Notes Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Essay Feature */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl border border-[#232737] bg-[#12141d] overflow-hidden group">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
              <img
                src={windowPortraitImg}
                alt="페이스북 사진노트 대표작"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-neutral-300 border border-white/10">
                Facebook 사진노트 #284
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <span>사진 에세이</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-400">2026.09.29</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-400">연남동 작은 서점</span>
                </div>

                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  빛을 기다리는 법에 대하여
                </h3>

                <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-serif">
                  "세상은 늘 조급하게 앞서갈 것을 요구하지만, 렌즈 앞의 빛은 서두르는 법이 없습니다.
                  창문 틈새로 부드러운 햇살이 스며들어 피사체의 어깨를 어루만질 때까지,
                  가만히 숨을 고르고 기다릴 줄 아는 침묵이야말로 사진가가 가질 수 있는 가장 다정한 태도입니다."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e2230] flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Heart className="h-3.5 w-3.5 fill-current" />
                    <span>1,840</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>248 댓글</span>
                  </span>
                </div>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-amber-400 font-medium transition-colors flex items-center gap-1"
                >
                  페이스북에서 전체 글 읽기 →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Essays Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {PHOTO_ESSAY_NOTES.map((essay, index) => (
              <div
                key={essay.id}
                className="rounded-xl border border-[#202434] bg-[#12141e] p-6 hover:border-[#383f55] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-[#1b1f2d]">
                    <span className="text-blue-400 font-medium">{essay.platform}</span>
                    <span className="font-mono text-neutral-500">{essay.date}</span>
                  </div>

                  <h4 className="mt-3 text-base font-bold text-white hover:text-amber-300 transition-colors">
                    {essay.title}
                  </h4>

                  <p className="mt-2 text-xs text-neutral-300 leading-relaxed font-serif">
                    "{essay.excerpt}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1b1f2d] flex items-center justify-between text-[11px] text-neutral-400">
                  <span>{essay.readTime}</span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:underline flex items-center gap-1"
                  >
                    본문 보기 <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}

            {/* Newsletter / Facebook Follow Box */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-5 text-xs">
              <div className="flex items-center gap-2 text-blue-400 font-semibold">
                <BookOpen className="h-4 w-4" />
                <span>페이스북 사진노트 연재 알림</span>
              </div>
              <p className="mt-1.5 text-neutral-300 text-[11px] leading-relaxed">
                매주 수요일과 일요일 밤, 서울의 거리와 사람들을 기록한 사진 에세이가 페이스북에 정기 업로드됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

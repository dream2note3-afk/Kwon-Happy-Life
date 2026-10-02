import React, { useState } from 'react';
import { Youtube, Play, Clock, Eye, ThumbsUp, ExternalLink, Film, CheckCircle2 } from 'lucide-react';
import { STUDIO_PROFILE } from '../data/studioData';
import heroFilmImg from '../assets/images/hero_cinematic_snap_1790917285112.jpg';
import nightFilmImg from '../assets/images/film_night_seoul_1790917298899.jpg';
import coffeeFilmImg from '../assets/images/snap_vintage_coffee_1790917332767.jpg';

interface VideoEpisode {
  id: string;
  title: string;
  koreanSubtitle: string;
  runtime: string;
  views: string;
  uploadDate: string;
  thumbnail: string;
  description: string;
  chapters: string[];
}

const YOUTUBE_EPISODES: VideoEpisode[] = [
  {
    id: 'ep-1',
    title: '서울의 황금빛 오후를 걷는 법 | Sony FX3 & 35mm GM 시네마틱 브이로그',
    koreanSubtitle: '삼청동과 서촌의 골목길을 4K 60p로 기록한 가을 필름',
    runtime: '14:20',
    views: '184K',
    uploadDate: '2일 전',
    thumbnail: heroFilmImg,
    description:
      '빛이 낮게 깔리는 오후 4시부터 6시까지, 삼청동 돌담길과 좁은 한옥 골목을 걸으며 촬영한 시네마틱 브이로그입니다. S-Log3 노출 측정 팁과 핸드헬드 무빙 요령을 함께 공유합니다.',
    chapters: ['00:00 인트로 & 장비 세팅', '02:40 삼청동 돌담길의 빛', '07:15 서촌 골목 핸드헬드 무빙', '11:30 컬러 그레이딩 및 아웃트로'],
  },
  {
    id: 'ep-2',
    title: '비 내린 을지로 골목길의 블루아워 | 아나모픽 렌즈로 담은 밤의 미학',
    koreanSubtitle: '철공소 골목에 번지는 네온사인과 빗물 반사 4K 필름',
    runtime: '09:45',
    views: '92K',
    uploadDate: '1주일 전',
    thumbnail: nightFilmImg,
    description:
      '을지로3가 인쇄 골목의 촉촉한 비 내린 밤을 담았습니다. 가로등의 따뜻한 텅스텐 광원과 차가운 네온사인의 대비를 극대화하는 컬러 팔레트 구축 과정을 영상에 담았습니다.',
    chapters: ['00:00 비 내리는 을지로', '03:10 반사광과 노출 전략', '06:40 야간 인물 실루엣 연출'],
  },
  {
    id: 'ep-3',
    title: '성수동 오래된 로스터리 카페에서 | ASMR 사운드 & 50mm 감성 촬영기',
    koreanSubtitle: '원두 향과 물줄기의 질감을 극대화한 매크로 시네마틱',
    runtime: '11:05',
    views: '142K',
    uploadDate: '3주일 전',
    thumbnail: coffeeFilmImg,
    description:
      '바쁜 일상 속 커피 한 잔이 주는 정적. 드리퍼를 타고 흐르는 물방울의 리듬과 원두 가루의 질감을 50mm F1.2 GM 렌즈의 극단적인 심도로 표현했습니다.',
    chapters: ['00:00 원두 그라인딩 사운드', '04:20 핸드드립 매크로 앵글', '08:50 빛이 닿는 테이블의 여백'],
  },
];

export const YouTubeShowcase: React.FC = () => {
  const [selectedEp, setSelectedEp] = useState<VideoEpisode>(YOUTUBE_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section id="youtube-theater" className="border-b border-[#1b1e27] bg-[#090a0e] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-red-500 tracking-wider">
              <Youtube className="h-4 w-4" />
              <span>OFFICIAL YOUTUBE CHANNEL</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">4K CINEMATIC VLOG</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl" style={{ textWrap: 'balance' }}>
              권용우의 유튜브 시네마 시어터
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
              "스마트폰 속 짧은 쇼츠를 벗어나, 온전한 몰입을 선사하는 4K 시네마틱 영상과 촬영 튜토리얼을 연재합니다."
            </p>
          </div>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-lg bg-red-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-red-500 transition-colors shadow-lg shadow-red-600/20 whitespace-nowrap self-start sm:self-end"
          >
            <Youtube className="h-4 w-4 fill-current" />
            <span>채널 구독 ({STUDIO_PROFILE.youtube.subscribers})</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Video Theatre Screen Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Selected Screen */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#272b3a] bg-black shadow-2xl group">
              <img
                src={selectedEp.thumbnail}
                alt={selectedEp.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-102"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              {/* Top Bar with YouTube Live indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1.5 rounded bg-black/60 backdrop-blur-md px-2.5 py-1 font-mono border border-white/10">
                  <Film className="h-3.5 w-3.5 text-red-500" />
                  <span>4K UHD 60FPS</span>
                </span>
                <span className="rounded bg-black/60 backdrop-blur-md px-2.5 py-1 font-mono border border-white/10 text-neutral-400">
                  {selectedEp.runtime}
                </span>
              </div>

              {/* Big Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600/90 text-white backdrop-blur-md shadow-2xl hover:scale-110 hover:bg-red-500 transition-all cursor-pointer"
                  aria-label="유튜브에서 영상 시청"
                >
                  <Play className="h-8 w-8 fill-current ml-1" />
                </a>
                <span className="mt-3 text-xs font-medium text-white/90 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  클릭 시 유튜브 고화질 스트리밍으로 이동
                </span>
              </div>

              {/* Bottom Video Information */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <span>권용우 스튜디오</span>
                  <span aria-hidden="true" className="text-neutral-500">·</span>
                  <span className="text-neutral-300 flex items-center gap-1">
                    <Eye className="h-3 w-3" /> {selectedEp.views} 조회
                  </span>
                  <span aria-hidden="true" className="text-neutral-500">·</span>
                  <span className="text-neutral-300">{selectedEp.uploadDate}</span>
                </div>
                <h3 className="mt-1 text-lg sm:text-xl font-bold text-white line-clamp-2">
                  {selectedEp.title}
                </h3>
              </div>
            </div>

            {/* Video Description & Chapters Card */}
            <div className="mt-4 rounded-xl border border-[#202332] bg-[#12141d] p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                영상 소개 및 타임라인 챕터
              </h4>
              <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                {selectedEp.description}
              </p>

              {/* Chapters list */}
              <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-[#1d202d]">
                {selectedEp.chapters.map((ch, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-400 bg-[#171a25] px-2.5 py-1 rounded border border-[#262939]"
                  >
                    <Clock className="h-3 w-3 text-amber-500/80" />
                    <span>{ch}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-[#202330]">
              <span className="font-semibold text-neutral-200">최신 시네마틱 클립 목록</span>
              <span className="font-mono">3개 영상</span>
            </div>

            <div className="flex flex-col gap-3">
              {YOUTUBE_EPISODES.map((ep) => {
                const isCurrent = ep.id === selectedEp.id;
                return (
                  <div
                    key={ep.id}
                    onClick={() => setSelectedEp(ep)}
                    className={`flex gap-3 rounded-xl p-3 border transition-all cursor-pointer ${
                      isCurrent
                        ? 'border-red-500/40 bg-[#191b26]'
                        : 'border-[#202330] bg-[#11131c] hover:border-neutral-600'
                    }`}
                  >
                    <div className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-lg bg-neutral-900">
                      <img
                        src={ep.thumbnail}
                        alt={ep.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-[10px] font-mono text-white">
                        {ep.runtime}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h5 className={`text-xs font-semibold line-clamp-2 ${isCurrent ? 'text-amber-400' : 'text-neutral-200'}`}>
                          {ep.title}
                        </h5>
                        <p className="mt-1 text-[11px] text-neutral-500 line-clamp-1">
                          {ep.koreanSubtitle}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-400">
                        <span>조회수 {ep.views}</span>
                        <span>·</span>
                        <span>{ep.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Channel Promotion Banner */}
            <div className="rounded-xl border border-[#272b38] bg-[#131520] p-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>유튜브 멤버십 & 커뮤니티</span>
              </div>
              <p className="mt-1 text-neutral-400 text-[11px] leading-relaxed">
                시네마틱 영상에 실제로 사용된 S-Log3 커스텀 큐브 LUT 파일과 미공개 무보정 RAW 스냅이 커뮤니티에 공개되어 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

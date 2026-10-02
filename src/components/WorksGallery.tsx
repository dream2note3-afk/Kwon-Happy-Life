import React, { useState, useMemo } from 'react';
import {
  Play,
  Maximize2,
  Bookmark,
  BookmarkCheck,
  Search,
  Filter,
  Grid3X3,
  LayoutGrid,
  List,
  Eye,
  Heart,
  Camera,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { WorkItem, WORKS_DATA } from '../data/studioData';

interface WorksGalleryProps {
  onSelectWork: (work: WorkItem) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const WorksGallery: React.FC<WorksGalleryProps> = ({
  onSelectWork,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'bento' | 'grid' | 'list'>('bento');

  const categories = [
    { id: 'all', label: '전체 작품' },
    { id: 'film', label: '시네마틱 영상' },
    { id: 'street', label: '골목 & 거리' },
    { id: 'travel', label: '여행 & 자연' },
    { id: 'portrait', label: '인물 & 시선' },
    { id: 'night', label: '블루아워 & 야경' },
  ];

  // Filtering
  const filteredWorks = useMemo(() => {
    return WORKS_DATA.filter((work) => {
      const matchesCategory =
        selectedCategory === 'all' || work.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        work.title.toLowerCase().includes(query) ||
        work.englishTitle.toLowerCase().includes(query) ||
        work.location.toLowerCase().includes(query) ||
        work.camera.toLowerCase().includes(query) ||
        work.lens.toLowerCase().includes(query) ||
        work.story.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="works" className="border-b border-[#1b1e27] bg-[#0c0d12] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wider">
              <span>CURATED ARCHIVE</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">FILMS & STILLS</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl" style={{ textWrap: 'balance' }}>
              권용우의 렌즈로 기록한 순간들
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              매주 업데이트되는 유튜브 시네마틱 영상과 페이스북 사진 에세이의 대표작들을 둘러보세요.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="장소, 렌즈, 감성 키워드 검색..."
              className="w-full rounded-lg border border-[#232734] bg-[#12141c] py-2 pl-9 pr-4 text-xs text-neutral-200 placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-neutral-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar (Segmented button tabs) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#1f222b] pb-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#12141c] border border-[#202330]">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle buttons */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-[#12141c] border border-[#202330] text-neutral-400">
            <button
              onClick={() => setViewMode('bento')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                viewMode === 'bento' ? 'bg-[#202433] text-amber-400' : 'hover:text-white'
              }`}
              title="매거진 벤토 뷰"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#202433] text-amber-400' : 'hover:text-white'
              }`}
              title="그리드 뷰"
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-[#202433] text-amber-400' : 'hover:text-white'
              }`}
              title="상세 스펙 리스트 뷰"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Results Counter & Active Query indicator */}
        <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
          <div>
            <span>총 <strong className="text-neutral-200 tabular-nums">{filteredWorks.length}</strong>개의 작품</span>
            {searchQuery && (
              <span className="ml-2 text-amber-400">
                · "{searchQuery}" 검색 결과
              </span>
            )}
          </div>
          <span className="text-neutral-500">
            카드 클릭 시 4K 상세 뷰어 및 EXIF 데이터 확인
          </span>
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="my-16 text-center py-16 rounded-2xl border border-dashed border-[#272b38] bg-[#11131c]">
            <p className="text-sm font-medium text-neutral-300">검색된 작품이 없습니다.</p>
            <p className="mt-1 text-xs text-neutral-500">다른 키워드로 검색하거나 카테고리 필터를 초기화해 보세요.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-neutral-900 bg-amber-500 rounded-lg hover:bg-amber-400 cursor-pointer"
            >
              필터 전체 초기화
            </button>
          </div>
        )}

        {/* Bento Magazine Layout */}
        {viewMode === 'bento' && filteredWorks.length > 0 && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work, index) => {
              const isLarge = index === 0 || index === 3;
              const isBookmarked = bookmarkedIds.has(work.id);

              return (
                <div
                  key={work.id}
                  onClick={() => onSelectWork(work)}
                  className={`group relative overflow-hidden rounded-2xl border border-[#202432] bg-[#12141d] transition-all hover:border-[#3a4054] hover:shadow-2xl hover:shadow-black/60 cursor-pointer flex flex-col ${
                    isLarge ? 'md:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Image container */}
                  <div className={`relative overflow-hidden bg-neutral-900 ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <img
                      src={work.image}
                      alt={work.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top action strip */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      {/* Media type indicator */}
                      <span className="rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-neutral-300 border border-white/10 flex items-center gap-1.5">
                        {work.mediaType === 'video' ? (
                          <>
                            <Play className="h-3 w-3 text-amber-400 fill-current" />
                            <span>{work.runtime || '4K Film'}</span>
                          </>
                        ) : (
                          <>
                            <Camera className="h-3 w-3 text-neutral-300" />
                            <span>{work.camera}</span>
                          </>
                        )}
                      </span>

                      {/* Bookmark Button */}
                      <button
                        onClick={(e) => onToggleBookmark(work.id, e)}
                        className={`pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md border border-white/10 transition-colors cursor-pointer ${
                          isBookmarked
                            ? 'bg-amber-500 text-black border-amber-400'
                            : 'bg-black/60 text-white hover:bg-neutral-800'
                        }`}
                        title={isBookmarked ? '무드보드에서 제거' : '무드보드에 저장'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="h-4 w-4" />
                        ) : (
                          <Bookmark className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* Center hover play / expand badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-semibold text-white shadow-xl">
                        {work.mediaType === 'video' ? (
                          <>
                            <Play className="h-3.5 w-3.5 text-amber-400 fill-current" />
                            <span>영상 재생</span>
                          </>
                        ) : (
                          <>
                            <Maximize2 className="h-3.5 w-3.5 text-amber-400" />
                            <span>고해상도 감상</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Bottom Metadata Inside Media */}
                    <div className="absolute bottom-3 left-4 right-4">
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                        <span>{work.categoryLabel}</span>
                        <span aria-hidden="true" className="text-neutral-500">·</span>
                        <span className="text-neutral-300">{work.date}</span>
                        <span aria-hidden="true" className="text-neutral-500">·</span>
                        <span className="text-neutral-300 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {work.location}
                        </span>
                      </div>

                      <h3 className="mt-1 text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-serif italic line-clamp-1 mt-0.5">
                        {work.englishTitle}
                      </p>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-4 flex-1 flex flex-col justify-between border-t border-[#1d202c]">
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                      {work.story}
                    </p>

                    {/* Technical camera footer */}
                    <div className="mt-3 flex items-center justify-between border-t border-[#1b1e2a] pt-3 text-[11px] text-neutral-400">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-mono text-neutral-300">{work.lens}</span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="font-mono">{work.exif.aperture}</span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="font-mono">{work.exif.iso}</span>
                      </div>
                      <span className="text-neutral-500 hover:text-amber-400 transition-colors shrink-0 ml-2">
                        상세보기 →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Regular Grid Layout */}
        {viewMode === 'grid' && filteredWorks.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work) => {
              const isBookmarked = bookmarkedIds.has(work.id);
              return (
                <div
                  key={work.id}
                  onClick={() => onSelectWork(work)}
                  className="group relative overflow-hidden rounded-2xl border border-[#202432] bg-[#12141d] hover:border-[#3a4054] transition-all cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <img
                      src={work.image}
                      alt={work.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <button
                      onClick={(e) => onToggleBookmark(work.id, e)}
                      className={`absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-md border border-white/10 ${
                        isBookmarked ? 'bg-amber-500 text-black' : 'bg-black/60 text-white'
                      }`}
                    >
                      {isBookmarked ? <BookmarkCheck className="h-3.5 w-3.5" /> : <Bookmark className="h-3.5 w-3.5" />}
                    </button>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] text-amber-400 font-medium">
                        {work.categoryLabel} · {work.location}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                        {work.title}
                      </h4>
                    </div>
                  </div>
                  <div className="p-3.5 text-xs text-neutral-400 flex items-center justify-between border-t border-[#1d202c]">
                    <span>{work.camera} · {work.exif.focalLength}</span>
                    <span className="text-neutral-500 font-mono">{work.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Detailed List Layout */}
        {viewMode === 'list' && filteredWorks.length > 0 && (
          <div className="mt-6 divide-y divide-[#1e212c] rounded-2xl border border-[#202432] bg-[#12141d] overflow-hidden">
            {filteredWorks.map((work) => {
              const isBookmarked = bookmarkedIds.has(work.id);
              return (
                <div
                  key={work.id}
                  onClick={() => onSelectWork(work)}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4 hover:bg-[#181a26] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={work.image}
                      alt={work.title}
                      referrerPolicy="no-referrer"
                      className="h-16 w-24 rounded-lg object-cover bg-neutral-900 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                        <span>{work.categoryLabel}</span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="text-neutral-400">{work.location}</span>
                      </div>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        {work.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-serif italic">
                        {work.englishTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-xs text-neutral-400 font-mono shrink-0">
                    <div className="hidden md:flex flex-col text-right">
                      <span className="text-neutral-200">{work.camera}</span>
                      <span className="text-neutral-500">{work.lens}</span>
                    </div>
                    <div className="hidden lg:flex flex-col text-right">
                      <span className="text-neutral-300">{work.exif.aperture} · {work.exif.shutterSpeed}</span>
                      <span className="text-neutral-500">{work.exif.iso}</span>
                    </div>
                    <span className="text-neutral-400 tabular-nums">{work.date}</span>

                    <button
                      onClick={(e) => onToggleBookmark(work.id, e)}
                      className={`p-2 rounded-lg border border-[#272b38] transition-colors ${
                        isBookmarked ? 'bg-amber-500 text-black border-amber-400' : 'bg-[#151722] text-neutral-400 hover:text-white'
                      }`}
                    >
                      {isBookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

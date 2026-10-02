import React, { useState } from 'react';
import { X, Trash2, ExternalLink, Copy, Check, Bookmark, Send } from 'lucide-react';
import { WorkItem, WORKS_DATA } from '../data/studioData';

interface MoodboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: Set<string>;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
  onSelectWork: (work: WorkItem) => void;
  onOpenInquiryWithMoodboard: (itemsSummary: string) => void;
}

export const MoodboardDrawer: React.FC<MoodboardDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onRemoveBookmark,
  onClearAll,
  onSelectWork,
  onOpenInquiryWithMoodboard,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const bookmarkedWorks = WORKS_DATA.filter((w) => bookmarkedIds.has(w.id));

  const handleCopyList = () => {
    if (bookmarkedWorks.length === 0) return;
    const text = bookmarkedWorks
      .map(
        (w, i) =>
          `${i + 1}. [${w.categoryLabel}] ${w.title} (${w.location}, ${w.camera} ${w.lens})`
      )
      .join('\n');
    navigator.clipboard?.writeText(
      `[권용우 스튜디오 무드보드 레퍼런스]\n${text}\n\n문의 이메일: dream2note3@gmail.com`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInquiry = () => {
    const text = bookmarkedWorks
      .map((w) => `${w.title} (${w.location})`)
      .join(', ');
    onOpenInquiryWithMoodboard(`관심 작품 레퍼런스: ${text}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#10121a] border-l border-[#242838] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#1f2230] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="h-4 w-4 text-amber-400" />
              <h3 className="text-base font-bold text-white">나의 큐레이션 무드보드</h3>
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-mono font-semibold text-amber-300">
                {bookmarkedWorks.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {bookmarkedWorks.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500 py-12">
                <Bookmark className="h-10 w-10 text-neutral-700 mb-3" />
                <p className="text-sm font-medium text-neutral-300">
                  아직 담은 무드보드 작품이 없습니다.
                </p>
                <p className="mt-1 text-xs text-neutral-500 max-w-xs">
                  갤러리의 사진이나 영상 카드의 북마크 아이콘을 눌러 마음에 드는 톤앤매너를 수집해 보세요.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-2">
                  <span>선택된 레퍼런스 목록</span>
                  <button
                    onClick={onClearAll}
                    className="text-neutral-500 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    전체 비우기
                  </button>
                </div>

                {bookmarkedWorks.map((work) => (
                  <div
                    key={work.id}
                    className="flex gap-3.5 rounded-xl border border-[#202330] bg-[#141622] p-3 hover:border-neutral-600 transition-all group"
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      referrerPolicy="no-referrer"
                      className="h-16 w-20 rounded-lg object-cover bg-neutral-900 shrink-0 cursor-pointer"
                      onClick={() => onSelectWork(work)}
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-medium text-amber-400">
                          {work.categoryLabel} · {work.location}
                        </span>
                        <h5
                          onClick={() => onSelectWork(work)}
                          className="text-xs font-bold text-white hover:text-amber-300 truncate cursor-pointer mt-0.5"
                        >
                          {work.title}
                        </h5>
                        <p className="text-[10px] text-neutral-400 font-mono mt-0.5 truncate">
                          {work.camera} · {work.lens}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[11px]">
                        <button
                          onClick={() => onSelectWork(work)}
                          className="text-neutral-400 hover:text-amber-300 cursor-pointer"
                        >
                          자세히 보기
                        </button>
                        <button
                          onClick={() => onRemoveBookmark(work.id)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                          title="삭제"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer Actions */}
          {bookmarkedWorks.length > 0 && (
            <div className="p-6 border-t border-[#1f2230] bg-[#12141d] space-y-3">
              <button
                onClick={handleSendInquiry}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-500 py-2.5 px-4 text-xs font-semibold text-black hover:bg-amber-400 active:bg-amber-600 transition-colors cursor-pointer shadow-md"
              >
                <Send className="h-3.5 w-3.5" />
                <span>이 무드보드로 촬영·협업 문의하기</span>
              </button>

              <button
                onClick={handleCopyList}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#282c3c] bg-[#171a25] py-2 px-4 text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>클립보드에 복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>레퍼런스 목록 텍스트 복사</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

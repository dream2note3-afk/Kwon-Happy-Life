import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calendar, Mail, User, Phone, MessageSquare, DollarSign, Sparkles } from 'lucide-react';
import { STUDIO_PROFILE } from '../data/studioData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialMessage = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('시네마틱 영상 제작 (유튜브·브이로그)');
  const [schedule, setSchedule] = useState('');
  const [budget, setBudget] = useState('협의 가능');
  const [message, setMessage] = useState(initialMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const code = 'KYW-' + Math.floor(100000 + Math.random() * 900000);
      setReceiptNumber(code);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#272b3c] bg-[#11131c] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1f2230] p-6 bg-[#0f1118]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>COLLABORATION & PRODUCTION</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              촬영 및 프로젝트 협업 문의
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-white">문의가 정상 접수되었습니다</h4>
              <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                작성해주신 내용이 작가 이메일(<strong className="text-amber-400">{STUDIO_PROFILE.email}</strong>)로 안전하게 전달되었습니다. 24시간 이내에 기재해주신 연락처로 회신드리겠습니다.
              </p>

              {/* Receipt Box */}
              <div className="rounded-xl border border-[#222636] bg-[#151824] p-4 text-xs font-mono text-left max-w-md mx-auto space-y-1.5">
                <div className="flex justify-between text-neutral-400">
                  <span>접수 번호</span>
                  <span className="text-amber-400 font-bold">{receiptNumber}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>의뢰인</span>
                  <span className="text-neutral-200">{name} ({email})</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>프로젝트 분류</span>
                  <span className="text-neutral-200 truncate ml-2">{projectType}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="rounded-lg bg-amber-500 px-6 py-2.5 text-xs font-semibold text-black hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  확인 및 창 닫기
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-neutral-400 leading-relaxed pb-1">
                유튜브 시네마틱 영상 제작, 개인/프로필 야외 스냅 촬영, 브랜드 영상 룩북, 강연 등 자유롭게 문의를 남겨주세요.
              </p>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    성함 또는 기업/브랜드명 <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="권용우 / 스튜디오"
                      className="w-full rounded-lg border border-[#252938] bg-[#151722] py-2.5 pl-9 pr-3 text-neutral-100 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    회신받으실 이메일 <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full rounded-lg border border-[#252938] bg-[#151722] py-2.5 pl-9 pr-3 text-neutral-100 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    연락처 (휴대폰)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full rounded-lg border border-[#252938] bg-[#151722] py-2.5 pl-9 pr-3 text-neutral-100 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    프로젝트 유형
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full rounded-lg border border-[#252938] bg-[#151722] py-2.5 px-3 text-neutral-100 focus:border-amber-500 focus:outline-none cursor-pointer"
                  >
                    <option value="시네마틱 영상 제작 (유튜브·브이로그)">시네마틱 영상 제작 (유튜브·브이로그)</option>
                    <option value="개인/프로필 야외 스냅 촬영">개인/프로필 야외 감성 스냅 촬영</option>
                    <option value="브랜드 상업 광고/룩북 영상">브랜드 상업 광고/룩북 영상</option>
                    <option value="사진/영상 소스 라이선스 구매">사진/영상 소스 라이선스 구매</option>
                    <option value="인터뷰/행사 다큐멘터리">인터뷰/행사 다큐멘터리 기록</option>
                    <option value="기타 협업 제안">기타 협업 제안</option>
                  </select>
                </div>
              </div>

              {/* Schedule & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    희망 촬영 일정 / 납기일
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
                    <input
                      type="text"
                      value={schedule}
                      onChange={(e) => setSchedule(e.target.value)}
                      placeholder="예: 2026년 10월 중순 또는 조율 가능"
                      className="w-full rounded-lg border border-[#252938] bg-[#151722] py-2.5 pl-9 pr-3 text-neutral-100 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    예산 범위
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="예: 50~100만원 또는 협의 가능"
                      className="w-full rounded-lg border border-[#252938] bg-[#151722] py-2.5 pl-9 pr-3 text-neutral-100 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  문의 내용 및 레퍼런스 <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="원하시는 분위기, 촬영 장소, 전달하고자 하는 메시지 등을 자유롭게 작성해 주세요."
                    className="w-full rounded-lg border border-[#252938] bg-[#151722] p-3 text-neutral-100 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-[#272b38] bg-[#151722] px-4 py-2.5 font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-black hover:bg-amber-400 active:bg-amber-600 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>전송 중...</span>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>문의 전송하기</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

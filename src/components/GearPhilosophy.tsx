import React, { useState } from 'react';
import { Camera, Film, Sliders, ShieldCheck, Check, Sparkles, Disc } from 'lucide-react';
import { STUDIO_PROFILE } from '../data/studioData';

export const GearPhilosophy: React.FC = () => {
  const [activeGearIndex, setActiveGearIndex] = useState(0);
  const activeGear = STUDIO_PROFILE.gear[activeGearIndex];

  return (
    <section id="philosophy" className="border-b border-[#1b1e27] bg-[#090a0e] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wider">
            <span>PHILOSOPHY & OPTICS</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">GEAR LOG</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl" style={{ textWrap: 'balance' }}>
            렌즈 너머의 철학과 프로페셔널 장비
          </h2>
          <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
            "시네마틱한 결과물은 카메라 바디가 아니라, 빛을 대하는 태도와 순간을 응시하는 인내에서 나옵니다.
            그러나 현장의 우연을 완벽한 예술로 변환하기 위해 최상의 광학 시스템을 운용합니다."
          </p>
        </div>

        {/* Philosophy Points */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#202331] bg-[#12141d] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Camera className="h-5 w-5" />
            </div>
            <h4 className="mt-4 text-base font-bold text-white">01. 35mm 인간의 시선</h4>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              왜곡 없이 정직하고 담백한 35mm 표준 광각을 메인으로 사용합니다. 피사체와의 적당한 유대감을 유지하며 일상의 공기를 가장 자연스럽게 담아냅니다.
            </p>
          </div>

          <div className="rounded-2xl border border-[#202331] bg-[#12141d] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Film className="h-5 w-5" />
            </div>
            <h4 className="mt-4 text-base font-bold text-white">02. S-Log3 커스텀 컬러</h4>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              15스톱 이상의 다이내믹 레인지를 보존하는 Sony S-Log3 워크플로우를 고집합니다. 피부 톤의 따스한 혈색과 그림자 속의 풍부한 계조를 살려냅니다.
            </p>
          </div>

          <div className="rounded-2xl border border-[#202331] bg-[#12141d] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Sliders className="h-5 w-5" />
            </div>
            <h4 className="mt-4 text-base font-bold text-white">03. 24fps 영화적 침묵</h4>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              자극적인 편집 컷 대신, 피사체의 호흡과 바람 소리를 들을 수 있는 여백을 남깁니다. 영상 한 컷 한 컷이 사진처럼 기억될 수 있도록 구성합니다.
            </p>
          </div>
        </div>

        {/* Interactive Gear Bag System */}
        <div className="mt-12 rounded-2xl border border-[#232737] bg-[#11131c] p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1f2230] gap-4">
            <div>
              <span className="text-xs text-amber-400 font-medium tracking-wider">OFFICIAL PRODUCTION KIT</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                현역 운용 광학 및 시네마 장비 목록
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">
              All 4K DCI · 10-bit S-Log3 Native
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Gear Selector Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {STUDIO_PROFILE.gear.map((item, idx) => {
                const isSelected = idx === activeGearIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveGearIndex(idx)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1a1d2b] border-amber-500/50 text-white shadow-md'
                        : 'bg-[#141620] border-[#1f2230] text-neutral-400 hover:text-white hover:border-neutral-600'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                        {item.category}
                      </span>
                      <span className="text-xs font-semibold text-neutral-100 mt-0.5 block">
                        {item.model}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-amber-400 font-mono">
                      {item.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Gear Highlight Showcase */}
            <div className="lg:col-span-7 rounded-xl border border-[#272b3c] bg-[#161824] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-[#212433]">
                  <span className="text-amber-400 font-mono">{activeGear.category}</span>
                  <span className="font-mono text-neutral-400">{activeGear.tag}</span>
                </div>

                <h4 className="mt-4 text-2xl font-bold text-white">
                  {activeGear.model}
                </h4>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-sans">
                  {activeGear.role}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-[#11131c] p-3 border border-[#222535]">
                    <span className="text-neutral-500 text-[10px] uppercase font-mono block">Primary Application</span>
                    <span className="text-neutral-200 font-medium mt-0.5 block">4K Cinema / Street Documentary</span>
                  </div>
                  <div className="rounded-lg bg-[#11131c] p-3 border border-[#222535]">
                    <span className="text-neutral-500 text-[10px] uppercase font-mono block">Optics Integrity</span>
                    <span className="text-neutral-200 font-medium mt-0.5 block">G-Master Precision Glass</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#212433] flex items-center justify-between text-xs text-neutral-400">
                <span>촬영 현장 대여 및 협업 프로덕션 지원 가능</span>
                <span className="text-amber-400 font-medium">Calibrated & Maintained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

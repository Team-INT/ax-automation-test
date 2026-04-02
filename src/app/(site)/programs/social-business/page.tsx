"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiHandCoinLine,
  RiRouteLine,
  RiEyeLine,
  RiTimeLine,
} from "react-icons/ri"
import { ProgramsHero } from "../_components/programs-hero"

const performanceStats = [
  { value: "2", unit: "개", label: "소셜비즈니스 브랜드" },
  { value: "23", unit: "개국", label: "수출 국가" },
  { value: "4,200+", unit: "", label: "연계 농가·장인" },
  { value: "38", unit: "%", label: "생산자 소득 프리미엄" },
] as const

const brands = [
  {
    name: "더네이버스커피",
    english: "The Neighbors Coffee",
    category: "공정무역 커피",
    flag: "☕",
    countries: ["에티오피아", "과테말라", "온두라스", "미얀마"],
    description: "에티오피아·중남미 소농 협동조합과 직거래하는 공정무역 스페셜티 커피 브랜드입니다. 생산자에게 시장가 대비 38% 이상 높은 프리미엄을 보장하며, 수익 일부는 현지 교육·보건 사업에 재투자됩니다.",
    highlights: ["직거래 협동조합 14곳", "스페셜티 등급 원두", "탄소 중립 로스팅"],
    accent: "bg-amber-50 border-amber-200/60",
  },
  {
    name: "메리쿱",
    english: "Merycoop",
    category: "공정무역 수공예",
    flag: "🧶",
    countries: ["볼리비아", "캄보디아", "르완다", "베트남"],
    description: "개발도상국 여성 장인 협동조합의 전통 수공예품을 글로벌 소비자와 연결하는 공정무역 라이프스타일 브랜드입니다. 원주민 전통 문양과 기술을 현대 디자인으로 재해석해 지속가능한 패션·홈웨어를 선보입니다.",
    highlights: ["여성 장인 2,800+명", "전통 공예 보전", "글로벌 B2B 파트너십"],
    accent: "bg-emerald/5 border-emerald/20",
  },
] as const

const fairTradeValues = [
  { Icon: RiHandCoinLine, title: "공정한 가격", description: "시장 최저가가 아닌 생산 원가와 지속가능한 생계를 보장하는 공정 가격을 지급합니다." },
  { Icon: RiRouteLine, title: "직거래 관계", description: "중간 유통 단계를 최소화해 생산자가 더 많은 수익을 가져갈 수 있는 직거래 구조를 만듭니다." },
  { Icon: RiEyeLine, title: "투명한 공급망", description: "원료의 출처부터 최종 제품까지 전 과정을 소비자에게 투명하게 공개합니다." },
  { Icon: RiTimeLine, title: "사전 투자 지원", description: "수확 전 선금 지급과 생산 설비 투자 지원으로 생산자가 안심하고 품질에 집중할 수 있게 합니다." },
] as const

export default function SocialBusinessPage() {
  return (
    <>
      <ProgramsHero
        title="소셜비즈니스"
        description="더네이버스커피와 메리쿱 두 브랜드로 공정무역과 수공예 시장을 글로벌로 연결합니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Social Business</motion.p>
              <motion.div {...fadeUp(0.08)} className="mt-5 h-[2px] w-12 bg-gold" />
              <motion.h2 {...fadeUp(0.12)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">
                소비가 곧<br />임팩트입니다
              </motion.h2>
              <motion.p {...fadeUp(0.2)} className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
                소셜비즈니스는 시장 메커니즘을 활용해 사회 문제를 해결하는 혁신적 접근입니다. GNGIF의 소셜비즈니스는 개발도상국 소농과 장인이 글로벌 시장에 직접 참여할 수 있도록 연결 고리를 만듭니다.
              </motion.p>
              <motion.p {...fadeUp(0.26)} className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
                소비자가 더네이버스커피 한 잔을 마실 때, 메리쿱 제품을 구매할 때 그 돈의 일부가 직접 생산자에게 돌아갑니다.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {performanceStats.map(({ value, unit, label }, i) => (
                <motion.div key={label} {...fadeUp(0.1 + i * 0.08)} className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                  <p className="text-[44px] font-black leading-none tabular-nums text-forest">
                    {value}<span className="ml-1 text-[16px] font-semibold text-muted-foreground">{unit}</span>
                  </p>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">{label}</p>
                  <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/40 transition-all duration-300 group-hover:w-full group-hover:bg-gold/60" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 브랜드 — 강조 카드 */}
      <section className="bg-cream border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Our Brands</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">2개 브랜드</motion.h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {brands.map(({ name, english, category, flag, countries, description, highlights, accent }, i) => (
              <motion.div
                key={name}
                {...fadeUp(0.1 + i * 0.1)}
                className={`relative overflow-hidden rounded-3xl border p-8 lg:p-10 ${accent}`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-5xl">{flag}</span>
                  <div>
                    <h3 className="text-[22px] font-extrabold text-forest">{name}</h3>
                    <p className="text-sm text-muted-foreground">{english} · {category}</p>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <span key={c} className="rounded-full bg-forest/5 px-3 py-1 text-xs font-semibold text-forest">{c}</span>
                  ))}
                </div>
                <div className="mt-6 space-y-2 border-t border-border/40 pt-5">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-[20%] -right-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Fair Trade Values</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">공정무역 원칙</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {fairTradeValues.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.1 + i * 0.08)}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-cream">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/45">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

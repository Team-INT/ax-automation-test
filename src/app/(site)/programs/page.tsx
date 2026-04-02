"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp, cardGrid, cardItem, statGrid, statItem, slideLeft, slideRight } from "@/lib/animations"
import { RiArrowRightLine } from "react-icons/ri"
import { ProgramsHero } from "./_components/programs-hero"

const programCards = [
  {
    href: "/programs/cooperatives",
    emoji: "🌾",
    label: "협동조합",
    englishLabel: "Cooperatives",
    description: "회원 소유·민주 운영 원칙 아래 621개 협동조합 네트워크를 통해 농민과 소상공인의 경제적 자립을 지원합니다.",
    stat: "621개 협동조합",
  },
  {
    href: "/programs/microfinance",
    emoji: "💳",
    label: "소액금융(MFI)",
    englishLabel: "Microfinance",
    description: "5개 소액금융기관을 통해 담보 없이도 소규모 창업·농업을 시작할 수 있도록 소액대출을 제공합니다.",
    stat: "상환율 97%",
  },
  {
    href: "/programs/social-enterprise",
    emoji: "🏭",
    label: "사회적기업",
    englishLabel: "Social Enterprise",
    description: "13개 사회적기업을 운영하며 취약계층 고용 창출과 지역사회 서비스를 동시에 실현합니다.",
    stat: "13개 사회적기업",
  },
  {
    href: "/programs/social-business",
    emoji: "☕",
    label: "소셜비즈니스",
    englishLabel: "Social Business",
    description: "더네이버스커피와 메리쿱 두 브랜드를 통해 공정무역과 수공예 시장을 글로벌로 연결합니다.",
    stat: "2개 브랜드",
  },
] as const

const impactStats = [
  { value: "26", unit: "개국", label: "사업 운영 국가" },
  { value: "621", unit: "개", label: "협동조합 네트워크" },
  { value: "13", unit: "개", label: "사회적기업" },
  { value: "5", unit: "곳", label: "소액금융기관(MFI)" },
] as const

const regions = [
  {
    name: "아시아",
    countries: "캄보디아, 베트남, 미얀마, 필리핀, 인도네시아 등",
    focus: "협동조합·소액금융 중심",
    color: "bg-emerald/10 text-emerald",
  },
  {
    name: "아프리카",
    countries: "에티오피아, 르완다, 케냐, 탄자니아, 우간다 등",
    focus: "농업협동조합·MFI 중심",
    color: "bg-forest/10 text-forest",
  },
  {
    name: "중남미",
    countries: "과테말라, 온두라스, 니카라과, 볼리비아 등",
    focus: "사회적기업·소셜비즈니스 중심",
    color: "bg-gold/10 text-gold",
  },
] as const

// Stagger variants

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero
        title="사업소개"
        description="26개국에서 협동조합·소액금융·사회적기업·소셜비즈니스로 사회적경제 생태계를 만들어갑니다."
      />

      {/* 4대 사업 카드 */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Our Programs</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <motion.h2 {...slideLeft} className="text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">
              4대 사업 분야
            </motion.h2>
            <motion.p {...slideRight} className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
              단순 지원을 넘어 현지 역량을 강화하는 지속가능한 방식으로 사회적경제 생태계를 구축합니다.
            </motion.p>
          </div>

          <motion.div
            variants={cardGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {programCards.map(({ href, emoji, label, englishLabel, description, stat }) => (
              <motion.div key={href} variants={cardItem}>
                <Link
                  href={href}
                  className="group flex h-full flex-col gap-5 rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-xl hover:shadow-forest/5"
                >
                  <div className="text-4xl">{emoji}</div>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">{englishLabel}</p>
                    <h3 className="mt-1.5 text-[20px] font-bold text-forest">{label}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-4">
                    <span className="text-sm font-bold text-emerald">{stat}</span>
                    <RiArrowRightLine className="h-4 w-4 text-emerald transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 글로벌 임팩트 수치 */}
      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.06), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Global Impact</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">숫자로 보는 임팩트</motion.h2>
          <motion.div
            variants={statGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {impactStats.map(({ value, unit, label }) => (
              <motion.div
                key={label}
                variants={statItem}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]"
              >
                <p className="text-[52px] font-black leading-none tabular-nums text-gold">
                  {value}<span className="ml-1 text-[18px] font-semibold text-white/50">{unit}</span>
                </p>
                <p className="mt-3 text-sm font-medium text-white/50">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 사업 지역 */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Regions</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">사업 지역</motion.h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {regions.map(({ name, countries, focus, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5"
              >
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${color}`}>{name}</span>
                <h3 className="mt-4 text-[18px] font-bold text-forest">{name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{countries}</p>
                <div className="mt-4 h-px bg-border/40" />
                <p className="mt-4 text-sm font-semibold text-emerald">{focus}</p>
                <div className="mt-4 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

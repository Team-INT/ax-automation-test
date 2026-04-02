"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiArrowRightLine,
  RiGlobalLine,
  RiUserHeartLine,
  RiBarChartLine,
  RiHandHeartLine,
  RiLeafLine,
} from "react-icons/ri"
import { ImpactHero } from "./_components/impact-hero"

const impactNumbers = [
  { value: "26", unit: "개국", label: "사업 운영 국가" },
  { value: "50만+", unit: "", label: "누적 수혜자" },
  { value: "621", unit: "개", label: "협동조합 네트워크" },
  { value: "97", unit: "%", label: "소액금융 상환율" },
] as const

const sdgGoals = [
  { number: "1", Icon: RiHandHeartLine, title: "빈곤 퇴치", description: "소액금융과 협동조합으로 극빈층의 경제적 자립을 지원합니다.", color: "bg-red-500" },
  { number: "2", Icon: RiLeafLine, title: "기아 종식", description: "농업 협동조합과 기술 지원으로 식량 안보를 강화합니다.", color: "bg-amber-500" },
  { number: "8", Icon: RiBarChartLine, title: "양질의 일자리", description: "사회적기업과 소셜비즈니스로 지속가능한 고용을 창출합니다.", color: "bg-rose-700" },
  { number: "10", Icon: RiUserHeartLine, title: "불평등 감소", description: "소외 계층 대상 금융 접근성 개선으로 격차를 줄입니다.", color: "bg-pink-600" },
  { number: "17", Icon: RiGlobalLine, title: "파트너십", description: "글로벌 네트워크와 다자 협력으로 지속가능한 발전을 추구합니다.", color: "bg-blue-600" },
] as const

const impactSections = [
  {
    href: "/impact/stories",
    title: "수혜자 스토리",
    description: "소액금융과 협동조합이 실제 삶을 어떻게 바꿨는지 수혜자 당사자의 목소리로 전합니다.",
    cta: "스토리 보기",
  },
  {
    href: "/impact/publications",
    title: "발간물",
    description: "연간 임팩트 리포트, 연구 보고서, 현장 가이드를 통해 GNGIF의 활동 성과를 투명하게 공개합니다.",
    cta: "발간물 보기",
  },
] as const

export default function ImpactPage() {
  return (
    <>
      <ImpactHero
        title="임팩트"
        description="숫자와 이야기로 증명하는 GNGIF의 변화. 50만 명의 삶이 달라졌습니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">By The Numbers</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">숫자로 보는 임팩트</motion.h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactNumbers.map(({ value, unit, label }, i) => (
              <motion.div key={label} {...fadeUp(0.1 + i * 0.08)} className="group rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <p className="text-[52px] font-black leading-none tabular-nums text-forest">
                  {value}<span className="ml-1 text-[18px] font-semibold text-muted-foreground">{unit}</span>
                </p>
                <p className="mt-3 text-sm font-medium text-muted-foreground">{label}</p>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/40 transition-all duration-300 group-hover:w-full group-hover:bg-gold/60" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">UN SDGs</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">UN 지속가능발전목표</motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/60">
            GNGIF의 모든 사업은 UN SDGs와 연계되어 측정·보고됩니다.
          </motion.p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sdgGoals.map(({ number, Icon, title, description, color }, i) => (
              <motion.div
                key={number}
                {...fadeUp(0.1 + i * 0.08)}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${color} text-lg font-black text-white`}>{number}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-gold/20">
                    <Icon className="h-5 w-5 text-white/60 transition-colors duration-300 group-hover:text-gold" />
                  </div>
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-cream">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/45">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Explore Impact</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">더 알아보기</motion.h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {impactSections.map(({ href, title, description, cta }, i) => (
              <motion.div key={href} {...fadeUp(0.1 + i * 0.1)}>
                <Link href={href} className="group flex h-full flex-col gap-5 rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-xl hover:shadow-forest/5">
                  <div className="flex-1">
                    <h3 className="text-[22px] font-bold text-forest">{title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                  <div className="flex items-center gap-2 border-t border-border/40 pt-4 text-emerald">
                    <span className="text-sm font-semibold">{cta}</span>
                    <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

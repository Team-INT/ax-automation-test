"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiArrowRightLine,
  RiBuildingLine,
  RiHeartLine,
  RiGlobalLine,
  RiFileList3Line,
  RiSearchLine,
  RiUserLine,
} from "react-icons/ri"
import { SupportHero } from "./_components/support-hero"

const supportOptions = [
  {
    href: "/support/corporate",
    Icon: RiBuildingLine,
    title: "기업 파트너십",
    description: "CSR·ESG 경영과 연계한 기업 파트너십으로 더 큰 임팩트를 만들어갑니다. 공동 프로젝트, 임직원 봉사, 공정무역 구매 등 다양한 협력 방식을 제안합니다.",
    cta: "파트너십 알아보기",
    stat: "320+ 파트너 기업",
  },
  {
    href: "/support/donate",
    Icon: RiHeartLine,
    title: "개인 후원",
    description: "매월 정기 후원으로 안정적인 사업 기반을 만들어주세요. 후원금은 협동조합 설립 지원, 소액금융 자본금, 현장 인력 교육에 직접 사용됩니다.",
    cta: "후원 시작하기",
    stat: "12,000+ 개인 후원자",
  },
  {
    href: "/support/global",
    Icon: RiGlobalLine,
    title: "해외 파트너",
    description: "글로벌 NGO, 국제기구, 해외 정부 기관과의 파트너십으로 국경을 넘는 협력을 추구합니다. 공동 연구, 현장 협력, 재원 조달 등의 협력이 가능합니다.",
    cta: "협력 제안하기",
    stat: "45개국 파트너 기관",
  },
] as const

const impactStats = [
  { value: "320+", unit: "", label: "기업 파트너" },
  { value: "12,000+", unit: "", label: "개인 후원자" },
  { value: "45", unit: "개국", label: "글로벌 파트너 기관" },
  { value: "98", unit: "%", label: "후원금 현장 집행률" },
] as const

const transparency = [
  { Icon: RiFileList3Line, title: "연간 재무 감사", description: "매년 외부 공인회계사의 독립 감사를 통해 재무 투명성을 확보합니다." },
  { Icon: RiSearchLine, title: "후원금 사용 보고", description: "분기별로 후원금 집행 현황과 사업 성과를 후원자에게 직접 보고합니다." },
  { Icon: RiUserLine, title: "현장 방문 프로그램", description: "후원자와 파트너가 직접 현장을 방문해 사업 현황을 확인할 수 있습니다." },
] as const

export default function SupportPage() {
  return (
    <>
      <SupportHero
        title="후원·파트너십"
        description="함께할수록 더 큰 변화가 만들어집니다. 기업, 개인, 글로벌 기관 모두와 함께합니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Ways to Partner</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">함께하는 방법</motion.h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {supportOptions.map(({ href, Icon, title, description, cta, stat }, i) => (
              <motion.div key={href} {...fadeUp(0.1 + i * 0.1)}>
                <Link href={href} className="group flex h-full flex-col gap-5 rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-xl hover:shadow-forest/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[22px] font-bold text-forest">{title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                  <div className="border-t border-border/40 pt-4">
                    <p className="text-sm font-bold text-emerald">{stat}</p>
                    <div className="mt-2 flex items-center gap-2 text-emerald">
                      <span className="text-sm font-semibold">{cta}</span>
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -top-[20%] -right-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Impact Numbers</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">파트너십 현황</motion.h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map(({ value, unit, label }, i) => (
              <motion.div key={label} {...fadeUp(0.1 + i * 0.08)} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]">
                <p className="text-[48px] font-black leading-none tabular-nums text-gold">
                  {value}<span className="ml-1 text-[16px] font-semibold text-white/50">{unit}</span>
                </p>
                <p className="mt-3 text-sm font-medium text-white/50">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Transparency</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">투명한 운영</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {transparency.map(({ Icon, title, description }, i) => (
              <motion.div key={title} {...fadeUp(0.1 + i * 0.1)} className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-forest">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { ProgramsHero } from "../_components/programs-hero"

const performanceStats = [
  { value: "5", unit: "곳", label: "소액금융기관(MFI)" },
  { value: "97", unit: "%", label: "대출 상환율" },
  { value: "$450", unit: "", label: "평균 대출액" },
  { value: "8만+", unit: "", label: "누적 수혜자" },
] as const

const mfiPartners = [
  { name: "GNGIF Cambodia MFI", country: "캄보디아", flag: "🇰🇭", founded: "2007", focus: "농촌 여성 소액대출·저축", description: "캄보디아 농촌 지역 여성 소농을 대상으로 소액대출과 저축 프로그램을 운영하며 농업 생산성 향상을 지원합니다." },
  { name: "GNGIF Ethiopia Finance", country: "에티오피아", flag: "🇪🇹", founded: "2010", focus: "소규모 농업·창업 자금", description: "에티오피아 농촌 커피·곡물 농가에 영농 자금을 대출하고 소규모 창업을 희망하는 청년 그룹을 지원합니다." },
  { name: "GNGIF Kenya MFI", country: "케냐", flag: "🇰🇪", founded: "2011", focus: "도시 소상공인·수공예", description: "나이로비 및 인근 지역 소상공인과 수공예 종사자에게 운영 자금을 제공하며 사업 멘토링을 병행합니다." },
  { name: "GNGIF Bolivia Credit", country: "볼리비아", flag: "🇧🇴", founded: "2013", focus: "원주민 농업·소상공인", description: "볼리비아 원주민 공동체 농업 종사자와 전통 수공예 소상공인을 위한 문화적 맥락을 고려한 금융 서비스를 제공합니다." },
  { name: "GNGIF Myanmar Finance", country: "미얀마", flag: "🇲🇲", founded: "2016", focus: "농촌 여성·소농 지원", description: "미얀마 농촌 지역 여성 그룹과 소농을 대상으로 기후 리스크를 고려한 농업 자금 및 소액보험을 연계 제공합니다." },
] as const

const loanProcess = [
  { step: "01", title: "그룹 형성", description: "5~10명의 이웃이 모여 상호 보증 그룹 구성" },
  { step: "02", title: "교육 이수", description: "재무 관리·사업 계획 기초 교육 4주 이수" },
  { step: "03", title: "대출 신청", description: "사업 계획서 제출 및 그룹 심사 통과" },
  { step: "04", title: "대출 실행", description: "평균 $200~$800 소액 대출 지급" },
  { step: "05", title: "정기 상환", description: "주간·월간 모임에서 공동 상환 및 저축" },
  { step: "06", title: "재대출 확대", description: "상환 실적에 따라 대출 한도 상향 조정" },
] as const

export default function MicrofinancePage() {
  return (
    <>
      <ProgramsHero
        title="소액금융(MFI)"
        description="담보 없이도 꿈을 시작할 수 있도록. 5개 소액금융기관을 통해 소규모 창업과 농업을 지원합니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Microfinance</motion.p>
              <motion.div {...fadeUp(0.08)} className="mt-5 h-[2px] w-12 bg-gold" />
              <motion.h2 {...fadeUp(0.12)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">
                작은 대출이<br />삶을 바꿉니다
              </motion.h2>
              <motion.p {...fadeUp(0.2)} className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
                기존 금융 시스템에서 소외된 저소득층은 담보 부족으로 사업 자금을 마련할 수 없습니다. GNGIF의 소액금융 프로그램은 그룹 상호보증 방식을 통해 담보 없이도 소규모 창업, 농업 투자, 교육비를 지원합니다.
              </motion.p>

              {/* Key stat highlight */}
              <motion.div {...fadeUp(0.32)} className="mt-8">
                <div className="relative overflow-hidden rounded-2xl bg-forest p-7 text-white">
                  <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(45,106,79,0.6), transparent)" }} aria-hidden="true" />
                  <div className="relative">
                    <p className="text-[48px] font-black leading-none text-white">97<span className="text-[20px]">%</span></p>
                    <p className="mt-2 text-[15px] font-semibold text-white/80">대출 상환율</p>
                    <p className="mt-1 text-[13px] text-white/50">기존 은행 평균(82%) 대비 15%p 높은 수치</p>
                  </div>
                </div>
              </motion.div>
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

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">How It Works</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">대출 지원 과정</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {loanProcess.map(({ step, title, description }, i) => (
              <motion.div key={step} {...fadeUp(0.1 + i * 0.07)} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]">
                <span className="text-[48px] font-black leading-none tabular-nums text-white/10">{step}</span>
                <h3 className="mt-2 text-[18px] font-bold text-cream">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/45">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">MFI Partners</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">5개 소액금융기관</motion.h2>
          <div className="mt-14 space-y-5">
            {mfiPartners.map(({ name, country, flag, founded, focus, description }, i) => (
              <motion.div key={name} {...fadeUp(0.1 + i * 0.07)} className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap">
                  <div className="text-4xl">{flag}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold text-forest">{name}</h3>
                      <span className="rounded-full bg-emerald/10 px-3 py-0.5 text-xs font-semibold text-emerald">{country}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">설립 {founded} · {focus}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

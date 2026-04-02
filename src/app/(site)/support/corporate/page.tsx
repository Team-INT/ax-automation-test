"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiProjectorLine,
  RiGroupLine,
  RiShoppingBagLine,
  RiBarChartLine,
  RiCheckLine,
} from "react-icons/ri"
import { SupportHero } from "../_components/support-hero"

const partnershipTypes = [
  { Icon: RiProjectorLine, title: "공동 프로젝트", description: "특정 국가·사업 분야에서 기업과 GNGIF가 함께 설계하고 실행하는 맞춤형 협력 프로젝트입니다." },
  { Icon: RiGroupLine, title: "임직원 봉사", description: "해외 현장 봉사, 전문 기술 나눔, 국내 교육 지원 등 임직원 참여형 사회공헌 프로그램을 운영합니다." },
  { Icon: RiShoppingBagLine, title: "공정무역 구매", description: "더네이버스커피와 메리쿱 제품을 기업 복지·선물용으로 구매해 소농과 장인의 소득을 직접 지원합니다." },
  { Icon: RiBarChartLine, title: "ESG 연계 보고", description: "기업의 ESG 보고서에 활용 가능한 임팩트 측정 지표와 제3자 검증 지원을 제공합니다." },
] as const

const partnerLogos = [
  { name: "파트너 기업 A", sector: "금융" },
  { name: "파트너 기업 B", sector: "IT·플랫폼" },
  { name: "파트너 기업 C", sector: "식음료" },
  { name: "파트너 기업 D", sector: "패션·유통" },
  { name: "파트너 기업 E", sector: "제조·화학" },
  { name: "파트너 기업 F", sector: "에너지" },
] as const

const process = [
  { step: "01", title: "상담 신청", description: "온라인 문의 또는 전화로 파트너십 상담을 신청합니다." },
  { step: "02", title: "니즈 분석", description: "기업의 ESG 목표와 GNGIF 사업을 연계할 최적 방안을 분석합니다." },
  { step: "03", title: "제안서 작성", description: "맞춤형 파트너십 제안서와 임팩트 측정 계획을 수립합니다." },
  { step: "04", title: "협약 체결", description: "협력 범위, 예산, 성과 지표를 명시한 MOU/협약서를 체결합니다." },
  { step: "05", title: "실행·모니터링", description: "현장 실행과 분기별 성과 보고를 통해 임팩트를 추적합니다." },
  { step: "06", title: "ESG 보고", description: "연간 ESG 리포트에 활용 가능한 임팩트 보고서를 발행합니다." },
] as const

export default function CorporatePage() {
  return (
    <>
      <SupportHero
        title="기업 파트너십"
        description="320개 이상의 기업이 GNGIF와 함께 CSR·ESG 경영을 실천합니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            {/* Left — dark hero card */}
            <motion.div {...fadeUp(0)} className="relative overflow-hidden rounded-3xl bg-forest p-10 text-white lg:p-12">
              <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(45,106,79,0.6), transparent)" }} aria-hidden="true" />
              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.3em] text-gold/70 uppercase">Corporate Partnership</p>
                <div className="mt-4 h-[2px] w-10 bg-gold/60" />
                <h2 className="mt-6 text-[26px] font-extrabold leading-snug sm:text-[32px]">
                  기업의 가치가<br />현장에서 실현됩니다
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-white/55">
                  GNGIF의 기업 파트너십은 단순 후원을 넘어 기업의 비즈니스 역량과 현장 전문성이 결합된 전략적 협력입니다.
                </p>
                <div className="mt-8 space-y-3">
                  {["측정 가능한 사회적 임팩트", "ESG 보고서 연계 지원", "현장 방문 프로그램"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20">
                        <RiCheckLine className="h-3 w-3 text-gold" />
                      </div>
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — icon grid */}
            <div className="grid grid-cols-2 gap-4">
              {partnershipTypes.map(({ Icon, title, description }, i) => (
                <motion.div key={title} {...fadeUp(0.1 + i * 0.08)} className="group rounded-2xl border border-border/50 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-forest">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{description}</p>
                  <div className="mt-4 h-[2px] w-6 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Partnership Process</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">파트너십 프로세스</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(({ step, title, description }, i) => (
              <motion.div key={step} {...fadeUp(0.1 + i * 0.07)} className="relative">
                {(i === 2) && (
                  <div className="absolute top-6 -right-3 z-10 hidden text-white/15 lg:block">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
                      <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]">
                  <span className="text-[48px] font-black leading-none tabular-nums text-white/10">{step}</span>
                  <h3 className="mt-2 text-[17px] font-bold text-cream">{title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/45">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Our Partners</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">파트너 기업</motion.h2>
          <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map(({ name, sector }, i) => (
              <motion.div key={name} {...fadeUp(0.1 + i * 0.05)} className="group flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                  <RiProjectorLine className="h-5 w-5" />
                </div>
                <p className="mt-3 text-xs font-bold text-forest">{name}</p>
                <p className="mt-1 text-[10px] text-muted-foreground">{sector}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.3)} className="mt-10 rounded-2xl border border-emerald/30 bg-emerald/5 p-8 text-center">
            <p className="text-[18px] font-bold text-forest">파트너십 문의</p>
            <p className="mt-2 text-[15px] text-muted-foreground">귀사의 ESG 목표와 GNGIF의 임팩트를 연결하고 싶으신가요?</p>
            <button className="mt-5 rounded-xl bg-forest px-8 py-3 text-sm font-bold text-cream transition-colors duration-200 hover:bg-emerald">상담 신청하기</button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

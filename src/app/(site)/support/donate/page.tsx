"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { RiCheckLine } from "react-icons/ri"
import { SupportHero } from "../_components/support-hero"

const donationOptions = [
  { amount: 10000, label: "1만원", description: "소액금융 그룹 교육 1회 지원" },
  { amount: 30000, label: "3만원", description: "협동조합 설립 컨설팅 1시간" },
  { amount: 50000, label: "5만원", description: "소액 대출 자본금 일부 지원" },
  { amount: 100000, label: "10만원", description: "현지 사업 매니저 1인 월 지원" },
] as const

const donationUsage = [
  { percent: "45", area: "소액금융 자본금", description: "소액 대출 자본금으로 활용되어 취약계층의 창업을 지원합니다." },
  { percent: "30", area: "협동조합 역량 강화", description: "협동조합 설립 지원과 조합원 교육 훈련에 사용됩니다." },
  { percent: "15", area: "사회적기업 투자", description: "사회적기업의 초기 운영 비용과 설비 투자에 활용됩니다." },
  { percent: "10", area: "운영 관리", description: "현장 모니터링, 회계 감사, 사무 운영 등에 사용됩니다." },
] as const

const benefits = [
  "연말 세액공제 (기부금영수증 발급)",
  "분기별 후원금 사용 보고서",
  "현장 소식 및 수혜자 스토리 뉴스레터",
  "연간 임팩트 리포트",
]

const testimonials = [
  { name: "김지수", type: "정기 후원자 3년", message: "매달 3만원이 어디서 어떻게 쓰이는지 분기별 보고서로 알 수 있어서 믿음이 갑니다." },
  { name: "이민준", type: "정기 후원자 1년", message: "현장 사진과 수혜자 스토리를 받을 때마다 작은 후원이 실제 변화를 만든다는 걸 느낍니다." },
] as const

export default function DonatePage() {
  const [selected, setSelected] = useState(30000)
  const [customValue, setCustomValue] = useState("")

  return (
    <>
      <SupportHero
        title="개인 후원"
        description="12,000명의 개인 후원자가 함께 만드는 변화. 매월 정기 후원으로 함께해주세요."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Monthly Giving</motion.p>
              <motion.div {...fadeUp(0.08)} className="mt-5 h-[2px] w-12 bg-gold" />
              <motion.h2 {...fadeUp(0.12)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">
                매월 작은 나눔이<br />큰 변화를 만듭니다
              </motion.h2>
              <motion.p {...fadeUp(0.2)} className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
                정기 후원은 GNGIF가 안정적으로 현장 사업을 계획하고 실행할 수 있는 가장 중요한 자원입니다. 매월 소액으로도 실질적인 변화를 만들 수 있습니다.
              </motion.p>

              {/* Benefits */}
              <motion.div {...fadeUp(0.28)} className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald/15">
                      <RiCheckLine className="h-3.5 w-3.5 text-emerald" />
                    </div>
                    <span className="text-[14px] text-muted-foreground">{b}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div {...fadeUp(0.15)} className="rounded-3xl border border-border/50 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold text-forest">월 후원 금액 선택</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {donationOptions.map(({ amount, label, description }) => (
                  <button
                    key={amount}
                    onClick={() => { setSelected(amount); setCustomValue("") }}
                    className={`rounded-xl border p-4 text-left transition-all duration-200 ${selected === amount && !customValue ? "border-emerald bg-emerald/5 shadow-sm" : "border-border/50 hover:border-emerald/30"}`}
                  >
                    <p className={`text-[18px] font-black ${selected === amount && !customValue ? "text-emerald" : "text-forest"}`}>{label}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{description}</p>
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <input
                  type="number"
                  placeholder="직접 입력 (원)"
                  value={customValue}
                  className="w-full rounded-xl border border-border/50 px-4 py-3 text-sm text-forest placeholder-muted-foreground focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald/20"
                  onChange={(e) => { setCustomValue(e.target.value); setSelected(Number(e.target.value)) }}
                />
              </div>
              <button className="mt-5 w-full rounded-xl bg-forest py-4 text-sm font-bold text-cream transition-colors duration-200 hover:bg-emerald">
                월 {(customValue ? Number(customValue) : selected).toLocaleString()}원 정기 후원 시작하기
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">연말 세액공제 가능 · 언제든지 해지 가능</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-[20%] -right-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">How We Use Donations</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">후원금 사용처</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {donationUsage.map(({ percent, area, description }, i) => (
              <motion.div key={area} {...fadeUp(0.1 + i * 0.08)} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]">
                <p className="text-[52px] font-black leading-none text-gold">{percent}<span className="text-[22px]">%</span></p>
                <h3 className="mt-3 text-[17px] font-bold text-cream">{area}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/45">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Donor Voices</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">후원자 이야기</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {testimonials.map(({ name, type, message }, i) => (
              <motion.div key={name} {...fadeUp(0.1 + i * 0.1)} className="group rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <blockquote className="text-[16px] italic leading-relaxed text-forest/80">"{message}"</blockquote>
                <div className="mt-5 border-t border-border/40 pt-4">
                  <p className="text-sm font-bold text-forest">{name}</p>
                  <p className="text-xs text-muted-foreground">{type}</p>
                </div>
                <div className="mt-4 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import { motion } from "framer-motion"
import { useCountUp } from "@/hooks/use-count-up"

/* -------------------------------------------------------
   Data
   ------------------------------------------------------- */
const heroStat = { end: 45000, suffix: "+" } as const

const supportingStats = [
  { end: 26, suffix: "개국", label: "사업 국가" },
  { end: 621, suffix: "개", label: "협동조합" },
  { end: 13, suffix: "개", label: "사회적기업" },
  { end: 97, suffix: "%", label: "대출 상환율" },
  { end: 5, suffix: "곳", label: "소액금융기관" },
] as const

/* -------------------------------------------------------
   Hero counter — 45,000+ at editorial scale
   ------------------------------------------------------- */
function HeroCounter() {
  const { ref, count } = useCountUp(heroStat.end, 2400)
  return (
    <p
      ref={ref as React.Ref<HTMLParagraphElement>}
      className="text-[72px] font-black leading-none tabular-nums tracking-tight text-cream sm:text-[96px] lg:text-[128px]"
      aria-live="polite"
    >
      {count.toLocaleString()}
      <span className="text-[36px] font-bold text-gold lg:text-[56px]">
        {heroStat.suffix}
      </span>
    </p>
  )
}

/* -------------------------------------------------------
   Supporting stat item
   ------------------------------------------------------- */
function SupportingStat({
  end,
  suffix,
  label,
  index,
}: (typeof supportingStats)[number] & { index: number }) {
  const { ref, count } = useCountUp(end, 2000)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.3 + index * 0.07 }}
      className="flex flex-col items-center gap-1.5 px-4 py-7 text-center"
    >
      <p
        ref={ref as React.Ref<HTMLParagraphElement>}
        className="text-2xl font-bold tabular-nums text-cream lg:text-3xl"
      >
        {count.toLocaleString()}
        <span className="ml-0.5 text-sm font-medium text-cream/45">
          {suffix}
        </span>
      </p>
      <p className="text-[11px] font-semibold tracking-[0.15em] text-cream/35 uppercase">
        {label}
      </p>
    </motion.div>
  )
}

/* -------------------------------------------------------
   Section
   ------------------------------------------------------- */
export function ImpactNumbersSection() {
  return (
    <section
      className="section-dark grain relative overflow-hidden"
      aria-labelledby="impact-numbers-heading"
    >
      {/* Decorative background accent */}
      <div
        className="pointer-events-none absolute -top-[20%] -right-[10%] h-[60%] w-[40%] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(212,168,71,0.06), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-0 lg:px-8 lg:pt-32">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.25em] text-gold uppercase"
        >
          Impact in Numbers
        </motion.p>

        {/* Editorial split: header left / hero number right */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Thin gold accent bar */}
            <div className="mb-7 h-[2px] w-14 bg-gold" />
            <h2
              id="impact-numbers-heading"
              className="text-3xl font-bold leading-tight text-cream md:text-4xl lg:text-5xl"
            >
              숫자로 보는
              <br />
              임팩트
            </h2>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-cream/50">
              26개국 현장에서 만들어낸
              <br />
              변화를 데이터로 확인하세요.
            </p>
          </motion.div>

          {/* Right: hero number */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <HeroCounter />
            <p className="mt-4 text-lg font-medium text-cream/55">
              명의 삶이 변화했습니다
            </p>
          </motion.div>
        </div>

        {/* Full-width divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="mt-16 h-px origin-left bg-white/[0.1] lg:mt-20"
        />

        {/* Supporting stats — 5-column grid with separator lines */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {supportingStats.map((stat, i) => (
            <div
              key={stat.label}
              className="border-r border-white/[0.08] last:border-r-0 sm:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(3)]:border-r lg:[&:nth-child(5)]:border-r-0"
            >
              <SupportingStat {...stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

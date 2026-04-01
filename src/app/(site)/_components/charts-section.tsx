"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* -------------------------------------------------------
   Data
   ------------------------------------------------------- */
const yearlyGrowth = [
  { year: "2018", value: 180 },
  { year: "2019", value: 280 },
  { year: "2020", value: 350 },
  { year: "2021", value: 420 },
  { year: "2022", value: 490 },
  { year: "2023", value: 550 },
  { year: "2024", value: 621 },
] as const

const MAX_VALUE = 700

const regionData = [
  { region: "아프리카", count: 312, percent: 50, color: "#1B4332" },
  { region: "아시아", count: 186, percent: 30, color: "#2D6A4F" },
  { region: "중남미", count: 93, percent: 15, color: "#D4A847" },
  { region: "기타", count: 30, percent: 5, color: "#40916C" },
] as const

/* -------------------------------------------------------
   Bar Chart
   ------------------------------------------------------- */
function GrowthBarChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const chartH = 200
  const barGap = 6
  const barCount = yearlyGrowth.length
  const gridLines = [200, 400, 600]

  return (
    <div ref={ref} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border/60 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-forest">
            연도별 협동조합 성장 추이
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">2018 — 2024</p>
        </div>
        {/* Inline legend */}
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-emerald" />
            과거
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gold" />
            2024
          </span>
        </div>
      </div>

      <div className="mt-8 flex-1">
        <svg
          viewBox={`0 0 400 ${chartH + 36}`}
          className="w-full"
          role="img"
          aria-label="연도별 협동조합 성장 추이 바 차트"
        >
          {/* Grid lines */}
          {gridLines.map((v) => {
            const y = chartH - (v / MAX_VALUE) * chartH
            return (
              <g key={v}>
                <line
                  x1="38"
                  y1={y}
                  x2="394"
                  y2={y}
                  stroke="#E2DDD0"
                  strokeWidth="0.5"
                  strokeDasharray="4 3"
                />
                <text
                  x="32"
                  y={y + 4}
                  textAnchor="end"
                  fontSize="9"
                  fill="#95AFA6"
                >
                  {v}
                </text>
              </g>
            )
          })}

          {/* Baseline */}
          <line x1="38" y1={chartH} x2="394" y2={chartH} stroke="#E2DDD0" strokeWidth="0.8" />

          {/* Bars */}
          {yearlyGrowth.map((d, i) => {
            const barW = (356 - barGap * (barCount - 1)) / barCount
            const x = 38 + i * (barW + barGap)
            const barH = (d.value / MAX_VALUE) * chartH
            const y = chartH - barH
            const isLast = i === barCount - 1
            const fillColor = isLast ? "#D4A847" : "#2D6A4F"

            return (
              <g key={d.year}>
                <motion.rect
                  x={x}
                  width={barW}
                  rx="3"
                  fill={fillColor}
                  opacity={isLast ? 1 : 0.7}
                  initial={{ y: chartH, height: 0 }}
                  animate={isInView ? { y, height: barH } : { y: chartH, height: 0 }}
                  transition={{ duration: 0.65, delay: i * 0.07, ease: "easeOut" }}
                />

                {/* Value label — only for last (2024) */}
                {isLast && (
                  <motion.text
                    x={x + barW / 2}
                    y={y - 7}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="#D4A847"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {d.value}
                  </motion.text>
                )}

                {/* Year label */}
                <text
                  x={x + barW / 2}
                  y={chartH + 15}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#95AFA6"
                >
                  {d.year}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   Donut Chart
   ------------------------------------------------------- */
function RegionDonutChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const size = 148
  const cx = size / 2
  const cy = size / 2
  const radius = 54
  const strokeW = 20
  const circumference = 2 * Math.PI * radius

  let cumulative = 0
  const segments = regionData.map((d) => {
    const start = cumulative
    cumulative += d.percent
    return { ...d, startPercent: start }
  })

  return (
    <div ref={ref} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border/60 md:p-8">
      <div>
        <h3 className="text-base font-bold text-forest">지역별 협동조합 분포</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">전체 621개 기준</p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-7">
        {/* Donut */}
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="h-full w-full"
            style={{ transform: "rotate(-90deg)" }}
            role="img"
            aria-label="지역별 협동조합 분포"
          >
            {/* Track */}
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke="#F0EBDA"
              strokeWidth={strokeW}
            />

            {segments.map((seg, i) => {
              const dashLen = (seg.percent / 100) * circumference
              const dashGap = circumference - dashLen
              const offset = -(seg.startPercent / 100) * circumference

              return (
                <motion.circle
                  key={seg.region}
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={strokeW}
                  strokeLinecap="butt"
                  strokeDasharray={`${dashLen} ${dashGap}`}
                  strokeDashoffset={offset}
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={
                    isInView
                      ? { strokeDasharray: `${dashLen} ${dashGap}` }
                      : { strokeDasharray: `0 ${circumference}` }
                  }
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                />
              )
            })}
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[22px] font-black tabular-nums text-forest">
              621
            </span>
            <span className="text-[10px] font-medium text-muted-foreground">
              총 협동조합
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-3">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.region}
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.07 }}
              className="flex items-center gap-2"
            >
              <span
                className="inline-block h-2.5 w-2.5 shrink-0 rounded-[3px]"
                style={{ backgroundColor: seg.color }}
              />
              <span className="text-xs font-medium text-foreground/80">
                {seg.region}
              </span>
              <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                {seg.percent}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   Section
   ------------------------------------------------------- */
export function ChartsSection() {
  return (
    <section className="bg-cream-dark py-24 lg:py-32" aria-labelledby="charts-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald uppercase">
              Data Dashboard
            </p>
            <h2
              id="charts-heading"
              className="mt-3 text-3xl font-bold text-forest md:text-4xl"
            >
              성장 데이터
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              지속적으로 확장되는 사회적경제 생태계
            </p>
          </div>
        </motion.div>

        {/* Featured stat — editorial pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl bg-forest px-8 py-7 lg:px-12 lg:py-9"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
            {/* Left: big insight number */}
            <div className="shrink-0">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                2018 → 2024
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-[56px] font-black leading-none tabular-nums text-cream lg:text-[72px]">
                  3.5×
                </span>
                <span className="mb-2 text-base font-medium text-cream/60">성장</span>
              </div>
            </div>

            {/* Thin vertical divider */}
            <div className="hidden h-16 w-px shrink-0 bg-white/10 sm:block" />

            {/* Right: supporting context */}
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-[11px] font-medium tracking-wide text-cream/40 uppercase">
                  2018년
                </p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-cream/70">
                  180<span className="text-sm font-medium text-cream/40">개</span>
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-wide text-gold/70 uppercase">
                  2024년
                </p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-gold">
                  621<span className="text-sm font-medium text-gold/60">개</span>
                </p>
              </div>
              <div className="hidden sm:block">
                <p className="text-[11px] font-medium tracking-wide text-cream/40 uppercase">
                  연평균 성장
                </p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-cream/70">
                  +19<span className="text-sm font-medium text-cream/40">%</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts bento: 60/40 */}
        <div className="mt-6 grid gap-5 lg:grid-cols-[3fr_2fr]">
          <GrowthBarChart />
          <RegionDonutChart />
        </div>
      </div>
    </section>
  )
}

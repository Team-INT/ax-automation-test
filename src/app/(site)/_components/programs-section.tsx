"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

/* -------------------------------------------------------
   Data
   ------------------------------------------------------- */
const cycleWords = ["협동조합", "소액금융", "사회적기업", "소셜비즈니스"] as const

const programs = [
  {
    title: "협동조합",
    count: "621",
    unit: "개",
    description:
      "지역 주민이 직접 소유하고 운영하는 협동조합을 육성하여 경제적 자립 기반을 구축합니다. 농업, 수산업, 수공예 등 지역 산업과 연계합니다.",
    href: "/programs/cooperative",
    accentColor: "border-t-emerald",
    tags: ["농업", "수산업", "수공예", "유통"],
  },
  {
    title: "소액금융",
    count: "5",
    unit: "곳",
    description:
      "소규모 대출과 저축, 보험 등 포괄적 금융 서비스로 금융 소외 계층의 경제 활동 참여와 자산 형성을 돕습니다.",
    href: "/programs/microfinance",
    accentColor: "border-t-gold",
    tags: ["소액대출", "저축", "보험", "금융교육"],
  },
  {
    title: "사회적기업",
    count: "13",
    unit: "개",
    description:
      "사회적 가치와 경제적 지속가능성을 동시에 추구하는 기업을 설립하고 성장을 지원합니다. 현지 고용 창출의 핵심입니다.",
    href: "/programs/social-enterprise",
    accentColor: "border-t-forest",
    tags: ["고용 창출", "현지 생산", "공정무역"],
  },
  {
    title: "소셜비즈니스",
    count: "2",
    unit: "개 브랜드",
    description:
      "더네이버스커피, 메리쿱 등 사회적 미션을 실현하는 비즈니스를 직접 운영하며, 생산자와 소비자를 잇습니다.",
    href: "/programs/social-business",
    accentColor: "border-t-emerald-light",
    tags: ["더네이버스커피", "메리쿱"],
  },
] as const

/* -------------------------------------------------------
   Component
   ------------------------------------------------------- */
export function ProgramsSection() {
  /* Typing animation — cycle through words */
  const [wordIndex, setWordIndex] = useState(0)

  const advanceWord = useCallback(() => {
    setWordIndex((prev) => (prev + 1) % cycleWords.length)
  }, [])

  useEffect(() => {
    const id = setInterval(advanceWord, 3000)
    return () => clearInterval(id)
  }, [advanceWord])

  /* Horizontal scroll driven by page scroll */
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-30%"])

  return (
    <section className="overflow-hidden py-24 lg:py-36">
      {/* ---- Header row ---- */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald uppercase">
            Our Programs
          </p>

          <h2 className="mt-4 text-3xl font-bold text-forest md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            우리는{" "}
            <span className="relative inline-block min-w-[5em] align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={cycleWords[wordIndex]}
                  className="inline-block text-emerald"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {cycleWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gold/50" />
            </span>
            을 통해
            <br className="hidden sm:block" /> 변화를 만듭니다
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
            4대 핵심사업으로 아시아, 아프리카, 중남미 전역에서
            <br className="hidden md:block" />
            사회적경제 생태계를 구축합니다.
          </p>
        </motion.div>
      </div>

      {/* ---- Horizontal scroll cards ---- */}
      <div ref={containerRef} className="mt-16">
        <motion.div style={{ x }} className="flex gap-6 px-4 lg:px-8">
          {/* Left spacer — aligns first card with max-w-7xl container */}
          <div className="w-[calc((100vw-80rem)/2)] shrink-0 max-lg:hidden" />

          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="w-[320px] shrink-0 sm:w-[380px]"
            >
              <Link
                href={program.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-border"
              >
                {/* Colored top accent band */}
                <div className={`h-1.5 w-full ${program.accentColor} border-t-[3px]`} />

                {/* Card content */}
                <div className="flex flex-1 flex-col px-7 pt-7 pb-7">
                  {/* Number + unit */}
                  <div className="flex items-baseline gap-2">
                    <p className="text-[52px] font-black leading-none tabular-nums tracking-tight text-forest">
                      {program.count}
                    </p>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {program.unit}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-lg font-bold text-forest">
                    {program.title}
                  </h3>

                  {/* Thin gold divider */}
                  <div className="mt-4 h-px w-full bg-border" />

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cream-dark px-3 py-1 text-[11px] font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center pt-6 text-sm font-bold text-forest transition-colors group-hover:text-emerald">
                    자세히 보기
                    <svg
                      className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* -------------------------------------------------------
   Data
   ------------------------------------------------------- */
const stories = [
  {
    name: "Alice Mukamana",
    role: "협동조합 조합원",
    country: "르완다",
    region: "아프리카",
    quote:
      "협동조합에 가입한 이후 커피 수확량이 두 배로 늘었고, 아이들 학비를 낼 수 있게 되었습니다. 이제 저는 마을에서 다른 여성들에게 농업 기술을 가르칩니다.",
    accentColor: "#2D6A4F",
  },
  {
    name: "Srey Pov",
    role: "소액금융 수혜자",
    country: "캄보디아",
    region: "아시아",
    quote:
      "소액 대출로 작은 식료품점을 열었습니다. 이제 저는 단순한 수혜자가 아니라 사업주입니다. 딸의 대학 등록금도 모을 수 있게 됐어요.",
    accentColor: "#D4A847",
  },
  {
    name: "Fikadu Tessema",
    role: "사회적기업 직원",
    country: "에티오피아",
    region: "아프리카",
    quote:
      "사회적기업에서 일하면서 안정적인 소득을 얻고, 지역 사회에 기여하고 있다는 자부심을 느낍니다. 우리 마을의 청년 실업률이 눈에 띄게 줄었습니다.",
    accentColor: "#40916C",
  },
] as const

/* -------------------------------------------------------
   Card variants
   ------------------------------------------------------- */
const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
}

/* -------------------------------------------------------
   Component
   ------------------------------------------------------- */
export function StoriesSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current],
  )

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % stories.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + stories.length) % stories.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [isPaused, next])

  const story = stories[current]

  return (
    <section className="overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* ---- Header ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald uppercase">
              Impact Stories
            </p>
            <h2 className="mt-3 text-3xl font-bold text-forest md:text-4xl">
              변화의 주인공들
            </h2>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
              26개국 현장에서 전하는 실제 이야기
            </p>
          </div>

          {/* Desktop prev/next */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={prev}
              aria-label="이전 이야기"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="다음 이야기"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* ---- Carousel ---- */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
                className="grid gap-0 overflow-hidden rounded-2xl lg:grid-cols-[1fr_1.2fr]"
              >
                {/* Left panel — accent color with large number */}
                <div
                  className="relative flex min-h-[220px] flex-col justify-between overflow-hidden p-10 lg:min-h-[380px]"
                  style={{ backgroundColor: story.accentColor }}
                >
                  {/* Background decorative circle */}
                  <div
                    className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full opacity-20"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -left-8 top-8 h-32 w-32 rounded-full opacity-10"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                    aria-hidden="true"
                  />

                  {/* Region tag */}
                  <span className="relative z-10 w-fit rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/80 uppercase">
                    {story.region}
                  </span>

                  {/* Avatar + info */}
                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-2xl font-black text-white">
                      {story.name.charAt(0)}
                    </div>
                    <p className="mt-4 text-lg font-bold text-white">
                      {story.name}
                    </p>
                    <p className="mt-0.5 text-sm text-white/65">
                      {story.country} · {story.role}
                    </p>
                  </div>
                </div>

                {/* Right panel — quote on dark forest */}
                <div className="relative flex flex-col justify-center overflow-hidden bg-forest px-10 py-12 lg:px-14 lg:py-14">
                  {/* Decorative oversized quote mark */}
                  <span
                    className="pointer-events-none absolute -top-6 right-6 select-none font-black leading-none text-gold/[0.07]"
                    style={{ fontSize: "200px" }}
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>

                  {/* Gold accent line */}
                  <div className="mb-8 h-[2px] w-12 bg-gold" />

                  {/* Quote */}
                  <blockquote className="relative z-10 text-lg font-medium leading-[1.7] text-cream/85 lg:text-xl">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile controls */}
          <div className="mt-7 flex items-center justify-between sm:hidden">
            <button
              onClick={prev}
              aria-label="이전 이야기"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2.5">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`이야기 ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-forest"
                      : "w-2 bg-border hover:bg-forest/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="다음 이야기"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Desktop dot indicators */}
          <div className="mt-7 hidden items-center justify-center gap-2.5 sm:flex">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`이야기 ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-forest"
                    : "w-2 bg-border hover:bg-forest/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

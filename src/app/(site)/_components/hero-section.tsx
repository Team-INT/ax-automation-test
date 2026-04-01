"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useCountUp } from "@/hooks/use-count-up"

const stats = [
  { end: 26, suffix: "개국", label: "사업 국가" },
  { end: 621, suffix: "개", label: "협동조합" },
  { end: 13, suffix: "개", label: "사회적기업" },
  { end: 5, suffix: "곳", label: "소액금융기관" },
] as const

const STAGGER_BASE = 0.1

/** Shared motion variants — respects prefers-reduced-motion via CSS */
function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  } as const
}

function CounterCard({
  end,
  suffix,
  label,
}: (typeof stats)[number]) {
  const { ref, count } = useCountUp(end, 2000)

  return (
    <div className="flex flex-col gap-1">
      <p
        ref={ref as React.Ref<HTMLParagraphElement>}
        className="text-[48px] leading-none font-extrabold tabular-nums text-gold"
      >
        {count.toLocaleString()}
        <span className="ml-0.5 text-base font-medium text-cream/50">
          {suffix}
        </span>
      </p>
      <p className="text-[14px] text-cream/80">{label}</p>
    </div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-dvh items-center overflow-hidden bg-[#1B4332] text-white"
    >
      {/* ── Background layers (parallax at 0.5 speed) ── */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-[20%] bottom-0"
        aria-hidden="true"
      >
        {/* Base solid */}
        <div className="absolute inset-0 bg-[#1B4332]" />

        {/* Layered radial gradients for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 15% 85%, rgba(45,106,79,0.6), transparent)",
              "radial-gradient(ellipse 50% 50% at 75% 20%, rgba(212,168,71,0.07), transparent)",
              "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(27,67,50,0.8), transparent)",
            ].join(", "),
          }}
        />

        {/* Subtle diagonal line texture — pure CSS */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)",
          }}
        />

        {/* Top-left soft glow */}
        <div className="absolute -top-1/4 -left-1/4 h-[60%] w-[60%] rounded-full bg-emerald/10 blur-[120px]" />
        {/* Bottom-right warm accent */}
        <div className="absolute h-[40%] w-[40%] rounded-full bg-gold/5 blur-[100px]" style={{ right: "-12%", bottom: "-12%" }} />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-40 lg:px-8"
      >
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.p
            {...fadeUp(STAGGER_BASE * 1)}
            className="text-xs font-medium tracking-[0.25em] text-gold/80 uppercase motion-safe:animate-none"
          >
            Social Economy Ecosystem Builder
          </motion.p>

          {/* Headline — Plus Jakarta Sans via font-sans inheritance */}
          <motion.h1
            {...fadeUp(STAGGER_BASE * 2.5)}
            className="mt-8 text-[32px] font-bold leading-[1.08] sm:text-[44px] md:text-[56px] text-white"
          >
            Empowering People,
            <br />
            Transforming Communities
          </motion.h1>

          {/* Sub copy — Noto Sans KR */}
          <motion.p
            {...fadeUp(STAGGER_BASE * 4)}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/55 font-[family-name:var(--font-noto-kr)]"
          >
            26개국에서 사회적경제 생태계를 구축합니다
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(STAGGER_BASE * 5.5)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/impact"
              className="group inline-flex items-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground transition-all hover:shadow-lg hover:shadow-gold/15 hover:brightness-110"
            >
              임팩트 보기
              <span
                className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
            <Link
              href="/support"
              className="group inline-flex items-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition-all hover:border-white/40 hover:bg-white/10"
            >
              함께하기
              <span
                className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ── Impact Counters ── */}
        <motion.div
          {...fadeUp(STAGGER_BASE * 7)}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:mt-28"
        >
          {stats.map((stat) => (
            <CounterCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 motion-reduce:hidden"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
            Scroll
          </span>
          <div className="flex h-8 w-[18px] items-start justify-center rounded-full border border-white/15 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="h-1 w-1 rounded-full bg-gold/70"
            />
          </div>
        </div>
      </motion.div>

      {/* prefers-reduced-motion: immediate display */}
      <noscript>
        <style>{`
          .motion-safe\\:animate-none { animation: none !important; }
        `}</style>
      </noscript>
    </section>
  )
}

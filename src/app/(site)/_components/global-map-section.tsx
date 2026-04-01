"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

/* -------------------------------------------------------
   Country data — 26 countries across 3 regions
   Coordinates are relative to the 1000x500 SVG viewBox
   ------------------------------------------------------- */
const countries = [
  // 아프리카 (13)
  { name: "에티오피아", x: 590, y: 258, cooperatives: 85 },
  { name: "르완다", x: 562, y: 282, cooperatives: 62 },
  { name: "케냐", x: 578, y: 272, cooperatives: 55 },
  { name: "탄자니아", x: 572, y: 296, cooperatives: 48 },
  { name: "우간다", x: 558, y: 263, cooperatives: 42 },
  { name: "모잠비크", x: 572, y: 332, cooperatives: 35 },
  { name: "말라위", x: 578, y: 316, cooperatives: 28 },
  { name: "잠비아", x: 552, y: 312, cooperatives: 22 },
  { name: "콩고민주공화국", x: 538, y: 278, cooperatives: 18 },
  { name: "가나", x: 478, y: 252, cooperatives: 15 },
  { name: "세네갈", x: 443, y: 237, cooperatives: 12 },
  { name: "말리", x: 468, y: 227, cooperatives: 10 },
  { name: "부르키나파소", x: 477, y: 242, cooperatives: 8 },
  // 아시아 (8)
  { name: "캄보디아", x: 733, y: 242, cooperatives: 45 },
  { name: "미얀마", x: 713, y: 222, cooperatives: 38 },
  { name: "필리핀", x: 768, y: 238, cooperatives: 30 },
  { name: "베트남", x: 738, y: 228, cooperatives: 25 },
  { name: "인도네시아", x: 748, y: 282, cooperatives: 22 },
  { name: "네팔", x: 693, y: 207, cooperatives: 18 },
  { name: "방글라데시", x: 703, y: 217, cooperatives: 15 },
  { name: "스리랑카", x: 698, y: 252, cooperatives: 10 },
  // 중남미 (5)
  { name: "과테말라", x: 248, y: 237, cooperatives: 20 },
  { name: "온두라스", x: 258, y: 243, cooperatives: 15 },
  { name: "니카라과", x: 263, y: 250, cooperatives: 12 },
  { name: "페루", x: 273, y: 312, cooperatives: 10 },
  { name: "볼리비아", x: 293, y: 326, cooperatives: 8 },
] as const

const regions = [
  { region: "아프리카", count: 13, cooperatives: 440, label: "개국" },
  { region: "아시아", count: 8, cooperatives: 203, label: "개국" },
  { region: "중남미", count: 5, cooperatives: 65, label: "개국" },
] as const

/* Compute dot radius: sqrt scale, clamped for readability */
function dotRadius(cooperatives: number): number {
  return Math.max(2.8, Math.sqrt(cooperatives) * 0.72)
}

/* -------------------------------------------------------
   Component
   ------------------------------------------------------- */
export function GlobalMapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section
      ref={sectionRef}
      className="section-dark grain relative py-28 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* ---- Header ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Global Presence
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            26개국, 하나의 미션
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/50 lg:text-lg">
            아시아, 아프리카, 중남미 전역에서
            <br className="hidden sm:block" />
            사회적경제 생태계를 구축합니다
          </p>
        </motion.div>

        {/* ---- Map ---- */}
        <div className="mt-16 lg:mt-20">
          <svg
            viewBox="0 0 1000 500"
            className="mx-auto h-auto w-full max-w-5xl"
            fill="none"
            role="img"
            aria-label="26개국 활동 지역을 보여주는 세계지도"
          >
            {/* Very simplified continent outlines — low opacity, just for spatial context */}
            <g opacity={0.08} stroke="white" strokeWidth={0.8} fill="none">
              {/* North America */}
              <path d="M80,120 Q120,80 200,90 Q250,85 280,110 Q300,130 290,160 Q280,180 260,200 Q240,220 250,240 Q245,250 240,245 L230,230 Q210,200 190,190 Q160,175 130,170 Q100,165 80,150 Z" />
              {/* Central America */}
              <path d="M240,245 Q250,248 255,256 Q258,262 252,265" />
              {/* South America */}
              <path d="M250,260 Q270,250 290,270 Q310,300 320,340 Q325,370 310,400 Q295,420 280,410 Q260,395 265,370 Q268,350 260,330 Q255,310 248,290 Z" />
              {/* Europe */}
              <path d="M470,80 Q490,75 510,80 Q530,85 540,100 Q535,115 520,120 Q510,130 495,135 Q480,130 470,120 Q465,110 465,95 Z" />
              {/* Africa */}
              <path d="M470,170 Q490,160 520,165 Q550,170 570,190 Q590,220 600,260 Q605,300 590,340 Q575,370 555,380 Q530,385 510,370 Q490,350 480,320 Q470,290 465,260 Q460,230 462,200 Z" />
              {/* Asia */}
              <path d="M550,70 Q600,60 650,65 Q700,70 740,85 Q780,100 800,130 Q810,160 790,180 Q770,200 750,210 Q730,220 720,240 Q750,250 780,260 Q790,280 770,300 Q740,290 720,270 Q700,260 680,230 Q660,210 640,190 Q620,170 600,150 Q570,130 555,110 Q545,90 550,70 Z" />
              {/* Australia */}
              <path d="M770,340 Q800,330 830,340 Q850,355 845,375 Q835,390 810,395 Q790,390 775,375 Q765,360 770,340 Z" />
            </g>

            {/* Country dots */}
            {countries.map((country, i) => {
              const r = dotRadius(country.cooperatives)
              return (
                <g key={country.name}>
                  <title>{`${country.name}: ${country.cooperatives}개 협동조합`}</title>

                  {/* Subtle pulse ring — only starts when in view */}
                  {isInView && (
                    <motion.circle
                      cx={country.x}
                      cy={country.y}
                      fill="none"
                      stroke="#D4A847"
                      strokeWidth={0.6}
                      initial={{ r, opacity: 0 }}
                      animate={{
                        r: [r, r + 6, r],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 1.2 + i * 0.12,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  {/* Main dot — staggered entrance */}
                  <motion.circle
                    cx={country.x}
                    cy={country.y}
                    r={r}
                    fill="#D4A847"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 0.85, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      delay: 0.4 + i * 0.03,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  />
                </g>
              )
            })}

            {/* Region labels — appear last */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <text
                x="520"
                y="190"
                fill="white"
                opacity={0.35}
                fontSize={10}
                fontWeight={600}
                letterSpacing="0.05em"
              >
                AFRICA
              </text>
              <text
                x="718"
                y="192"
                fill="white"
                opacity={0.35}
                fontSize={10}
                fontWeight={600}
                letterSpacing="0.05em"
              >
                ASIA
              </text>
              <text
                x="235"
                y="278"
                fill="white"
                opacity={0.35}
                fontSize={10}
                fontWeight={600}
                letterSpacing="0.05em"
              >
                LATAM
              </text>
            </motion.g>
          </svg>
        </div>

        {/* ---- Region summary cards ---- */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 lg:mt-16 lg:gap-6">
          {regions.map((r, i) => (
            <motion.div
              key={r.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15 + i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-5 text-center"
            >
              <p className="text-2xl font-bold tabular-nums text-gold lg:text-3xl">
                {r.count}
                <span className="ml-0.5 text-sm font-medium text-gold/70">
                  {r.label}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-white/70">
                {r.region}
              </p>
              <p className="mt-0.5 text-xs text-white/35">
                {r.cooperatives}개 협동조합
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

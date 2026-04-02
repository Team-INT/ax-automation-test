"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

/* -------------------------------------------------------
   Country data — 26 countries, real [lng, lat] coordinates
   ------------------------------------------------------- */
interface Country {
  name: string
  coordinates: [number, number]
  cooperatives: number
  region: "아프리카" | "아시아" | "중남미"
}

const countries: Country[] = [
  // 아프리카 (13)
  { name: "에티오피아", coordinates: [38.76, 8.99], cooperatives: 85, region: "아프리카" },
  { name: "르완다", coordinates: [29.87, -1.94], cooperatives: 62, region: "아프리카" },
  { name: "케냐", coordinates: [37.91, -0.02], cooperatives: 55, region: "아프리카" },
  { name: "탄자니아", coordinates: [34.89, -6.37], cooperatives: 48, region: "아프리카" },
  { name: "우간다", coordinates: [32.29, 1.37], cooperatives: 42, region: "아프리카" },
  { name: "모잠비크", coordinates: [35.53, -17.27], cooperatives: 35, region: "아프리카" },
  { name: "말라위", coordinates: [34.30, -13.25], cooperatives: 28, region: "아프리카" },
  { name: "잠비아", coordinates: [27.85, -13.13], cooperatives: 22, region: "아프리카" },
  { name: "콩고민주공화국", coordinates: [24.0, -4.0], cooperatives: 18, region: "아프리카" },
  { name: "가나", coordinates: [-1.02, 7.95], cooperatives: 15, region: "아프리카" },
  { name: "세네갈", coordinates: [-14.45, 14.50], cooperatives: 12, region: "아프리카" },
  { name: "말리", coordinates: [-1.68, 17.57], cooperatives: 10, region: "아프리카" },
  { name: "부르키나파소", coordinates: [-1.56, 12.36], cooperatives: 8, region: "아프리카" },
  // 아시아 (8)
  { name: "캄보디아", coordinates: [104.99, 12.57], cooperatives: 45, region: "아시아" },
  { name: "미얀마", coordinates: [95.96, 21.92], cooperatives: 38, region: "아시아" },
  { name: "필리핀", coordinates: [121.77, 12.88], cooperatives: 30, region: "아시아" },
  { name: "베트남", coordinates: [108.28, 14.06], cooperatives: 25, region: "아시아" },
  { name: "인도네시아", coordinates: [113.92, -0.79], cooperatives: 22, region: "아시아" },
  { name: "네팔", coordinates: [84.12, 28.39], cooperatives: 18, region: "아시아" },
  { name: "방글라데시", coordinates: [90.36, 23.69], cooperatives: 15, region: "아시아" },
  { name: "스리랑카", coordinates: [80.77, 7.87], cooperatives: 10, region: "아시아" },
  // 중남미 (5)
  { name: "과테말라", coordinates: [-90.23, 15.78], cooperatives: 20, region: "중남미" },
  { name: "온두라스", coordinates: [-86.24, 15.20], cooperatives: 15, region: "중남미" },
  { name: "니카라과", coordinates: [-85.21, 12.87], cooperatives: 12, region: "중남미" },
  { name: "페루", coordinates: [-75.02, -9.19], cooperatives: 10, region: "중남미" },
  { name: "볼리비아", coordinates: [-64.99, -16.29], cooperatives: 8, region: "중남미" },
]

const regions = [
  { region: "아프리카", count: 13, cooperatives: 440, label: "개국" },
  { region: "아시아", count: 8, cooperatives: 203, label: "개국" },
  { region: "중남미", count: 5, cooperatives: 65, label: "개국" },
] as const

function dotRadius(cooperatives: number): number {
  return Math.max(3.5, Math.sqrt(cooperatives) * 0.9)
}

/* -------------------------------------------------------
   Component
   ------------------------------------------------------- */
export function GlobalMapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })
  const [tooltip, setTooltip] = useState<{ name: string; cooperatives: number } | null>(null)

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
        <motion.div
          className="relative mt-16 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Tooltip */}
          {tooltip && (
            <div className="pointer-events-none absolute left-1/2 top-2 z-20 -translate-x-1/2 rounded-lg border border-white/10 bg-forest/95 px-3 py-1.5 text-center backdrop-blur-sm">
              <p className="text-xs font-semibold text-white">{tooltip.name}</p>
              <p className="text-[11px] text-gold/80">{tooltip.cooperatives}개 협동조합</p>
            </div>
          )}

          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{ scale: 160 }}
            className="mx-auto h-auto w-full max-w-5xl"
            aria-label="26개국 활동 지역을 보여주는 세계지도"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth={0.4}
                  />
                ))
              }
            </Geographies>

            {countries.map((country, i) => {
              const r = dotRadius(country.cooperatives)
              return (
                <Marker
                  key={country.name}
                  coordinates={country.coordinates}
                  onMouseEnter={() => setTooltip({ name: country.name, cooperatives: country.cooperatives })}
                  onMouseLeave={() => setTooltip(null)}
                >
                  {/* Pulse ring */}
                  {isInView && (
                    <motion.circle
                      r={r}
                      fill="none"
                      stroke="#D4A847"
                      strokeWidth={0.7}
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{
                        scale: [1, 2.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 1.2 + i * 0.12,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                  {/* Main dot */}
                  <motion.circle
                    r={r}
                    fill="#D4A847"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: 1, opacity: 0.88 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      delay: 0.4 + i * 0.04,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </Marker>
              )
            })}
          </ComposableMap>
        </motion.div>

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

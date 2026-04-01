"use client"

import { motion } from "framer-motion"

const partners = [
  "KOICA",
  "World Bank",
  "ILO",
  "UNDP",
  "USAID",
  "삼성",
  "현대",
  "SK",
  "LG",
  "포스코",
] as const

const certifications = [
  { label: "UN ECOSOC 특별협의지위", year: "2019" },
  { label: "기획재정부 공익법인", year: "2015" },
] as const

export function PartnersSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Partners &amp; Trust
          </p>
        </motion.div>

        {/* Partner logos marquee */}
        <div className="relative mt-10 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-[marquee_30s_linear_infinite]">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="mx-5 flex h-12 shrink-0 items-center justify-center rounded bg-neutral-100 px-8 text-sm font-medium text-neutral-400"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {certifications.map((cert) => (
            <div
              key={cert.label}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground"
            >
              <svg
                className="h-3.5 w-3.5 text-emerald"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium text-foreground/70">
                {cert.label}
              </span>
              <span className="text-muted-foreground">({cert.year})</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee keyframe — injected via style tag for Tailwind v4 compatibility */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

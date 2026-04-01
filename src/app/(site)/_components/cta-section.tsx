"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const ctaCards = [
  {
    title: "기업 파트너십",
    description:
      "CSR 프로그램, 공급망 파트너십, 임팩트 투자 등 기업의 사회적 가치 실현을 위한 맞춤형 파트너십을 제안합니다.",
    href: "/support/corporate",
    accentClass: "bg-emerald",
    bgClass: "bg-emerald",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0H21m-3.75 0H21"
        />
      </svg>
    ),
  },
  {
    title: "개인 후원하기",
    description:
      "당신의 후원이 26개국 현장에서 지속 가능한 변화를 만듭니다. 월 1만원부터 협동조합 조합원의 삶을 바꿀 수 있습니다.",
    href: "/support/donate",
    accentClass: "bg-gold",
    bgClass: "bg-gold",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "임팩트 보기",
    description:
      "26개국 621개 협동조합의 성과를 인터랙티브 대시보드와 수혜자 스토리로 직접 확인하세요.",
    href: "/impact",
    accentClass: "bg-forest",
    bgClass: "bg-forest",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
] as const

export function CtaSection() {
  return (
    <section className="bg-forest py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
            Get Involved
          </p>
          <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl">
            함께하기
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/50">
            다양한 방법으로 지속 가능한 변화에 동참할 수 있습니다
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ctaCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.09]"
              >
                <div className="flex flex-1 flex-col p-8">
                  {/* Icon container */}
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.accentClass} text-white`}>
                    {card.icon}
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-cream">
                    {card.title}
                  </h3>

                  <div className="mt-2.5 h-px w-full bg-white/[0.08]" />

                  <p className="mt-4 text-sm leading-relaxed text-cream/50">
                    {card.description}
                  </p>

                  <div className="mt-auto flex items-center pt-7 text-sm font-semibold text-gold transition-all">
                    자세히 보기
                    <svg
                      className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
        </div>
      </div>
    </section>
  )
}

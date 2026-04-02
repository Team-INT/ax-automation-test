"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiGlobalLine,
  RiGovernmentLine,
  RiBarChartGroupedLine,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiTeamLine,
} from "react-icons/ri"
import { AboutHero } from "./_components/about-hero"

const stats = [
  { value: "26", unit: "개국", label: "사업 운영 국가" },
  { value: "621", unit: "개", label: "협동조합 네트워크" },
  { value: "13", unit: "개", label: "사회적기업" },
  { value: "5", unit: "곳", label: "소액금융기관" },
] as const

const historyItems = [
  {
    year: "2001",
    title: "재단 설립",
    description:
      "굿네이버스 글로벌 임팩트 재단 설립. 사회적경제 생태계 구축 미션 선포.",
  },
  {
    year: "2005",
    title: "해외 사업 본격화",
    description:
      "동남아시아 협동조합 지원 프로그램 시작. 캄보디아·베트남 첫 협동조합 설립.",
  },
  {
    year: "2009",
    title: "소액금융 프로그램 론칭",
    description:
      "아프리카 지역 소액금융기관(MFI) 파트너십 체결. 케냐·에티오피아 첫 MFI 지원.",
  },
  {
    year: "2012",
    title: "소셜비즈니스 브랜드 출범",
    description:
      "더네이버스커피 론칭. 공정무역 원두를 통해 생산자 직접 지원 모델 구현.",
  },
  {
    year: "2015",
    title: "사업 국가 20개국 돌파",
    description:
      "글로벌 파트너십 확대로 아시아·아프리카·중남미 20개국에서 사업 운영.",
  },
  {
    year: "2018",
    title: "메리쿱 출범",
    description:
      "수공예 소셜브랜드 메리쿱 출범. 장인들의 기술을 글로벌 시장으로 연결.",
  },
  {
    year: "2022",
    title: "임팩트 생태계 확장",
    description:
      "621개 협동조합, 13개 사회적기업, 5개 소액금융기관으로 생태계 확장.",
  },
  {
    year: "2024",
    title: "26개국 글로벌 임팩트",
    description:
      "26개국에서 사회적경제 생태계를 구축하며 수십만 명의 삶에 변화를 만들고 있습니다.",
    isCurrent: true,
  },
] satisfies { year: string; title: string; description: string; isCurrent?: boolean }[]

const subpageLinks = [
  {
    href: "/about/mission",
    label: "미션·비전",
    description: "GNGIF의 존재 이유와 우리가 나아가는 방향",
    Icon: RiGlobalLine,
  },
  {
    href: "/about/organization",
    label: "조직·거버넌스",
    description: "이사회 구성과 투명한 의사결정 구조",
    Icon: RiGovernmentLine,
  },
  {
    href: "/about/transparency",
    label: "투명경영",
    description: "감사보고서, 재무공시, 연간보고서 아카이브",
    Icon: RiShieldCheckLine,
  },
] as const

export default function AboutPage() {
  return (
    <>
      <AboutHero
        title="재단소개"
        description="26개국에서 사회적경제 생태계를 구축하는 굿네이버스 글로벌 임팩트 재단입니다."
      />

      {/* ── 소개 섹션 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            {/* Left — editorial copy */}
            <div>
              <motion.p
                {...fadeUp(0)}
                className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
              >
                About Us
              </motion.p>
              <motion.div {...fadeUp(0.08)} className="mt-5 h-[2px] w-12 bg-gold" />
              <motion.h2
                {...fadeUp(0.12)}
                className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]"
              >
                사람을 중심에 두는
                <br />
                사회적경제 생태계
              </motion.h2>
              <motion.p
                {...fadeUp(0.2)}
                className="mt-6 text-[16px] leading-relaxed text-muted-foreground"
              >
                재단법인 굿네이버스 글로벌 임팩트(GNGIF)는 협동조합, 소액금융,
                사회적기업, 소셜비즈니스를 통해 취약계층의 자립과 지역사회
                발전을 이끕니다.
              </motion.p>
              <motion.p
                {...fadeUp(0.26)}
                className="mt-4 text-[16px] leading-relaxed text-muted-foreground"
              >
                단순한 원조를 넘어 지속 가능한 사회적경제 생태계를 구축하는 것이
                우리의 핵심 접근입니다. 현지 파트너와 함께 만드는 변화는
                세대를 넘어 지속됩니다.
              </motion.p>

              <motion.div {...fadeUp(0.34)} className="mt-8 flex items-center gap-2">
                <RiTeamLine className="h-5 w-5 text-emerald" />
                <span className="text-sm font-medium text-emerald">
                  2001년 설립 이래 23년의 현장 경험
                </span>
              </motion.div>
            </div>

            {/* Right — stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, unit, label }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(0.1 + i * 0.08)}
                  className="group rounded-2xl border border-border/50 bg-white p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-forest/5"
                >
                  <p className="text-[44px] font-black leading-none tabular-nums text-forest">
                    {value}
                    <span className="ml-1 text-[16px] font-semibold text-muted-foreground">
                      {unit}
                    </span>
                  </p>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">
                    {label}
                  </p>
                  {/* Bottom accent */}
                  <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/40 transition-all duration-300 group-hover:w-full group-hover:bg-gold/60" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 연혁 타임라인 — dark section ── */}
      <section className="section-dark grain relative overflow-hidden">
        {/* Decorative blob */}
        <div
          className="pointer-events-none absolute -top-[20%] -right-[10%] h-[55%] w-[40%] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            History
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]"
          >
            우리의 여정
          </motion.h2>

          <div className="mt-16 lg:mt-20">
            {/* Center line — desktop only */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />

              <div className="space-y-0">
                {historyItems.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                    className={[
                      "relative flex gap-8 pb-10 md:gap-0 md:pb-12",
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                    ].join(" ")}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 top-1.5 z-10 -translate-x-1/2 md:left-1/2">
                      <div
                        className={[
                          "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
                          item.isCurrent
                            ? "border-gold bg-gold"
                            : "border-white/30 bg-forest",
                        ].join(" ")}
                      >
                        {item.isCurrent && (
                          <div className="h-1.5 w-1.5 rounded-full bg-forest" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={[
                        "ml-10 md:ml-0 md:w-[calc(50%-2.5rem)]",
                        i % 2 === 0
                          ? "md:pr-10 md:text-right"
                          : "md:pl-10",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "inline-block text-[11px] font-bold tracking-[0.2em] uppercase",
                          item.isCurrent ? "text-gold" : "text-white/40",
                        ].join(" ")}
                      >
                        {item.year}
                      </span>
                      <h3 className="mt-1.5 text-[18px] font-bold text-cream">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-white/45">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 서브 페이지 카드 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            More About Us
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[32px] font-extrabold tracking-tight text-forest sm:text-[40px]"
          >
            더 알아보기
          </motion.h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {subpageLinks.map(({ href, label, description, Icon }, i) => (
              <motion.div key={href} {...fadeUp(0.1 + i * 0.1)}>
                <Link
                  href={href}
                  className="group flex h-full flex-col gap-6 rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-xl hover:shadow-forest/5"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-forest">
                      {label}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald">
                    보기
                    <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

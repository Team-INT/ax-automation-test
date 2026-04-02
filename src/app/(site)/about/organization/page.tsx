"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiUserStarLine,
  RiBookOpenLine,
  RiShieldCheckLine,
  RiBuilding2Line,
  RiGroup2Line,
  RiGlobalLine,
} from "react-icons/ri"
import { AboutHero } from "../_components/about-hero"

const boardMembers = [
  {
    name: "김영수",
    role: "이사장",
    affiliation: "전 외교부 장관",
    description:
      "30년간의 외교 경험을 바탕으로 GNGIF의 글로벌 파트너십 확대를 이끌고 있습니다.",
    Icon: RiUserStarLine,
  },
  {
    name: "이민지",
    role: "부이사장",
    affiliation: "서울대학교 경영대학원 교수",
    description:
      "사회적기업 및 임팩트 투자 전문가로서 재단의 사업 전략 수립에 기여합니다.",
    Icon: RiBookOpenLine,
  },
  {
    name: "박준혁",
    role: "이사",
    affiliation: "글로벌 파트너스 대표이사",
    description:
      "국제개발협력 20년 경력을 보유하며 현지 파트너십 구축을 담당합니다.",
    Icon: RiGlobalLine,
  },
  {
    name: "최서현",
    role: "이사",
    affiliation: "한국사회투자 이사",
    description:
      "사회적금융 전문가로서 소액금융 사업의 지속가능성을 강화합니다.",
    Icon: RiBuilding2Line,
  },
  {
    name: "정대한",
    role: "이사",
    affiliation: "굿네이버스 사무총장",
    description:
      "모법인과의 연계 협력 및 국내 네트워크 강화를 담당합니다.",
    Icon: RiGroup2Line,
  },
  {
    name: "Sarah Thompson",
    role: "이사",
    affiliation: "Acumen Fund 파트너",
    description:
      "임팩트 투자 분야의 글로벌 전문가로 해외 파트너십 개발에 기여합니다.",
    Icon: RiUserStarLine,
  },
] as const

const govPrinciples = [
  {
    Icon: RiShieldCheckLine,
    title: "독립성",
    description:
      "모법인과 독립적인 의사결정 구조로 재단 고유 미션에 집중합니다.",
  },
  {
    Icon: RiBookOpenLine,
    title: "투명성",
    description:
      "모든 재무 및 사업 결과를 연간보고서와 감사보고서로 공개합니다.",
  },
  {
    Icon: RiGroup2Line,
    title: "책임성",
    description:
      "후원자, 수혜자, 파트너에 대한 책임을 최우선으로 합니다.",
  },
] as const

const orgUnits = [
  {
    name: "이사회",
    sub: "최고 의사결정 기구 (6인)",
    tags: ["감사위원회", "윤리위원회"],
  },
  {
    name: "사무국",
    sub: "사업 총괄 운영",
    tags: ["사업팀", "파트너십팀", "재무팀", "소셜비즈니스팀"],
  },
] as const

export default function OrganizationPage() {
  return (
    <>
      <AboutHero
        label="조직·거버넌스"
        title="투명한 거버넌스"
        description="GNGIF는 다양한 전문가로 구성된 이사회의 감독 아래 투명하고 책임 있는 방식으로 운영됩니다."
      />

      {/* ── 조직도 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            Organization
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]"
          >
            조직 구조
          </motion.h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {orgUnits.map(({ name, sub, tags }, i) => (
              <motion.div
                key={name}
                {...fadeUp(0.15 + i * 0.1)}
                className="rounded-2xl border border-border/50 bg-white p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest text-white text-sm font-bold">
                    {name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-forest">{name}</h3>
                    <p className="text-sm text-muted-foreground">{sub}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-emerald/20 bg-emerald/5 px-3 py-1 text-[12px] font-semibold text-emerald"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 이사회 — dark ── */}
      <section className="section-dark grain relative overflow-hidden">
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
            Board of Directors
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]"
          >
            이사회
          </motion.h2>
          <motion.p
            {...fadeUp(0.18)}
            className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/50"
          >
            각 분야 전문가 6인으로 구성. 연 4회 정기이사회를 개최하며
            재단의 미션과 전략 방향을 결정하고 재무·사업 운영을 감독합니다.
          </motion.p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map(({ name, role, affiliation, description, Icon }, i) => (
              <motion.div
                key={name}
                {...fadeUp(0.1 + i * 0.07)}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4">
                  {/* Icon avatar */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-light border border-white/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-cream">{name}</p>
                    <p className="text-[12px] font-semibold text-gold">{role}</p>
                  </div>
                </div>
                <p className="mt-4 text-[12px] font-medium text-white/35 uppercase tracking-wide">
                  {affiliation}
                </p>
                <div className="mt-3 h-px bg-white/[0.07]" />
                <p className="mt-4 text-[14px] leading-relaxed text-white/45">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 거버넌스 원칙 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            Governance Principles
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold tracking-tight text-forest sm:text-[44px]"
          >
            거버넌스 원칙
          </motion.h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {govPrinciples.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.1 + i * 0.1)}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/5"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-forest to-emerald opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-[20px] font-bold text-forest">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

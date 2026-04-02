"use client"

import { motion } from "framer-motion"
import {
  RiLightbulbLine,
  RiHandHeartLine,
  RiTeamLine,
  RiLeafLine,
} from "react-icons/ri"
import { AboutHero } from "../_components/about-hero"

const coreValues = [
  {
    Icon: RiHandHeartLine,
    title: "자립 (Empowerment)",
    description:
      "수혜가 아닌 역량 강화. 지역사회 스스로 지속 가능한 변화를 만들 수 있도록 지원합니다.",
  },
  {
    Icon: RiLightbulbLine,
    title: "투명성 (Transparency)",
    description:
      "성과와 재무를 투명하게 공개합니다. 신뢰는 데이터와 책임 있는 소통으로 만들어집니다.",
  },
  {
    Icon: RiTeamLine,
    title: "협력 (Collaboration)",
    description:
      "현지 파트너, 기업, 개인 후원자와 함께 더 큰 임팩트를 만듭니다.",
  },
  {
    Icon: RiLeafLine,
    title: "혁신 (Innovation)",
    description:
      "사회적경제의 새로운 모델을 끊임없이 실험하고, 성공 사례를 전파합니다.",
  },
] as const

const theoryOfChange = [
  {
    step: "01",
    title: "접근 제공",
    description: "금융 서비스, 시장, 기술에 대한 접근을 차단하는 장벽을 제거합니다.",
  },
  {
    step: "02",
    title: "역량 강화",
    description: "협동조합과 소셜비즈니스를 통해 지역사회 구성원의 경제적 역량을 키웁니다.",
  },
  {
    step: "03",
    title: "생태계 구축",
    description: "개별 사업을 넘어 서로 지지하고 성장하는 사회적경제 생태계를 만듭니다.",
  },
  {
    step: "04",
    title: "지속 가능한 임팩트",
    description: "외부 지원 없이도 자생할 수 있는 구조로, 변화가 세대를 넘어 지속됩니다.",
  },
] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function MissionPage() {
  return (
    <>
      <AboutHero
        label="미션·비전"
        title="우리가 존재하는 이유"
        description="GNGIF의 미션과 비전, 그리고 변화를 만드는 핵심 가치를 소개합니다."
      />

      {/* ── 미션 & 비전 split ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission — dark card */}
            <motion.div
              {...fadeUp(0)}
              className="relative overflow-hidden rounded-3xl bg-forest p-10 text-white lg:p-12"
            >
              {/* Background accent */}
              <div
                className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full blur-[80px]"
                style={{ background: "radial-gradient(circle, rgba(45,106,79,0.6), transparent)" }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.3em] text-gold/70 uppercase">
                  Mission
                </p>
                <div className="mt-4 h-[2px] w-10 bg-gold/60" />
                <h2 className="mt-6 text-[26px] font-extrabold leading-snug sm:text-[32px]">
                  사회적경제 생태계 구축을 통한
                  <br />
                  지속 가능한 임팩트 창출
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-white/55">
                  협동조합, 소액금융, 사회적기업, 소셜비즈니스를 통해 취약계층이
                  스스로 자립하고 지역사회를 변화시킬 수 있는 생태계를 만듭니다.
                </p>
              </div>
            </motion.div>

            {/* Vision — gold-accent card */}
            <motion.div
              {...fadeUp(0.1)}
              className="relative overflow-hidden rounded-3xl border-2 border-gold/25 bg-white p-10 lg:p-12"
            >
              <div
                className="pointer-events-none absolute -top-1/4 -left-1/4 h-2/3 w-2/3 rounded-full blur-[100px]"
                style={{ background: "radial-gradient(circle, rgba(212,168,71,0.06), transparent)" }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
                  Vision
                </p>
                <div className="mt-4 h-[2px] w-10 bg-gold" />
                <h2 className="mt-6 text-[26px] font-extrabold leading-snug text-forest sm:text-[32px]">
                  사람이 중심인 세상,
                  <br />
                  모두가 존엄한 삶
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                  경제적 소외와 불평등이 없는 세상을 꿈꿉니다. 모든 사람이
                  자신의 가능성을 실현하고, 지역사회와 함께 성장하는
                  미래를 만들어갑니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Theory of Change — dark ── */}
      <section className="section-dark grain relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-1/4 right-0 h-[60%] w-[35%] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            Theory of Change
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]"
          >
            변화의 논리
          </motion.h2>
          <motion.p
            {...fadeUp(0.18)}
            className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/50"
          >
            GNGIF의 사업은 명확한 변화 이론에 기반합니다.
            각 단계는 다음 단계의 토대가 되어 지속 가능한 임팩트로 이어집니다.
          </motion.p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {theoryOfChange.map(({ step, title, description }, i) => (
              <motion.div
                key={step}
                {...fadeUp(0.1 + i * 0.08)}
                className="relative"
              >
                {/* Connector arrow — desktop */}
                {i < theoryOfChange.length - 1 && (
                  <div className="absolute top-6 -right-3 z-10 hidden text-white/15 lg:block">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
                      <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]">
                  <span className="text-[48px] font-black leading-none tabular-nums text-white/10">
                    {step}
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold text-cream">{title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/45">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 핵심 가치 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            Core Values
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold tracking-tight text-forest sm:text-[44px]"
          >
            핵심 가치
          </motion.h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.1 + i * 0.08)}
                className="group rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-[17px] font-bold text-forest">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <div className="mt-6 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiTeamLine,
  RiGovernmentLine,
  RiBookOpenLine,
  RiHeartLine,
} from "react-icons/ri"
import { ProgramsHero } from "../_components/programs-hero"

const performanceStats = [
  { value: "621", unit: "개", label: "협동조합 네트워크" },
  { value: "32", unit: "%", label: "평균 소득 증가율" },
  { value: "18", unit: "개국", label: "협동조합 운영 국가" },
  { value: "15만+", unit: "", label: "수혜 조합원" },
] as const

const keyCountries = [
  { country: "캄보디아", flag: "🇰🇭", type: "농업·수산 협동조합", count: "87개", description: "쌀 농가와 어민 공동체를 중심으로 생산·유통 협동조합 운영" },
  { country: "에티오피아", flag: "🇪🇹", type: "농업·저축 협동조합", count: "124개", description: "커피·곡물 농가 협동조합과 지역사회 저축조합 연계 운영" },
  { country: "르완다", flag: "🇷🇼", type: "농업·수공예 협동조합", count: "68개", description: "여성 중심 수공예 협동조합과 농업 생산자 조합 지원" },
  { country: "베트남", flag: "🇻🇳", type: "소상공인 협동조합", count: "95개", description: "도시 소상공인과 농촌 여성 그룹의 경제 공동체 형성 지원" },
  { country: "볼리비아", flag: "🇧🇴", type: "광업·농업 협동조합", count: "43개", description: "원주민 공동체 중심 자원 관리 및 농업 협동조합 운영" },
  { country: "탄자니아", flag: "🇹🇿", type: "어업·농업 협동조합", count: "58개", description: "빅토리아호 어민 공동체와 마사이 농업 협동조합 지원" },
] as const

const operatingPrinciples = [
  { Icon: RiTeamLine, title: "자발적·개방적 가입", description: "모든 지역 주민이 자유롭게 가입하고 탈퇴할 수 있는 열린 조합 운영" },
  { Icon: RiGovernmentLine, title: "민주적 운영", description: "1인 1표 원칙으로 조합원 전원이 의사결정에 참여하는 민주적 구조" },
  { Icon: RiBookOpenLine, title: "교육과 역량 강화", description: "조합원 대상 재무·농업·리더십 교육을 통해 지속가능한 역량 내재화" },
  { Icon: RiHeartLine, title: "지역사회 기여", description: "협동조합 잉여 수익의 일부를 지역 교육·보건·인프라에 재투자" },
] as const

export default function CooperativesPage() {
  return (
    <>
      <ProgramsHero
        title="협동조합"
        description="621개 협동조합 네트워크를 통해 농민과 소상공인이 함께 소유하고 운영하는 경제 공동체를 만들어갑니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Cooperatives</motion.p>
              <motion.div {...fadeUp(0.08)} className="mt-5 h-[2px] w-12 bg-gold" />
              <motion.h2 {...fadeUp(0.12)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">
                함께 소유하고<br />함께 성장하는 조합
              </motion.h2>
              <motion.p {...fadeUp(0.2)} className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
                협동조합은 조합원이 직접 소유하고 민주적으로 운영하는 사업체입니다. GNGIF는 개발도상국 농촌 공동체가 협동조합을 설립하고 자립적으로 운영할 수 있도록 초기 설립부터 역량 강화까지 전 과정을 지원합니다.
              </motion.p>
              <motion.p {...fadeUp(0.26)} className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
                공동 구매·판매를 통한 협상력 강화, 공동 저축을 통한 금융 접근성 개선, 집단 학습을 통한 기술 전수까지 협동조합이 가진 집합적 힘을 현장에서 실현합니다.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {performanceStats.map(({ value, unit, label }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(0.1 + i * 0.08)}
                  className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5"
                >
                  <p className="text-[44px] font-black leading-none tabular-nums text-forest">
                    {value}<span className="ml-1 text-[16px] font-semibold text-muted-foreground">{unit}</span>
                  </p>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">{label}</p>
                  <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/40 transition-all duration-300 group-hover:w-full group-hover:bg-gold/60" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -top-[20%] -right-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Principles</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">운영 원칙</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {operatingPrinciples.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.1 + i * 0.08)}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-cream">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/45">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Key Countries</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">주요 사업국</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {keyCountries.map(({ country, flag, type, count, description }, i) => (
              <motion.div
                key={country}
                {...fadeUp(0.1 + i * 0.08)}
                className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{flag}</span>
                  <div>
                    <h3 className="text-[18px] font-bold text-forest">{country}</h3>
                    <p className="text-sm text-muted-foreground">{type}</p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-sm font-bold text-emerald">{count}</span>
                  <span className="text-xs text-muted-foreground">운영 중</span>
                </div>
                <div className="mt-4 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

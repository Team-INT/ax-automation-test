"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiBriefcaseLine,
  RiGroupLine,
  RiLeafLine,
  RiGraduationCapLine,
} from "react-icons/ri"
import { ProgramsHero } from "../_components/programs-hero"

const performanceStats = [
  { value: "13", unit: "개", label: "사회적기업" },
  { value: "2,400+", unit: "", label: "취약계층 고용 창출" },
  { value: "18", unit: "개국", label: "운영 국가" },
  { value: "12", unit: "년", label: "평균 운영 기간" },
] as const

const enterprises = [
  { name: "GNG 케어서비스", country: "캄보디아", flag: "🇰🇭", sector: "의료·헬스케어", employees: "320명", description: "농촌 지역 취약계층 대상 저비용 의료 서비스와 지역사회 보건 교육을 제공하는 사회적기업입니다." },
  { name: "GNG 그린팜", country: "에티오피아", flag: "🇪🇹", sector: "농업·식품가공", employees: "180명", description: "유기농 커피·곡물 가공과 공정무역 수출을 담당하며 소농 조합원의 안정적 소득을 보장합니다." },
  { name: "GNG 에코빌드", country: "르완다", flag: "🇷🇼", sector: "건축·인프라", employees: "210명", description: "저소득 공동체를 위한 저비용 친환경 주택 건축 및 지역 청년 건설 기술 훈련을 운영합니다." },
  { name: "GNG 클린워터", country: "케냐", flag: "🇰🇪", sector: "환경·수자원", employees: "95명", description: "농촌 지역 정수 시설 설치·운영과 위생 교육으로 깨끗한 식수 접근성을 높입니다." },
  { name: "GNG 텍스타일", country: "볼리비아", flag: "🇧🇴", sector: "섬유·패션", employees: "340명", description: "원주민 전통 직물 기술을 현대 패션과 결합해 글로벌 공정무역 시장에 진출한 사회적기업입니다." },
] as const

const impactAreas = [
  { Icon: RiBriefcaseLine, title: "고용 창출", description: "취약계층과 장애인, 경력 단절 여성 등 사회적 약자에게 안정적인 일자리를 제공합니다." },
  { Icon: RiGroupLine, title: "지역사회 서비스", description: "수익의 일부를 지역 교육·보건·인프라에 재투자하여 공동체 전체의 삶의 질을 높입니다." },
  { Icon: RiLeafLine, title: "환경 지속가능성", description: "친환경 생산 방식과 재생 가능 에너지 활용으로 탄소 발자국을 최소화합니다." },
  { Icon: RiGraduationCapLine, title: "역량 강화", description: "직업 훈련과 경영 교육으로 직원들이 더 나은 미래를 설계할 수 있도록 지원합니다." },
] as const

export default function SocialEnterprisePage() {
  return (
    <>
      <ProgramsHero
        title="사회적기업"
        description="13개 사회적기업을 통해 취약계층 고용 창출과 지역사회 서비스를 동시에 실현합니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Social Enterprise</motion.p>
              <motion.div {...fadeUp(0.08)} className="mt-5 h-[2px] w-12 bg-gold" />
              <motion.h2 {...fadeUp(0.12)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">
                이윤과 사회적<br />가치를 동시에
              </motion.h2>
              <motion.p {...fadeUp(0.2)} className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
                GNGIF의 사회적기업은 단순히 취약계층을 돕는 것을 넘어, 지속가능한 사업 모델을 통해 스스로 자립하는 조직입니다. 시장 경쟁력을 갖추면서도 사회적 가치를 핵심 목표로 추구합니다.
              </motion.p>
              <motion.p {...fadeUp(0.26)} className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
                18개국에서 13개 사회적기업이 운영되며, 2,400명 이상의 취약계층에게 안정적인 일자리와 성장 기회를 제공합니다.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {performanceStats.map(({ value, unit, label }, i) => (
                <motion.div key={label} {...fadeUp(0.1 + i * 0.08)} className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
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
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Impact Areas</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">임팩트 영역</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map(({ Icon, title, description }, i) => (
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
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Our Enterprises</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">주요 사회적기업</motion.h2>
          <div className="mt-14 space-y-5">
            {enterprises.map(({ name, country, flag, sector, employees, description }, i) => (
              <motion.div key={name} {...fadeUp(0.1 + i * 0.07)} className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap">
                  <div className="text-4xl">{flag}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold text-forest">{name}</h3>
                      <span className="rounded-full bg-emerald/10 px-3 py-0.5 text-xs font-semibold text-emerald">{country}</span>
                      <span className="rounded-full bg-gold/10 px-3 py-0.5 text-xs font-semibold text-gold">{sector}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">임직원 {employees}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

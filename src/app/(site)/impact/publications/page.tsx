"use client"

import { motion } from "framer-motion"
import { fadeUp, reportGrid, reportItem, researchList, researchItem } from "@/lib/animations"
import { RiDownload2Line, RiExternalLinkLine, RiFileTextLine, RiBookLine, RiMapLine, RiFilePaper2Line } from "react-icons/ri"
import { ImpactHero } from "../_components/impact-hero"

const annualReports = [
  { year: "2024", title: "GNGIF 2024 연간 임팩트 리포트", pages: "84p", size: "12.4MB", highlight: "50만 수혜자 달성 기념호" },
  { year: "2023", title: "GNGIF 2023 연간 임팩트 리포트", pages: "76p", size: "10.8MB", highlight: "협동조합 600개 돌파" },
  { year: "2022", title: "GNGIF 2022 연간 임팩트 리포트", pages: "68p", size: "9.2MB", highlight: "소셜비즈니스 브랜드 확장" },
  { year: "2021", title: "GNGIF 2021 연간 임팩트 리포트", pages: "62p", size: "8.7MB", highlight: "팬데믹 대응 특별 편" },
] as const

const researchReports = [
  { title: "협동조합과 농촌 소득 증가: 아시아 6개국 분석", year: "2024", type: "연구 보고서", description: "아시아 6개국 협동조합 조합원 4,200명 대상 소득 변화 패널 연구 결과입니다." },
  { title: "소액금융 그룹 상호보증 모델 효과성 연구", year: "2023", type: "연구 보고서", description: "5개국 MFI 운영 데이터를 바탕으로 그룹 대출 모델의 상환율과 소득 변화를 분석합니다." },
  { title: "공정무역이 생산자 소득에 미치는 영향", year: "2023", type: "연구 보고서", description: "더네이버스커피·메리쿱 공급망 생산자 1,800명 대상 소득 프리미엄 효과를 추적합니다." },
  { title: "사회적기업 고용 창출 임팩트 측정", year: "2022", type: "연구 보고서", description: "SROI(사회적 투자 수익률) 방법론으로 사회적기업 13개의 사회적 가치를 측정합니다." },
] as const

const fieldGuidesData = [
  { title: "협동조합 설립 실무 가이드", language: "한국어/영어/캄보디아어", pages: "48p", Icon: RiFileTextLine },
  { title: "소액금융 그룹 운영 매뉴얼", language: "한국어/영어/암하라어", pages: "36p", Icon: RiBookLine },
  { title: "사회적기업 성과 측정 프레임워크", language: "한국어/영어", pages: "52p", Icon: RiMapLine },
  { title: "공정무역 인증 신청 가이드", language: "한국어/영어/스페인어", pages: "28p", Icon: RiFilePaper2Line },
] as const

export default function PublicationsPage() {
  return (
    <>
      <ImpactHero
        title="발간물"
        description="연간 임팩트 리포트, 연구 보고서, 현장 가이드로 GNGIF의 활동 성과를 투명하게 공개합니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Annual Reports</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">연간 임팩트 리포트</motion.h2>
          <motion.div
            variants={reportGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-4 sm:grid-cols-2"
          >
            {annualReports.map(({ year, title, pages, size, highlight }) => (
              <motion.div key={year} variants={reportItem} className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[48px] font-black leading-none tabular-nums text-forest/15">{year}</span>
                    <h3 className="mt-2 text-[16px] font-bold text-forest">{title}</h3>
                    <p className="mt-1 text-sm font-semibold text-gold">{highlight}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{pages} · {size}</p>
                  </div>
                  <button className="flex-shrink-0 rounded-xl border border-border/60 bg-cream p-3 text-forest transition-all duration-200 hover:bg-forest hover:border-forest hover:text-white">
                    <RiDownload2Line className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Research</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">연구 보고서</motion.h2>
          <motion.div
            variants={researchList}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 space-y-5"
          >
            {researchReports.map(({ title, year, type, description }) => (
              <motion.div key={title} variants={researchItem} className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-gold/20 px-3 py-0.5 text-xs font-semibold text-gold">{type}</span>
                      <span className="text-xs text-white/40">{year}</span>
                    </div>
                    <h3 className="mt-3 text-[17px] font-bold text-cream">{title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/45">{description}</p>
                  </div>
                  <button className="flex-shrink-0 rounded-xl border border-white/20 bg-white/5 p-3 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/40">
                    <RiExternalLinkLine className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Field Guides</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">현장 가이드</motion.h2>
          <motion.div
            variants={reportGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-4 sm:grid-cols-2"
          >
            {fieldGuidesData.map(({ title, language, pages, Icon }) => (
              <motion.div key={title} variants={reportItem} className="group flex items-center gap-5 rounded-2xl border border-border/50 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-bold text-forest">{title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{language} · {pages}</p>
                </div>
                <button className="flex-shrink-0 rounded-xl border border-border/60 p-2.5 text-forest transition-all duration-200 hover:bg-forest hover:border-forest hover:text-white">
                  <RiDownload2Line className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

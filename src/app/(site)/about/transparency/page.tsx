"use client"

import { motion } from "framer-motion"
import {
  RiFileChartLine,
  RiDownload2Line,
  RiCheckboxCircleLine,
  RiQuestionLine,
  RiArrowDownSLine,
} from "react-icons/ri"
import { useState } from "react"
import { AboutHero } from "../_components/about-hero"

const financeSummary = [
  { label: "총 수입", value: "32억원", change: "+8.2%", positive: true },
  { label: "사업비 비율", value: "82%", change: "+3.1%p", positive: true },
  { label: "일반관리비 비율", value: "18%", change: "-3.1%p", positive: true },
  { label: "후원자 수", value: "4,820명", change: "+12.3%", positive: true },
] as const

const annualReports = [
  { year: "2023", pages: "48p", size: "12.4 MB", isLatest: true },
  { year: "2022", pages: "44p", size: "10.8 MB", isLatest: false },
  { year: "2021", pages: "40p", size: "9.2 MB", isLatest: false },
  { year: "2020", pages: "36p", size: "8.5 MB", isLatest: false },
] as const

const auditReports = [
  { year: "2023", auditor: "삼일회계법인", opinion: "적정" },
  { year: "2022", auditor: "삼일회계법인", opinion: "적정" },
  { year: "2021", auditor: "한영회계법인", opinion: "적정" },
] as const

const faqs = [
  {
    q: "후원금은 어디에 사용되나요?",
    a: "후원금의 82%는 직접 사업비(현지 협동조합 지원, 소액금융, 사회적기업 육성)에 사용됩니다. 나머지 18%는 사업 운영과 투명한 보고를 위한 일반관리비입니다.",
  },
  {
    q: "재무 정보는 어디서 확인할 수 있나요?",
    a: "매년 발행되는 감사보고서와 연간보고서에서 상세한 재무 정보를 확인하실 수 있습니다. 국세청 공시시스템(hometax.go.kr)에도 매년 결산 내역이 공시됩니다.",
  },
  {
    q: "후원금 사용 내역을 확인할 수 있나요?",
    a: "정기 후원자분들께는 분기별로 사업 활동 및 재무 현황 보고서를 이메일로 발송해 드립니다. 연간보고서에는 주요 사업 성과와 예산 집행 내역이 포함됩니다.",
  },
  {
    q: "외부 감사는 어떻게 진행되나요?",
    a: "매년 공인회계법인의 독립적인 외부 감사를 받으며, 감사 의견이 포함된 감사보고서를 공개합니다. 이사회 감사위원회도 분기별로 내부 감사를 수행합니다.",
  },
] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
      >
        <div className="flex items-start gap-3">
          <RiQuestionLine className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <span className="text-[16px] font-semibold text-forest">{q}</span>
        </div>
        <RiArrowDownSLine
          className={[
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>
      <div
        className={[
          "overflow-hidden transition-all duration-300",
          open ? "max-h-48 pb-6" : "max-h-0",
        ].join(" ")}
      >
        <p className="pl-8 text-[15px] leading-relaxed text-muted-foreground">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function TransparencyPage() {
  return (
    <>
      <AboutHero
        label="투명경영"
        title="투명하게, 책임 있게"
        description="GNGIF는 후원자와 파트너의 신뢰를 바탕으로 운영됩니다. 모든 재무·사업 결과를 투명하게 공개합니다."
      />

      {/* ── 재무 현황 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            Finance Summary 2023
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]"
          >
            재무 현황
          </motion.h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {financeSummary.map(({ label, value, change, positive }, i) => (
              <motion.div
                key={label}
                {...fadeUp(0.1 + i * 0.08)}
                className="group rounded-2xl border border-border/50 bg-white p-7"
              >
                <p className="text-[13px] font-medium text-muted-foreground">{label}</p>
                <p className="mt-3 text-[36px] font-black leading-none tabular-nums text-forest">
                  {value}
                </p>
                <p className={[
                  "mt-3 text-[13px] font-semibold",
                  positive ? "text-emerald" : "text-destructive",
                ].join(" ")}>
                  전년 대비 {change}
                </p>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 연간보고서 — dark ── */}
      <section className="section-dark grain relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-[20%] -right-[10%] h-[55%] w-[40%] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="flex items-end justify-between gap-4">
            <div>
              <motion.p
                {...fadeUp(0)}
                className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
              >
                Annual Reports
              </motion.p>
              <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
              <motion.h2
                {...fadeUp(0.1)}
                className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]"
              >
                연간보고서
              </motion.h2>
            </div>
            <motion.div {...fadeUp(0.1)}>
              <RiFileChartLine className="h-12 w-12 text-white/10" aria-hidden="true" />
            </motion.div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {annualReports.map(({ year, pages, size, isLatest }, i) => (
              <motion.div
                key={year}
                {...fadeUp(0.1 + i * 0.08)}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.08]"
              >
                {isLatest && (
                  <span className="absolute top-4 right-4 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold text-gold-foreground">
                    최신
                  </span>
                )}
                {/* Year display */}
                <div className="flex h-28 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                  <span className="text-[36px] font-black tabular-nums text-white/20">
                    {year}
                  </span>
                </div>

                <div className="mt-5 flex-1">
                  <p className="font-bold text-cream">{year} 연간보고서</p>
                  <p className="mt-1 text-[12px] text-white/35">{pages} · {size}</p>
                </div>

                <button
                  type="button"
                  className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-gold transition-all duration-300 group-hover:gap-3"
                >
                  <RiDownload2Line className="h-4 w-4" />
                  PDF 다운로드
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 감사보고서 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            Audit Reports
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold tracking-tight text-forest sm:text-[44px]"
          >
            감사보고서
          </motion.h2>

          <motion.div
            {...fadeUp(0.18)}
            className="mt-10 overflow-hidden rounded-2xl border border-border/50 bg-white"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-forest">연도</th>
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-forest">보고서</th>
                  <th className="hidden px-6 py-4 text-left text-[13px] font-semibold text-forest sm:table-cell">감사법인</th>
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-forest">감사의견</th>
                  <th className="px-6 py-4 text-right text-[13px] font-semibold text-forest">다운로드</th>
                </tr>
              </thead>
              <tbody>
                {auditReports.map(({ year, auditor, opinion }) => (
                  <tr
                    key={year}
                    className="border-b border-border/30 last:border-0 transition-colors hover:bg-muted/20"
                  >
                    <td className="px-6 py-5 text-[14px] font-bold text-forest">{year}</td>
                    <td className="px-6 py-5 text-[14px] text-muted-foreground">{year} 감사보고서</td>
                    <td className="hidden px-6 py-5 text-[14px] text-muted-foreground sm:table-cell">{auditor}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald/10 px-3 py-1 text-[12px] font-semibold text-emerald">
                        <RiCheckboxCircleLine className="h-3.5 w-3.5" />
                        {opinion}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-emerald hover:text-forest transition-colors"
                      >
                        <RiDownload2Line className="h-4 w-4" />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border/40 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            FAQ
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold tracking-tight text-forest sm:text-[44px]"
          >
            자주 묻는 질문
          </motion.h2>

          <motion.div
            {...fadeUp(0.18)}
            className="mt-12 max-w-3xl divide-y divide-border/50 rounded-2xl border border-border/50 bg-white px-8"
          >
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

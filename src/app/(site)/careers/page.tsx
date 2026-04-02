"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiMapPinLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCheckLine,
  RiBriefcaseLine,
} from "react-icons/ri"
import { CareersHero } from "./_components/careers-hero"

type EmploymentType = "정규직" | "계약직" | "인턴"
type JobStatus = "open" | "closed"

interface JobPosting {
  id: string
  position: string
  team: string
  employmentType: EmploymentType
  location: string
  deadline: string
  status: JobStatus
  description: string
}

const jobPostings: JobPosting[] = [
  {
    id: "job-001",
    position: "사업개발 담당자",
    team: "해외사업팀",
    employmentType: "정규직",
    location: "서울 영등포구",
    deadline: "2026-04-30",
    status: "open",
    description:
      "아시아·아프리카 현지 파트너와의 협력 사업을 기획하고 관리하는 역할입니다. 현장 출장 및 파트너 커뮤니케이션 경험이 있는 분을 우대합니다.",
  },
  {
    id: "job-002",
    position: "디지털 마케팅 매니저",
    team: "커뮤니케이션팀",
    employmentType: "정규직",
    location: "서울 영등포구",
    deadline: "2026-04-25",
    status: "open",
    description:
      "재단의 소셜미디어, 콘텐츠 마케팅, 뉴스레터 운영을 담당합니다. SEO·SEM 경험 및 데이터 기반 마케팅 역량을 보유한 분을 환영합니다.",
  },
  {
    id: "job-003",
    position: "회계 담당자",
    team: "경영지원팀",
    employmentType: "정규직",
    location: "서울 영등포구",
    deadline: "2026-05-15",
    status: "open",
    description:
      "재단의 국내외 회계·세무 업무와 재무보고를 담당합니다. 비영리법인 회계 경험자 또는 공인회계사 우대.",
  },
  {
    id: "job-004",
    position: "글로벌 파트너십 인턴",
    team: "해외사업팀",
    employmentType: "인턴",
    location: "서울 영등포구",
    deadline: "2026-04-15",
    status: "open",
    description:
      "해외 파트너십 자료 조사, 미팅 지원, 보고서 작성 등을 보조하는 인턴십입니다. 영어 비즈니스 커뮤니케이션 가능자 필수.",
  },
  {
    id: "job-005",
    position: "소셜비즈니스 운영 매니저",
    team: "소셜비즈니스팀",
    employmentType: "계약직",
    location: "서울 영등포구",
    deadline: "2026-03-31",
    status: "closed",
    description:
      "더네이버스커피·메리쿱 브랜드 운영 전반을 지원합니다. 온라인 커머스 또는 F&B 운영 경험자 우대.",
  },
  {
    id: "job-006",
    position: "임팩트 측정·평가(M&E) 담당자",
    team: "임팩트팀",
    employmentType: "정규직",
    location: "서울 영등포구",
    deadline: "2026-03-20",
    status: "closed",
    description:
      "사업별 성과 지표 설계, 데이터 수집·분석, 연간보고서 작성을 담당합니다. 국제개발 M&E 경험자 우대.",
  },
]

const processSteps = [
  { step: 1, label: "서류 접수", detail: "이메일 또는 온라인 폼" },
  { step: 2, label: "1차 면접", detail: "팀장급 역량 면접" },
  { step: 3, label: "2차 면접", detail: "임원진 심층 면접" },
  { step: 4, label: "최종 합격", detail: "처우 협의 후 확정" },
]

const employmentTypeBadgeStyle: Record<EmploymentType, string> = {
  정규직: "bg-forest/10 text-forest",
  계약직: "bg-amber-100 text-amber-800",
  인턴: "bg-emerald/10 text-emerald",
}

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState<"open" | "closed" | "all">("open")

  const filteredJobs =
    activeFilter === "all"
      ? jobPostings
      : jobPostings.filter((job) => job.status === activeFilter)

  return (
    <>
      <CareersHero
        title="채용"
        description="세상을 바꾸는 일에 함께할 사람을 찾습니다."
      />

      {/* ── 채용 공고 리스트 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            Open Positions
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]"
          >
            채용 공고
          </motion.h2>
          <motion.p
            {...fadeUp(0.18)}
            className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted-foreground"
          >
            GNGIF와 함께 26개국의 변화를 만들어갈 분을 모십니다.
            현장 중심, 투명성, 협력의 가치를 함께 실천할 동료를 기다립니다.
          </motion.p>

          {/* Filter tabs */}
          <motion.div {...fadeUp(0.22)} className="mt-10 flex gap-2">
            {(
              [
                { key: "open", label: "진행 중" },
                { key: "closed", label: "마감" },
                { key: "all", label: "전체" },
              ] as const
            ).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                  activeFilter === key
                    ? "bg-forest text-white shadow-sm"
                    : "bg-white text-muted-foreground border border-border/60 hover:border-forest/30 hover:text-forest",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Job cards */}
          <div className="mt-10 space-y-4">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                {...fadeUp(0.05 + i * 0.06)}
                className={[
                  "group rounded-2xl border bg-white p-7 transition-all duration-300",
                  job.status === "open"
                    ? "border-border/50 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5"
                    : "border-border/30 opacity-60",
                ].join(" ")}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold text-forest">
                        {job.position}
                      </h3>
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide",
                          employmentTypeBadgeStyle[job.employmentType],
                        ].join(" ")}
                      >
                        {job.employmentType}
                      </span>
                      {job.status === "closed" && (
                        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-bold text-muted-foreground">
                          마감
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-emerald">{job.team}</p>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-[13px] text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <RiMapPinLine className="h-4 w-4 shrink-0 text-emerald" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <RiTimeLine className="h-4 w-4 shrink-0 text-emerald" />
                        마감일: {job.deadline}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <RiBriefcaseLine className="h-4 w-4 shrink-0 text-emerald" />
                        {job.employmentType}
                      </span>
                    </div>
                  </div>
                  {job.status === "open" && (
                    <div className="shrink-0">
                      <a
                        href={`mailto:gngif@goodneighbors.org?subject=[지원] ${job.position} (${job.team})`}
                        className="inline-flex items-center gap-2 rounded-xl bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald hover:shadow-md"
                      >
                        지원하기
                        <RiArrowRightLine className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl border border-dashed border-border/60 bg-white py-20 text-center"
              >
                <p className="text-[15px] text-muted-foreground">
                  현재 해당 조건의 공고가 없습니다.
                </p>
              </motion.div>
            )}
          </div>

          <motion.p {...fadeUp(0.2)} className="mt-8 text-[13px] text-muted-foreground">
            지원 문의:{" "}
            <a
              href="mailto:gngif@goodneighbors.org"
              className="font-medium text-emerald underline-offset-2 hover:underline"
            >
              gngif@goodneighbors.org
            </a>
          </motion.p>
        </div>
      </section>

      {/* ── 지원 프로세스 ── */}
      <section className="section-dark grain relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-[20%] -left-[10%] h-[55%] w-[40%] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase"
          >
            Hiring Process
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]"
          >
            지원 프로세스
          </motion.h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ step, label, detail }, i) => (
              <motion.div key={step} {...fadeUp(0.1 + i * 0.08)} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="absolute top-6 -right-3 z-10 hidden text-white/15 lg:block">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
                      <path
                        d="M0 6h16M11 1l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-sm font-black text-gold">
                    {step}
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold text-cream">{label}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/45">{detail}</p>
                  <div className="mt-5 flex h-5 w-5 items-center justify-center rounded-full bg-gold/20">
                    <RiCheckLine className="h-3 w-3 text-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="mt-16">
            <Link
              href="/careers/culture"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              조직 문화 알아보기
              <RiArrowRightLine className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiMapPin2Line,
  RiLightbulbFlashLine,
  RiTeamLine,
  RiLeafLine,
  RiArrowRightLine,
  RiDoubleQuotesL,
  RiCalendarLine,
  RiHeartPulseLine,
  RiGlobalLine,
  RiBookOpenLine,
  RiTimerLine,
  RiShieldCheckLine,
} from "react-icons/ri"
import { CareersHero } from "../_components/careers-hero"

const coreValues = [
  {
    Icon: RiMapPin2Line,
    title: "현장 중심",
    description:
      "모든 의사결정의 출발점은 현장입니다. 26개국 파트너와의 직접 소통을 통해 실질적인 변화를 만듭니다.",
  },
  {
    Icon: RiShieldCheckLine,
    title: "투명성",
    description:
      "성과와 실패 모두 공개적으로 공유합니다. 구성원 간 신뢰는 정보의 투명한 흐름에서 시작됩니다.",
  },
  {
    Icon: RiTeamLine,
    title: "협력",
    description:
      "팀, 부서, 국가를 넘어 협력합니다. 각자의 전문성이 모일 때 더 큰 임팩트가 만들어집니다.",
  },
  {
    Icon: RiLeafLine,
    title: "지속가능성",
    description:
      "단기 성과보다 장기적인 변화를 추구합니다. 사람과 지구 모두를 위한 지속 가능한 방식을 고민합니다.",
  },
] as const

const benefits = [
  { Icon: RiTimerLine, title: "유연근무제", description: "자율출퇴근 및 재택근무 지원으로 삶과 일의 균형을 돕습니다." },
  { Icon: RiGlobalLine, title: "해외 현장 방문", description: "사업국 현장 방문 기회를 통해 글로벌 시야를 넓힐 수 있습니다." },
  { Icon: RiBookOpenLine, title: "역량 개발 지원", description: "도서 구입비, 외부 교육 수강, 자격증 취득 비용을 지원합니다." },
  { Icon: RiHeartPulseLine, title: "건강검진", description: "연 1회 종합건강검진을 지원하며 임직원 건강을 최우선으로 생각합니다." },
  { Icon: RiCalendarLine, title: "리프레시 휴가", description: "근속 3년마다 추가 유급휴가를 부여하여 재충전을 돕습니다." },
  { Icon: RiLightbulbFlashLine, title: "임팩트 프로젝트", description: "개인 관심 분야와 연계된 사내 임팩트 프로젝트 참여 기회를 제공합니다." },
] as const

const interviews = [
  {
    quote:
      "입사 전에는 NGO라서 업무가 정적일 줄 알았는데, 실제로는 다양한 국가의 파트너들과 협업하면서 매주 새로운 도전이 생깁니다. 내 일이 현장의 변화와 직결된다는 게 가장 큰 동력이에요.",
    name: "김지수",
    team: "해외사업팀",
    tenure: "재직 3년차",
  },
  {
    quote:
      "재단에서는 아이디어를 내면 실제로 실행해볼 수 있는 문화가 있어요. 마케팅팀에서 시작한 수혜자 스토리 캠페인이 후원 문의로 이어졌을 때 정말 보람을 느꼈습니다.",
    name: "박민준",
    team: "커뮤니케이션팀",
    tenure: "재직 2년차",
  },
  {
    quote:
      "숫자로 사회 변화를 증명하는 일이 도전적이면서도 의미 있습니다. 협동조합 조합원 수가 매년 늘어나는 걸 데이터로 확인할 때마다 이 일을 계속해야겠다는 확신이 생겨요.",
    name: "이수현",
    team: "임팩트팀",
    tenure: "재직 4년차",
  },
] as const

export default function CulturePage() {
  return (
    <>
      <CareersHero
        label="조직 문화"
        title="글로벌 임팩트를 만드는 팀"
        description="우리는 현장의 변화를 믿는 사람들이 모인 팀입니다. 함께 성장하고, 함께 임팩트를 만듭니다."
      />

      {/* ── 핵심 가치 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
            Core Values
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">
            우리가 일하는 방식
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
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-6 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 복리후생 — dark ── */}
      <section className="section-dark grain relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-[20%] -right-[10%] h-[55%] w-[40%] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
            Benefits
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">
            복리후생
          </motion.h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.1 + i * 0.06)}
                className="flex gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07]"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-cream">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/50">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 팀원 인터뷰 ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
            Team Voices
          </motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">
            팀원들의 이야기
          </motion.h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interviews.map(({ quote, name, team, tenure }, i) => (
              <motion.div
                key={name}
                {...fadeUp(0.1 + i * 0.1)}
                className="flex flex-col gap-6 rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-xl hover:shadow-forest/5"
              >
                <RiDoubleQuotesL className="h-8 w-8 text-gold/60" />
                <p className="flex-1 text-[15px] leading-relaxed text-muted-foreground">{quote}</p>
                <div className="flex items-center gap-3 border-t border-border/40 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-sm font-bold text-forest">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-forest">{name}</p>
                    <p className="text-[12px] text-muted-foreground">{team} · {tenure}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-dark grain relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="h-[60%] w-[50%] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(212,168,71,0.06), transparent)" }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
            Join Us
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">
            세상을 바꾸는 일,<br />함께하지 않겠습니까?
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-white/50">
            현재 모집 중인 포지션을 확인하고 GNGIF의 글로벌 임팩트 여정에 합류하세요.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-10 flex justify-center">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-forest transition-all duration-200 hover:shadow-lg"
            >
              채용 공고 보기
              <RiArrowRightLine className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

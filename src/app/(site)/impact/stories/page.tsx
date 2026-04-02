"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { ImpactHero } from "../_components/impact-hero"

const stories = [
  {
    name: "소피아 만다우에",
    country: "캄보디아",
    flag: "🇰🇭",
    program: "소액금융(MFI)",
    quote: "처음 대출을 받았을 때 $300이었어요. 그 돈으로 작은 재봉틀을 샀고 지금은 마을에서 가장 큰 봉제 작업장을 운영합니다.",
    before: "하루 $2 미만 수입의 소작농",
    after: "8명 고용 봉제 사업주",
    income: "월 소득 12배 증가",
    year: "2019",
    dir: -1,
  },
  {
    name: "아베베 게르마",
    country: "에티오피아",
    flag: "🇪🇹",
    program: "협동조합",
    quote: "협동조합에 가입하기 전에는 중간 상인에게 커피를 헐값에 팔았습니다. 이제 우리가 직접 가격을 정하고 공정한 대우를 받습니다.",
    before: "중간 상인 의존 소농",
    after: "협동조합 이사회 위원",
    income: "소득 45% 증가",
    year: "2020",
    dir: 1,
  },
  {
    name: "마리아 추마세로",
    country: "볼리비아",
    flag: "🇧🇴",
    program: "소셜비즈니스(메리쿱)",
    quote: "할머니에게 배운 전통 직조 기술이 이제 전 세계로 팔립니다. 우리 문화가 사라지지 않고 오히려 가치 있게 인정받는 게 자랑스럽습니다.",
    before: "전통 수공예 무직 여성",
    after: "메리쿱 소속 수석 장인",
    income: "안정적 월정 소득 확보",
    year: "2021",
    dir: -1,
  },
  {
    name: "실비아 나무게레",
    country: "르완다",
    flag: "🇷🇼",
    program: "사회적기업",
    quote: "GNG 에코빌드에서 건축 기술을 배웠습니다. 이제 저는 여성 건축 팀을 이끌고 마을에 안전한 집을 짓습니다.",
    before: "무직 싱글맘",
    after: "GNG 에코빌드 팀 리더",
    income: "가족 3명 부양 가능",
    year: "2022",
    dir: 1,
  },
  {
    name: "응우옌 티 홍",
    country: "베트남",
    flag: "🇻🇳",
    program: "협동조합",
    quote: "협동조합 덕분에 혼자서는 할 수 없던 대형 계약을 따냈습니다. 우리 마을 여성들이 이제 대등한 사업 파트너로 대우받습니다.",
    before: "영세 소상공인",
    after: "협동조합 여성 대표",
    income: "사업 규모 3배 성장",
    year: "2023",
    dir: -1,
  },
] as const

const programBadge: Record<string, string> = {
  "소액금융(MFI)": "bg-blue-50 text-blue-700",
  "협동조합": "bg-emerald/10 text-emerald",
  "소셜비즈니스(메리쿱)": "bg-purple-50 text-purple-700",
  "사회적기업": "bg-gold/10 text-gold",
}

export default function StoriesPage() {
  return (
    <>
      <ImpactHero
        title="수혜자 스토리"
        description="숫자 뒤에 있는 사람들. 그들의 목소리로 직접 듣는 변화의 이야기입니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Stories of Change</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">삶이 달라진 사람들</motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
            아시아, 아프리카, 중남미에서 들려오는 변화의 목소리입니다.
          </motion.p>

          <div className="mt-14 space-y-8">
            {stories.map(({ name, country, flag, program, quote, before, after, income, year, dir }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: dir * 40, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="group overflow-hidden rounded-3xl border border-border/50 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-xl hover:shadow-forest/5"
              >
                <div className="grid lg:grid-cols-[1fr_260px]">
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-3xl">{flag}</span>
                      <div>
                        <h3 className="text-[20px] font-bold text-forest">{name}</h3>
                        <p className="text-sm text-muted-foreground">{country} · {year}</p>
                      </div>
                      <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${programBadge[program] ?? "bg-forest/10 text-forest"}`}>{program}</span>
                    </div>
                    <blockquote className="mt-6 border-l-4 border-gold pl-5 text-[17px] italic leading-relaxed text-forest/80">
                      "{quote}"
                    </blockquote>
                  </div>
                  <div className="border-t border-border/40 bg-cream/60 p-6 space-y-4 lg:border-t-0 lg:border-l">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">변화 전</p>
                      <p className="mt-1.5 text-sm font-medium text-forest">{before}</p>
                    </div>
                    <div className="h-px bg-border/40" />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">변화 후</p>
                      <p className="mt-1.5 text-sm font-medium text-forest">{after}</p>
                    </div>
                    <div className="h-px bg-border/40" />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">임팩트</p>
                      <p className="mt-1.5 text-sm font-bold text-emerald">{income}</p>
                    </div>
                  </div>
                </div>
                {/* Bottom gold bar animation on hover */}
                <div className="h-[2px] w-0 bg-gold/50 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

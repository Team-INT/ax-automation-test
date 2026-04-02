"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import {
  RiSearchLine,
  RiMapPinLine,
  RiBriefcaseLine,
  RiTeamLine,
} from "react-icons/ri"
import { SupportHero } from "../_components/support-hero"

const partnerCategories = [
  {
    type: "국제기구",
    partners: [
      { name: "UNDP", fullName: "유엔개발계획", focus: "지속가능발전 프레임워크 연계" },
      { name: "ILO", fullName: "국제노동기구", focus: "사회적기업 일자리 기준 협력" },
      { name: "FAO", fullName: "유엔식량농업기구", focus: "농업 협동조합 기술 지원" },
    ],
  },
  {
    type: "해외 NGO",
    partners: [
      { name: "Oxfam", fullName: "옥스팜 인터내셔널", focus: "공정무역 캠페인 공동 진행" },
      { name: "CARE", fullName: "케어 인터내셔널", focus: "여성 소액금융 프로그램 협력" },
      { name: "Grameen Foundation", fullName: "그라민 재단", focus: "MFI 운영 모델 기술 교류" },
    ],
  },
  {
    type: "해외 정부·기관",
    partners: [
      { name: "USAID", fullName: "미국 국제개발처", focus: "중남미 사업 공동 재원 조달" },
      { name: "KOICA", fullName: "한국 국제협력단", focus: "아시아·아프리카 협력 사업" },
      { name: "EU Development", fullName: "유럽연합 개발기금", focus: "농촌 개발 협력 프로젝트" },
    ],
  },
] as const

const collaborationAreas = [
  { Icon: RiSearchLine, title: "공동 연구", description: "사회적경제 임팩트 측정, 공정무역 효과성, 소액금융 모델 등 공동 연구 프로젝트를 운영합니다." },
  { Icon: RiMapPinLine, title: "현장 협력", description: "동일 지역에서 활동하는 파트너 기관과 현장 조율, 자원 공유, 수혜자 연계 협력을 진행합니다." },
  { Icon: RiBriefcaseLine, title: "재원 조달", description: "글로벌 공여 기관과 협력해 대형 개발 사업의 재원을 공동으로 조달하고 집행합니다." },
  { Icon: RiTeamLine, title: "역량 강화", description: "파트너 기관 직원 교육, 현장 방문 교류, 모범 사례 공유를 통해 상호 역량을 강화합니다." },
] as const

const contactInfo = [
  { region: "아시아", email: "asia@gngif.org", contact: "서울 본부 국제협력팀" },
  { region: "아프리카", email: "africa@gngif.org", contact: "에티오피아 아프리카 허브" },
  { region: "중남미", email: "latam@gngif.org", contact: "과테말라 중남미 허브" },
] as const

export default function GlobalPage() {
  return (
    <>
      <SupportHero
        title="해외 파트너"
        description="45개국 국제기구·NGO·정부 기관과 함께 국경을 넘는 사회적 임팩트를 만듭니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Global Partners</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">파트너 기관</motion.h2>
          <div className="mt-14 space-y-10">
            {partnerCategories.map(({ type, partners }, i) => (
              <motion.div key={type} {...fadeUp(0.1 + i * 0.1)}>
                <h3 className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase">{type}</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {partners.map(({ name, fullName, focus }) => (
                    <div key={name} className="group rounded-2xl border border-border/50 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest/5 text-sm font-black text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                          {name.slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-bold text-forest">{name}</p>
                          <p className="text-xs text-muted-foreground">{fullName}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{focus}</p>
                      <div className="mt-4 h-[2px] w-6 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Collaboration</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">협력 방식</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {collaborationAreas.map(({ Icon, title, description }, i) => (
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
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Contact</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">파트너십 문의</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {contactInfo.map(({ region, email, contact }, i) => (
              <motion.div key={region} {...fadeUp(0.1 + i * 0.1)} className="group rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-bold text-forest">{region}</span>
                <h3 className="mt-4 text-[17px] font-bold text-forest">{contact}</h3>
                <a href={`mailto:${email}`} className="mt-2 block text-sm text-emerald hover:underline">{email}</a>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

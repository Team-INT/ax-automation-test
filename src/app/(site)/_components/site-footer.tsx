import Link from "next/link"

const footerNav = [
  {
    title: "재단소개",
    links: [
      { label: "소개 · 연혁", href: "/about" },
      { label: "미션 · 비전", href: "/about/mission" },
      { label: "조직 · 거버넌스", href: "/about/organization" },
      { label: "투명경영", href: "/about/transparency" },
    ],
  },
  {
    title: "사업소개",
    links: [
      { label: "사업 개요", href: "/programs" },
      { label: "협동조합", href: "/programs/cooperative" },
      { label: "소액금융", href: "/programs/microfinance" },
      { label: "사회적기업", href: "/programs/social-enterprise" },
      { label: "소셜비즈니스", href: "/programs/social-business" },
    ],
  },
  {
    title: "임팩트",
    links: [
      { label: "임팩트 대시보드", href: "/impact" },
      { label: "글로벌 맵", href: "/impact/map" },
      { label: "스토리", href: "/impact/stories" },
      { label: "발간물", href: "/impact/publications" },
    ],
  },
  {
    title: "후원 · 파트너십",
    links: [
      { label: "기업 파트너십", href: "/support/corporate" },
      { label: "개인 후원", href: "/support/donate" },
      { label: "해외 파트너", href: "/support/global" },
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 lg:px-8">
        {/* Sitemap Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-[13px] font-semibold tracking-wide text-gold uppercase">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 border-t border-white/[0.08]" />

        {/* Bottom */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[15px] font-bold tracking-tight text-white/90">
              GNGIF
            </span>
            <p className="mt-3 max-w-sm text-[12px] leading-relaxed text-white/40">
              재단법인 굿네이버스 글로벌 임팩트
              <br />
              서울특별시 영등포구 여의대로 108
              <br />
              대표이사 양진옥 | 사업자등록번호 000-00-00000
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-5 text-[12px] text-white/40">
              <Link
                href="/terms"
                className="transition-colors hover:text-white/70"
              >
                이용약관
              </Link>
              <Link
                href="/privacy"
                className="transition-colors hover:text-white/70"
              >
                개인정보처리방침
              </Link>
            </div>
            <p className="text-[11px] text-white/25">
              &copy; 2026 Good Neighbors Global Impact Foundation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

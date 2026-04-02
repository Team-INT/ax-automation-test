import { HeroSection } from "./_components/hero-section"
import { ImpactNumbersSection } from "./_components/impact-numbers-section"
import { ChartsSection } from "./_components/charts-section"
import { ProgramsSection } from "./_components/programs-section"
import { GlobalMapSection } from "./_components/global-map-section"
import { StoriesSection } from "./_components/stories-section"
import { CtaSection } from "./_components/cta-section"
import { PartnersSection } from "./_components/partners-section"
import { NewsletterSection } from "./_components/newsletter-section"

export default function HomePage() {
  return (
    <>
      {/* 1. 히어로 — 패럴랙스 + 카운터 틱업 */}
      <HeroSection />
      {/* 2. 임팩트 넘버스 — 카운터 애니메이션 + 미니 바차트 */}
      <ImpactNumbersSection />
      {/* 3. SVG 차트 — 연도별 성장, 지역별 분포 */}
      <ChartsSection />
      {/* 4. 수평 스크롤 사업영역 카드 */}
      <ProgramsSection />
      {/* 5. 글로벌 맵 — SVG 세계지도 + 펄싱 도트 */}
      <GlobalMapSection />
      {/* 6. 수혜자 스토리 — clip-path 리빌 */}
      <StoriesSection />
      {/* 7. 함께하기 3분화 CTA */}
      <CtaSection />
      {/* 파트너사 로고 + 인증 뱃지 */}
      <PartnersSection />
      {/* 뉴스레터 CTA */}
      <NewsletterSection />
    </>
  )
}

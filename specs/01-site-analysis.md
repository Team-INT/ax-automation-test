# AS-IS 사이트 분석 — gngif.org

> 분석일: 2026-02-12
> 대상: https://www.gngif.org (한국어/영문)

---

## 1. 기관 개요

| 항목 | 내용 |
|------|------|
| 기관명 | 재단법인 굿네이버스 글로벌 임팩트 |
| 영문명 | Good Neighbors Global Impact Foundation |
| 슬로건 | Empowering People, Transforming Community |
| 미션 | 굶주림 없는 세상, 더불어 사는 세상 — 사회적경제 생태계 구축 |
| 사업 규모 | 26개국, 협동조합 621개, 사회적기업 13개, 소액금융기관 5개 |
| 주소 | 서울시 영등포구 버드나루로 13 굿네이버스회관 8층 |
| 연락처 | 02-6733-2656 / gngif@goodneighbors.org |

---

## 2. 현재 사이트 기술 스택

| 항목 | 현재 |
|------|------|
| CMS | WordPress (커스텀 테마 `gngif`) |
| 다국어 | 한국어/영문 별도 페이지 구성 (slug 분리) |
| 반응형 | O (햄버거 메뉴) |
| 분석 | Google Analytics (G-SNQJF25FCS) + WebTrends |
| 뉴스레터 | Stibee 연동 |
| JS | jQuery 기반 |

---

## 3. 현재 사이트맵 (AS-IS)

### 한국어

```
메인 (/)
├── 재단소개
│   ├── 재단소개 (/intro)
│   ├── 미션·핵심가치 (/mission)
│   ├── 투명경영 (/archives/category/투명경영)
│   └── 조직도 (/organization)
├── 사업소개
│   ├── 사업 지역 (/사업-지역-new)
│   ├── 협동조합 (/cooperative)
│   ├── 소액금융 (/micromoney)
│   ├── 사회적기업 (/social)
│   └── 소셜비즈니스 (/socialbiz)
├── 소식
│   ├── 스토리 (/archives/category/스토리)
│   ├── 공지사항 (/archives/category/notice)
│   ├── 뉴스 (/archives/category/news)
│   └── 채용 (/archives/category/recruit)
├── 후원
│   └── 기업후원 (/corporate)
└── 기타
    ├── 이용약관 (/conditions)
    └── 개인정보처리방침 (/person)
```

### 영문

```
Main (/en/)
├── WHO WE ARE
│   ├── About Us (/about-us)
│   └── Mission & Core Value (/mission-core-value)
├── WHAT WE DO
│   ├── Business Country (/where-we-work-2)
│   ├── Cooperative (/cooperative-eng)
│   ├── Micro Financing (/micro-financing)
│   ├── Social Enterprise (/social-enterprise)
│   └── Social Business (/social-business)
└── NEWS & STORIES
    ├── News (/archives/category/news-en)
    └── Recruit (/archives/category/recruit-en)
```

---

## 4. 주요 콘텐츠 요약

### 4.1 핵심 사업 (4대 축)

| 사업 | 설명 | 핵심 키워드 |
|------|------|------------|
| **협동조합** | 주민 조직화, 소액대출·종자·비료·가축 지원, 기술교육 | 자립, 조직화, 621개 |
| **소액금융(MFI)** | 금융접근성 개선, 저금리 무보증·무담보, 26개국 운영 | 금융포용, 선순환, 2030년 28개국 |
| **사회적기업** | 농식품·에너지·사료·유통 등 10개 기업 운영 | AGrowth, Good Solar 등 |
| **소셜비즈니스** | 더네이버스커피 + 메리쿱 브랜드 운영 | 직거래 커피, 감성 가치소비 |

### 4.2 브랜드

| 브랜드 | 설명 | 채널 |
|--------|------|------|
| **더네이버스커피** | 르완다·과테말라 직거래 커피, 서울·서인천 카페 운영 | 오프라인 카페 |
| **메리쿱** | 개도국 소재 감성제품 (캐시미어, 주트백 등) 5개국+ | 스마트스토어 |

### 4.3 기업후원

6단계 후원 프로세스: 문의 → 제안 → 협의 → 협약 → 진행 → 보고
4가지 후원 방식: 임팩트 후원 / 글로벌 임팩트 투자 / 공익연계 마케팅 / 임직원 참여

### 4.4 조직 구조

이사회(이사장 + 이사 4명 + 감사 2명) → 사무국 → 5개 그룹 → 10개 파트

---

## 5. 현재 사이트 문제점

### 구조적 문제
- **한/영 비대칭**: 한국어 18페이지 vs 영문 9페이지, 후원 섹션 영문 없음
- **URL 비일관성**: 한글 slug(`/사업-지역-new`), 혼재된 네이밍 컨벤션
- **카테고리 아카이브 의존**: 소식 섹션이 WordPress archives에 종속
- **투명경영 콘텐츠 접근성**: 아카이브 카테고리로만 접근

### 디자인 문제
- **노후화된 UI**: 현대적 웹 트렌드와 괴리
- **제한적 인터랙션**: jQuery 기반 기본 스크롤 애니메이션만 적용
- **비주얼 스토리텔링 부족**: 26개국 사업의 임팩트를 시각적으로 전달하지 못함
- **브랜드 일관성**: 더네이버스커피, 메리쿱 등 서브 브랜드 비주얼 정체성 미약

### 콘텐츠 문제
- **성과 데이터 분산**: 각 페이지에 수치가 흩어져 있어 임팩트 체감 어려움
- **사례 스토리 부족**: 10개 사회적기업의 개별 스토리가 목록 수준
- **후원 전환 동선 취약**: 후원 메뉴가 단일 페이지, CTA 부족

### 기술 문제
- **WordPress 의존**: 커스텀 테마 유지보수 부담
- **성능**: jQuery 의존, 최적화 미비
- **SEO**: 한글 slug, 구조화 데이터 미적용

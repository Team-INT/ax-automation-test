# 디자인 워크플로우 완전 가이드

> 프로젝트 기획(Phase 0)부터 배포(Phase 4)까지의 전체 프로세스.
> 역할 분리 디자인 방법론을 포함한 End-to-End 워크플로우.

---

## 목차

1. [전체 흐름](#1-전체-흐름)
2. [Phase 0: 프로젝트 기획](#2-phase-0-프로젝트-기획)
3. [Phase 1: 카피](#3-phase-1-카피)
4. [Phase 2: 디자인](#4-phase-2-디자인)
5. [Phase 3: 구현](#5-phase-3-구현)
6. [Phase 4: 배포](#6-phase-4-배포)
7. [Quick Start (빠른 시작)](#7-quick-start-빠른-시작)
8. [치트시트](#8-치트시트)

---

## 1. 전체 흐름

```
Phase 0              Phase 1           Phase 2            Phase 3           Phase 4
프로젝트 기획    →    카피         →    디자인        →    구현         →    배포
━━━━━━━━━━━━━━━     ━━━━━━━━━━━━     ━━━━━━━━━━━━━     ━━━━━━━━━━━━━     ━━━━━━━━━
현행 분석             타겟 분석         히어로 톤 확정      디자인 시스템       커밋
IA 설계               5섹션 카피        섹션별 체이닝       카피 교체          푸시
벤치마크              카피 검증         디자인 스펙        반응형 구현         PR
페르소나                                                  코드 검증
요구사항
목표/KPI
디자인 컨셉

산출물:               산출물:           산출물:            산출물:
specs/{project}/     copy.md          design-spec.md     코드 + 페이지
01~06 + refs
```

---

## 2. Phase 0: 프로젝트 기획

> Phase 1(카피) 전에 프로젝트의 방향을 잡는 단계.
> 리서치가 탄탄할수록 카피와 디자인의 퀄리티가 올라간다.
> **빠르게 시작하고 싶다면 Phase 0을 건너뛰고 Phase 1부터 시작해도 된다.**

### Step 0-1. 현행 분석 (AS-IS)

기존 사이트가 있는 경우, 현재 상태를 분석한다.

**프롬프트 예시:**

```
현재 사이트의 기술 스택, 콘텐츠 구조, 문제점을 분석해줘.
URL: https://example.com

분석 항목:
- 기술 스택 (CMS, 프레임워크, 호스팅)
- 페이지 구조 및 네비게이션
- 콘텐츠 현황 (텍스트, 이미지, 영상)
- UX 문제점 (로딩 속도, 모바일 대응, 접근성)
- SEO 현황
```

**산출물:** `specs/{project}/01-site-analysis.md`

> 기존 사이트가 없으면 이 단계를 건너뛴다.

---

### Step 0-2. 정보 구조(IA) 설계

사이트의 메뉴 구조와 페이지 계층을 설계한다.

**프롬프트 예시:**

```
사이트의 정보 구조(IA)를 설계해줘.

서비스: {서비스명}
타겟: {1차 타겟}, {2차 타겟}
핵심 페이지: 메인, 서비스 소개, 고객 사례, 가격, 문의

포함 항목:
- GNB(글로벌 네비게이션) 메뉴 구조
- 페이지 계층도 (depth별)
- 사용자별 핵심 동선 (타겟 → 목표 페이지까지 클릭 수)
- 푸터 메뉴 구성
```

**산출물:** `specs/{project}/02-ia-proposal.md`

---

### Step 0-3. 벤치마크 분석

경쟁사/레퍼런스 사이트를 분석하고 디자인 패턴을 추출한다.

**프롬프트 예시:**

```
다음 경쟁사/레퍼런스 사이트를 분석하고 디자인 패턴을 추출해줘.

경쟁사:
1. https://competitor-a.com — 직접 경쟁
2. https://competitor-b.com — 간접 경쟁
3. https://reference-c.com — 디자인 레퍼런스

분석 항목:
- 히어로 섹션 전략 (메시지, 레이아웃, CTA)
- 컬러/타이포 톤
- 핵심 기능/차별화 포인트 표현 방식
- CTA 전략 (위치, 문구, 빈도)
- 강점과 약점
```

**산출물:** `specs/{project}/03-benchmark.md`

---

### Step 0-4. 페르소나 정의

타겟 고객을 구체적으로 정의한다.

**프롬프트 예시:**

```
타겟 고객 페르소나를 상세하게 정의해줘.

서비스: {서비스 설명}
1차 타겟: {예: 중소기업 마케팅 담당자}
2차 타겟: {예: 스타트업 대표}

각 페르소나에 포함:
- 이름, 나이, 직무, 회사 규모
- 목표 3가지
- 고충(pain points) 3-5가지 (구체적 수치 포함)
- 검색 키워드 5-10개
- 의사결정 기준
- 사용자 여정 (인지 → 관심 → 비교 → 결정)
```

**산출물:** `specs/{project}/04-personas.md`

---

### Step 0-5. 요구사항 정리

프로젝트의 기능/비기능 요구사항을 정리한다.

**프롬프트 예시:**

```
프로젝트 요구사항을 정리해줘.

기본 정보:
- 프로젝트명: {프로젝트명}
- 유형: {신규 제작 / 리뉴얼}
- 기한: {일정}

기능 요구사항:
- {필수 기능 목록}

기술 제약:
- 프레임워크: Next.js + Tailwind CSS
- 호스팅: {Vercel / AWS / etc.}
- 다국어: {필요 여부}

비기능 요구사항:
- 성능: Lighthouse 90+
- 접근성: WCAG 2.1 AA
- 반응형: Mobile-first
- SEO: 메타태그, 구조화 데이터
```

**산출물:** `specs/{project}/05-client-requirements.md`

---

### Step 0-6. 목표 수립 및 제안서

프로젝트 목표와 성공 지표(KPI)를 정의한다.

**프롬프트 예시:**

```
프로젝트 목표와 성공 지표(KPI)를 정의해줘.

서비스: {서비스명}
현재 상황: {현행 분석 요약}
기대 효과: {예: 전환율 향상, 브랜드 인지도 개선}

포함 항목:
- 프로젝트 비전 (한 문장)
- 전략적 목표 3가지
- 측정 가능한 KPI (수치 기준)
- 런칭 후 90일 성공 기준
```

**산출물:** `specs/{project}/06-renewal-proposal.md`

---

### Step 0-7. 디자인 컨셉 선정 (선택)

사이트 전체의 디자인 방향을 2-3가지 컨셉으로 제안받는다.

**프롬프트 예시:**

```
사이트 디자인 컨셉을 3가지 방향으로 제안해줘.

서비스: {서비스명}
타겟: {1차 페르소나}
톤 키워드: {신뢰, 전문적, 깔끔 / 따뜻한, 친근한 / 강렬한, 액션}

각 컨셉에 포함:
- 컨셉명 + 방향성 설명
- 키워드 5개
- 컬러 팔레트 (Primary, Secondary, Accent, Surface + Hex)
- 타이포그래피 (Heading + Body 폰트)
- 레이아웃 특성
- 인터랙션 방향
- 적합 상황
- 레퍼런스 사이트 2-3개
```

**산출물:** `specs/{project}/design-references.md`

---

## 3. Phase 1: 카피

> 역할 분리 방법론의 핵심. 카피가 흔들리면 디자인도 흔들린다.

### Step 1-1. 브랜치 생성

```
/enf:task "랜딩페이지 제작"
```

→ `feat/landing-page` 브랜치 자동 생성

---

### Step 1-2. 카피 작성

```
/enf:copy-write "서비스: {서비스 설명}, 타겟: {페르소나 요약}"
```

**Phase 0을 진행한 경우:**

```
/enf:copy-write "서비스: AI 광고 자동화 SaaS.
타겟: specs/{project}/04-personas.md 참조.
요구사항: specs/{project}/05-client-requirements.md 참조.
벤치마크: specs/{project}/03-benchmark.md 참조."
```

**Phase 0 없이 바로 시작하는 경우:**

```
/enf:copy-write "AI 광고 자동화 SaaS, 타겟: 중소기업 마케팅 팀장, 30대, 광고 세팅에 매주 8시간 소비"
```

**에이전트 수행 내용:**
1. 타겟 고객 분석 → 페르소나 JSON 생성
2. 5섹션 카피 작성 (Hero, Problem, Service, Testimonials, CTA)
3. 뻔한 표현을 구체적 숫자/상황으로 교체
4. 자체 검수

**산출물:** `copy.md`

---

### Step 1-3. 카피 검증 (Gate 1)

```
/enf:copy-review
```

**5가지 검증 항목:**

| # | 항목 | 기준 |
|---|------|------|
| 1 | 구체성 | 모든 섹션에 구체적 숫자 존재 |
| 2 | 완전성 | 5개 섹션 + 리서치 + 신뢰뱃지 |
| 3 | 페르소나 정합성 | pain_points ↔ Problem 1:1 매핑 |
| 4 | CTA 명확성 | 행동 동사 + 허들 낮추기 |
| 5 | 톤 일관성 | 문체 통일, 추상적 수식어 없음 |

**결과:**
- **PASS** → Phase 2 진행
- **PARTIAL** (1-2개 미흡) → 해당 항목 수정 후 재검증
- **FAIL** (3개+ 미흡) → Step 1-2 재실행

---

## 4. Phase 2: 디자인

> 카피를 기반으로 시각 디자인을 잡는 단계.
> Variant 또는 Figma를 활용한다.

### Step 2-1. 디자인 가이드 생성

```
/enf:design-guide
```

또는 톤을 지정하여:

```
/enf:design-guide --tone "강렬한, 다크, 프로페셔널"
```

또는 Figma URL을 전달하여:

```
/enf:design-guide --figma "https://figma.com/design/..."
```

**에이전트 수행 내용:**
1. `copy.md` 분석
2. 섹션별 Variant 작업 프롬프트 생성 (복사해서 바로 사용 가능)
3. 디자인 톤 방향 제안

---

### Step 2-2. 외부 도구에서 디자인 작업 (사용자)

에이전트가 생성한 프롬프트를 Variant에서 실행한다.

**순서:**

#### 1) 히어로 섹션 (톤 확정)

Variant에 히어로 프롬프트 붙여넣기 → 여러 변형 중 톤 선택

#### 2) 후속 섹션 (체이닝)

선택한 히어로 디자인에서:
1. **"New Chat from Design"** 클릭
2. `copy.md`의 해당 섹션 카피 **원문 붙여넣기** (필수!)
3. Problem → Service → Testimonials → CTA 순서로 반복

> **주의:** 카피를 붙여넣지 않으면 AI가 카피를 멋대로 만들어 디자인이 날아간다.

#### 3) 코드 내보내기

5개 섹션 모두 완료 후:
1. 각 섹션에서 **"Open in" → "Claude Code"** 선택
2. 생성된 코드 복사

---

### Step 2-3. 디자인 검증 (Gate 2 — 사용자 체크)

다음 항목을 직접 확인:

- [ ] **톤 일관성**: 히어로와 CTA를 나란히 놓았을 때 "같은 사이트"로 보이는가?
- [ ] **카피 무결성**: `copy.md` 원문이 그대로 사용되었는가?
- [ ] **섹션 완전성**: 5개 섹션 모두 디자인되었는가?
- [ ] **컬러/폰트 통일**: 전 섹션에서 동일한 팔레트/폰트 사용?

**결과:**
- 모두 통과 → Phase 3 진행
- 미흡 항목 존재 → 해당 섹션 Variant에서 재작업

---

## 5. Phase 3: 구현

> 디자인 코드 + 카피를 조합하여 실제 웹사이트를 구현한다.

### Step 3-1. 코드 구현

Variant에서 복사한 코드를 Claude Code에 붙여넣으며 실행:

```
/enf:design-implement

아래는 Variant에서 내보낸 5개 섹션 코드입니다:

[Hero 코드 붙여넣기]
[Problem 코드 붙여넣기]
[Service 코드 붙여넣기]
[Testimonials 코드 붙여넣기]
[CTA 코드 붙여넣기]
```

**에이전트 수행 내용:**
1. 디자인 코드에서 토큰 추출 → Tailwind `@theme` 적용
2. placeholder 텍스트를 `copy.md` 내용으로 교체
3. 브랜드 이미지/폰트/컬러 적용
4. Next.js + Tailwind CSS 반응형 구현
5. 인터랙션 구현 (스크롤 애니메이션, 호버, 캐러셀)

---

### Step 3-2. 구현 검증 (Gate 3)

```
/enf:code-review
/enf:type-check
/enf:perf-audit
```

| 항목 | 통과 기준 |
|------|----------|
| 카피 반영 | `copy.md` 텍스트 100% 일치 |
| 디자인 토큰 | `@theme` 변수 모두 적용 |
| 반응형 | 4단계 브레이크포인트 정상 |
| 성능 | Lighthouse Performance 90+ |
| 접근성 | Lighthouse Accessibility 90+ |
| 타입 | TypeScript 에러 0건 |

---

## 6. Phase 4: 배포

### Step 4-1. 커밋

```
/enf:commit
```

### Step 4-2. 푸시

```
/enf:push
```

### Step 4-3. PR 생성

```
/enf:pr
```

---

## 7. Quick Start (빠른 시작)

> Phase 0을 건너뛰고 바로 시작하는 최소 워크플로우.
> 10분 안에 랜딩페이지를 만들 수 있다.

```bash
# 1. 브랜치 생성
/enf:task "랜딩페이지"

# 2. 카피 작성 (Step 1)
/enf:copy-write "AI 광고 자동화 SaaS, 타겟: 중소기업 마케팅 팀장"

# 3. 카피 검증
/enf:copy-review

# 4. 디자인 가이드 생성 (Step 2)
/enf:design-guide --tone "강렬한, 다크"

# 5. Variant에서 디자인 작업 (사용자)
#    → 히어로 톤 확정 → 체이닝으로 5섹션 완성 → 코드 내보내기

# 6. 코드 구현 (Step 3)
/enf:design-implement
# (Variant 코드 붙여넣기)

# 7. 검증 & 배포
/enf:code-review
/enf:commit
/enf:push
/enf:pr
```

---

## 8. 치트시트

### 커맨드 요약

| Phase | 커맨드 | 역할 |
|:-----:|--------|------|
| 0 | (자유 프롬프트) | 기획 문서 생성 |
| 1 | `/enf:task` | 브랜치 생성 |
| 1 | `/enf:copy-write` | 타겟 분석 + 카피 작성 |
| 1 | `/enf:copy-review` | 카피 품질 검증 (Gate 1) |
| 2 | `/enf:design-guide` | 디자인 가이드 + 스펙 생성 |
| 3 | `/enf:design-implement` | 디자인 → 코드 구현 |
| 3 | `/enf:code-review` | 코드 품질 검사 |
| 3 | `/enf:type-check` | TypeScript 검증 |
| 3 | `/enf:perf-audit` | 성능 분석 |
| 4 | `/enf:commit` | 커밋 |
| 4 | `/enf:push` | 푸시 |
| 4 | `/enf:pr` | PR 생성 |

### 산출물 요약

| Phase | 산출물 | 위치 |
|:-----:|--------|------|
| 0 | 기획 문서 6종 + 디자인 컨셉 | `specs/{project}/` |
| 1 | 카피 문서 | `copy.md` (프로젝트 루트) |
| 2 | 디자인 스펙 | `design-spec.md` (프로젝트 루트) |
| 3 | 구현 코드 | `src/app/` |

### 에이전트 역할

| 에이전트 | Phase | 전문 영역 |
|---------|:-----:|----------|
| `@copy-strategist` | 1 | 메시지, 톤, 설득력 |
| `@design-director` | 2 | 시각, 레이아웃, 토큰 |
| `@dev-assistant` | 3 | 코드, 성능, 반응형 |

### 품질 게이트

| Gate | 위치 | 검증 방법 | 실패 시 |
|:----:|------|----------|--------|
| 1 | Phase 1→2 | `/enf:copy-review` | 카피 수정 후 재검증 |
| 2 | Phase 2→3 | 사용자 체크리스트 | Variant 재작업 |
| 3 | Phase 3→4 | `/enf:code-review` | 코드 수정 |

---

## 관련 문서

- [역할 분리 방법론 스펙](../specs/role-separation-methodology/README.md)
- [카피 템플릿](../specs/role-separation-methodology/copy-template.md)
- [디자인 스펙 템플릿](../specs/role-separation-methodology/design-spec-template.md)
- [품질 게이트 상세](../specs/role-separation-methodology/quality-gates.md)
- [Variant 워크플로우](../specs/role-separation-methodology/variant-workflow.md)
- [커맨드 레퍼런스](./COMMANDS-REFERENCE.md)
- [에이전트 매뉴얼](./AGENTS-MANUAL.md)

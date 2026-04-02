---
name: role-separation-workflow
description: 역할 분리 디자인 방법론 — 카피/디자인/구현 3단계 분리 워크플로우. 랜딩페이지, 사이트 메인, 마케팅 페이지 제작 시 자동 활성화.
tested-with:
  enf: "1.2.0"
  next: "16.x"
  react: "19.x"
  tailwind: "4.x"
  typescript: "5.x"
triggers:
  - 카피
  - copy
  - 역할 분리
  - role separation
  - 디자인 워크플로우
  - design workflow
  - Variant
  - 랜딩페이지
  - landing page
  - 랜딩 페이지
  - copy.md
  - design-spec
  - 카피라이팅
  - copywriting
  - 사이트 제작
  - 웹사이트 제작
  - 마케팅 페이지
---

# Role Separation Workflow (역할 분리 디자인 방법론)

## Overview

AI에게 한 방에 맡기지 않고, **카피 → 디자인 → 구현**의 3단계 역할 분리를 통해 각 단계별 최적의 AI 도구를 활용하는 워크플로우.

```
Step 1: 카피          Step 2: 디자인         Step 3: 구현
/enf:copy-write  →   /enf:design-guide  →  /enf:design-implement
(copy-strategist)    (design-director)     (dev-assistant)
     ↓                    ↓                     ↓
  copy.md            design-spec.md          코드 구현
     ↓
/enf:copy-review
(Gate 1)
```

## 3 Core Principles

### 1. 카피부터 정리한다

카피가 흔들리면 화면도 흔들린다. `copy.md`가 디자인의 설계도 역할.

- 뻔한 말 → 구체적 숫자와 실제 상황으로 교체
- "다양한 서비스" → "월 평균 CS 문의 47건 → 12건"
- "시작하세요" → "30분이면 알 수 있습니다"

### 2. 디자인 톤은 히어로에서 잠근다

첫 섹션이 전체 사이트의 톤을 결정한다.

- 히어로에서 컬러, 폰트, 밀도, 레이아웃 확정
- 나머지 섹션은 체이닝 방식으로 확장
- 페이지가 조각나는 것을 방지

### 3. AI에게 한 방에 맡기지 않는다

| 역할 | 도구 | 집중 영역 |
|------|------|----------|
| 카피라이터 | Claude Code (copy-strategist) | 메시지, 톤, 설득력 |
| 크리에이티브 디렉터 | Claude Code (design-director) | 시각, 레이아웃 |
| 프론트엔드 엔지니어 | Claude Code (dev-assistant) | 코드, 성능, 반응형 |

## When to Use

| 대상 | 이 워크플로우 | 기존 /enf:design-feature |
|------|:---:|:---:|
| 랜딩 페이지 | O | |
| 사이트 메인 | O | |
| 마케팅/캠페인 | O | |
| 제품 소개 | O | |
| Admin CRUD | | O |
| API 엔드포인트 | | O |

## Step 1: Copy (`/enf:copy-write`)

### Process

1. 타겟 고객 분석 → 페르소나 JSON
2. 5섹션 카피 작성:
   - **Hero**: 공감 질문 + 헤드라인(숫자) + 서브카피 + CTA
   - **Problem**: 수치 기반 문제 3개 + 전환 문구
   - **Service**: 특징 3개 + 효과 수치 + 보조 CTA
   - **Testimonials**: 후기 2-3개 (실명, 경험, 전후 수치)
   - **CTA**: 허들 낮추기 + 신뢰 뱃지 + 보조 텍스트
3. `copy.md` 생성

### Copy Quality Rules

**DO:**
- 구체적 숫자 사용 (73%, 47건, 30분)
- 타겟의 실제 상황 반영
- CTA에 허들 낮추기 정보
- 후기에 구체적 경험
- 전후 비교를 수치로

**DON'T:**
- "혁신적인", "최고의", "다양한" 금지
- "시작하세요", "지금 바로" 금지
- 증명 못하는 과장 수치 금지

## Gate 1: Copy Review (`/enf:copy-review`)

5가지 검증:
1. **구체성**: 모든 섹션에 숫자 존재
2. **완전성**: 5개 섹션 + 리서치 + CTA 신뢰뱃지
3. **페르소나 정합성**: pain_points ↔ Problem 매핑
4. **CTA 명확성**: 행동 동사 + 허들 낮추기
5. **톤 일관성**: 문체 통일, 추상적 수식어 없음

## Step 2: Design (`/enf:design-guide`)

### 직접 생성 (기본)

Claude가 `copy.md` + 프로젝트 컨텍스트를 분석하여 `design-spec.md`를 **직접 작성**한다.

1. **copy.md 분석** — 각 섹션의 콘텐츠 구조 파악
2. **디자인 톤 결정** — 타겟 페르소나 + 서비스 성격 기반
3. **섹션별 스펙 작성** — 레이아웃, 배경, 컴포넌트, 인터랙션, ASCII 와이어프레임
4. **디자인 토큰 추출** — Tailwind `@theme` CSS 변수

### Figma 연동 (--figma 옵션)

Figma URL 제공 시 MCP 도구로 디자인 정보 추출:
- `get_design_context` → 코드 + 스크린샷
- `get_variable_defs` → 디자인 토큰

### 외부 도구 (사용자 요청 시만)

Variant 등 외부 도구는 사용자가 명시적으로 요청한 경우에만 가이드 제공.

### Output: design-spec.md

- 디자인 톤 (컬러, 타이포, 여백, 인터랙션 — CSS 변수)
- 섹션별 스펙 (레이아웃, Copy 매핑, ASCII 와이어프레임)
- @theme 토큰 블록
- 반응형 브레이크포인트

## Step 3: Implementation (`/enf:design-implement`)

### Process

1. design-spec.md 토큰 → Tailwind `@theme` 적용
2. Variant 코드의 placeholder → copy.md 텍스트 교체
3. 브랜드 이미지/폰트/컬러 적용
4. Next.js + Tailwind CSS 반응형 구현
5. 인터랙션 구현 (스크롤 애니메이션, 호버, 캐러셀)

### Implementation Rules

- **카피 변경 금지** — copy.md 원문 그대로
- **디자인 판단 금지** — design-spec.md 스펙 그대로
- **Server Component 우선** — 인터랙션 부분만 CC
- **next/image, next/font 필수**
- **WCAG 2.1 AA 접근성**

## Quality Gates Summary

| Gate | 위치 | 검증 커맨드 | 핵심 기준 |
|------|------|-----------|----------|
| Gate 1 | Copy → Design | `/enf:copy-review` | 구체성, 완전성, 페르소나, CTA, 톤 |
| Gate 2 | Design → Impl | 사용자 검수 | 톤 잠금, 카피 무결성, 반응형, 토큰 |
| Gate 3 | Impl 완료 | `/enf:code-review` | 코드 품질, 성능, 접근성 |

### Reference Files

- Copy 템플릿: [`references/copy-template.md`](references/copy-template.md)
- Design Spec 템플릿: [`references/design-spec-template.md`](references/design-spec-template.md)
- 품질 게이트 상세: [`references/quality-gates.md`](references/quality-gates.md)
- Variant 가이드: [`references/variant-workflow.md`](references/variant-workflow.md)

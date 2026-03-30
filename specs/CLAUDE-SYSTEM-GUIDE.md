# Claude 개발 시스템 가이드 — 디자이너를 위한 아키텍처 해설서

> **대상 독자**: 웹 디자이너 (개발 경험 최소)
> **목적**: Claude Code + enf 플러그인 시스템을 이해하고, 정교한 디자인 프롬프팅에 활용
> **범위**: specs/, web/ 제외 — 순수 Claude 아키텍처만 다룸
> **작성일**: 2026-03-27

---

## 목차

1. [시스템 전체 구조](#1-시스템-전체-구조)
2. [핵심 개념: 4가지 구성 요소](#2-핵심-개념-4가지-구성-요소)
3. [에이전트 (Agents) — 4명의 전문가](#3-에이전트-agents--4명의-전문가)
4. [커맨드 (Commands) — 17개의 자동화 명령](#4-커맨드-commands--17개의-자동화-명령)
5. [스킬 (Skills) — 6개의 지식 모듈](#5-스킬-skills--6개의-지식-모듈)
6. [MCP 서버 — 외부 도구 연결](#6-mcp-서버--외부-도구-연결)
7. [훅 & 스크립트 — 자동 검증 장치](#7-훅--스크립트--자동-검증-장치)
8. [설정 파일 해부](#8-설정-파일-해부)
9. [기술 스택 한눈에 보기](#9-기술-스택-한눈에-보기)
10. [프로젝트 구조 (Co-location 원칙)](#10-프로젝트-구조-co-location-원칙)
11. [디자이너가 알아야 할 핵심 패턴](#11-디자이너가-알아야-할-핵심-패턴)
12. [디자인 → 개발 핸드오프 프로세스](#12-디자인--개발-핸드오프-프로세스)
13. [디자이너를 위한 프롬프트 활용법](#13-디자이너를-위한-프롬프트-활용법)
14. [문서 체계 (docs/)](#14-문서-체계-docs)
15. [자주 묻는 질문](#15-자주-묻는-질문)

---

## 1. 시스템 전체 구조

### 1.1 이 시스템은 뭔가?

이 프로젝트에는 **enf**라는 Claude Code 플러그인이 설치되어 있습니다. 이 플러그인은 Next.js 16 + Drizzle ORM + Better Auth 기반 풀스택 개발을 자동화합니다.

쉽게 말하면:

```
당신 (디자이너)
  ↓ 프롬프트 입력
Claude Code (AI 에디터)
  ↓ 플러그인 활성화
enf 플러그인 (개발 자동화)
  ├── 4명의 전문가 에이전트
  ├── 17개의 자동화 커맨드
  ├── 6개의 지식 모듈
  ├── 2개의 외부 도구 연결 (MCP)
  └── 자동 검증 훅
  ↓ 코드 생성/수정
웹사이트 (Next.js 프로젝트)
```

### 1.2 디렉토리 맵

```
ax-automation-test/
│
├── agents/                    ← 4명의 AI 전문가 정의
│   ├── architecture-expert.md     설계 전문가 (읽기만 가능)
│   ├── dev-assistant.md           개발 전문가 (코드 수정 가능)
│   ├── performance-expert.md      성능 전문가 (최적화)
│   └── docs-writer.md             문서 전문가 (문서 작성)
│
├── commands/                  ← 17개의 /enf:명령어
│   ├── code-review.md             코드 리뷰
│   ├── commit.md                  커밋 생성
│   ├── component-docs.md          컴포넌트 문서화
│   ├── design-feature.md          기능 설계
│   ├── generate-docs.md           API 문서 생성
│   ├── health.md                  버전 호환성 검사
│   ├── init.md                    프로젝트 안내
│   ├── perf-audit.md              성능 분석
│   ├── pr.md                      Pull Request 생성
│   ├── push.md                    원격 푸시
│   ├── refactor.md                리팩토링 제안
│   ├── schema-design.md           DB 스키마 설계
│   ├── task.md                    작업 정의 + 브랜치 생성
│   ├── test.md                    테스트 실행/생성
│   ├── type-check.md              타입 검증
│   ├── update-changelog.md        변경 이력 갱신
│   └── waterfall-check.md         병렬화 최적화
│
├── skills/                    ← 6개의 자동 활성 지식 모듈
│   ├── better-auth/               인증 패턴
│   │   ├── SKILL.md
│   │   └── references/
│   ├── coding-conventions/        코딩 컨벤션
│   │   └── SKILL.md
│   ├── drizzle/                   DB ORM 패턴
│   │   └── SKILL.md
│   ├── error-handling/            에러 처리
│   │   ├── SKILL.md
│   │   └── references/
│   ├── tailwind-v4-shadcn/        스타일링
│   │   └── SKILL.md
│   └── testing/                   테스트
│       ├── SKILL.md
│       └── references/
│
├── docs/                      ← 12개의 사용 가이드
│   ├── AGENTS-MANUAL.md
│   ├── COMMANDS-REFERENCE.md
│   ├── SKILLS-ACTIVATION.md
│   ├── SCENARIO-GUIDES.md
│   ├── TEAM-ONBOARDING.md
│   ├── GUIDELINES.md
│   ├── CUSTOMIZATION.md
│   ├── INSTALLATION.md
│   ├── DEVELOPMENT.md
│   ├── COMPATIBILITY.md
│   ├── CONTRIBUTING.md
│   └── TROUBLESHOOTING.md
│
├── hooks/                     ← 자동 검증 장치
│   └── hooks.json                 Write/Edit 후 자동 실행
│
├── scripts/                   ← 설치/검증 스크립트
│   ├── setup.sh                   macOS/Linux 설치
│   ├── setup.ps1                  Windows 설치
│   └── post-write-check.sh        코드 저장 후 자동 검증
│
├── .claude-plugin/            ← 플러그인 메타데이터
│   ├── plugin.json                이름/버전/작성자
│   └── marketplace.json           마켓플레이스 등록
│
├── .claude/                   ← Claude 세션 설정
│   └── settings.local.json        로컬 권한 설정
│
├── .mcp.json                  ← MCP 서버 설정
├── README.md                  ← 한국어 설명서
└── README.EN.md               ← 영문 설명서
```

---

## 2. 핵심 개념: 4가지 구성 요소

이 시스템은 4가지 핵심 요소로 구성됩니다. 각각의 역할을 이해하면 시스템 전체가 보입니다.

```
┌─────────────────────────────────────────────────────────────┐
│                     enf 플러그인 시스템                       │
│                                                              │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│   │ AGENTS   │  │ COMMANDS │  │ SKILLS   │  │ MCP      │  │
│   │ 누가     │  │ 무엇을   │  │ 어떻게   │  │ 어디서   │  │
│   │ 하는가?  │  │ 하는가?  │  │ 하는가?  │  │ 참조?   │  │
│   │          │  │          │  │          │  │          │  │
│   │ 4명의    │  │ 17개의   │  │ 6개의    │  │ 2개의    │  │
│   │ 전문가   │  │ 자동화   │  │ 지식     │  │ 외부     │  │
│   │ 에이전트 │  │ 명령     │  │ 모듈     │  │ 도구     │  │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                              │
│   ┌──────────────────────────────────────────────────────┐  │
│   │ HOOKS — 자동 검증 장치 (Write/Edit 할 때마다 실행)    │  │
│   └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

| 구성 요소 | 비유 | 역할 | 파일 위치 |
|-----------|------|------|----------|
| **Agents** | "팀원" | 특정 역할을 맡은 AI 전문가 | `agents/*.md` |
| **Commands** | "도구 상자" | `/enf:명령어`로 실행하는 자동화 워크플로우 | `commands/*.md` |
| **Skills** | "교과서" | 키워드에 반응해 자동으로 활성화되는 지식 | `skills/*/SKILL.md` |
| **MCP** | "전화번호부" | 외부 문서/도구에 실시간 접근 | `.mcp.json` |
| **Hooks** | "품질 검사관" | 코드 수정 시 자동으로 검증하는 장치 | `hooks/hooks.json` |

---

## 3. 에이전트 (Agents) — 4명의 전문가

### 3.1 에이전트란?

에이전트는 **특정 역할과 권한을 가진 AI 전문가**입니다. 각자 사용할 수 있는 도구(tools)가 다르고, 전문 분야가 다릅니다.

### 3.2 4명의 에이전트 비교

```
┌─────────────────────────────────────────────────────────────────┐
│                        에이전트 팀 구성                          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │ architecture │  │ dev-         │                             │
│  │ -expert      │  │ assistant    │                             │
│  │              │  │              │                             │
│  │ 설계 전문가   │  │ 개발 전문가   │                             │
│  │ 읽기만 가능   │→│ 읽기+쓰기    │                             │
│  │              │  │              │                             │
│  │ "어떻게      │  │ "실제로      │                             │
│  │  만들지?"    │  │  만든다"     │                             │
│  └──────────────┘  └──────────────┘                             │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │ performance  │  │ docs-        │                             │
│  │ -expert      │  │ writer       │                             │
│  │              │  │              │                             │
│  │ 성능 전문가   │  │ 문서 전문가   │                             │
│  │ 읽기+분석    │  │ 읽기+쓰기    │                             │
│  │              │  │              │                             │
│  │ "얼마나      │  │ "어떻게      │                             │
│  │  빠르지?"   │  │  설명하지?"  │                             │
│  └──────────────┘  └──────────────┘                             │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 에이전트 상세

#### architecture-expert (설계 전문가)

| 항목 | 내용 |
|------|------|
| **역할** | 시스템 설계, 데이터 모델링, 라우팅 구조, 인증/권한, API 패턴 결정 |
| **권한** | **읽기 전용** — 설계만 하고, 코드 수정은 불가 |
| **사용 도구** | Read, Glob, Grep, Bash, context7, next-devtools |
| **핵심 산출물** | **Handoff Artifact** — 개발 전문가에게 넘기는 설계 문서 |

**Handoff Artifact 구조:**
```
1. 요구사항 요약
2. 데이터 모델 (Drizzle 스키마)
3. 파일 구조 (디렉토리 트리)
4. Server Actions / API Routes 목록
5. 컴포넌트 목록 (Server/Client 구분)
6. 에러 처리 케이스
7. 구현 순서 (dev-assistant가 따라갈 체크리스트)
```

**설계 판단 기준:**

| 판단 항목 | 선택지 A | 선택지 B | 기준 |
|-----------|---------|---------|------|
| 데이터 가져오기 | Server Action | API Route | 폼 제출/CRUD → Action, 파일/웹훅 → Route |
| 컴포넌트 위치 | 페이지 전용 | 공유 | 1곳에서만 쓰면 전용, 2곳+ 공유 |
| 라우트 그룹 | (admin) | (site) | 관리자 영역 vs 고객 영역 |
| 인증 필요 | (auth) | (protected) | 인증 불필요 vs 필요 |
| 캐시 전략 | SSG/ISR | Dynamic | 정적 콘텐츠 vs 실시간 데이터 |

---

#### dev-assistant (개발 전문가)

| 항목 | 내용 |
|------|------|
| **역할** | 코드 구현, 리뷰, 리팩토링, TypeScript 검증 |
| **권한** | **읽기 + 쓰기** — 실제 코드 수정 가능 |
| **사용 도구** | Read, Edit, Grep, Glob, context7, next-devtools |
| **활성화 스킬** | vercel-react-best-practices (자동) |

**코드 품질 체크리스트:**
- TypeScript strict 모드 준수
- 불필요한 `'use client'` 없는지
- Better Auth 인증 검사 적용
- 에러 처리 완비
- Drizzle 쿼리 최적화 (columns/with)
- `revalidatePath` 캐시 무효화
- 접근성(a11y) 고려

**성능 체크리스트:**
- 3개 이상 순차 await → Promise.all() 병렬화 검토
- 무거운 컴포넌트 → dynamic import (모달, 에디터, 차트)
- RSC → CC 경계에서 최소 데이터만 전달
- lucide-react 아이콘 개별 import

---

#### performance-expert (성능 전문가)

| 항목 | 내용 |
|------|------|
| **역할** | 번들 분석, Core Web Vitals 최적화, 렌더링 전략 |
| **권한** | **읽기 + 수정 + 실행** |
| **사용 도구** | Read, Edit, Grep, Bash, next-devtools (browser_eval 포함) |
| **핵심 지표** | LCP ≤ 2.5s, INP ≤ 100ms, CLS ≤ 0.1 |

**디자이너가 알아야 할 성능 규칙:**

| 디자인 결정 | 성능 영향 | 대응 |
|------------|----------|------|
| 큰 히어로 이미지 | LCP 악화 | `priority` + WebP/AVIF + srcset |
| 웹폰트 2종 이상 | CLS 악화 | `font-display: swap` + preload |
| 스크롤 애니메이션 | INP 악화 | IntersectionObserver + transform only |
| 이미지 크기 미지정 | CLS 악화 | width/height 반드시 명시 |
| 큰 차트 라이브러리 | 번들 증가 | dynamic import + ssr: false |

**렌더링 전략 매트릭스:**

| 페이지 유형 | 전략 | 캐시 | 이유 |
|------------|------|------|------|
| 메인 홈 | SSG + PPR | 영구 | 정적 콘텐츠, 최대 성능 |
| 목록 페이지 | ISR | 5~30분 | 주기적 업데이트 |
| 상세 페이지 | ISR/SSG | 5분/영구 | 콘텐츠 변경 빈도에 따라 |
| 마이페이지 | Dynamic | 없음 | 사용자별 실시간 데이터 |
| 관리자 | Dynamic | 없음 | 항상 최신 데이터 필요 |

---

#### docs-writer (문서 전문가)

| 항목 | 내용 |
|------|------|
| **역할** | README, API 문서, 컴포넌트 문서, 가이드 작성 |
| **권한** | **읽기 + 쓰기** |
| **사용 도구** | Read, Write, Edit, Glob, Grep, context7 |

**3가지 문서 템플릿:**

1. **컴포넌트 문서** — Props 테이블 + 사용 예시 + 접근성
2. **Server Action 문서** — 함수 시그니처 + 파라미터 + 반환값 + 사용 예시
3. **가이드 문서** — 개요 + 사전 요구 + 단계별 진행 + 문제 해결

---

### 3.4 에이전트 협업 흐름

```
디자이너 요청: "임팩트 대시보드 페이지를 만들어줘"

Step 1: architecture-expert (설계)
        ├── 라우트 구조: /impact → (site)/(main)/impact/page.tsx
        ├── 데이터 모델: impactMetrics, stories 테이블
        ├── 컴포넌트: KPICard(SC), InteractiveChart(CC), GlobalMap(CC)
        └── Handoff Artifact 작성 → dev-assistant에게 전달

Step 2: dev-assistant (구현)
        ├── Drizzle 스키마 작성 + 마이그레이션
        ├── Server Actions 구현
        ├── 컴포넌트 코드 작성
        └── 페이지 통합

Step 3: performance-expert (최적화)
        ├── 차트 컴포넌트 → dynamic import
        ├── 이미지 → priority + WebP
        └── Lighthouse 점수 확인

Step 4: docs-writer (문서화)
        ├── API 문서 생성
        └── 컴포넌트 Props 문서
```

---

## 4. 커맨드 (Commands) — 17개의 자동화 명령

### 4.1 커맨드란?

커맨드는 `/enf:명령어` 형태로 실행하는 **자동화 워크플로우**입니다. 복잡한 작업을 한 줄로 실행합니다.

### 4.2 전체 커맨드 맵

```
/enf: 커맨드 체계
│
├── 핵심 개발 (4개) ─────────────────────────────────────
│   ├── /enf:code-review      코드 리뷰 (TS, 성능, 보안)
│   ├── /enf:design-feature   새 기능 설계 (아키텍처)
│   ├── /enf:schema-design    DB 스키마 설계/리뷰
│   └── /enf:perf-audit       성능 분석 (번들, CWV)
│
├── 구현 보조 (3개) ─────────────────────────────────────
│   ├── /enf:refactor         리팩토링 제안
│   ├── /enf:type-check       TypeScript 타입 검증
│   └── /enf:waterfall-check  순차 await → 병렬화 제안
│
├── Git & 릴리즈 (4개) ──────────────────────────────────
│   ├── /enf:task             작업 정의 + 브랜치 생성
│   ├── /enf:commit           Conventional Commits 커밋
│   ├── /enf:push             안전한 원격 푸시
│   └── /enf:pr               PR 생성 (템플릿 적용)
│
├── 문서화 (3개) ────────────────────────────────────────
│   ├── /enf:generate-docs    API/Server Action 문서 자동 생성
│   ├── /enf:component-docs   컴포넌트 Props 문서 자동 생성
│   └── /enf:update-changelog CHANGELOG.md 자동 갱신
│
├── 테스트 & 진단 (2개) ─────────────────────────────────
│   ├── /enf:test             테스트 실행 + 코드 생성
│   └── /enf:health           버전 호환성 검사
│
└── 온보딩 (1개) ────────────────────────────────────────
    └── /enf:init             프로젝트 구조 안내
```

### 4.3 디자이너가 자주 쓸 커맨드 TOP 5

#### 1. `/enf:init` — 프로젝트 파악

```
/enf:init
```
→ 기술 스택, 프로젝트 구조, 핵심 패턴, 개발 워크플로우, 사용 가능 커맨드를 한눈에 보여줌

#### 2. `/enf:design-feature` — 새 기능 설계

```
/enf:design-feature
```
→ 새 페이지나 기능을 추가할 때 사용. 아키텍처 전문가가 설계서를 작성

**실행 과정:**
1. 요구사항 분석
2. 라우트 그룹 결정 → 파일 구조 설계
3. 데이터 모델 설계
4. Server Action vs API Route 결정
5. 컴포넌트 목록 + 위치 결정
6. Handoff Artifact 생성

#### 3. `/enf:code-review` — 코드 리뷰

```
/enf:code-review
```
→ TypeScript, React/Next.js 패턴, 성능, 보안, 코드 스타일을 점검

**검사 항목 6가지:**
| 영역 | 검사 내용 |
|------|----------|
| TypeScript | strict 모드, any 사용, 타입 안전성 |
| React/Next.js | Server/Client 분리, 데이터 페칭, 캐시 |
| 성능 | 워터폴, 번들 크기, 이미지 최적화 |
| Server Action | 인증, Zod 검증, revalidatePath |
| Drizzle | N+1 방지, 인덱스, 트랜잭션 |
| 보안 | SQL 인젝션, XSS, 환경변수 노출 |

#### 4. `/enf:perf-audit` — 성능 분석

```
/enf:perf-audit
```
→ 워터폴 패턴, 번들 크기, Core Web Vitals, 이미지 최적화를 분석

#### 5. `/enf:task` — 작업 시작

```
/enf:task
```
→ 작업 유형 분류 + Git 브랜치 자동 생성

**브랜치 네이밍 규칙:**
| 유형 | 브랜치 패턴 | 예시 |
|------|-----------|------|
| 기능 | `feature/설명` | `feature/impact-dashboard` |
| 버그 | `fix/설명` | `fix/counter-animation` |
| 리팩토링 | `refactor/설명` | `refactor/hero-section` |
| 문서 | `docs/설명` | `docs/api-reference` |

### 4.4 커맨드 조합 워크플로우

```
일반적인 기능 개발 흐름:

/enf:task                    ← 1. 작업 정의 + 브랜치 생성
  ↓
/enf:design-feature          ← 2. 아키텍처 설계
  ↓
(코드 구현)                   ← 3. dev-assistant가 구현
  ↓
/enf:code-review             ← 4. 코드 리뷰
  ↓
/enf:type-check              ← 5. 타입 검증
  ↓
/enf:waterfall-check         ← 6. 성능 병목 확인
  ↓
/enf:test                    ← 7. 테스트
  ↓
/enf:commit                  ← 8. 커밋
  ↓
/enf:push                    ← 9. 원격 푸시
  ↓
/enf:pr                      ← 10. PR 생성
```

---

## 5. 스킬 (Skills) — 6개의 지식 모듈

### 5.1 스킬이란?

스킬은 **특정 키워드가 나오면 자동으로 활성화되는 지식 모듈**입니다. 별도 명령 없이 대화 중 관련 주제가 나오면 해당 스킬의 지식이 자동으로 적용됩니다.

### 5.2 6개 스킬 요약

```
┌─────────────────────────────────────────────────────────────┐
│                    Skills — 자동 활성화                       │
│                                                              │
│  "auth" 언급 시 →  [better-auth]     인증/세션/RBAC         │
│  "schema" 언급 시 → [drizzle]        DB 스키마/쿼리         │
│  "tailwind" 언급 시 → [tailwind-v4]  스타일링/shadcn        │
│  "test" 언급 시 →  [testing]         테스트 패턴            │
│  "error" 언급 시 → [error-handling]  에러 처리              │
│  "naming" 언급 시 → [coding-conv]    네이밍/컨벤션           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 스킬 상세

#### coding-conventions (코딩 컨벤션)

| 항목 | 내용 |
|------|------|
| **활성화 키워드** | convention, naming, import, commit |
| **내용** | 네이밍 규칙, import 순서, TypeScript 스타일, 커밋 메시지 형식 |

**핵심 규칙:**
- 컴포넌트: PascalCase (`CustomerCard.tsx`)
- 유틸리티: camelCase (`formatDate.ts`)
- 상수: UPPER_SNAKE (`MAX_RETRY_COUNT`)
- 파일명: kebab-case (`user-profile.ts`) 단, 컴포넌트는 PascalCase
- import 순서: React/Next.js → 외부 라이브러리 → 내부 모듈 → 타입 → 스타일

---

#### better-auth (인증 패턴)

| 항목 | 내용 |
|------|------|
| **활성화 키워드** | auth, login, session, signup, role |
| **내용** | 세션 관리, RBAC, Server Action 인증, 프록시 기반 라우트 보호 |

**인증 아키텍처:**
```
요청 → proxy.ts (쿠키 존재 여부 가벼운 검사)
          ↓
       layout.tsx (실제 세션 검증: auth.api.getSession)
          ↓
       Page / Server Action (인증된 사용자만 접근)
```

---

#### drizzle (DB ORM 패턴)

| 항목 | 내용 |
|------|------|
| **활성화 키워드** | drizzle, schema, db, table, migration, query |
| **내용** | pgTable 스키마, 관계 패턴(1:N, N:M), 쿼리 패턴, 마이그레이션 CLI |

**스키마 기본 구조:**
```typescript
// 모든 테이블에 공통 필드
export const baseColumns = {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}
```

---

#### tailwind-v4-shadcn (스타일링)

| 항목 | 내용 |
|------|------|
| **활성화 키워드** | tailwind, shadcn, form, dialog, table, theme, style |
| **내용** | CSS-first 설정, 변수 기반 컬러, 폼 패턴, 다이얼로그, 데이터 테이블, 테마 커스텀 |

**디자이너에게 중요한 점:**
- Tailwind CSS 4.x는 `tailwind.config.js` 대신 **CSS 파일에서 직접 설정**
- 컬러는 CSS 변수 기반: `--color-primary`, `--color-accent` 등
- shadcn/ui 컴포넌트는 `new-york` 스타일 사용
- 폼은 react-hook-form + zod + shadcn Form 패턴

---

#### error-handling (에러 처리)

| 항목 | 내용 |
|------|------|
| **활성화 키워드** | error, try, catch, api, boundary |
| **내용** | Server Action 에러, API Route 에러, DB 에러(PostgreSQL 코드), Error Boundary |

**에러 처리 계층:**
```
Server Action → ActionResult<T> 타입으로 { success, data } | { error }
API Route → NextResponse.json({ error }, { status })
DB 에러 → PostgreSQL 에러 코드 매핑 (23505 = 중복, 23503 = FK 위반)
클라이언트 → error.tsx + not-found.tsx + global-error.tsx
```

---

#### testing (테스트)

| 항목 | 내용 |
|------|------|
| **활성화 키워드** | test, vitest, playwright, mock, e2e |
| **내용** | 테스팅 피라미드, Vitest 단위 테스트, Testing Library, Playwright E2E |

**테스팅 피라미드:**
```
        /△\       E2E (Playwright) — 10%
       /────\      통합 (Testing Library) — 30%
      /────────\   단위 (Vitest) — 60%
```

---

## 6. MCP 서버 — 외부 도구 연결

### 6.1 MCP란?

MCP(Model Context Protocol)는 Claude가 **외부 도구와 실시간으로 소통**하는 프로토콜입니다. 이 프로젝트에는 2개의 MCP 서버가 연결되어 있습니다.

### 6.2 연결된 MCP 서버

#### context7 (문서 조회)

| 항목 | 내용 |
|------|------|
| **패키지** | `@anthropic-ai/context7-mcp@2.1.2` |
| **역할** | 라이브러리 공식 문서를 실시간 조회 |
| **사용 시점** | import문, 프레임워크 질문, 공식 문서 패턴 필요 시 |
| **작동 방식** | `resolve-library-id` → `query-docs` 2단계 |

**예시:**
```
"Next.js 16에서 parallel routes는 어떻게 쓰지?"
→ context7가 Next.js 공식 문서에서 최신 패턴 조회
→ 정확한 코드 예시 제공
```

#### next-devtools (개발 서버 연동)

| 항목 | 내용 |
|------|------|
| **패키지** | `@anthropic-ai/next-devtools-mcp@0.3.10` |
| **역할** | 실행 중인 Next.js 개발 서버와 직접 통신 |
| **사용 시점** | 라우트 구조 확인, 빌드 에러 분석, 브라우저 평가 |
| **주의** | `pnpm dev` 실행 중에만 작동 |

**제공 도구:**
| 도구 | 기능 |
|------|------|
| `nextjs_index` | 실행 중인 서버 검색 |
| `nextjs_docs` | Next.js 공식 문서 조회 |
| `nextjs_call` | 라우트 구조/에러 확인 |
| `browser_eval` | Lighthouse 지표/스크린샷 |

### 6.3 MCP 설정 파일 (`.mcp.json`)

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/context7-mcp@2.1.2"],
      "env": { "DEFAULT_MINIMUM_TOKENS": "10000" }
    },
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/next-devtools-mcp@0.3.10"]
    }
  }
}
```

---

## 7. 훅 & 스크립트 — 자동 검증 장치

### 7.1 훅이란?

훅은 **특정 이벤트가 발생하면 자동으로 실행되는 스크립트**입니다. 이 프로젝트에서는 코드를 Write/Edit할 때마다 자동 검증이 실행됩니다.

### 7.2 현재 설정된 훅

**`hooks/hooks.json`:**
```json
{
  "hooks": [
    {
      "matcher": "Write|Edit",
      "command": "${CLAUDE_PLUGIN_ROOT}/scripts/post-write-check.sh"
    }
  ]
}
```

→ Write 또는 Edit 도구가 사용될 때마다 `post-write-check.sh` 실행

### 7.3 자동 검증 내용 (`post-write-check.sh`)

코드가 수정될 때마다 **4가지 자동 검사**가 실행됩니다:

```
파일 저장 (Write/Edit)
  ↓
┌─────────────────────────────────────────┐
│  검사 1: .env 파일 보호                  │
│  → .env 파일 수정 시 경고 + 커밋 차단    │
├─────────────────────────────────────────┤
│  검사 2: Drizzle 스키마 변경 감지         │
│  → schema.ts 변경 시 마이그레이션 안내    │
│  → "npx drizzle-kit push 실행하세요"     │
├─────────────────────────────────────────┤
│  검사 3: Server Action 유효성             │
│  → 'use server' 누락 확인                │
│  → auth 인증 검사 누락 확인              │
│  → revalidatePath 누락 확인             │
├─────────────────────────────────────────┤
│  검사 4: TypeScript 파일 안내             │
│  → .ts/.tsx 파일 수정 시                 │
│  → "타입 체크와 린트를 실행하세요" 안내    │
└─────────────────────────────────────────┘
```

### 7.4 설치 스크립트 (`scripts/setup.sh`)

macOS/Linux용 자동 설치 스크립트. 실행하면:

1. Claude CLI + Git 설치 확인
2. 네트워크 연결 확인
3. 8개 Anthropic 공식 플러그인 설치
4. 2개 커뮤니티 플러그인 설치
5. 로컬 enf 플러그인 등록 + 설치

**설치되는 외부 플러그인:**
| 카테고리 | 플러그인 |
|---------|---------|
| Anthropic 공식 | Playwright, PR Review, Commit Commands, Feature Dev, Security Guidance, Context7, Frontend Design, Code Review |
| 커뮤니티 | JavaScript/TypeScript, Database Design |

---

## 8. 설정 파일 해부

### 8.1 플러그인 메타데이터

**`.claude-plugin/plugin.json`:**
```json
{
  "name": "enf",
  "version": "1.1.1",
  "description": "Claude Code plugin for Next.js 16 + Drizzle ORM + Better Auth",
  "author": "lemon-etvibe",
  "license": "MIT"
}
```

**`.claude-plugin/marketplace.json`:**
```json
{
  "plugins": [{
    "name": "enf",
    "source": "./",
    "description": "Claude Code plugin for Next.js 16 + Drizzle ORM + Better Auth"
  }]
}
```

### 8.2 로컬 권한 설정

**`.claude/settings.local.json`** — Claude가 자동 실행할 수 있는 명령어 화이트리스트:
```
허용된 명령어:
- npm/pnpm 패키지 관리
- 파일 시스템 탐색 (ls, find, mkdir)
- PostgreSQL 쿼리 (psql)
- TypeScript 타입 체크 (npx tsc)
- Git 상태 확인
```

---

## 9. 기술 스택 한눈에 보기

```
┌─────────────────────────────────────────────────────────────┐
│                     기술 스택 레이어                          │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ UI Layer                                            │    │
│  │  Tailwind CSS 4.x (CSS-first) + shadcn/ui (new-york) │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↕                                   │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Application Layer                                   │    │
│  │  Next.js 16.x (App Router + Turbopack)              │    │
│  │  React 19.x (Server Components 우선)                 │    │
│  │  TypeScript 5.x (strict mode)                       │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↕                                   │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Data Layer                                          │    │
│  │  Drizzle ORM 0.45.x (pgTable, 타입 안전 쿼리)        │    │
│  │  PostgreSQL                                         │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↕                                   │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Auth Layer                                          │    │
│  │  Better Auth 1.4.x (세션 기반, RBAC)                 │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↕                                   │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Testing Layer                                       │    │
│  │  Vitest (단위) + Testing Library (통합) + Playwright (E2E) │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

| 기술 | 버전 | 역할 | 디자이너 관점 |
|------|------|------|-------------|
| **Next.js** | 16.x | 프레임워크 | 페이지 라우팅, SSR/SSG |
| **React** | 19.x | UI 라이브러리 | 컴포넌트 기반 UI |
| **TypeScript** | 5.x | 타입 시스템 | 코드 안전성 |
| **Drizzle ORM** | 0.45.x | DB 접근 | 데이터 모델 정의 |
| **Better Auth** | 1.4.x | 인증 | 로그인/권한 관리 |
| **Tailwind CSS** | 4.x | 스타일링 | 클래스 기반 CSS |
| **shadcn/ui** | new-york | UI 컴포넌트 | 버튼, 폼, 모달 등 |
| **Vitest** | - | 단위 테스트 | 함수 단위 검증 |
| **Playwright** | - | E2E 테스트 | 브라우저 자동화 |

---

## 10. 프로젝트 구조 (Co-location 원칙)

### 10.1 Co-location이란?

**관련 코드를 가까이 둔다**는 원칙입니다. 페이지와 관련된 액션, 컴포넌트, 유틸리티를 같은 디렉토리 그룹에 배치합니다.

### 10.2 구조 설명

```
src/app/
│
├── (admin)/                    ← 관리자 영역 (Route Group)
│   ├── _actions/               ← Admin 전용 Server Actions
│   │   └── customer.ts
│   ├── _components/            ← Admin 전용 컴포넌트
│   │   ├── AdminShell.tsx
│   │   └── CustomerTable.tsx
│   ├── _lib/                   ← Admin 전용 훅/스키마
│   │   └── schemas.ts
│   └── admin/                  ← 실제 URL 라우트
│       ├── (auth)/             ← 인증 불필요
│       │   └── login/page.tsx       → /admin/login
│       └── (protected)/        ← 인증 필요
│           ├── layout.tsx           → 인증 검사 + AdminShell
│           ├── page.tsx             → /admin (대시보드)
│           └── customers/
│               └── page.tsx         → /admin/customers
│
├── (site)/                     ← 고객/공개 영역 (Route Group)
│   ├── _actions/               ← Site 전용 Server Actions
│   ├── _components/            ← Site 전용 컴포넌트
│   │   ├── SiteHeader.tsx
│   │   └── SiteFooter.tsx
│   ├── _lib/                   ← Site 전용 훅/스키마
│   ├── (main)/                 ← Header+Footer 레이아웃
│   │   ├── layout.tsx               → Header + Footer 감싸기
│   │   ├── page.tsx                 → / (메인)
│   │   └── about/page.tsx           → /about
│   ├── (auth)/                 ← 고객 인증 (Header/Footer 없음)
│   │   ├── login/page.tsx           → /login
│   │   └── register/page.tsx        → /register
│   └── (customer)/             ← 마이페이지 (인증 필요)
│       └── mypage/page.tsx          → /mypage
│
├── api/                        ← API Routes (최소한)
│   ├── auth/[...all]/route.ts       → Better Auth 핸들러
│   └── files/route.ts               → 파일 업로드/다운로드
│
src/components/                 ← 전역 공유 컴포넌트
│   └── ui/                     ← shadcn/ui 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
│
src/db/                         ← 데이터베이스
│   ├── index.ts                ← DB 연결
│   └── schema.ts               ← Drizzle 스키마 정의
│
src/lib/                        ← 공유 유틸리티
│   └── auth.ts                 ← Better Auth 설정
```

### 10.3 디자이너가 기억할 핵심 규칙

| 규칙 | 설명 |
|------|------|
| `_` 접두사 폴더 | Next.js 라우팅에서 **제외됨** (_actions, _components, _lib) |
| `()` 괄호 폴더 | URL에 포함되지 않는 **그룹** ((admin), (site), (main)) |
| `[]` 대괄호 폴더 | **동적 라우트** ([id] → /customers/abc123) |
| `...` 스프레드 | **캐치올 라우트** ([...all] → /auth/callback 등) |

---

## 11. 디자이너가 알아야 할 핵심 패턴

### 11.1 Server Component vs Client Component

```
Server Component (SC)           Client Component (CC)
  서버에서만 실행                   브라우저에서 실행
  DB 직접 접근 가능                 상태(state) 사용 가능
  번들에 포함 안됨                  번들에 포함됨
  인터랙션 불가                     클릭/입력/애니메이션 가능

  → 데이터 표시, 레이아웃            → 폼, 모달, 차트, 애니메이션
```

**디자이너 판단 기준:**
| 이 요소가 필요하면 | → 이것을 사용 |
|------------------|-------------|
| DB에서 데이터 가져와서 보여주기만 | Server Component |
| 버튼 클릭, 폼 입력, 상태 변경 | Client Component |
| 스크롤 애니메이션, 카운터 | Client Component |
| 정적 텍스트, 이미지 | Server Component |
| 모달, 드롭다운, 탭 | Client Component |
| SEO가 중요한 콘텐츠 | Server Component |

### 11.2 이미지 최적화 규칙

```tsx
// 반드시 next/image 사용
import Image from "next/image"

// 히어로 이미지 (LCP 요소)
<Image
  src="/images/hero.webp"
  alt="현장 활동 사진"
  width={1200}
  height={630}
  priority              // ← 히어로는 반드시 priority
  fetchPriority="high"
  quality={85}
  sizes="(max-width: 768px) 100vw, 1200px"
/>

// 일반 이미지 (lazy loading 기본)
<Image
  src={story.image}
  alt={story.title}
  width={400}
  height={300}
  // priority 없음 → 자동 lazy loading
/>
```

### 11.3 폰트 최적화

```tsx
// next/font 사용 (CLS 방지)
import { Plus_Jakarta_Sans, Noto_Sans_KR } from "next/font/google"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",        // ← FOUT 방지
  variable: "--font-jakarta",
})

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans",
})
```

### 11.4 Tailwind CSS 4.x 핵심 변경점

```css
/* app/globals.css */

/* v4에서는 CSS 파일에서 직접 설정 (tailwind.config.js 불필요) */
@import "tailwindcss";

@theme {
  /* 커스텀 컬러 */
  --color-forest: #1B4332;
  --color-emerald: #2D6A4F;
  --color-gold: #D4A847;
  --color-cream: #FEFCF3;

  /* 커스텀 폰트 */
  --font-heading: var(--font-jakarta), sans-serif;
  --font-body: var(--font-noto-sans), sans-serif;
}
```

**사용:**
```html
<h1 class="font-heading text-forest">제목</h1>
<p class="font-body text-emerald">본문</p>
<button class="bg-gold text-forest">CTA</button>
```

### 11.5 shadcn/ui 컴포넌트 활용

이 프로젝트는 shadcn/ui `new-york` 스타일을 사용합니다. 기본 제공 컴포넌트:

| 컴포넌트 | 용도 | 디자인 시 고려 |
|---------|------|-------------|
| Button | 버튼 | variant: default/outline/ghost/link |
| Card | 카드 | Header + Content + Footer 구조 |
| Dialog | 모달 | 트리거 + 콘텐츠 구조 |
| Form | 폼 | react-hook-form + zod 통합 |
| Table | 테이블 | @tanstack/react-table 통합 |
| Tabs | 탭 | 탭 전환 UI |
| Accordion | 아코디언 | FAQ, 접기/펼치기 |
| Carousel | 캐러셀 | embla-carousel 기반 |
| Sheet | 사이드 패널 | 모바일 메뉴 등 |
| Tooltip | 툴팁 | 호버 시 추가 정보 |

---

## 12. 디자인 → 개발 핸드오프 프로세스

### 12.1 전체 흐름

```
디자이너                        Claude 시스템
───────                        ─────────────

1. 디자인 시안 작성
   (Figma/HTML/스케치)
        ↓
2. 프롬프트 작성
   (DESIGN-PROMPT-SYSTEM.md 참조)
        ↓
3. Claude에 전달 ─────────────→ /enf:design-feature 실행
                               architecture-expert가 설계
                               Handoff Artifact 생성
        ↓
4. 설계 확인 & 피드백 ←──────── Handoff Artifact 리뷰
        ↓
5. 구현 승인 ─────────────────→ dev-assistant가 구현
                               코드 생성/수정
        ↓
6. 결과 확인 ←──────────────── 브라우저에서 확인
        ↓
7. 피드백 ───────────────────→ 수정 반복
        ↓
8. 완료 ←────────────────────  /enf:code-review
                               /enf:perf-audit
                               /enf:test
                               /enf:commit
```

### 12.2 Handoff Artifact 읽는 법

architecture-expert가 생성하는 설계 문서의 구조:

```markdown
# Handoff: 임팩트 대시보드

## 1. 요구사항 요약
- [ ] 4대 KPI 카드 표시
- [ ] 연도/지역/사업별 인터랙티브 차트
- [ ] 글로벌 맵 (26개국)

## 2. 데이터 모델
→ DB 테이블 구조 (디자이너: "어떤 데이터가 필요한지" 파악)

## 3. 파일 구조
→ 어떤 파일이 어디에 생기는지
→ SC/CC 구분 (어떤 컴포넌트가 인터랙티브한지)

## 4. Server Actions / API Routes
→ 데이터를 어떻게 가져오는지

## 5. 컴포넌트 목록
→ 만들어야 할 UI 조각 목록
→ 각각 Server/Client 구분

## 6. 에러 처리
→ 데이터 로딩 실패 시 어떻게 보여줄지

## 7. 구현 순서
→ dev-assistant가 따라갈 체크리스트
```

**디자이너가 확인할 포인트:**
- 컴포넌트 목록이 디자인 시안의 모든 요소를 커버하는지
- SC/CC 구분이 맞는지 (인터랙티브 요소가 CC인지)
- 에러/로딩 상태의 UI가 정의되어 있는지

---

## 13. 디자이너를 위한 프롬프트 활용법

### 13.1 시스템 활용 시나리오

#### 시나리오 A: "이 디자인 시안을 코드로 만들어줘"

```
Step 1: 컨텍스트 설정
"이 프로젝트는 Next.js 16 + Tailwind 4 + shadcn/ui를 사용해.
확정된 디자인 컨셉은 DATA STORYTELLING이야.
컬러: Deep Forest #1B4332, Emerald #2D6A4F, Gold #D4A847, Cream #FEFCF3
폰트: Plus Jakarta Sans (헤드라인) + Noto Sans KR (본문)"

Step 2: 구체적 요청
"/enf:design-feature
임팩트 대시보드 페이지를 설계해줘.
- 4대 KPI 카운터 카드
- 연도별/지역별/사업별 탭 전환 차트
- SVG 글로벌 맵
- 최근 수혜자 스토리 3개
- 연간보고서 PDF 다운로드"

Step 3: 설계 확인 후 구현
"Handoff Artifact 기준으로 구현 시작해줘"

Step 4: 검증
"/enf:code-review"
"/enf:perf-audit"
```

#### 시나리오 B: "컴포넌트 하나만 만들어줘"

```
"shadcn/ui Card 컴포넌트를 기반으로 수혜자 스토리 카드를 만들어줘.

Props:
- image: string (수혜자 사진 URL)
- quote: string (1인칭 인용문)
- name: string
- country: string
- role: string (직업)
- program: '협동조합' | '소액금융' | '사회적기업' | '소셜비즈니스'

스타일:
- 너비 340px, 사진 aspect-ratio 4:3
- 카드 border-radius 12px, 그림자 0 4px 24px rgba(0,0,0,0.06)
- 국가 태그: 좌상단 pill 배지 (Soft Olive 배경)
- 인용문: Noto Serif KR 16px
- 호버: translateY(-4px) + 그림자 증가

이 컴포넌트는 Client Component여야 해 (호버 인터랙션 때문에).
next/image를 사용하고, 접근성(alt 텍스트, 시맨틱 태그) 챙겨줘."
```

#### 시나리오 C: "기존 페이지 수정해줘"

```
"메인 히어로 섹션을 수정해줘.

현재 문제:
- 카운터 숫자가 너무 작음 → 48px에서 64px로
- 모바일에서 카운터가 잘림 → 2x2 그리드로 변경
- CTA 버튼 간격이 좁음 → gap-4에서 gap-6으로

수정 후 /enf:code-review 실행해줘."
```

### 13.2 효과적인 프롬프트 작성 원칙

| 원칙 | 나쁜 예 | 좋은 예 |
|------|---------|---------|
| **구체적 수치** | "글자 크게" | "48px → 64px, font-weight 800" |
| **컬러 코드** | "초록색으로" | "#2D6A4F (Emerald)" |
| **컴포넌트 명시** | "카드 만들어줘" | "shadcn Card 기반, Props: image, quote, name" |
| **인터랙션 설명** | "움직이게" | "호버 시 translateY(-4px), transition 0.3s ease" |
| **레퍼런스** | "Kiva처럼" | "Kiva 히어로의 3대 지표 카운터 패턴" |
| **반응형** | "모바일도" | "Desktop 4컬럼 → Tablet 2컬럼 → Mobile 1컬럼" |
| **접근성** | (누락) | "WCAG 2.1 AA, aria-label, prefers-reduced-motion" |
| **SC/CC 구분** | (누락) | "Client Component (호버 인터랙션)" |

### 13.3 커맨드 + 프롬프트 조합

| 상황 | 커맨드 | 프롬프트 보충 |
|------|--------|-------------|
| 새 페이지 추가 | `/enf:design-feature` | 페이지 목적, 타겟, 섹션 구조 |
| 기존 코드 개선 | `/enf:refactor` | 개선 방향, 기대 결과 |
| 성능 문제 | `/enf:perf-audit` | 느린 페이지 URL, 체감 증상 |
| DB 모델 추가 | `/enf:schema-design` | 필요한 데이터, 관계 |
| 타입 오류 | `/enf:type-check` | 오류 메시지 공유 |
| 커밋 | `/enf:commit` | (자동 — Conventional Commits) |
| PR 생성 | `/enf:pr` | (자동 — 변경 분석 기반) |

---

## 14. 문서 체계 (docs/)

### 14.1 문서 맵

```
docs/
│
├── 시작하기 ─────────────────────────────
│   ├── INSTALLATION.md        설치 가이드
│   ├── TEAM-ONBOARDING.md     팀 온보딩 (처음 오면 이거부터)
│   └── COMPATIBILITY.md       버전 호환성 매트릭스
│
├── 사용 가이드 ──────────────────────────
│   ├── AGENTS-MANUAL.md       에이전트 4명 상세 매뉴얼
│   ├── COMMANDS-REFERENCE.md  17개 커맨드 빠른 참조
│   ├── SKILLS-ACTIVATION.md   6개 스킬 활성화 가이드
│   └── SCENARIO-GUIDES.md     실전 시나리오 워크스루
│
├── 철학 & 원칙 ──────────────────────────
│   └── GUIDELINES.md          플러그인 철학, 설계 원칙
│
├── 확장 & 기여 ──────────────────────────
│   ├── CUSTOMIZATION.md       커스텀 에이전트/커맨드/스킬 추가법
│   ├── CONTRIBUTING.md        기여 가이드 (PR 프로세스)
│   └── DEVELOPMENT.md         로컬 개발 환경 가이드
│
└── 문제 해결 ────────────────────────────
    └── TROUBLESHOOTING.md     훅/MCP/스킬 문제 진단
```

### 14.2 디자이너 필독 문서 (우선순위)

| 순서 | 문서 | 이유 |
|------|------|------|
| 1 | **TEAM-ONBOARDING.md** | 전체 개요, 핵심 개념, 첫 실습 |
| 2 | **COMMANDS-REFERENCE.md** | 17개 커맨드 빠른 참조 |
| 3 | **SCENARIO-GUIDES.md** | 실전 워크플로우 예시 |
| 4 | **AGENTS-MANUAL.md** | 에이전트 협업 패턴 |
| 5 | **SKILLS-ACTIVATION.md** | 자동 활성 스킬 이해 |

---

## 15. 자주 묻는 질문

### Q1: "에이전트랑 커맨드 차이가 뭔가요?"

**에이전트** = 역할 (누가 하느냐)
**커맨드** = 작업 (무엇을 하느냐)

```
/enf:design-feature 실행 → architecture-expert가 담당
/enf:code-review 실행 → dev-assistant가 담당
/enf:perf-audit 실행 → performance-expert가 담당
```

### Q2: "스킬은 언제 활성화되나요?"

대화 중에 관련 **키워드가 나오면 자동 활성화**됩니다.

```
"로그인 폼을 만들어줘" → better-auth 스킬 자동 활성
"테이블 스키마 추가해줘" → drizzle 스킬 자동 활성
"버튼 스타일 바꿔줘" → tailwind-v4-shadcn 스킬 자동 활성
```

### Q3: "MCP 서버가 안 되면요?"

**context7**: 네트워크 필요. 오프라인이면 Claude 자체 지식 사용
**next-devtools**: `pnpm dev` 실행 중에만 작동. 개발 서버가 꺼져 있으면 비활성

### Q4: "훅이 경고를 띄우면요?"

훅은 **코드 품질을 보호하는 장치**입니다.

| 경고 | 의미 | 대응 |
|------|------|------|
| `.env 파일 수정됨` | 비밀 정보가 포함된 파일 | 커밋에 포함하지 않기 |
| `스키마 변경 감지` | DB 구조 변경 | `npx drizzle-kit push` 실행 |
| `'use server' 누락` | Server Action에 필수 | 파일 상단에 추가 |
| `인증 검사 누락` | 보안 위험 | auth.api.getSession 추가 |

### Q5: "이 시스템으로 디자인 시안도 만들 수 있나요?"

**가능합니다.** `DESIGN-PROMPT-SYSTEM.md`와 이 문서를 조합하면:

1. 이 문서 → Claude 아키텍처 이해 (어떻게 구현되는지 파악)
2. DESIGN-PROMPT-SYSTEM.md → 디자인 프롬프트 작성 (무엇을 만들지 지시)
3. Claude Code 실행 → 실제 코드 생성

```
이해(이 문서) + 지시(프롬프트 시스템) = 정교한 결과물
```

### Q6: "디자이너가 직접 커맨드를 실행해도 되나요?"

**네.** 특히 아래 커맨드는 디자이너도 바로 사용 가능:

| 커맨드 | 위험도 | 설명 |
|--------|--------|------|
| `/enf:init` | 안전 | 읽기 전용 — 프로젝트 안내 |
| `/enf:health` | 안전 | 읽기 전용 — 버전 확인 |
| `/enf:design-feature` | 안전 | 설계만 — 코드 변경 없음 |
| `/enf:code-review` | 안전 | 분석만 — 코드 변경 없음 |
| `/enf:perf-audit` | 안전 | 분석만 — 코드 변경 없음 |
| `/enf:task` | 주의 | Git 브랜치 생성됨 |
| `/enf:commit` | 주의 | 코드 커밋됨 |
| `/enf:push` | 주의 | 원격 저장소에 반영 |

---

*이 문서는 `agents/`, `commands/`, `skills/`, `docs/`, `hooks/`, `scripts/`, `.claude-plugin/`, `.mcp.json` 파일 전체를 기반으로 작성되었습니다.*
*디자인 프롬프팅 가이드는 `specs/DESIGN-PROMPT-SYSTEM.md`를 참조하세요.*

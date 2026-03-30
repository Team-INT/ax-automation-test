# design-spec.md 템플릿 (Quick Reference)

> 상세 버전: `specs/role-separation-methodology/design-spec-template.md`

## 구조

```markdown
# Design Spec: {프로젝트명}

> 생성일: {날짜}
> 기반 카피: copy.md
> 디자인 도구: Variant / Figma
> 컨셉 키워드: {3-5개}

## 1. 디자인 톤 (Hero 기준)

### 컬러 팔레트
| 용도 | Hex | CSS Variable |
|------|-----|-------------|
| Primary | #xxx | --color-primary |
| Secondary | #xxx | --color-secondary |
| Accent | #xxx | --color-accent |
| Surface | #xxx | --color-surface |
| Text | #xxx | --color-text |

### 타이포그래피
| 용도 | 폰트 | Desktop | Mobile | CSS Variable |
|------|------|---------|--------|-------------|
| Headline | {font} | 56px | 32px | --font-heading |
| Body | {font} | 16px | 15px | --font-body |

### 여백 & 레이아웃
섹션 간격, 그리드, 카드 스타일 정의

### 인터랙션 기본값
duration, easing, hover scale/shadow, focus ring

## 2. 섹션별 디자인 스펙
각 섹션: 레이아웃, 배경, 이미지, 인터랙션, Copy 매핑, Variant 코드 참조

## 3. 외부 도구 산출물
Variant 코드 / Figma URL

## 4. 디자인 시스템 토큰
Tailwind @theme 블록

## 5. 반응형 브레이크포인트
Mobile (0-767) / Tablet (768-1023) / Desktop (1024-1439) / Wide (1440+)
```

## 핵심 규칙

| DO | DON'T |
|----|-------|
| 모든 값 CSS 변수로 | 하드코딩된 hex/px만 |
| 섹션별 Copy 매핑 명시 | copy.md 참조 없이 |
| Desktop/Mobile 값 모두 | 단일 크기만 |
| Variant 코드 그대로 첨부 | 코드 생략/수정 |
| 인터랙션 수치 (0.3s, 1.02) | "부드럽게", "적당히" |

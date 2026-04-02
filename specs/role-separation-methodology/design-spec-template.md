# design-spec.md 템플릿

> `/enf:design-guide` 커맨드의 출력 형식.
> `design-director` 에이전트가 이 형식에 맞춰 디자인 스펙을 생성한다.

---

## 사용법

1. `copy.md` 검증 통과 후 `/enf:design-guide` 실행
2. 에이전트가 Variant/Figma 작업 가이드 + 이 형식의 `design-spec.md` 생성
3. 사용자가 디자인 검수 (톤 일관성, 카피 무결성)
4. 통과 시 `/enf:design-implement`의 입력으로 사용

---

## 템플릿

```markdown
# Design Spec: {프로젝트/페이지명}

> 생성일: {날짜}
> 기반 카피: copy.md
> 디자인 도구: {Variant / Figma / 기타}
> 컨셉 키워드: {3-5개, 예: "강렬한", "신뢰감", "미니멀"}

---

## 1. 디자인 톤 (Hero 기준)

> 히어로 섹션에서 결정된 톤이 전체 사이트에 적용됩니다.

### 컬러 팔레트

| 용도 | 이름 | Hex | CSS Variable |
|------|------|-----|-------------|
| Primary | {이름} | {#000000} | `--color-primary` |
| Secondary | {이름} | {#000000} | `--color-secondary` |
| Accent | {이름} | {#000000} | `--color-accent` |
| Surface | {이름} | {#000000} | `--color-surface` |
| Surface Alt | {이름} | {#000000} | `--color-surface-alt` |
| Text Primary | {이름} | {#000000} | `--color-text` |
| Text Secondary | {이름} | {#000000} | `--color-text-secondary` |

### 타이포그래피

| 용도 | 폰트 | Weight | 크기 (Desktop) | 크기 (Mobile) | CSS Variable |
|------|------|--------|---------------|--------------|-------------|
| Headline | {폰트명} | {700} | {56px} | {32px} | `--font-heading` |
| Subheading | {폰트명} | {600} | {24px} | {18px} | `--font-heading` |
| Body | {폰트명} | {400} | {16px} | {15px} | `--font-body` |
| Caption | {폰트명} | {400} | {14px} | {13px} | `--font-body` |

### 여백 & 레이아웃

| 항목 | 값 | 비고 |
|------|-----|------|
| 섹션 간격 | {120px / 80px mobile} | |
| 콘텐츠 최대 너비 | {1280px} | |
| 그리드 컬럼 | {12 / 4 mobile} | |
| 그리드 갭 | {24px / 16px mobile} | |
| 카드 패딩 | {32px / 20px mobile} | |
| 카드 라운드 | {12px} | |

### 인터랙션 기본값

| 항목 | 값 |
|------|-----|
| Transition Duration | {0.3s} |
| Easing | {ease-out} |
| Hover Scale | {1.02} |
| Hover Shadow | {0 8px 24px rgba(0,0,0,0.12)} |
| Focus Ring | {2px solid var(--color-accent)} |

---

## 2. 섹션별 디자인 스펙

### 섹션 1: Hero

- **레이아웃**: {예: 좌측 텍스트 60% + 우측 이미지 40%, 수직 중앙 정렬}
- **배경**: {예: 다크 그래디언트 오버레이, #1a1a2e → transparent}
- **이미지**: {예: 히어로 제품 스크린샷, aspect-ratio 16:9}
- **인터랙션**: {예: 헤드라인 fade-in 0.6s, 서브카피 fade-in 0.8s delay}
- **Copy 매핑**: `copy.md` > 섹션 1: Hero
- **Variant 코드 참조**: {파일명 또는 코드 블록 ID}

### 섹션 2: Problem

- **레이아웃**: {예: 3컬럼 카드 그리드, 중앙 정렬}
- **배경**: {예: var(--color-surface-alt)}
- **카드 스타일**: {예: 아이콘 상단, 숫자 강조(accent 컬러), 설명 하단}
- **인터랙션**: {예: 스크롤 시 카드 stagger fade-in, 0.2s 간격}
- **Copy 매핑**: `copy.md` > 섹션 2: Problem
- **Variant 코드 참조**: {파일명 또는 코드 블록 ID}

### 섹션 3: Service

- **레이아웃**: {예: 좌우 교차 배치, 특징 1은 좌이미지-우텍스트, 특징 2는 반대}
- **배경**: {예: var(--color-surface)}
- **특징 카드**: {예: 번호 뱃지 + 아이콘 + 제목 + 설명 + 수치}
- **인터랙션**: {예: 스크롤 시 좌/우에서 slide-in}
- **Copy 매핑**: `copy.md` > 섹션 3: Service
- **Variant 코드 참조**: {파일명 또는 코드 블록 ID}

### 섹션 4: Testimonials

- **레이아웃**: {예: 캐러셀, 한 번에 1개 표시, 양쪽 화살표}
- **카드 스타일**: {예: 큰 따옴표 아이콘, 인용문 이탤릭, 이름/직함 하단, 수치 뱃지}
- **배경**: {예: 다크 섹션, var(--color-primary)}
- **인터랙션**: {예: 자동 슬라이드 5초, 호버 시 정지}
- **Copy 매핑**: `copy.md` > 섹션 4: Testimonials
- **Variant 코드 참조**: {파일명 또는 코드 블록 ID}

### 섹션 5: CTA

- **레이아웃**: {예: 중앙 정렬, 최대 너비 640px}
- **배경**: {예: 그래디언트 accent → primary}
- **버튼 스타일**: {예: 큰 버튼, 흰색 배경, primary 텍스트, hover brightness(1.1)}
- **신뢰 요소**: {예: 뱃지 가로 배열, 작은 아이콘 + 텍스트}
- **인터랙션**: {예: CTA 버튼 pulse 애니메이션}
- **Copy 매핑**: `copy.md` > 섹션 5: CTA
- **Variant 코드 참조**: {파일명 또는 코드 블록 ID}

---

## 3. 외부 도구 산출물

### Variant 내보내기

> 각 섹션의 Variant 코드를 아래에 첨부하거나 파일 경로를 기재합니다.

**Hero 섹션:**
```html
<!-- Variant에서 내보낸 코드 붙여넣기 -->
```

**Problem 섹션:**
```html
<!-- Variant에서 내보낸 코드 붙여넣기 -->
```

(이하 동일)

### Figma 참조 (선택)

- **Figma URL**: {figma.com/design/...}
- **nodeId**: {nodeId}

---

## 4. 디자인 시스템 토큰

> 구현 단계에서 Tailwind `@theme`에 적용할 CSS 변수입니다.

```css
@theme {
  /* Colors */
  --color-primary: {#hex};
  --color-secondary: {#hex};
  --color-accent: {#hex};
  --color-surface: {#hex};
  --color-surface-alt: {#hex};
  --color-text: {#hex};
  --color-text-secondary: {#hex};

  /* Typography */
  --font-heading: "{폰트명}", sans-serif;
  --font-body: "{폰트명}", sans-serif;

  /* Spacing */
  --section-gap: 120px;
  --section-gap-mobile: 80px;
  --content-max-width: 1280px;
  --card-padding: 32px;
  --card-radius: 12px;
}
```

---

## 5. 반응형 브레이크포인트

| 구간 | 범위 | 그리드 | 비고 |
|------|------|--------|------|
| Mobile | 0 - 767px | 1컬럼 (4col) | 터치 최적화, 패럴랙스 비활성 |
| Tablet | 768 - 1023px | 2컬럼 (8col) | |
| Desktop | 1024 - 1439px | 3-4컬럼 (12col) | |
| Wide | 1440px+ | 12col, max-width 적용 | |
```

---

## 작성 원칙

### DO (이렇게 쓴다)

- 모든 값을 **CSS 변수**로 정의한다 (하드코딩 금지)
- 각 섹션에 **Copy 매핑**을 명시한다 (`copy.md`의 어느 섹션인지)
- **반응형 값**을 Desktop/Mobile 모두 기재한다
- Variant 코드를 **그대로** 첨부한다 (수정 금지)
- 인터랙션에 **구체적 수치**를 넣는다 (0.3s, 30px, 1.02)

### DON'T (이렇게 쓰지 않는다)

- `copy.md`의 카피를 **수정**하지 않는다 (카피는 Step 1에서 확정)
- "적당히", "예쁘게" 같은 **주관적 표현** 사용 금지
- Variant 코드를 **생략**하지 않는다
- 디자인 토큰 없이 **인라인 값**만 사용 금지

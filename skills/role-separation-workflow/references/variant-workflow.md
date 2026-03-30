# Variant 워크플로우 (Quick Reference)

> 상세 버전: `specs/role-separation-methodology/variant-workflow.md`

## 작업 순서

### 1. 히어로 (톤 설정)

```
다음 히어로 섹션을 {톤 키워드}한 톤으로 디자인해줘.

{copy.md Hero 섹션 전체 붙여넣기}

조건:
- {배경 방향}
- 헤드라인을 가장 크게
- CTA 버튼은 accent 컬러로 눈에 띄게
```

→ 여러 변형 중 톤 선택 (컬러, 밀도, 레이아웃)

### 2. 후속 섹션 (체이닝)

1. 히어로 디자인에서 **"New Chat from Design"** 클릭
2. copy.md 해당 섹션 **원문 붙여넣기** (필수!)

```
위 디자인과 같은 톤으로 다음 {섹션명}을 디자인해줘.

{copy.md 해당 섹션 전체 붙여넣기}

조건:
- 위 히어로와 동일한 컬러/폰트/여백
- {레이아웃 지시}
```

→ Problem → Service → Testimonials → CTA 순서

### 3. 내보내기

1. 각 섹션 "Open in" → "Claude Code" 선택
2. 5개 섹션 코드 모두 복사
3. Claude Code에 붙여넣기

## 주의사항

| O 올바른 방법 | X 잘못된 방법 |
|-------------|-------------|
| "New Chat from Design" 체이닝 | 매 섹션 처음부터 새로 생성 |
| copy.md 원문 그대로 붙여넣기 | "적당히 문구를 만들어줘" |
| 히어로 톤 기반 확장 | 매 섹션 새로운 스타일 |
| Strong 값/셔플로 조정 | 프롬프트로 장황한 설명 |

## Figma 대안

Figma MCP 도구 사용:

```
get_design_context(fileKey, nodeId)  → 코드 + 스크린샷
get_variable_defs(fileKey)           → 디자인 토큰
```

Figma URL을 `/enf:design-guide --figma "URL"`로 전달.

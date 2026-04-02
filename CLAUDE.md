# CLAUDE.md

> Claude Code가 이 프로젝트에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

**etvibe-nextjs-fullstack (enf)** - Claude Code 플러그인
- Next.js 16 + Drizzle ORM + Better Auth 풀스택 개발을 위한 AI-First 워크플로우 플러그인
- 6개 Agents, 17개 Commands, 7개 Skills, 2개 MCP 서버로 구성

## 프로젝트 구조

```
.claude-plugin/     # 플러그인 매니페스트 (plugin.json, marketplace.json)
agents/             # 에이전트 정의 (*.md) - 6개
commands/           # 커맨드 정의 (*.md) - 17개
skills/             # 스킬 정의 (디렉토리별) - 7개
hooks/              # PostToolUse 훅 (hooks.json)
scripts/            # 셋업 스크립트 (setup.sh, setup.ps1, post-write-check.sh)
specs/              # 프로젝트 스펙 문서, 디자인 시스템 가이드
docs/               # 사용자 문서
```

## Git 워크플로우

- **main**: 릴리스 브랜치 (보호됨)
- **dev**: 개발 통합 브랜치 - 모든 작업 브랜치는 dev에서 분기
- **작업 브랜치**: `feat/`, `fix/`, `chore/`, `docs/` 등 → dev로 PR
- main → dev 자동 동기화: `.github/workflows/sync-dev-from-main.yml`

## 브랜치 네이밍

```
<type>/<short-description>
예: feat/customer-login, fix/email-validation, chore/dev-env-setup
```

## 커밋 컨벤션

Conventional Commits 사용:
```
feat: 새 기능
fix: 버그 수정
chore: 빌드/설정 변경
docs: 문서 수정
refactor: 리팩토링
style: 코드 스타일
test: 테스트
```

## 플러그인 개발 시 주의사항

- 에이전트/커맨드/스킬 파일은 모두 Markdown 형식
- `.mcp.json`에 MCP 서버 설정 (context7, next-devtools)
- `hooks/hooks.json`에 PostToolUse 훅 정의
- `scripts/post-write-check.sh`가 Write/Edit 후 자동 실행됨
- 플러그인 버전은 `.claude-plugin/plugin.json`에서 관리

## 대상 기술 스택 (플러그인이 지원하는 스택)

| 기술 | 버전 |
|------|------|
| Next.js | 16.x (App Router + Turbopack) |
| React | 19.x (Server Components) |
| Drizzle ORM | 0.45.x (PostgreSQL) |
| Better Auth | 1.4.x |
| Tailwind CSS | 4.x |
| shadcn/ui | latest |
| TypeScript | 5.x |

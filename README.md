# GitHub Actions & Discussions 스터디

GitHub Actions와 Discussions를 **이론(소개 · 구동원리 · 외부 활용 사례)** 과 **실습(Lab 0~7)** 으로 한 번에 익히는 저장소입니다. 병렬 작업을 위한 **Git worktree** 이론도 함께 다룹니다.

- 슬라이드: [`slides/index.html`](slides/index.html)
  - Lab 4를 마치면 `https://<계정>.github.io/github-actions-discussions-study/` 에서 볼 수 있습니다.
  - 넓은 화면에서는 ← → 키로 넘기고, 휴대폰에서는 위아래로 스크롤해 읽습니다.

## 구성

```
.github/
  workflows/
    01-hello.yml               # Lab 1  수동 실행, 입력값, 로그·요약
    02-ci.yml                  # Lab 2  matrix CI (OS 2 x Node 2)
    03-artifact.yml            # Lab 3  잡 연결, outputs, 아티팩트
    04-pages.yml               # Lab 4  슬라이드를 GitHub Pages로 배포
    05-discussion-welcome.yml  # Lab 6  새 Discussion에 자동 환영 댓글
    06-announce.yml            # Lab 7  워크플로로 공지 Discussion 게시
  DISCUSSION_TEMPLATE/
    q-a.yml                    # Lab 5  Q&A 카테고리 글쓰기 폼
labs/sample-app/               # Lab 2  테스트 대상 예제 (node --test, 의존성 없음)
slides/index.html              # 이론 + 실습 슬라이드 (48장, Git worktree 포함)
```

## 실습 순서

| Lab | 할 일 | 필요한 설정 |
| --- | --- | --- |
| 0 | 저장소 Fork(스터디원) 후 Actions 탭에서 워크플로 활성화 | - |
| 1 | Actions → **01 Hello Actions** → Run workflow | - |
| 2 | 브랜치에서 `labs/sample-app/src/math.js` 를 깨뜨리고 PR → 빨간 체크 확인 후 수정 | - |
| 3 | **03 Artifact & Job 연결** 실행, Artifacts 다운로드 | - |
| 4 | **Settings → Pages → Source: GitHub Actions** 후 **04 Deploy slides to Pages** 실행 | Pages |
| 5 | **Settings → General → Features → Discussions** 체크, Q&A에 질문 올리고 답변 채택 | Discussions |
| 6 | 아무 카테고리에 글 작성 → 봇 환영 댓글 확인 | Discussions |
| 7 | **06 공지 Discussion 게시** 실행 → Announcements 새 글 확인 | Discussions |

각 Lab의 자세한 단계와 과제는 슬라이드 Part 6에 있습니다. Lab 2는 Part 5의 worktree 방식으로도 해 볼 수 있습니다.

## 막혔을 때

- **Run workflow 버튼이 없다**: `workflow_dispatch` 가 있는 파일이 기본 브랜치에 있어야 합니다.
- **`Resource not accessible by integration`**: 워크플로의 `permissions:` 에 필요한 권한을 추가하세요.
- **Discussion 워크플로가 안 돈다**: Discussions가 켜져 있는지, 글을 사람이 직접 썼는지 확인하세요. `GITHUB_TOKEN` 으로 만든 글은 다른 워크플로를 깨우지 않습니다.

질문은 이 저장소의 Discussions → **Q&A** 에 남겨 주세요.

## 참고

- https://docs.github.com/actions
- https://docs.github.com/discussions
- https://git-scm.com/docs/git-worktree
- https://skills.github.com

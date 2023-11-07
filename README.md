# vite를 이용한 포트폴리오 사이트 만들기

## vite를 사용하는 이유
Vite는 JavaScript 애플리케이션을 개발하기 위한 빠르고 경량화된 도구입니다.
Vite는 주로 프레임워크와 함께 사용되며, 더 빠르고 효율적인 웹 애플리케이션 개발을 위해 개발자들에게 선택되고 있습니다.
[vite](https://ko.vitejs.dev/guide/)

1. ES 모듈 지원
Vite는 기본적으로 ES 모듈을 사용하며, 이는 각 파일을 개별적인 모듈로 취급하여 개별 모듈을 로드할 수 있게 합니다. 이는 빠른 로딩 속도를 가능케 합니다.

2. 빠른 개발 환경
Vite는 개발 서버를 사용하여 빠른 개발 환경을 제공합니다. 파일 단위의 핫 모듈 교체(HMR)를 사용하여 코드 변경 사항을 즉시 반영하고, 브라우저에서 새로 고침 없이 수정된 내용을 확인할 수 있습니다.

3. 플러그인 기반의 아키텍처
Vite는 플러그인 기반의 아키텍처를 사용하여 사용자 정의 도구 및 기능을 통합할 수 있습니다. 이는 Vite를 다른 프레임워크나 도구와 통합하여 사용 가능하게 합니다.

4. 설정의 간소화
Vite는 기본적으로 간단한 설정을 가지고 있으며, 추가적인 설정 없이도 기본적으로 동작합니다. 필요한 경우 설정을 추가하거나 수정할 수 있습니다.

5. 성능 및 번들링 최적화
Vite는 초기 구동 속도가 빠르며, 코드 번들링을 필요할 때만 처리하여 성능을 최적화합니다.

6. 다양한 프레임워크 지원
비록 Evan You가 Vue.js 개발자이지만, Vite는 다른 프레임워크 및 라이브러리 (React, Svelte, 등)와도 함께 작동할 수 있습니다.

## 구현 기능
- 구글 폰트 적용
- smooth 효과 적용 https://lenis.studiofreight.com/
- 자바스크립트 메뉴 클릭 이동 효과 적용
- GSAP를 이용한 가로 효과
- JavaScript 모듈 기능 적용
- 웹표준 준수를 위한 스킵 메뉴 및 aria, role 적용
- vite 빌드 작업 `npm run build`
- netilfy 배포 작업

## 트러블 슈팅
<details>
<summary>git 업로드 버그</summary>
권한으로 인한 업로드 버그 현상이 생김 > 해결
git remote set-url origin https://webstoryboy@github.com/webstoryboy/vite-project2023.git
</details>

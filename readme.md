# 원티드 프리온보딩 프론트엔드 3팀 - Assignment #5

> 투자 관리 서비스의 관리자 기능 서비스
>
> 프로젝트 기간 : 2022년 11월 12일 ~ 2022년 11월 18일
>
> #### [배포링크](https://wanted-dnc-3.herokuapp.com/)
> 아래의 아이디와 비밀번호로 접속해주세요.

```zsh
아이디:test@test.com
비밀번호:12341234
```

🚨 _사용자 목록에서 계좌수를 json-server api를 이용해 불러오려 했으나 실패하여 결국 `Math.random` 으로 구현했으니 참고바랍니다. 나중에 이 부분은 꼭 구현해서 수정하도록 하겠습니다!_

</br>

## 📖 목차

- [실행 방법](#%EF%B8%8F-실행-방법)
- [협업 과정](#-협업-과정)
- [Best Practice 및 채택 근거](#%EF%B8%8F-best-practice-및-채택-근거)
- [팀 코드 컨벤션](#-팀-코드-컨벤션)
- [사용 기술](#-사용-기술)
- [폴더 구조](#폴더-구조)
- [팀원](#-팀원)

</br>

## ⌨️ 실행 방법

```zsh
$ git clone https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-2-3.git
$ npm install
$ npm run dev
```

</br>

## 📃 협업 과정

1. 비동기적 소통을 위해 노션 워크스페이스에서 프로젝트를 페이지와 컴포넌트로 나누고 미팅 로그와 주요 코드를 공유하여 개발 효율을 높이고자 노력했습니다.

   > [노션 링크](https://www.notion.so/2-1-498c225b2d814eb8b77bf1d6d312037d)

2. 본 프로젝트는 동료학습에 최적화된 과정을 찾아가며 진행했습니다. [VSC Live Code extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)을 활용하여 라이브 코드 리뷰를 진행하고 각자 구현한 코드에 대한 피드백을 진행하여 Best Practice를 추가해 나가는 과정을 거쳤습니다. 후의 리팩토링도 동일한 과정을 거쳐 진행하였습니다.

3. 소통 플랫폼으로 게더타운과 디스코드를 활용해서 협업을 진행했습니다.

</br>

## ☑️ Best Practice 및 채택 근거

### 1. TypeScript

- [ ] TypeScript는 정적 타입을 지원하므로 컴파일 단계에서 오류를 포착할 수 있는 장점이 있습니다. 코드의 `가독성`을 높이고 예측할 수 있게 하며 `디버깅`이 쉽다는 장점에 모두 공감해서 채택했습니다. 명시적인 정적 `타입 지정`은 팀 단위로 협업 시에 의도를 명확하게 코드로 기술할 수 있다는 점에서도 의견을 모았습니다.


### 2. TanStack React-Query

- [ ] 서버 상태와 비동기 호출을 react query로 관리하였고 데이터의 형태와 적합성 그리고 앱의 동작 흐름을 고려하여 `stale time`과 `cache time`을 설정했습니다.

- [ ] 계좌목록에서는 금액과 같이 변동성이 큰 데이터는 staleTime과 cacheTime을 짧게(2000ms) 설정해서 최신 데이터를 받아오도록 했습니다.

- [ ] 사용자 목록에서는 민감한 정보를 다루지 않기 때문에 staleTime과 cacheTime 을 길게 설정하고 사용자 추가, 수정, 삭제가 될 때 `invalidateQueries`를 사용, 데이터를 비교해 최신의 데이터를 UI로 출력하게 했습니다.

- [ ] 캐싱 기능을 제공하는 react query의 장점을 살리기 위해, 다음 페이지에 대한 data를 prefetch하여, 페이지 이동 시, prefetch된 데이터를 바로 보여줄 수 있게 하였습니다. react-query는 queryClient의 prefetch API를 제공하고 있는데, 저희는 prefetch API 대신, useQuery를 이용하여 prefetch를 구현했습니다. 저희는 데이터 캐싱 자체와, 그 값을 이용해, 현재 페이지가 maxPage인지 판단까지 할 수 있도록 하는 2가지 목적을 위해 prefetch를 구현했는데, prefetch API는 실제 값을 return 하지는 않아, 저희 목적에 맞지 않았습니다.


   ![3-2 캐싱 및 stale time](https://user-images.githubusercontent.com/78708082/202600627-517f3916-5409-4e31-b9b6-10570de043d8.gif)

### 3. API 함수 관리(model, query, repository) 및 OOP

- [ ] 계좌 정보와 유저 정보 관련 api 코드들을 분리하여 작성하여 추상화했습니다. api코드와 query코드를 추상화하여 관심사를 분리하고 재사용성을 높였습니다.

- [ ] react-query는 캐시받아 저장하고 다루기 때문에 DB 형태와 비슷하다고 판단했습니다. 기본적으로 스키마를 정의하고, 불러오는 레파지토리를 만들고, DB 에 넣는 쿼리를 가지는 형태의 데이터 저장방식을 모방해 현재의 아키텍쳐를 적용 반영했습니다.

- [ ] 레파지토리를 class 객체로 만들게 된 이유는 서로 비슷한 기능을 하는 api 들이기 때문에 parameter 설정이나 기타 axios 설정 값을 공유할 수 있을 거라는 예측에 기반했습니다. 각 api 호출 기능들을 멤버함수로써 다뤄 api안에 api를 호출될 수 있는 상황을 대비했습니다.

>[model.ts](https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-2-3/blob/main/src/shared/User-query/User.model.ts)
>
>[query.ts](https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-2-3/blob/main/src/shared/User-query/User.query.ts)
>
>[repository.ts](https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-2-3/blob/main/src/shared/User-query/User.repository.ts)
### 4. 전역상태관리(Jotai)

  - [ ] 계좌목록 페이지 내 검색을 포함한 필터링 데이터 상태 관리에 Jotai를 사용했습니다.

  - [ ] 내장 hook useAtom을 사용해 accountQueryParams state를 관리하며 페이지의 이동과 새로고침에도 유지되도록 구현하였습니다.
 
 
    ![3-2 필터링](https://user-images.githubusercontent.com/78708082/202600614-b5ebf645-da88-4a8b-9586-69d245c35460.gif)


### 5. 클라이언트 환경에서 예외처리(React Hook Form) 

 - [ ] Log in 페이지에 있는 input과 사용자추가시 팝업으로 뜨는 modal 의 input에 react-hook-form을 적용하여 input에 입력되는 value의 validation을 체크했습니다.
 
 - [ ] validation이 맞지 않으면 form이 submit되지 못하도록 했습니다.

 - [ ] 그리고 validation이 맞아서 submit에 성공하여 서버로 정보가 전송되었다 하더라도 서버에서 에러가 발생했을 경우, 에러 modal이 팝업되도록 했습니다.


    ![신규유저 modal 예외처리](https://user-images.githubusercontent.com/78708082/202603149-01623453-156e-49ae-98f5-a5f98aff5355.gif)


### 6. API 호출 횟수 최적화

  - [ ] 검색창에 검색어를 입력했을 때 onChange 이벤트가 발생할 때마다 서버에 GET 요청을 보내는 것은 비효율적인 프로세스라고 공통된 의견을 나누었습니다.

  - [ ] 따라서 첫 onChange 이벤트의 발생 시점으로부터 의도적인 `지연시간`을 두어 API 호출 횟수를 줄였습니다.

  - [ ] 검색창의 onChange 이벤트가 비동기적으로 input의 상태 값을 업데이트하되, 사용자가 입력한 검색 결과에 대한 비동기 요청은 `디바운싱 함수`에서 설정한 시간(600ms)이 지난 뒤에 최종적으로 업데이트된 상태 값을 쿼리 스트링으로 보내 호출되게 구현했습니다.


    ![3-2 디바운싱](https://user-images.githubusercontent.com/78708082/202603187-dfcdc050-7955-48f0-93f4-bdb7837301af.gif)
    
    https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-2-3/blob/1a2a6645b26e03c43a5f261a2a9e6df1d80b288f/src/hooks/useDebounce.ts#L1-L17

### 7. 페이지 별 접근 권한 관리

  - [ ] 라우팅 페이지에서 Route상단에 RequireAuth컴포넌트를 두어 페이지별 인가를 구현하였습니다.

  - [ ] RequireAuth 컴포넌트 내부에서 props를 통해 전달받은 isAuthRequire와, 로그인 성공 후 cookies에 저장하는 access_token 값의 유무를 기준으로 4단계로 나누어 리다이렉팅 하였습니다.

  - [ ] server에 존재하는 authorize token의 만료 시간이 지나면 관련한 모든 api의 호출에서 401.

  - [ ] 따라서 기존에 로그인 후 localStorage 저장하던 access_token을 서버의 authorize token 만료시간(1시간)과 일치시켜 로그아웃 될 수 있도록 하였습니다.
  
   https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-2-3/blob/0c03f6ae295144ab640c3a061a3b2a04fb3f19b5/src/utils/auth/RequireAuth.tsx#L1-L24

## 🔒 팀 코드 컨벤션

- [ ] git commit message

| 커밋명   | 내용                                        |
| -------- | ------------------------------------------- |
| feat     | 파일, 폴더, 새로운 기능 추가                |
| fix      | 버그 수정                                   |
| docs     | 제품 코드 수정 없음                         |
| style    | 코드 형식, 정렬, 주석 등의 변경             |
| refactor | 코드 리팩토링                               |
| test     | 테스트 코드 추가                            |
| chore    | 환경설정, 빌드 업무, 패키지 매니저 설정등.. |
| hotfix   | 치명적이거나 급한 버그 수정                 |
| remove   | 사용하지 않는 변수, 파일 etc 삭제           |
| working  | 이미 만들어진 기능, 함수 작업중             |
| merge    | branch merge                                |

- [ ] branch

| 브랜치명 | 내용                         |
| -------- | ---------------------------- |
| develop  | 파일, 폴더, 새로운 기능 추가 |
| fix      | 버그 수정                    |
| docs     | 제품 코드 수정 없음          |
| refactor | 코드 리팩토링                |
| hotfix   | 치명적이거나 급한 버그 수정  |
| feat     | 새로운 기능 추가             |

</br>

## 🔨 사용 기술

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white"/> <img alt="React" src ="https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white"/> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=TypeScript&logoColor=white"/> ![](https://img.shields.io/badge/-react--query-%23FF4154) ![](https://img.shields.io/badge/axios-551a8b?style=flat-square&logo=axios&logoColor=white) ![](https://img.shields.io/badge/-json--server-%237c007c) 
![](https://img.shields.io/badge/-universal--cookie-%23e0b077) <img alt="styled-components" src ="https://img.shields.io/badge/styled components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> <img alt="recoil" src ="https://img.shields.io/badge/recoil-4082bc?&style=flat&logo=Recoils&logoColor=white"/> <img alt="Git" src ="https://img.shields.io/badge/Git-F05032?&style=flat&logo=Git&logoColor=white"/> <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717?&style=flat&logo=GitHub&logoColor=white"/> <img alt="Notion" src ="https://img.shields.io/badge/Notion-green?&style=flat&logo=Notion&logoColor=white"/>



</br>

## 📦 폴더 구조

```
📂  src
│  ├─ App.tsx
│  ├─ apis
│  │  ├─ httpClient.ts
│  │  ├─ index.ts
│  │  └─ investmentService.ts
│  ├─ assets
│  │  └─ December&Company.jpeg
│  ├─ components
│  │  ├─ InvestmentAccountList
│  │  │  ├─ Account-query
│  │  │  │  ├─ InvestmentAccount.model.ts
│  │  │  │  ├─ InvestmentAccount.query.ts
│  │  │  │  └─ InvestmentAccount.repository.ts
│  │  │  ├─ InvestmentAccountItem
│  │  │  │  └─ InvestmentAccountItem.tsx
│  │  │  ├─ InvestmentAccountList.style.ts
│  │  │  ├─ InvestmentAccountList.tsx
│  │  │  ├─ atoms
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  ├─ LoginForm
│  │  │  ├─ Login-query
│  │  │  │  ├─ Login.query.ts
│  │  │  │  └─ Login.repository.ts
│  │  │  ├─ LoginErrorModal
│  │  │  │  ├─ LoginErrorModal.style.ts
│  │  │  │  └─ LoginErrorModal.tsx
│  │  │  ├─ LoginForm.style.ts
│  │  │  ├─ LoginForm.tsx
│  │  │  ├─ LoginInput
│  │  │  │  ├─ LoginInput.style.tsx
│  │  │  │  └─ LoginInput.tsx
│  │  │  └─ index.ts
│  │  ├─ NewUserModal
│  │  │  ├─ FileInput
│  │  │  │  ├─ FileInput.style.ts
│  │  │  │  └─ FileInput.tsx
│  │  │  ├─ FunnelButton
│  │  │  │  ├─ FunnelButton.style.ts
│  │  │  │  └─ FunnelButton.tsx
│  │  │  ├─ NewUserModal.style.ts
│  │  │  ├─ NewUserModal.tsx
│  │  │  ├─ UserInput
│  │  │  │  ├─ UserInput.style.ts
│  │  │  │  └─ UserInput.tsx
│  │  │  └─ index.ts
│  │  ├─ UserDetail
│  │  │  ├─ UserDetail.tsx
│  │  │  ├─ UserDetailTableItem.tsx
│  │  │  ├─ UserInfoTable.tsx
│  │  │  ├─ index.ts
│  │  │  └─ types.ts
│  │  ├─ UserList
│  │  │  ├─ DeleteModal
│  │  │  │  ├─ DeleteModal.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ UserList.style.ts
│  │  │  ├─ UserList.tsx
│  │  │  ├─ UserTableItem
│  │  │  │  └─ UserTableItem.tsx
│  │  │  ├─ atoms
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  └─ common
│  │     ├─ Dropdown
│  │     │  ├─ Dropdown.style.ts
│  │     │  └─ Dropdown.tsx
│  │     ├─ Header
│  │     │  ├─ Header.style.ts
│  │     │  └─ Header.tsx
│  │     ├─ Icons
│  │     │  ├─ Lock.tsx
│  │     │  ├─ Logo.tsx
│  │     │  ├─ User.tsx
│  │     │  └─ index.ts
│  │     ├─ Layout
│  │     │  ├─ Layout.style.ts
│  │     │  └─ Layout.tsx
│  │     ├─ Loader
│  │     │  ├─ Loader.style.ts
│  │     │  └─ Loader.tsx
│  │     ├─ PageContainer
│  │     │  ├─ PageContainer.style.ts
│  │     │  └─ PageContainer.tsx
│  │     ├─ PagenationButton
│  │     │  └─ PagenationButton.tsx
│  │     ├─ SEO
│  │     │  └─ SEO.tsx
│  │     ├─ SearchInput
│  │     │  ├─ SearchInput.style.ts
│  │     │  └─ SearchInput.tsx
│  │     ├─ Sider
│  │     │  ├─ Sider.style.ts
│  │     │  └─ Sider.tsx
│  │     └─ Table
│  │        ├─ CustomTableBody.style.ts
│  │        ├─ CustomTableBody.tsx
│  │        └─ CustomTableHead.tsx
│  ├─ constants
│  │  ├─ NewUserInputData.ts
│  │  ├─ dropDownData.ts
│  │  ├─ funnelButtonData.ts
│  │  ├─ routes.ts
│  │  ├─ siderData.ts
│  │  └─ tableData.ts
│  ├─ hooks
│  │  ├─ useDebounce.ts
│  │  ├─ useSignForm.ts
│  │  └─ useUnmountIfClickedOutside.ts
│  ├─ libs
│  │  └─ api
│  │     ├─ auth.ts
│  │     ├─ client.ts
│  │     └─ user.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ InvestmentAccounts
│  │  │  ├─ InvestmentAccounts.tsx
│  │  │  └─ index.ts
│  │  ├─ NotFound
│  │  │  ├─ NotFound.style.ts
│  │  │  ├─ NotFound.tsx
│  │  │  └─ index.ts
│  │  ├─ UserDetail
│  │  │  ├─ UserDetail.tsx
│  │  │  └─ index.ts
│  │  ├─ UserList
│  │  │  ├─ UserList.tsx
│  │  │  └─ index.ts
│  │  └─ login
│  │     ├─ Login.tsx
│  │     └─ index.ts
│  ├─ shared
│  │  └─ User-query
│  │     ├─ User.model.ts
│  │     ├─ User.query.ts
│  │     └─ User.repository.ts
│  ├─ store
│  │  └─ sider.ts
│  ├─ styled.d.ts
│  ├─ styles
│  │  ├─ GlobalStyles.ts
│  │  └─ Theme.ts
│  ├─ utils
│  │  ├─ assetsColorDecider.ts
│  │  ├─ auth
│  │  │  ├─ RequireAuth.tsx
│  │  │  └─ httpResponseUtils.ts
│  │  ├─ convertDate.ts
│  │  ├─ formatBoolean.ts
│  │  ├─ processData.ts
│  │  └─ validator.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

</br>

## 👨‍👩‍👧‍👦 팀원

| 고영훈<br/>(팀장)                                                                                               | 조은지<br/>(팀원)                                                                                                | 김창희<br/>(팀원)                                                                                               | 박정민<br/>(팀원)                                                                                           |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/65995664?s=96&v=4" alt="YeonghunKO" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/95282989?s=96&v=4" alt="Joeunji0119" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/45018724?s=96&v=4" alt="PiperChang" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/55550034?s=96&v=4" alt="ono212" width="100" height="100"> |
| [YeonghunKO](https://github.com/YeonghunKO)                                                                     | [Joeunji0119](https://github.com/Joeunji0119)                                                                    | [PiperChang](https://github.com/PiperChang)                                                                     | [ono212](https://github.com/ono212)                                                                         |

| 문지원<br/>(팀원)                                                                                                | 이상민<br/>(공지)                                                                                               | 이지원<br/>(팀원)                                                                                               | 조수진<br/>(팀원)                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/78708082?s=96&v=4" alt="moonkorea00" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/28257740?s=96&v=4" alt="dltkdals224" with="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/86206374?s=96&v=4" alt="365supprot" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/110365677?v=4" alt="suzz-in" width="100" height="100"> |
| [moonkorea00](https://github.com/moonkorea00)                                                                    | [dltkdals224](https://github.com/dltkdals224)                                                                   | [365support](https://github.com/365support)                                                                     | [suzz-in](https://github.com/suzz-in)                                                                    |

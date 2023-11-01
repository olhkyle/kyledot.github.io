---
title: FineApple Project Retrospect
date: '2023-09-30'
description: '이 글은 진행하였던 FineApple 프로젝트를 진행하면서 겪은 문제와 생각, 그리고 경험들을 인터뷰식으로 정리한 글입니다.'
category: 'Retrospect'
---

> 컴퓨터 / IT, 게임 주제 관련 커뮤니티 서비스로 개발, 배포까지 경험하였던 **FineApple** 프로젝트를 진행하는 가운데 겪었던 문제와 생각, 그리고 경험들을 인터뷰 방식으로 <a href="https://smooth-rain-4fc.notion.site/FineApple-Community-04026de64f5a415596bafff9500591e8">노션</a>에 정리한 경험이 있습니다. 미래의 제 자신을 위한 기록에서 끝나는 것이 아니라, **공유**하고자 이렇게 글을 작성합니다.

> 💿 <b>Service Link</b> ➡️ <a href="https://fineapple-ea261.web.app/" target="_blank">fineapple</a>

> 📎 <b> Github Link</b> ➡️ <a href="https://github.com/JP-s-Children/FineApple" target="_blank">github</a>

<br/>

## 1. A quick wrap-up of the project / 프로젝트를 마무리한 간단한 후기

As our second team project, I'm proud to say that we've built a larger-than-expected project, first as a mock-server using `Express.js` and then as a deployment using `FireBase`.

2번째 팀 프로젝트로, 생각보다 규모 있는 프로젝트를 처음에 `Express.js`를 활용하여 mock-server로 구현한 후에, `FireBase`를 활용해서 배포까지 진행한 것에 대해 뿌듯하게 생각합니다.

<br/>

## 2. My Role and the Features What I implemented in the project / 프로젝트에서 담당한 역할 및 구현한 기능

### FrontEnd development

- Developed AutoComplete UI Component based on keyword search for titles of selected topics and questions in the Select component
- Implemented Infinite Scroll to fetch a page unit list of topic-related questions
- Controlled Routing based on user info and login status, using Higher Order Component(HOC), such as `AuthenticationGuard` Component
- Improved code to proactively fetch Data from the Server and quickly show User a UI with server status, using `Loader` in `React Router`
- Created UI guidelines for colors, font styles, component styling, and layout
- Implemented custom styling of `Mantine` Core components with `Emotion`
- Deployed Frontend with `Firebase` and `Github Actions`

### BackEnd Development

#### 1st Clone Project

- Implemented Backend's API, Mock-Data related CRUD code to be connected when implementing FrontEnd

#### 2nd Project (reflecting the changed plan)

- By actually deploying to `FireBase`, we wrote service code to get data from `FireBase`'s Auth, FireStore, and Storage.

<br/>
<hr>
<br/>

### 프론트엔드 개발

- Select 컴포넌트에서 선택한 주제와 질문의 제목 키워드 검색 기반으로 AutoComplete 컴포넌트 UI 구현
- 주제 관련 질문 목록을 페이지 단위로 가져오는 무한 스크롤 구현
- `AuthenticationGuard`와 같은 고차 컴포넌트(HOC)를 활용하여 유저 정보 및 로그인 상태에 따른 라우팅 제어
- `React Query`와 `React-Router` v6의 `loader`를 활용하여, 서버로부터 데이터를 선제적으로 가져와 사용자에게 서버 상태를 담은 UI를 빠르게 보여줄 수 있도록 코드 개선
- 컬러, 폰트 스타일, 컴포넌트 스타일링 및 레이아웃 관련 UI 가이드 라인 제작
- `Mantine`, `Emotion` 을 활용한 Mantine Core 컴포넌트 커스텀 스타일링
- `Firebase`, `Github Actions`를 활용한 프론트엔드 배포

### 백엔드 개발

#### 1차 클론 프로젝트

- 프론트엔드 구현 시 연결되는 백엔드의 API, Mock-Data 관련 CRUD 코드 구현

#### 2차 변경된 기획을 반영한 프로젝트

- `FireBase`로 실제 배포함으로써, `FireBase`의 Auth, FireStore, Storage로부터 데이터를 가져오는 Service 코드 작성

<br/>

## 3. Memorable implementation features / 기억에 남는 구현 기능

### Implementing the AutoComplete UI

Based on the topics selected in the Select component, we implemented AutoComplete, which filters and displays topics related to the search query when a search term is entered in the Input component.

While not as elegant as a hosted search engine like Algorlia, we used mantine UI to customize the UI in the form of a drop-down for our project and implemented the function to filter the search term to show related topics in order of newest.

I had to think a lot about how to display topics related to the search query using regular expressions and how to efficiently manage the data received from the server.

Thanks to this, I think I improved my understanding of React Query and AutoComplete UI.

### React Router's `loader`

I tried to write code that utilizes the loader to proactively get data and quickly show the UI while combining the data into a component.

For example, when showing a list of questions related to a topic, you can quickly show the UI to the user by showing the loading component while waiting for the data to be received, and then drawing the component containing the data on the screen, rather than showing the UI with the data received afterwards.

<br/>
<hr>
<br/>

### AutoComplete UI 구현

Select 컴포넌트에서 선택한 주제를 기반으로 Input 컴포넌트에서 검색어 입력 시 검색어와 관련된 주제를 필터링하여 보여주는 AutoComplete를 구현하였습니다.

Algorlia와 같은 호스트 검색 엔진처럼 우아한 기술 수준은 아니지만, mantine UI를 활용하여 프로젝트에 맞는 DropDown 형태의 UI로 커스텀하고, 검색어를 필터링하여 관련 주제를 최신 순으로 보여주는 기능을 구현하였습니다.

정규 표현식으로 검색어와 관련된 주제를 보여주는 방법부터 시작하여, 서버로부터 받아온 데이터를 어떻게 효율적으로 관리해 보여줄 지 고민을 많이 하였습니다.

덕분에 `React Query`에 대한 이해도와 AutoComplete UI에 대한 이해도를 높였던 것 같습니다.

### React Router의 `loader`

`loader`를 활용하여 선제적으로 데이터를 가져와 Component에 데이터를 합친 상태에서 빠르게 UI를 보여주는 코드를 작성하는 시도를 하였습니다.

예를 들어, 주제 관련된 질문 목록들을 보여줄 때, 데이터를 받아오기 위해 기다리는 동안 loading 컴포넌트를 보여주고, 이후에 받아온 데이터로 UI를 보여주는 것이 아닌, 데이터가 들어있는 컴포넌트를 화면에 그림으로써 사용자에게 빠르게 UI를 보여줄 수 있습니다.

<br/>

## 4. The most challenging part of writing the code / 코드를 작성하면서 가장 고민했던 부분

- Write consistent code with the same conventions
- Write code with good readability
- Separate components considering reusability
- Remove unnecessary props to avoid unnecessary rendering
- Manage server state and global state
- Component, variable, and function names

<br/>
<hr>
<br/>

- 팀원들과 동일한 컨벤션으로 일관된 코드 작성하기
- 읽기 좋은 코드 작성하기
- 재사용성을 고려한 컴포넌트 분리하기
- 불필요한 리렌더링 방지를 위한 불필요한 props 제거
- 서버 상태와 전역 상태 관리
- 컴포넌트 및 변수, 함수 이름

<br/>

## 5. A memorable tech stack and why I chose it / 기억에 남는 기술 스택과 그 기술 스택을 선택한 이유는?

#### React Query

Managing server state has become an integral part of front-end development. By understanding and efficiently managing server state and cache, you can avoid making unnecessary data fetches to the server.

`React Query` helps you write code declaratively, both when sending data requests to the server and when implementing Concurrent UI with `React Suspense`, so that you, your teammates, and others can write code that's easy to read, even when you come back to it later.

For these reasons, I've found it indispensable, and it's made for a great developer experience.

<br/>
<hr>
<br/>

서버 상태를 관리하는 것은 이제는 프론트엔드 개발에서 빼놓을 수 없는 필수 기능이 되었습니다. 서버 상태와 캐시에 대해 이해하고 효율적으로 관리하면, 불필요하게 서버에게 Data Fetch를 하지 않아도 됩니다.

`React Query`는 서버에게 데이터 요청을 보낼 때 그리고 `React Suspense`와 함께 **Concurrent UI** 패턴을 구현할 때 코드를 선언적으로 작성함으로써 본인 또는 팀원, 그리고 다른 사람들이 나중에 다시 코드를 봤을 때도, 읽기 쉬운 코드를 작성할 수 있도록 도와줍니다.

이러한 이유로 필수 불가결하게 사용해야 한다고 생각하여 도입하게 되었고, 훌륭한 개발자 경험을 하게 되었습니다.

<br/>

## 6. Tech Stacks I'd like to adopt or like to learn / 도입해보고 싶은 기술 스택이나 배워보고 싶은 기술은?

#### 1. Testing Library - Jest, Storybook

If I had developed with team while testing the UI, I could have found bugs that we didn't anticipate and developed efficiently.

#### 2. Global State Library - Redux

I had used `Redux Toolkit` and `RTK Query` in a previous team project (ESC), but I didn't have an understanding of flux patterns or immer at the moment, and I introduced it to the project with weak `JavaScript` basics. So I was busy learning and didn't have time to think about how to write code declaratively and write consistent code.

But, now that I have a good understanding of `React Query` and `Recoil`, I'm thinking about reintroducing `Redux`.

<br/>
<hr>
<br/>

#### 1. 테스팅 라이브러리 - `Jest`, `Storybook`

UI 테스트를 하면서 개발을 진행 하였다면, 우리가 예측하지 못하는 버그를 발견하여 효율적으로 개발할 수 있었을 것 같습니다.

#### 2. 전역 상태 라이브러리 - `Redux`

이전 팀프로젝트(ESC)에서 `Redux Toolkit`과 `RTK Query`를 활용해 보았지만, 당시 **flux** 패턴이나 **immer** 에 대한 이해도가 없었고, 자바스크립트 기본기도 약한 상태에서 프로젝트에 도입하였던터라, 배우기에 바빠 코드를 어떻게 선언적으로 작성할 지, 일관적인 코드를 작성할 수 있을 지 고민하는 시간이 없어서 아쉬었습니다.

기업에서도 많이 사용하고 있는 상황이며, 이제는 `React Query`, `Recoil`에 대한 이해도가 생겼으므로, `Redux`를 다시 도입하여 보면 어떨까 생각해봅니다.

<br/>

## 7. Why I introduce the `Mantine` UI Library / `Mantine` UI Library를 도입한 이유

First, I knew that writing style code using pure `CSS` in less than three weeks would take away from my focus on business logic using `JavaScript`.

Second, I was able to increase my efficiency by writing styling code efficiently and customizing it when needed.

Third, when a component has a lot of style-related code (props) like `tailwindCSS`, the code can get messy, but we thought it would be nice to be able to write information about the component declaratively by passing props about what styles are needed.

Another advantage is that if some complex customization is needed in consultation with team members, we can extend and customize the styles by leveraging `Emotion`, which `Mantine` uses internally.

<br/>
<hr>
<br/>

첫째, 3주도 안되는 기간동안 순수 `CSS`를 활용하여 스타일 코드를 작성하게 되면, `JavaScript`를 활용한 비즈니스 로직에 집중할 수 없을 것 같았습니다.

둘, 효율적으로 스타일 코드를 작성하고, 필요할 때는 커스텀하여 사용함으로써 작업 효율성을 높일 수 있었습니다.

셋째, `tailwindCSS` 처럼 컴포넌트에 스타일과 관련된 코드(prop)가 많아지면, 코드가 지저분해질 수 있지만, 어떤 스타일이 필요한지 prop 전달을 통해 컴포넌트와 관련된 정보를 선언적으로 작성할 수 있다는 장점이 있다고 생각하였습니다.

팀원들과 협의 하에 일부 복잡한 커스텀이 필요한 경우, `Mantine`이 내부적으로 사용하고 있는 `Emotion`을 활용하여 스타일을 확장하여 커스텀하여 사용할 수 있다는 장점도 있습니다.

<br/>

## 8. What I learned from introducing `React Query` | `React Query`를 도입하면서 배운 점

For this project, I introduced `React Query` for the first time to improve unnecessary refetches by managing server state and cache. It was a great experience from a developer experience (DX) perspective, and by writing the code declaratively, I was able to write more readable code.

State can be broadly categorized into local state, global state, and server state. Server state is the data that affects the UI received from the server. In particular, since server state is related to asynchronous processing, it was good to experience the synergy with `React Suspense` and `ErrorBoundary`.

`React Query` also gave me a great experience when I wrote code to proactively fetch data using `React Router`'s `loader` and combine it into a Component to quickly show the UI.

<br/>
<hr>
<br/>

이 프로젝트에 처음으로 `React Query`를 도입하여 서버 상태와 캐시 관리를 통해 불필요한 refetch 개선하였습니다. 개발자 경험(DX) 측면에서 너무 좋은 경험이었고, 코드를 선언적으로 작성함으로써, 가독성이 좋은 코드를 작성할 수 있어 좋았습니다.

상태는 크게 지역상태, 전역상태, 서버상태로 나뉜다고 이야기할 수 있습니다. 서버 상태는 서버로부터 받아온 UI에 영향을 주는 데이터라고 말할 수 있습니다. 특히, 서버 상태는 비동기 처리와 연관이 있기 때문에, `React`의 `Suspense`, `ErrorBoundary`와 함께 활용하면 시너지 효과가 커진다는 것을 직접 경험할 수 있어 좋았습니다.

그리고 `React Router`의 `loader` 를 활용해 선제적으로 데이터를 가져와 Component에 데이터를 합친 상태에서 빠르게 UI를 보여주는 코드를 작성할 때도 `React Query`는 정말 좋은 경험을 하게 도와주었습니다.

<br/>

## 9. Things I've regretted in development / 개발하면서 아쉬웠던 점

- If we had adopted `Typescript`, we could have prevented errors at runtime with type checks.

- I was disappointed that I didn't get a chance to work with the `Zod` and `React-Hook-Form` related to user authentication. I had a chance to understand the code with my teammates through code reviews, but I was disappointed that I didn't get to work on it myself.

- I wrote BackEnd code using `Express` and `Node` when I was working on the project for Apple cloning purposes, but I was disappointed that I didn't get to write BackEnd-related code in depth, such as connecting to a DB.

<br/>
<hr>
<br/>

- `TypeScript`를 도입했다면, 런타임 시점에 발생할 오류를 타입 체크를 통해 미리 방지할 수 있었을 것 같습니다.
- 사용자 인증과 관련된 `Zod`와 `React-Hook-Form`을 직접 다뤄볼 기회가 없어 아쉬웠습니다. 코드 리뷰를 통해 팀원과 같이 코드를 이해하는 시간을 갖긴 하였지만, 직접 다뤄보지 못해 아쉬웠습니다.
- 1차로 클론 목적의 프로젝트 진행 시에 `Express`와 `Node`를 활용하여 백엔드 코드를 작성했었는데, DB를 연결하는 등 백엔드 관련 코드를 깊이 있게 작성해보지 못하여 아쉬웠습니다.

<br/>

## 10. What I'd like to improve / 개선해보고 싶은 점

- After deploying using `Firebase` and `Github Actions`, I ran a performance check using Lighthouse, and while the score was not low, I would like to improve the performance by writing more elegant code.

- We didn't implement a responsive design that can be adapted to mobile. As I focused on `JavaScript` logic, I was disappointed that I didn't pay attention to responsive design.

- I definitely want to migrate this project into Typescript and React's Combination.

<br/>
<hr>
<br/>

- Firebase와 Github Actions를 활용하여 배포한 후에, Lighthouse를 활용해 성능 체크를 하였는데, 낮은 점수는 아니지만 조금 더 코드를 우아하게 작성하여 성능을 개선해보고 싶습니다.

- 모바일까지 대응가능한 반응형 디자인을 구현하지 못하였습니다. 자바스크립트 로직에 집중하다보니, 반응형 디자인을 신경쓰지 못한 점이 아쉬웠습니다.

- `Typescript`과 `React` 조합의 프로젝트로 꼭 마이그레이션 하고 싶습니다.

<br/>

## 11.Learnings from the deployment / 배포를 통해 느낀 점 및 배운 점

I wrote code to request data from the server using `Firebase` and deployed it. There was a bit of a learning curve because it was our first time using it, but I were able to deploy it without much difficulty by studying it with team, finding errors, and helping each other.

`Firebase`를 활용해 서버에 데이터 요청하는 코드를 작성하고, 배포까지 진행하였습니다. 처음 활용하였기 때문에 러닝 커브가 어느 정도 있었지만, 팀원들과 같이 공부하고 에러를 찾아내고 도움을 주면서 배포를 같이 진행하여 큰 어려움 없이 배포를 할 수 있었습니다.

<br/>

## 12. What I learned and which part I grew from this project / 이번 프로젝트를 통해 무엇을 배웠고, 어떤 부분에서 성장했다고 생각되는지

- What I thought about writing code **declaratively**
- I tried to write code that was **readable**
- When I encountered difficulties, I didn't hold on to them too tightly, but talked through them and solved them with my team.
- I thought a lot about state management by utilizing `Recoil` and `React Query`
- I thought about what a good **UI/UX** should be and tried to implement the code by properly utilizing `React Suspense` and `React Router`'s `loader`

<br/>
<hr>
<br/>

- 코드를 **선언적**으로 작성하는 것에 대해 고민한 점
- **가독성**이 좋은 코드를 작성하려고 노력한 점
- 어려움을 맞닥뜨렸을 때 지나치게 붙잡고 있지 않고, 팀원들과 같이 이야기를 통해 해결해나간 점
- `Recoil`, `React Query`를 활용하여 상태 관리에 대한 많은 고민을 한 것
- 좋은 **UI/UX**는 무엇인 지 고민하며, `React Suspense`와 `React Router`의 `loader`를 적절히 활용하여 코드를 구현하려고 한 점

<br/>
<br/>

## Conclusion

> I'm thinking about writing a post to share various issues and experiences I encountered when I personally migrated the **FineApple** project, which was previously a team project, to `TypeScript`.

> 이후에 팀 프로젝트로 진행되었던 **FineApple** 프로젝트를 개인적으로 `TypeScript`로 마이그레이션한 후 겪었던 다양한 문제와 경험들을 공유하는 글을 곧 남겨볼까 합니다.

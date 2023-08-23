# Back Office

## 프로젝트 소개

개발자들의 back office

- back office는 개발자들이 개발을 하면서 필요한 기능들을 제공하는 웹 사이트입니다.
- 오늘의 할일, 게시판, 실시간 메신저 기능을 제공합니다.
- 개발자들의 git repository중 가장 최근에 push한 2개의 repository를 보여줍니다.
  <br/>
  <br/>
  <br/>

## 사용 기술

| 구분                 | 사용 기술          |
| -------------------- | ------------------ |
| 언어                 | Javascript         |
| UI                   | React              |
| 라우팅               | React Router Dom   |
| 스타일링             | Styled-components  |
| 아이콘               | react-icons        |
| DB                   | Firebase Firestore |
| 서버 상태 관리       | React Query        |
| 클라이언트 상태 관리 | Recoil             |
| 번들러               | Webpack            |
| 패키지 관리 매니저   | npm                |
| 버전 관리 시스템     | Git                |
| 배포                 | Firebase Hosting   |

<br/>
<br/>
<br/>

## 구현 기능

### 로그인

- firebase auth를 이용한 로그인, 회원가입

### 메인 페이지

- firestore를 이용한 오늘의 할일 구현 (To Do List)
- 미니 프로젝트 주제 추천

### 깃허브 페이지

- 유저의 github star card, most used language card
- 최근 commit한 2개의 repository card
- 유저의 commit history chart

### 게시판 페이지

- firestore를 이용한 게시판(CRUD) 구현

### 메신저 페이지

- firestore를 onSnapshot 이용한 유저간 실시간 메신저 구현

### Admin 페이지

- firestore를 이용한 유저 관리 구현 (진행)
- 유저의 권한 변경, 삭제, 추가 구현 (진행)
- 메인 페이지 미니 프로젝트 주제 추가, 삭제 구현 (진행)
  <br/>
  <br/>
  <br/>

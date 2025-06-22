# Datarize Frontend 과제

Datarize Frontend 과제입니다.

## 실행

`node 20.13.1`, `yarn 1.22.22` 환경에서 아래 명령어로 실행

설치

```cmd
cd apps
yarn install
```

서버 실행

```cmd
cd apps
yarn start-server
```

개발환경 실행

```cmd
cd apps
yarn start-client
```

테스트 수행

```cmd
cd apps
yarn start-client-test
```

## 디렉토리 구조

아래와 같은 디렉토리구조로 구현했습니다.

```text
src/
├── pages/               # 화면 페이지 디렉토리
├── components/          # 공용 컴포넌트 디렉토리
├── hooks/               # 공용 hook 디렉토리
├── libs/                # 라이브러리 관련 유틸 및 기능 디렉토리
├── screens/             # 페이지(도메인) 단위 기능을 담은 디렉토리
│   └── home/
│       └── apis/        # fetch api 디렉토리
│       └── components/  # 페이지(도메인)에 의존하는 컴포넌트 디렉토리
│       └── hooks/       # 페이지(도메인)에 의존하는 훅 디렉토리
└
```

## 주요 기능

기능 설명

  - `react-chartjs-2`와 `react-datepicker`를 사용하여 날짜 선택과 차트를 구현했습니다.
  - 시작날짜 또는 종료날짜 하나만 작성하거나, 날짜를 동일하게 선택하여 단일 날짜를 검색할 수 있습니다.
  - 각 비동기 통신마다 로딩 및 에러 처리를 구현하고 타임아웃(5초) 처리하였습니다.

## 라이브러리 선택

- `tailwindcss`: 완성되어있는 className을 조합하여 스타일링을 빠르게 구현하고자 사용
- `react-query`: 비동기 상태를 관리 및 비동기를 위한 캐싱이나 suspense, 재요청 동작을 쉽게 구현하고자 사용
//import :export로 보낸 모듈 가져오는 기능
//import 식별자(변수,함수,클래스) from 경로
import React from "react";
import AppRouter from "./AppRouter";
function App() {
  //컴포넌트
  return <AppRouter />;
  //구조: App
  //   AppRouter
  // 3개의 링크(PageList/main/hooks)
  //  PageList에는 2개의 링크(main/hooks)
}

export default App; //export: 모듈의 기능을 외부에서 사용할 수 있게 내보낸다
//export default app->import app from 경로
//export {app}->import {app} from 경로

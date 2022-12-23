import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//라우팅:사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것
//리엑트에서 라우팅 관련 가장 많이 사용한 라이브러리: React Router(페이지 이동)
//React Router 설치:npm install react-router-dom

import Hooks from "./Pages/hooks";
import Main from "./Pages/main";
import PageList from "./Pages/PageList";
const AppRouter = () => {
  return (
    //구조 Router(부모컴포넌트)-Routes-Route(path,element)
    <Router>
      <Routes>
        <Route path="/" element={<PageList />} />
        {/*path:상대경로 지정 element속성:컴포넌트 */}
        <Route path="/study" element={<Main />} />
        <Route path="/hooks" element={<Hooks />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

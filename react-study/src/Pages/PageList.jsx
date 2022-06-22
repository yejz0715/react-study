import React from "react";
import { Link } from "react-router-dom";
const PageList = () => {
  return (
    <>
      <h1>StudyPage</h1>
      <ul>
        <li>
          <Link to="/study">ReactStudy</Link>
          {/* :react 에서 링크이동으로 사용(= a 태그) to속성에 설정된 링크로 이동, 기록은 history 스택에 저장*/}
        </li>
        <li>
          <Link to="/hooks">HooksStudy</Link>
        </li>
      </ul>
    </>
  );
};

export default PageList;

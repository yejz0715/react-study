import React from "react";
import ColorRange from "./Component/ColorRange"; //import :export로 보낸 모듈 가져오는 기능
import Counter from "./Component/Counter"; //import 식별자(변수,함수,클래스) from 경로
import ColorText from "./ComponentTest/ColorText";
import ScoreManipulation from "./Component/ScoreManipulation";
import SlotMachine from "./Component/SlotMachine";
function App() {
  //컴포넌트
  return (
    <div>
      <Counter />
      <br />
      <ColorRange />
      <br />
      <hr />
      <ScoreManipulation />
      <br />
      <SlotMachine />
      <br />
      <ColorText />
    </div>
  );
}

export default App; //export: 모듈의 기능을 외부에서 사용할 수 있게 내보낸다
//export default app->import app from 경로
//export {app}->import {app} from 경로

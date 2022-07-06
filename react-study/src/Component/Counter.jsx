import React, { useState } from "react";
import RandomBox from "./RandomBox";
function Counter() {
  //컴포먼트
  const [num, setNum] = useState(0);

  function handleMinus() {
    //함수
    if (num === 0) {
      alert("더 내려갈 수 없습니다");
      return;
    }
    setNum((prev) => prev - 1);
  }
  function handlePlus() {
    if (num === 9) {
      alert("더 올라갈 수 없습니다");
      setNum(0);
      return;
    }
    setNum((prev) => prev + 1);
  }
  function handleReset() {
    setNum(0);
  }

  return (
    <div>
      <p>COUNTER</p>
      <label>{num}</label>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleReset}>reset</button>
      <RandomBox index={num} plus={handlePlus} />
    </div>
    //RandomBox.jsx에서 Counter.jsx 의 {num}을 가져와 index로 사용할것이다
  );
}
export default Counter;

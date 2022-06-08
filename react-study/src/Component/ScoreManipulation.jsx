import React from "react";
import { useState } from "react";
function ScoreManipulation() {
  const [num, setNum] = useState(0);
  const [leftNum, setLeftNum] = useState("_ ");
  const [rightNum, setRightNum] = useState("_");

  function handleMius() {
    if (num === 0) {
      return;
    }
    setNum((number) => number - 1);
  }
  function handlePlus() {
    if (num === 9) {
      return;
    }
    setNum((number) => number + 1);
  }
  function handleLeft() {
    setLeftNum(num);
  }
  function handleRight() {
    setRightNum(num);
  }

  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Score Maiipulation</p>
      <p style={{ fontSize: "30px", paddingLeft: "50px" }}>
        {leftNum}
        {rightNum}점
      </p>
      <span>{num}</span>&nbsp;
      <button onClick={handleMius}>-</button>&nbsp;
      <button onClick={handlePlus}>+</button>&nbsp;
      <button onClick={handleLeft}>L 입력</button>
      <button onClick={handleRight}>R 입력</button>
    </div>
  );
}
export default ScoreManipulation;

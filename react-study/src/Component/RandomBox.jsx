import React from "react";
import { useState } from "react";
function RandomBox(props) {
  //props:어떠한 값을 컴포턴트에게 전달해 줄 때 사용한다. 사용할때 props.index
  const emojiList = [
    "🍎",
    "🍊",
    "🍋",
    "🍇",
    "🫐",
    "🍑",
    "🍒",
    "🥝",
    "🍓",
    "🍐",
  ];
  const emojiTextList = [
    "사과",
    "오렌지",
    "레몬",
    "포도",
    "블루베리",
    "복숭아",
    "체리",
    "키위",
    "딸기",
    "배",
  ];
  const [index, setIndex] = useState(0); //const[상태,상태함수]=useState(초기값)
  function random() {
    setIndex((num) => Math.floor(Math.random(num) * 10));
  }
  return (
    <div>
      <p>PRINT RANDOM EMOJI</p>
      <span>{emojiList[props.index]}</span>
      <label>{emojiTextList[props.index]}</label>
      <button onClick={props.plus}>Print</button>
    </div>
  );
}
export default RandomBox;

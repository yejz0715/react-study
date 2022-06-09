import React from "react";
import { useState } from "react";

function RadioButton() {
  const [clickMale, setClickMale] = useState(false);
  const [clickFemale, setClickFemale] = useState(false);
  function handleBtnMale() {
    setClickMale("남자");
  }
  function handleBtnFemale() {
    setClickFemale("여자");
  }
  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Radio Button</p>
      <p style={{ fontSize: "30px" }}>
        성별:{clickMale}
        {clickFemale}
      </p>
      <input
        type="radio"
        id="male"
        checked={clickMale}
        onClick={handleBtnMale}
      />
      {/*radio 버튼은 checked true /false에 동작 */}
      <label htmlFor="male">남자</label>
      {/*radio버튼의 이름을 label로 만들고 label의 htmlFor 속성과  input의 id를 연결해줌 label '남자'를 클릭해도 버튼 동작됨   */}
      <input
        type="radio"
        id="female"
        checked={clickFemale}
        onClick={handleBtnFemale}
      />
      <label htmlFor="female">여자</label>
    </div>
  );
}

export default RadioButton;

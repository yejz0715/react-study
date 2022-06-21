import React from "react";
import { useState } from "react";

function RadioButton() {
  const [Gender, SetGender] = useState("");
  //const [상태, 상태함수]=useState(초기값);
  const handleBtnMale = () => {
    SetGender("남자");
  };
  const handleBtnFemale = () => {
    SetGender("여자");
  };
  const handleBtnReset = () => {
    SetGender("");
  };
  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Radio Button</p>
      <p style={{ fontSize: "30px" }}>성별:{Gender}</p>
      <input type="radio" name="gander" id="male" onClick={handleBtnMale} />
      {/*radio 버튼은 checked true /false에 동작 */}
      <label htmlFor="male">남자</label>
      {/*radio버튼의 이름을 label로 만들고 label의 htmlFor(=for) 속성과  input의 id를 연결해줌 label '남자'를 클릭해도 버튼 동작됨./ 속성 name을 추가해줘야 하나만 선택이 됨   */}
      <input type="radio" name="gander" id="female" onClick={handleBtnFemale} />
      <label htmlFor="female">여자</label>
      <input type="radio" name="gander" id="reset" onClick={handleBtnReset} />
      <label htmlFor="reset">초기화</label>
    </div>
  );
}

export default RadioButton;

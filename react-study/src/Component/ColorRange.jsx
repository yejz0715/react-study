import React from "react";
import { useState } from "react";
function ColorRange() {
  //컴포넌트
  const [color, setColor] = useState({
    //const[상태,상태함수]=useState({초기값:객체로})
    r: 0,
    g: 0,
    b: 0,
  });

  function handleChange(event) {
    //console.log(event.target.id);
    const {
      target: { id, value }, //구조분해할당
    } = event;
    if (id === "r") {
      //... 스프레드 : 자신의 속성을 열거한다
      setColor({ ...color, r: value }); //객체접근 {...color(color의 g, b ), r:value(r의 value값 (위에 구조분해할당 해줬음))}
      console.log("r " + value);
    } else if (id === "g") {
      setColor({ ...color, g: value });
      console.log("g " + value);
    } else {
      setColor({ ...color, b: value });
      console.log("b " + value);
    }
  }
  return (
    <div>
      <div
        style={{
          // style={{a:" ", b:"",...}}
          width: "200px",
          height: "200px",
          backgroundColor: `rgba(${color.r},${color.g},${color.b},1)`,
        }}
      ></div>
      <input
        id="r"
        type="range"
        step="1"
        min="0"
        max="256"
        defaultValue={color.r}
        onChange={handleChange}
      />
      <input
        id="g"
        type="range"
        step="1"
        min="0"
        max="256"
        defaultValue={color.g}
        onChange={handleChange}
      />
      <input
        id="b"
        type="range"
        step="1"
        min="0"
        max="256"
        defaultValue={color.b}
        onChange={handleChange}
      />
    </div>
  );
}
export default ColorRange;

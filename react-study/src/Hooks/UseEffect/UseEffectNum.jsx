import React, { useEffect, useState } from "react";
//import ReactDOM from "react-dom";

function UseEffectNum() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(sayHello, [number]);

  const handleReset = () => {
    setNum(0);
    setNumber(0);
  };
  //[number]가 바뀔때마다 sayHello 함수 실행

  //useEffect(function,deps)
  // :컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 Hook
  //function:수행하고자하는 작업 (sayHello)
  //deps: 배열형태, 배열안에 검사하고자 하는 특정 값 or 빈 배열
  //1 component 가 mount 됐을 때 - useEffect(function,[])
  //  컴포넌트가 화면에 처음 렌더링 될때, 한번만 실행하고 싶을 때)
  //  useEffect(function)- 배열x-리렌더링 될때마다 실행
  //2 component 가 update 됐을 때- useEffect(function, [number]);
  //  특정값이 업데이트될 때 함수를 실행하고 싶을 때- [number]값이 바뀔때마다 함수실행
  //3 component 가 unmount 됐을 때

  return (
    <div>
      <h2>UseEffect</h2>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setNum(num - 1)}>{num}</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default UseEffectNum;

import React from "react";
import Counter from "../Component/Counter";
const PropsPage = (props) => {
  return (
    <>
      <h2>COUNTER의 값은? {props.num} </h2>
      <Counter />
    </>
  );
};
export default PropsPage;

import React from "react";
import UseEffectNum from "../Hooks/UseEffect/UseEffectNum";
import User from "../Hooks/UseEffect/User";
import UseStateNum from "../Hooks/UseState/UseStateNum";
const Hooks = () => {
  return (
    <div>
      <h1>HooksPage</h1>
      <UseEffectNum />
      <User />
      <br />
      <UseStateNum />
    </div>
  );
};
export default Hooks;

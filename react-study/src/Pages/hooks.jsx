import React from "react";
import UseEffectNum from "../Hooks/UseEffect/UseEffectNum";
import User from "../Hooks/UseEffect/User";
import UseStateNum from "../Hooks/UseState/UseStateNum";
import UseStateName from "../Hooks/UseState/UseStateName";
const Hooks = () => {
  return (
    <div>
      <h1>HooksPage</h1>
      <UseEffectNum />
      <User />
      <br />
      <UseStateNum />
      <br />
      <UseStateName />
    </div>
  );
};
export default Hooks;

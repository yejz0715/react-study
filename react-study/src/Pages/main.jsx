import React from "react";
import ColorRange from "../Component/ColorRange";
import Counter from "../Component/Counter";
import RadioButton from "../Component/RadioButton";
import ScoreManipulation from "../Component/ScoreManipulation";
import SlotMachine from "../Component/SlotMachine";
import UserList from "../Component/UserList";
const Main = () => {
  return (
    <div>
      <h1>ReactStudyPage</h1>

      <Counter />
      <br />
      <ColorRange />
      <br />
      <hr />
      <ScoreManipulation />
      <br />
      <SlotMachine />
      <br />
      <RadioButton />
      <br />
      <UserList />
      <br />
    </div>
  );
};
export default Main;

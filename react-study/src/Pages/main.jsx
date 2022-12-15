import React from "react";
import ColorRange from "../Component/ColorRange";
import Counter from "../Component/Counter";
import FriendList from "../Component/FriendList";
import RadioButton from "../Component/RadioButton";
import ScoreManipulation from "../Component/ScoreManipulation";
import SlotMachine from "../Component/SlotMachine";
import UserList from "../Component/UserList";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <h1>ReactStudyPage</h1>
      <Link to="/props">
        <h2>PropsPage</h2>
      </Link>
      <Counter />
      <br />
      <ColorRange />
      <br />
      <UserList />
      <hr />
      <ScoreManipulation />
      <br />
      <SlotMachine />
      <br />
      <RadioButton />
      <br />
      <FriendList />
      <br />
    </div>
  );
};
export default Main;

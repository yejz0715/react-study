import React, { useState } from "react";
function FriendList() {
  const [name, setName] = useState("");
  const [list, setList] = useState("");
  const handleAddOne = () => {
    setList(...list, name);
  };
  const handleAddTwo = () => {
    setList(...list, name);
  };
  const handleAddThree = () => {
    setList(...list, name);
  };
  const handleDeleteUser = () => {
    setName("");
  };
  const handleChangeUser = (e) => {
    setName = setName(e.target.value);
  };
  return (
    <div>
      <h2>Friend List</h2>
      <input
        type="text"
        placeholder="친구의 이름을 입력하세요"
        onChange={handleChangeUser}
      />
      <ul style={{ listStyle: "none" }}>
        <li>
          <button onClick={handleAddOne}>1</button>
          {name}
          <button onClick={handleDeleteUser}>삭제</button>
        </li>
        <li>
          <button onClick={handleAddTwo}>2</button>
          {name}
          <button onClick={handleDeleteUser}>삭제</button>
        </li>
        <li>
          <button onClick={handleAddThree}>3</button>
          {name}
          <button onClick={handleDeleteUser}>삭제</button>
        </li>
      </ul>
    </div>
  );
}
export default FriendList;

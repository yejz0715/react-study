import React, { useState } from "react";

function SlotMachine() {
  const emojiList = [
    "🍎",
    "🍊",
    "🍋",
    "🍇",
    "7️⃣",
    "🍑",
    "🍒",
    "🥝",
    "🍓",
    "🍐",
  ];
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  function handleStart() {
    setIndex1((num) => Math.floor(Math.random(num) * 10));
    setIndex2((num) => Math.floor(Math.random(num) * 10));
    setIndex3((num) => Math.floor(Math.random(num) * 10));
  }
  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Slot Machine</p>
      <span style={{ fontSize: "30px" }}>
        {emojiList[index1]}
        {emojiList[index2]}
        {emojiList[index3]}
      </span>
      <br />
      <br />
      <button onClick={handleStart} style={{ marginLeft: "40px" }}>
        start
      </button>
    </div>
  );
}
export default SlotMachine;

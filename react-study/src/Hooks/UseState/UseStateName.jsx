import React from "react";
import { useState } from "react";

const UseStateName = () => {
  const [name, setName] = useState("");
  return (
    <div>
      name:{name}
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
export default UseStateName;

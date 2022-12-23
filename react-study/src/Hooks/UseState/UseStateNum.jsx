import React, { useState } from "react";
//1 useState사용
function UseStateNum() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <h2>UseState {item}</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
}
// 2 useState 사용하기 전, class 컴포넌트 사용
class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h2>UseState {item}</h2>
        <button onClick={this.incrementItem}>increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}
export default UseStateNum;

import React, { useState } from 'react';

const StateExample = () => {
  const [count, setcount] = useState(0);
  const plusBtn = () => {
    setcount(count + 1)
  }
  const minusBtn = () => {
    setcount(count - 1)
  }
  return (
    <>
      <button onClick={plusBtn}>+</button>
      <button onClick={minusBtn}>-</button>
      <span>{count}</span>
    </>
  );
}

export default StateExample;

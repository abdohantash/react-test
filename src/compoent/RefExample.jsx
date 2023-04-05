import React, { useRef } from 'react';

const RefExample = () => {
  const valueInput = useRef(null);
  const focus = () => {
    valueInput.current.focus();
    console.log(valueInput.current.value)
  }
  return (
    <>
      <input type="text" ref={valueInput} />
      <button onClick={focus}>focus</button>
    </>
  );
}

export default RefExample;

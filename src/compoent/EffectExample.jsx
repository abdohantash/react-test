import React, { useEffect, useState } from 'react';

const EffectExample = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
      console.log("hello")
  }, []);

  return (
    <>
      <button onClick={() => setcount(count +1)}>+</button>
      <span>{count}</span>
    </>
  );
}

export default EffectExample;

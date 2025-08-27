import { useState } from "react";

const useCounter = (intialVluae: number = 1) => {
  const [count, setCount] = useState(intialVluae);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;

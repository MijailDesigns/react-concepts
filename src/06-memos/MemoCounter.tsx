import useCounter from "@/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time("Heavy stuff started");

  for (let index = 0; index < iterationNumber; index++) {
    console.log("ahi vamos...");
  }

  console.timeEnd("Heavy stuff started");
  return `${iterationNumber} iteraciones realizadas`;
};

const MemoCounter = () => {
  const { count, increment } = useCounter(400);
  const { count: count2, increment: increment2 } = useCounter(10);
  // se usa para memorizar el resultado de un calculo sotoso y evitar que se vuelva a ejecutar en cada render
  const myHeavyValue = useMemo(() => heavyStuff(count), [count]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo {myHeavyValue}</h1>

      <hr />

      <h4>Counter: {count}</h4>
      <h4>Counter: {count2}</h4>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={increment}
      >
        +1
      </button>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={increment2}
      >
        +1 - counter2
      </button>
    </div>
  );
};

export default MemoCounter;

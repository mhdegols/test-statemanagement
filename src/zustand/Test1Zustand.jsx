import { useTestStore } from "./zustand";

export const Test1Zustand = () => {
  const value1 = useTestStore((state) => state.value1);
  const increaseValue1 = useTestStore((state) => state.increaseValue1);
  const decreaseValue1 = useTestStore((state) => state.decreaseValue1);
  console.log("Test1Zustand" + value1);
  return (
    <>
      <h1>value1 : {value1}</h1>
      <button onClick={increaseValue1}>increaseValue1</button>
      <button onClick={decreaseValue1}>decreaseValue1</button>
    </>
  );
};

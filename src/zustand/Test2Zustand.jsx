import { useTestStore } from "./zustand";

export const Test2Zustand = () => {
  const value2 = useTestStore((state) => state.value2);
  const increaseValue2 = useTestStore((state) => state.increaseValue2);
  const decreaseValue2 = useTestStore((state) => state.decreaseValue2);

  return (
    <>
      {console.log("Test2Zustand")}
      <h1>value2 : {value2}</h1>
      <button onClick={increaseValue2}>increaseValue2</button>
      <button onClick={decreaseValue2}>decreaseValue2</button>
    </>
  );
};

import { proxy, useSnapshot } from "valtio";

const store = proxy({ counter: 10 });

const increase = () => {
  store.counter += 1;
};
const decrease = () => {
  store.counter -= 1;
};

export const ValtioIndex = () => {
  const state = useSnapshot(store);

  console.log("Valtio " + state.counter);
  return (
    <>
      <h1>Valtio</h1>
      <h6>{state.counter}</h6>
      <button onClick={() => increase()}>increase</button>
      <button onClick={() => decrease()}>decrease</button>
    </>
  );
};

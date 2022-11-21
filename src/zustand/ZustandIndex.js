import { Test1Zustand } from "./Test1Zustand";
import { Test2Zustand } from "./Test2Zustand";
import { useTestStore } from "./zustand";
export const ZustandIndex = () => {
  return (
    <div>
      <h1>Zustand</h1>

      <br />
      <Test1Zustand />
      <Test2Zustand />
    </div>
  );
};

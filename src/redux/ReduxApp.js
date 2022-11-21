import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, decrement2, increment2 } from "./counterSlice";
import { Test1 } from "./Test1";
import { Test2 } from "./Test2";

export function ReduxApp() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment1
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement1
        </button>
      </div>

      <Test1 />
      <Test2 />

      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment2())}
        >
          Increment2
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement2())}
        >
          Decrement2
        </button>
      </div>
    </div>
  );
}

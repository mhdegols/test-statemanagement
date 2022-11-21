import React, { useState, useEffect } from "react";
import counterStore from "./stores/counterStore";
import * as counterActions from "./actions/counterActions";

import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(counterStore.getCounter());

  useEffect(() => {
    counterStore.addChangeListener(onChange);
    return () => counterStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCounter(counterStore.getCounter());
  }
  const handlerClick = () => {
    counterActions.incrementCounter();
  };

  return (
    <div className="App">
      <h3>{counter}</h3>
      <button onClick={handlerClick}>+1</button>
    </div>
  );
}

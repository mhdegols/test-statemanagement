import React from "react";

import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

const myTimer = new Timer();

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const TimerView = observer(({ timer }) => (
  <>
    <br />
    <span>Seconds passed: {timer.secondsPassed}</span>
  </>
));

export const MobX = () => <TimerView timer={myTimer} />;

setInterval(() => {
  myTimer.increaseTimer();
}, 1000);

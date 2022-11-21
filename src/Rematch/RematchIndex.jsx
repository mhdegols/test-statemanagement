import React from "react";

import { Provider, connect } from "react-redux";
import store from "./store";
const Count = (props) => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
);
const mapState = (state) => ({
  count: state.count,
});
const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});
const CountContainer = connect(mapState, mapDispatch)(Count);

export const RematchIndex = () => {
  return (
    <Provider store={store}>
      <CountContainer />
    </Provider>
  );
};

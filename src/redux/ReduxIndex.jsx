import { store } from "./store";
import { Provider } from "react-redux";
import { ReduxApp } from "./ReduxApp";

export const ReduxIndex = () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};

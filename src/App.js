import "./App.css";
import { HookStateIndex } from "./hookstate/HookStateIndex";
import { JotaiIndex } from "./jotai/JotaiIndex";
import { MobX } from "./mobx/MobX";
import { RecoilIndex } from "./recoil/RecoilIndex";
import { ReduxIndex } from "./redux/ReduxIndex";
import { RematchIndex } from "./Rematch/RematchIndex";
import { XstateIndex } from "./xstate/createMachine";
import { ZustandIndex } from "./zustand/ZustandIndex";

function App() {
  return (
    <div className="App">
      <ReduxIndex />
      <ZustandIndex />
      <JotaiIndex />
      <RecoilIndex />
      <RematchIndex />
      <HookStateIndex />
      <MobX />
      <XstateIndex />
    </div>
  );
}

export default App;

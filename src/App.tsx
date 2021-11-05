import ContextProvider from "./Provider";
import Router from "./Router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <ContextProvider>
        <div className="dark:bg-primary w-full">
          <Router></Router>
        </div>
      </ContextProvider>
    </ReduxProvider>
  );
}

export default App;

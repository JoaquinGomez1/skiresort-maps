import useDarkMode from "./hooks/useDarkMode";
import Provider from "./Provider";
import Router from "./Router";

function App() {
  useDarkMode();
  return (
    <div className="dark:bg-primary w-full">
      <Provider>
        <Router></Router>
      </Provider>
    </div>
  );
}

export default App;

import useDarkMode from "./hooks/useDarkMode";
import Router from "./Router";

function App() {
  useDarkMode();
  return (
    <div className="dark:bg-primary w-full">
      <Router></Router>
    </div>
  );
}

export default App;

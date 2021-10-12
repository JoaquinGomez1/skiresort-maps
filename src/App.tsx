import useDarkMode from "./hooks/useDarkMode";
import Router from "./Router";

function App() {
  useDarkMode();
  return (
    <div className="dark:bg-gray-800">
      <Router></Router>
    </div>
  );
}

export default App;

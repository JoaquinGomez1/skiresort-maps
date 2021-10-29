import Provider from "./Provider";
import Router from "./Router";

function App() {
  return (
    <div className="dark:bg-primary w-full">
      <Provider>
        <Router></Router>
      </Provider>
    </div>
  );
}

export default App;

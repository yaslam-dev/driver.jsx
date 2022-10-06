import { useEffect, useState, useRef } from "react";
import { useDriver } from "driver.jsx";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "driver.jsx/dist/style.css";

function App() {
  const [count, setCount] = useState(0);
  const basicRef = useRef<HTMLButtonElement>(null);
  const { driver, isActivated } = useDriver({
    allowClose: false,
  });

  useEffect(() => {
    if (basicRef.current && isActivated) {
      driver.highlight({
        element: basicRef.current as HTMLElement,
        popover: {
          title: "Title for the Popover",
          description: "Description for it",
        },
      });
    }
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={basicRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

import { useEffect, useState, useRef } from "react";
import { useDriver } from "driver.jsx";
import "driver.jsx/dist/style.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const { driver, isActivated } = useDriver({
    allowClose: false,
  });
  const firstStepref = useRef<HTMLParagraphElement>(null);
  const secondStepref = useRef<HTMLAnchorElement>(null);
  const thirdStepref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (firstStepref.current && secondStepref.current && thirdStepref.current) {
      driver.defineSteps([
        {
          element: firstStepref.current,
          popover: {
            className: "first-step-popover-class",
            title: "Title on Popover",
            description: "Body of the popover",
            position: "left",
          },
        },
        {
          element: secondStepref.current,
          popover: {
            title: "Title on Popover",
            description: "Body of the popover",
            position: "top",
          },
        },
        {
          element: thirdStepref.current,
          popover: {
            title: "Title on Popover",
            description: "Body of the popover",
            position: "right",
          },
        },
      ]);

      driver.start();
    }
  }, [isActivated]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p ref={firstStepref}>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            ref={secondStepref}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            ref={thirdStepref}
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

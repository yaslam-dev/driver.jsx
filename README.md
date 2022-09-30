# Driver.jsx

A wrapper hook for driver library that can be used in React.

# Useage

```js
import { useDriver } from "../lib/hooks";

const { driver, isActivated } = useDriver({
  allowClose: false,
});

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
]);

driver.start();
```

# Example

An Example is definde in src directory

# Development

Setting up a local development environment is easy!

Clone (or fork) this repo on your machine, navigate to its location in the terminal and run:

```bash
yarn install
yarn start:dev
```

Change the code in the lib directory, create an example for in the examples directory or in the src directory

Start coding! tada

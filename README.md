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

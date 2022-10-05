# Driver.jsx

Create a Seamless User Onboarding and User Journey.

A wrapper hooks and components for driver library that can be used in React > 17.

It uses [driver.js]("https://github.com/kamranahmedse/driver.js") that is performant, lightweight and have inbuilt animations.

# Install

## NPM

```bash
npm install driver.jsx
```

# Getting Started

```js
import { useDriver } from "driver.jsx";
import "driver.jsx/dist/style.css";

const { driver, isActivated } = useDriver({
  allowClose: false,
});

const basicRef = useRef(null);

useEffect(() => {
  if (basicRef) {
    driver.highlight({
      element: basicRef.current,
      popover: {
        title: "Title for the Popover",
        description: "Description for it",
      },
    });
  }
});
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

Start coding! 🥳

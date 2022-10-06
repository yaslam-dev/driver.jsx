# Driver.jsx

Create a Seamless User Onboarding and User Journey.

A wrapper hooks (stable) and components (in-development) for driver library that can be used in React > 17.

It uses [driver.js]("https://github.com/kamranahmedse/driver.js") that is performant, lightweight and have inbuilt animations.

# Demo  
[demo.webm](https://user-images.githubusercontent.com/26070254/194285550-9164f13b-529a-46ec-86cb-e9b9b2f1caea.webm)


# Install

## NPM

```bash
npm install driver.jsx
```

# Getting Started

```js
import { useEffect, useRef } from "react";
import { useDriver } from "driver.jsx";
import "driver.jsx/dist/style.css";

const { driver, isActivated } = useDriver({
  allowClose: false, 
});

const basicRef = useRef(null);

useEffect(() => {
  if (basicRef && isActivated) {
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

All of the Examples are placed in [examples](https://github.com/Yasir900aslam/driver.jsx/tree/main/examples) directory

# Development

Setting up a local development environment is easy!

Clone (or fork) this repo on your machine, navigate to its location in the terminal and run:

```bash
yarn install
yarn start:dev
```

Change the code in the lib directory, create an example for in the examples directory or in the src directory

Start coding! 🥳

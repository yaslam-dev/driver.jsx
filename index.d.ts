import Driver, { DriverOptions } from "driver.js";

declare module "driver.jsx" {
  interface useDriverReturn {
    driver: React.MutableRefObject<Driver>;
    isActivated: boolean;
  }

  function useDriver(initialValue: DriverOptions): useDriverReturn;

  export { useDriver, useDriverReturn };
}

export {};

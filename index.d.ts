import Driver, { DriverOptions } from "driver.js";

declare module "driver.jsx" {
  function useDriver(initialValue: DriverOptions): {
    driver: Driver;
    isActivated: boolean;
  };

  export { useDriver, DriverOptions };
}

export {};

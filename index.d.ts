import { Config, Driver } from "driver.js";

declare module "driver.jsx" {
  function useDriver(initialValue: Config): {
    d: Driver;
    isActivated: boolean;
  };

  export { useDriver, Config };
}

export {};

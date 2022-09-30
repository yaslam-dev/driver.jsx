import Driver, { DriverOptions } from "driver.js";
import { useRef } from "react";
import "driver.js/dist/driver.min.css";

export const useDriver = (props: DriverOptions) => {
  const driverRef = useRef(
    (() => {
      const driver = new Driver(props);
      return driver;
    })()
  );

  return {
    driver: driverRef.current,
    isActivated: driverRef.current.isActivated,
  };
};

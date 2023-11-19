import { driver, Config } from "driver.js";
import { useRef } from "react";

export const useDriver = (props: Config) => {
  const driverRef = useRef(
    (() => {
      return driver(props);
    })()
  );

  return {
    driver: driverRef.current,
    isActivated: driverRef.current.isActive,
  };
};

import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 475) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () =>
      setIsMobile(window.screen.width <= breakpoint);

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;

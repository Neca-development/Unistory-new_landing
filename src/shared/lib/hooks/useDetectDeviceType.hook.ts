import { useCallback, useEffect, useState } from "react";

export const useDetectDeviceType = (width = 640) => {
  const [matches, setIsMatches] = useState(false);

  const checkSize = useCallback(() => {
    const isMatch = window.matchMedia(`(max-width: ${width}px)`).matches;
    if (isMatch) {
      setIsMatches(true);
    } else {
      setIsMatches(false);
    }
  }, [width]);

  useEffect(() => {
    if (typeof window == "undefined") {
      return;
    } else {
      checkSize();
    }

    const handleWindowResize = () => {
      checkSize();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return matches;
};

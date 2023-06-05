import { useLayoutEffect, useState } from "react";

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    if (window) {
      setMounted(true);
    }
  }, []);

  return mounted
}
import { useEffect, useState } from "react";

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (window) {
      setMounted(true);
    }
  }, []);

  return mounted
}
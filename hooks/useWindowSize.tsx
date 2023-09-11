import { useState, useEffect } from "react";
const isBrowser = () => typeof window !== "undefined";

export default function useWindowSize() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? isBrowser() : false
  );

  const checkWindowSize = () => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return isMobile;
}

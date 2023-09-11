"use client";

import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [isMobile, setIsMobile] = useState(false);

  const checkWindowSize = () => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return isMobile;
}

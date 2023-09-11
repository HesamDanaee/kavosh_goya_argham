"use client";

import { useState, useEffect } from "react";

export default function useScrollHeaderVisibility() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const lastScrollY = 0;

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      currentScrollY > lastScrollY
        ? setIsHeaderVisible(true)
        : setIsHeaderVisible(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isHeaderVisible;
}

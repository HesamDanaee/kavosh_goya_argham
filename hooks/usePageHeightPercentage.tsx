"use client";

import { useState, useEffect } from "react";

export default function usePageHeightPercentage() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    function handlePagePercentage() {
      const scrollTop = document.documentElement.scrollTop;
      const totalScrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / totalScrollableHeight) * 100;

      setPercentage(scrollPercentage);
      const header = document.querySelector(".header") as HTMLHeadElement;
      header.style.setProperty("--after-width", `${Math.floor(percentage)}%`);
    }

    window.addEventListener("scroll", handlePagePercentage);

    return () => {
      window.removeEventListener("scroll", handlePagePercentage);
    };
  });

  return percentage;
}

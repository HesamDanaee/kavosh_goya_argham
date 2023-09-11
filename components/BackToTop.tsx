"use client";

import Image from "next/image";

// Icon
import arrow from "@/public/assets/icons/arrow-up.svg";

import useScrollHeaderVisibility from "@/hooks/useScrollHeaderVisibility";
import useSmoothScrollToTop from "@/hooks/useSmoothScrollToTop";

export default function BackToTop() {
  const isVisible = useScrollHeaderVisibility();
  useSmoothScrollToTop();
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      id="scrollToTOp"
      className={`w-[50px] h-[50px] grid place-items-center scale-0 rounded-full transition-all bg-blue-500 text-white fixed right-8 bottom-8 shadow-lg z-[100] ${
        isVisible && "scale-100"
      }`}
    >
      <Image src={arrow} width={25} height={25} alt="arrow" objectFit="cover" />
    </button>
  );
}

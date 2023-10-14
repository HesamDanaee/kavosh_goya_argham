"use client";

import Image from "next/image";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import Slider from "@/components/Slider/Slider";
import SliderButton from "@/components/Slider/SliderButton";
// Assets

import sliderBg from "@/public/assets/photos/slider-bg.png";
import quote from "@/public/assets/icons/’’.svg";

// Data

import sliderData from "@/constants/sliderData";

export default function AboutUs() {
  const [slide, setSlide] = useState(1);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scroll({ left: slide * 600, behavior: "smooth" });
    }
  }, [slide]);

  const handleSlide = (direction: string) => {
    const slideWidth = 600;
    const targetX =
      direction === "left"
        ? (slide - 1) * slideWidth
        : (slide + 1) * slideWidth;
    smoothScroll(sliderRef, targetX);
    setSlide(
      direction === "left" && slide !== 1
        ? slide - 1
        : direction !== "left" && slide <= sliderData.length
        ? slide + 1
        : slide
    );
  };

  const smoothScroll = (
    scrollElement: MutableRefObject<HTMLElement | null>,
    targetX: number,
    duration = 500
  ) => {
    const startX = scrollElement.current!.scrollLeft;
    const distanceX = targetX - startX;
    const startTime = performance.now();

    function scroll(timestamp: number) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutCubic(progress);

      const scrollPosition = startX + distanceX * ease;
      scrollElement.current!.scrollLeft = scrollPosition;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }

    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }

    requestAnimationFrame(scroll);
  };

  return (
    <section className="w-full max-w-[1200px] h-[800px] relative flex max-md:flex-col-reverse max-md:h-[1000px] justify-end max-md:justify-evenly items-center">
      <Image
        src={sliderBg}
        width={500}
        height={500}
        objectFit="cover"
        alt="backgroundimage"
        className="w-1/2 h-auto absolute left-0 top-[50%] -translate-y-1/2 "
      />

      <Image
        src={quote}
        width={300}
        height={300}
        objectFit="cover"
        alt="backgroundimage"
        className="w-1/6 h-auto absolute right-0 top-[35%] -translate-y-1/2 "
      />

      <Slider data={sliderData} slideIndex={slide} sliderRef={sliderRef} />

      <div className="h-1/5 max-md:h-auto flex flex-col justify-between items-end">
        <h1 className="text-4xl font-kalame font-[900] text-end">
          درباره ما
          <br />
          چه میشنوید؟
        </h1>
        <SliderButton handler={handleSlide} slide={slide} />
      </div>
    </section>
  );
}

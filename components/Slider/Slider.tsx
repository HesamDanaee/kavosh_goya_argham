"use client";

import { useState, useRef, MutableRefObject } from "react";
import { StaticImageData } from "next/image";

// Components

import SlideCard from "./SlideCard";

import { generateId } from "@/utils/helpers";

interface CardData {
  title: string;
  subTitle: string;
  text: string;
  icon: StaticImageData;
}

interface Props {
  data: CardData[];
  slideIndex: number;
  sliderRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Slider({ data, slideIndex, sliderRef }: Props) {
  return (
    <div className="w-full h-full max-md:h-2/3 relative ">
      <div
        ref={sliderRef}
        className={`max-w-[80%] max-md:min-w-full h-1/2 max-md:h-full flex justify-between items-center overflow-hidden absolute top-1/2 left-0 -translate-y-1/2`}
      >
        {data.map(({ title, subTitle, text, icon }) => (
          <SlideCard
            title={title}
            subTitle={subTitle}
            text={text}
            icon={icon}
            key={generateId()}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

// Components
import Accordion from "@/components/Accordion";

// Assets
import union from "@/public/assets/icons/Union2.svg";
import union2 from "@/public/assets/icons/Union3.svg";
import chevronDown from "@/public/assets/icons/arrow-down.svg";

export default function Principles() {
  const [tab, setTab] = useState(1);
  return (
    <section className="w-full h-auto flex-col max-md:h-[800px] flex justify-center items-center relative">
      <div className="max-md:w-full flex flex-col items-center">
        <h2 className="font-kalame text-2xl font-[900] relative py-4 after:w-1/3 after:h-1 after:bg-blue-600 after:absolute after:left-1/3 after:bottom-0">
          نکات طلایی برای مدیران
        </h2>

        <div className="w-[400px] h-[100px] max-md:w-[80%] my-6 rounded-md bg-white shadow-lg flex justify-evenly items-center">
          <span
            onClick={() => setTab(2)}
            className={`w-[40%] h-2/3 grid place-content-center font-kalame font-[600] text-2xl rounded-md hover:cursor-pointer transition  ${
              tab === 2
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "hover:bg-slate-100"
            }`}
          >
            مالیاتی
          </span>
          <span
            onClick={() => setTab(1)}
            className={`w-[40%] h-2/3 grid place-content-center font-kalame font-[600] text-2xl rounded-md hover:cursor-pointer transition  ${
              tab === 1
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "hover:bg-slate-100"
            }`}
          >
            حسابداری
          </span>
        </div>
      </div>
      <Image
        src={union}
        width={300}
        height={300}
        alt="background"
        objectFit="cover"
        className="absolute -left-24 max-sm:w-[40%]"
      />
      <Image
        src={union2}
        width={300}
        height={300}
        alt="background"
        objectFit="cover"
        className="absolute -right-24 max-sm:w-[40%]"
      />
      <Accordion category={tab} />
      <h3 className="flex text-blue-500 font-[500] hover:cursor-pointer hover:text-blue-600 group">
        <Image
          src={chevronDown}
          width={25}
          height={25}
          alt="chevron"
          className="mx-4 group-hover:translate-y-2 transition"
        />
        مشاهده نکات بیشتر
      </h3>
    </section>
  );
}

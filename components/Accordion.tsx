"use client";

import { useState } from "react";
import { accountingData, taxData } from "@/constants/accordionData";
import { generateId, toPersianNumber } from "@/utils/helpers";

export default function Accordion({ category }: { category: number }) {
  const [tabIndex, setTabIndex] = useState({
    index: 0,
    state: false,
  });

  const accordionData = (data: string[]) => {
    return data.map((item, index) => (
      <li
        key={generateId()}
        onClick={() => {
          index === tabIndex.index
            ? setTabIndex({ index, state: !tabIndex.state })
            : setTabIndex({ index, state: true });
        }}
        className={`
         w-full flex justify-end items-start hover:cursor-pointer rounded-md hover:bg-[#9494942a] hover:shadow-inner transition-[background-color] duration-75 ease-in ${
           tabIndex.index === index && tabIndex.state ? "h-[200px]" : "h-auto"
         } p-6 list-none flex
      `}
      >
        <div className="flex justify-end items-center">
          <p className="text-gray-800 text-sm font-[500] rtl text-start">
            {item}
          </p>
          <span className="text-4xl text-blue-600 min-w-[50px] h-[50px] mx-4 rounded-full bg-blue-200 flex justify-center items-center font-kalame font-[900]">{`${toPersianNumber(
            `${index + 1}`
          )}`}</span>
        </div>
      </li>
    ));
  };

  return (
    <div className="w-full h-auto p-4 flex flex-col justify-evenly items-center">
      <ul className="w-ufll h-auto flex flex-col justify-around items-center">
        {category === 1
          ? accordionData(accountingData)
          : accordionData(taxData)}
      </ul>
    </div>
  );
}

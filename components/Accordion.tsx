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
         w-full flex flex-col justify-between items-start hover:cursor-pointer rounded-md hover:bg-[#9494942a] hover:shadow-inner transition-[background-color] duration-75 ease-in ${
           tabIndex.index === index && tabIndex.state ? "h-auto" : "h-auto"
         } p-6 list-none flex
      `}
      >
        <div className="w-full flex justify-end items-center">
          <p className="text-gray-800 text-sm font-[600] rtl text-start">
            {item}
          </p>

          <span className="text-4xl text-blue-600 min-w-[50px] h-[50px] mx-4 rounded-full bg-blue-200 flex justify-center items-center font-kalame font-[900]">{`${toPersianNumber(
            `${index + 1}`
          )}`}</span>
        </div>
        <div className="w-[80%]  flex justify-center items-center mt-4 mx-auto">
          {tabIndex.index === index && tabIndex.state && (
            <p className="text-gray-800 text-sm font-[600] rtl text-start">
              لورم ایپسوم در زمینه‌های مختلف مورد استفاده قرار می‌گیرد. بسیاری
              از نسخه‌های مختلف این متن وجود دارد. برخی از نسخه‌های آن به صورت
              خاص وارد یا حاوی طنز و یا اطلاعات غلط هستند. تولید متن‌های لورم
              ایپسوم با استفاده از ساختارها و بخش‌های مختلف موجود در یک صفحه وب،
              برای شخصی‌سازی و تست طراحی و یا صفحات وب نمایشی مفید است. اغلب
              طراحان وب و گرافیست‌ها از متن لورم ایپسوم در طراحی‌های خود استفاده
              می‌کنند تا صفحه نمایش را با محتوایی نمایشی پر کنند و از نظرات
              کاربران درباره نحوه طراحی و استفاده از فضاها با خبر شوند. لورم
              ایپسوم بر پایه تکرارهای زیاد و استفاده متناسب از حروف چینی و کلمات
              می‌باشد و باعث می‌شود متن پرفهم و شبیه به متن واقعی زبان باشد.
            </p>
          )}
        </div>
      </li>
    ));
  };

  return (
    <div className="w-full max-w-[1000px] h-auto p-4 flex flex-col justify-evenly items-center">
      <ul className="w-3/4 max-sm:w-full h-auto flex flex-col justify-around items-center">
        {category === 1
          ? accordionData(accountingData)
          : accordionData(taxData)}
      </ul>
    </div>
  );
}

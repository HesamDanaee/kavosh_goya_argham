import Image from "next/image";

// Components

import Form from "@/components/Form";

// Assets

import union from "@/public/assets/icons/union-horizontal.svg";
import cube_1 from "@/public/assets/icons/cube-1.svg";
import cube_2 from "@/public/assets/icons/cube-2.svg";

export default function ContactUs() {
  return (
    <section className="w-full h-[1200px] max-md:h-[1000px] my-20  flex justify-center items-center">
      <div className="w-[90%] max-md:w-full max-w-[1200px] h-[500px] max-md:h-full flex px-10 max-md:px-0 justify-between items-center bg-blue-500 rounded-lg relative max-lg:justify-center">
        <Image
          src={union}
          width={100}
          height={100}
          alt="bg"
          className="w-auto h-auto absolute right-0 bottom-0 "
          objectFit="cover"
        />
        <Image
          src={cube_1}
          width={100}
          height={100}
          alt="bg"
          className="w-auto h-auto absolute right-0 top-0"
        />
        <Image
          src={cube_2}
          width={100}
          height={100}
          alt="bg"
          className="w-auto h-auto absolute left-1/2 bottom-0"
        />
        <Form />
        <div className="w-1/3 text-white rtl font-kalame max-lg:hidden">
          <h1 className="text-4xl font-[900] mb-4">
            ما اینجاییم تا به شما کمک کنیم در تمام امور مالیاتی و حسابرسی شما
          </h1>
          <h3 className="text-2xl font-[500]">
            کافیه فرم بالا رو تکمیل کنی تا ما جهت مشاوره تلفنی با شما تماس
            بگیریم
          </h3>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  subTitle: string;
  text: string;
  icon: StaticImageData;
}

export default function SlideCard({ title, subTitle, text, icon }: Props) {
  return (
    <div className="min-w-[600px] h-[300px] max-sm:h-[400px] max-sm:min-w-[400px] p-10 flex flex-col justify-between items-end bg-white rounded-2xl shadow-xl mx-4 basis-[40%] grow-0 shrink-0">
      <div className="flex items-center">
        <div className="mx-4 p-4 text-end">
          <h2 className="font-kalame text-xl text-blue-500 font-semibold leading-8">
            {title}
          </h2>
          <h6 className="text-sm text-gray-700">{subTitle}</h6>
        </div>

        <div className="w-[100px] h-[100px] grid place-content-center bg-white shadow-lg rounded-full">
          {" "}
          <Image
            src={icon}
            width={25}
            height={25}
            alt="company logo"
            className="w-[50px] h-auto"
          />
        </div>
      </div>
      <p className="text-sm text-gray-600 text-end font-[500]">{text}</p>
    </div>
  );
}

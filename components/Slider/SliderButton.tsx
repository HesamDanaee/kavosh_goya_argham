import Image from "next/image";

// Assets
import leftArrow from "@/public/assets/icons/arrow-lef-slider.svg";
import rightArrow from "@/public/assets/icons/arrow-right-slider.svg";

interface Props {
  handler: (direction: string) => void;
  lastIndex: boolean;
}

export default function SliderButton({ handler, lastIndex }: Props) {
  return (
    <div>
      <div className="w-[120px] flex justify-between items-center max-md:my-4">
        <div
          onClick={() => handler("left")}
          className="p-2 hover:cursor-pointer hover:bg-slate-300 transition rounded-lg"
        >
          <Image
            src={lastIndex ? rightArrow : leftArrow}
            width={50}
            height={50}
            alt="arrowIcon"
            className={`w-6 h-auto ${lastIndex && "rotate-180"}`}
          />
        </div>
        <div
          onClick={() => handler("right")}
          className="p-2 hover:cursor-pointer hover:bg-[#00000010] transition rounded-lg"
        >
          <Image
            src={lastIndex ? leftArrow : rightArrow}
            width={50}
            height={50}
            alt="arrowIcon"
            className={`w-6 h-auto ${lastIndex && "rotate-180"}`}
          />
        </div>
      </div>
    </div>
  );
}

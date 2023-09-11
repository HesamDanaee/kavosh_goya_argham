import Image from "next/image";
import type { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  hero?: boolean;
}

export default function VisualBanner({ src, hero }: Props) {
  return (
    <div
      className={`${
        hero ? "w-1/2" : "w-[40%]"
      } max-sm:w-4/5 h-full max-lg:h-1/2 max-sm:h-1/3 relative flex justify-center items-center`}
    >
      <div className="w-full h-auto flex justify-center items-center">
        <Image
          src={src}
          width={400}
          height={400}
          alt="hero_photo"
          objectFit="cover"
          className={`${hero ? "w-full h-auto" : "w-full h-auto z-10"}`}
        />
      </div>
    </div>
  );
}

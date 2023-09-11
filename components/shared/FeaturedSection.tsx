import Button from "./Button";
import Image from "next/image";

interface Porps {
  title: string;
  text: string;
  buttonText: string;
  hero?: boolean;
  icon?: string;
}

export default function FeaturedSection({
  title,
  text,
  buttonText,
  hero,
  icon,
}: Porps) {
  return (
    <section className="max-w-[40%] max-md:max-w-[80%] max-lg:max-w-[60%] lg:h-1/3 max-h-[500px] max-lg:h-1/2 max-lg:text-center max-lg:items-center flex flex-col justify-evenly items-end font-[500]">
      <div className="flex">
        <h1
          className={`rtl ${
            hero
              ? "text-4xl"
              : "text-2xl font-[600] relative after:h-1 after:w-1/2 after:bg-blue-500 after:absolute after:bottom-0 after:left-0"
          } text-black tracking-normal leading-loose font-kalame mx-6`}
        >
          {title}
        </h1>
        {icon && (
          <Image
            src={icon}
            width={25}
            height={25}
            alt="icon"
            objectFit="cover"
          />
        )}
      </div>

      <p className="text-sm font-[500] lg:my-4 text-gray-600 leading-6 rtl">
        {text}
      </p>

      <Button
        bg="bg-blue-600"
        color="text-white"
        margin="mx-4"
        padding="px-5 py-3"
        rounded="rounded-md"
        size="text-md"
        text={buttonText}
        hover="hover:bg-blue-700"
        rest="font-[500] max-md:px-3 max-md:py-2 max-md:text-sm shadow-level_1 hover:shadow-none transition"
      />
    </section>
  );
}

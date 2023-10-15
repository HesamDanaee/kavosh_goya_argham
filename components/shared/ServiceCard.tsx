import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  text: string;
  unique: boolean;
}

export default function ServiceCatd({ icon, title, text, unique }: Props) {
  return (
    // Card
    <div
      className={`flex flex-col justify-evenly text-end px-4 min-w-[300px] max-w-[500px] max-md:w-[80%] h-[200px] rounded-md relative hover:-translate-y-2 hover:shadow-md transition-all duration-200 ease-in-out hover:cursor-pointer ${
        unique
          ? "bg-blue-500 after:'' after:w-full after:h-full after:rounded-md after:-z-10 after:absolute after:-right-4 after:-bottom-5 after:border-[1px] after:border-black "
          : "bg-none border-[2px] border-gray-400"
      }`}
    >
      {/* Iocn and Title Wrapper */}
      <div className="flex flex-row-reverse items-center break-normal">
        <Image src={icon} width={30} height={30} alt="icon" />
        <h3
          className={`text-md font-bold leading-6 mx-6 ${
            unique ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
      </div>
      <p
        className={`text-sm leading-6 ${
          unique ? "text-white" : "text-gray-800"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

"use client";
import Button from "./shared/Button";
import List from "./shared/List";
import ListItem from "./shared/ListItem";
import links from "@/constants/navbarLinksData";
import Image from "next/image";

// Assets
import logo from "@/public/assets/icons/Logo.svg";

// Hooks
import useScrollHeaderVisibility from "@/hooks/useScrollHeaderVisibility";

export default function Header() {
  const isHeaderVisible = useScrollHeaderVisibility();

  return (
    <header
      className={`header w-screen after:h-[1px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 max-md:px-4 mx-auto px-10 py-10 z-[101] flex justify-between items-center text-lg fixed top-0 transition-[padding,background-color] duration-75 ease-out   ${
        isHeaderVisible && "bg-[#0000002f] py-4 backdrop-blur-[2px]"
      }`}
    >
      <Button
        bg="bg-blue-600"
        size="text-sm"
        color="text-white"
        margin=""
        padding="px-5 py-3"
        rounded="rounded-md"
        hover="hover:bg-blue-700 "
        text="ارتباط با ما"
        rest="px-2 py-2 text-xs"
      />
      <div className="w-[70%] max-lg:w-auto max-w-[800px] flex justify-between items-center ">
        <List>
          <ListItem items={links} />
        </List>

        <Image
          src={logo}
          width={150}
          height={100}
          alt="logo"
          className="hover:cursor-pointer"
        />
      </div>
    </header>
  );
}

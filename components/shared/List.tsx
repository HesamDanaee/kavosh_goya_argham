import { ReactNode } from "react";

export default function List({ children }: { children: ReactNode }) {
  return (
    <ul className="flex w-[80%] max-w-[600px] justify-evenly items-center max-lg:hidden">
      {children}
    </ul>
  );
}

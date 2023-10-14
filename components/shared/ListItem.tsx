// Helpers
import { generateId } from "@/utils/helpers";
import Link from "next/link";

export default function ListItem({ items }: { items: ListItems }) {
  const content =
    items.length !== 0 &&
    items.map(({ text, id }) => (
      <li
        className="text-sm text-black hover:cursor-pointer relative font-[600] before:h-[1px] before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-[#00000091] before:scale-0 before:transition-all before:origin-bottom-left hover:before:origin-bottom-right hover:before:scale-100 before:duration-100"
        key={generateId()}
        onClick={() => {}}
      >
        <Link href="#" key={generateId()}>
          {text}
        </Link>
      </li>
    ));

  return content !== undefined ? content : <h1>No content</h1>;
}

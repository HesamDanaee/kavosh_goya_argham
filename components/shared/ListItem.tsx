// Helpers
import { generateId } from "@/utils/helpers";
import Link from "next/link";

export default function ListItem({ items }: { items: ListItems }) {
  const content =
    items.length !== 0 &&
    items.map(({ text, id }) => (
      <li
        className="text-sm text-black hover:border-b-[2px] border-gray-800 hover:cursor-pointer font-[500]"
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

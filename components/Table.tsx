import { generateId } from "@/utils/helpers";

interface Rows {
  tr: (string | string[])[];
}

interface Props {
  header: {
    tr: string[];
  };
  rows: Rows[];
}

export default function Table({ header, rows }: Props) {
  return (
    <div className="w-[95%] max-w-[1200px] h-auto border-[1px] border-gray-600 rounded-md max-lg:h-[500px]">
      <table className="w-full h-full border-collapse font-kalame table-fixed">
        {/* Header */}
        <thead>
          <tr>
            {header.tr.map((th, index) => (
              <th
                key={generateId()}
                className={`border-slate-500 px-4 py-10 text-2xl font-[600] text-white ${
                  index % 2 === 0 ? "bg-blue-500" : "bg-blue-800"
                } ${index !== 0 && "border-l-[1px]"}`}
              >
                {th}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}

        <tbody>
          {rows.map((td) => (
            <tr key={generateId()}>
              {td.tr.map((item, index) =>
                typeof item === "string" ? (
                  <td
                    key={generateId()}
                    className="border-l border-slate-500 text-center text-2xl font-[600]"
                  >
                    {item}
                  </td>
                ) : (
                  <td
                    key={generateId()}
                    className={`px-10 py-2 ${
                      index !== 0 && "border-l"
                    } border-slate-500`}
                  >
                    <ul
                      className="w-full h-2/3 flex flex-col justify-evenly  list-disc list text-md"
                      style={{
                        direction: "rtl",
                      }}
                    >
                      {item.map((text) => (
                        <li key={generateId()}>{text}</li>
                      ))}
                    </ul>
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

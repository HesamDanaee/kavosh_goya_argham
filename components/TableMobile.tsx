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

export default function TableMobile({ header, rows }: Props) {
  return (
    <>
      {header.tr.map((th, index) => {
        const item = rows[0].tr[index];

        return (
          <>
            {typeof item !== "string" && (
              <div
                key={generateId()}
                className="w-[80%] flex flex-col justify-between h-[400px] border-[1px] border-gray-600 rounded-md "
              >
                <table
                  className={` w-full h-full border-collapse font-kalame table-fixed`}
                >
                  {/* Header */}
                  <thead>
                    <tr>
                      <th
                        key={generateId()}
                        className={`border-slate-500 px-4 py-10 text-2xl font-[600] text-white ${
                          index % 2 === 0 ? "bg-blue-500" : "bg-blue-800"
                        } ${index !== 0 && "border-l-[1px]"}`}
                      >
                        {th}
                      </th>
                    </tr>
                  </thead>

                  {/* Body */}

                  <tbody>
                    <tr key={generateId()}>
                      {typeof item === "string" ? (
                        ""
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
                            {item?.map((text) => (
                              <li key={generateId()}>{text}</li>
                            ))}
                          </ul>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}

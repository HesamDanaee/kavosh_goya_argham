"use client";

import Table from "@/components/Table";
import TableMobile from "@/components/TableMobile";

// Data
import tableData from "@/constants/tableData";

// Custom Hooks
import useWindowSize from "@/hooks/useWindowSize";

export default function ServiceTable() {
  const isMobile = useWindowSize();

  return (
    <section
      id="service-table"
      className="w-full h-[600px] max-md:h-[1800px] flex flex-col justify-around items-center"
    >
      <h1 className="font-kalame font-bold text-2xl after_blue relative">
        جدول ویژگی های خدمات
      </h1>

      {isMobile ? (
        <TableMobile header={tableData.header} rows={tableData.rows} />
      ) : (
        <Table header={tableData.header} rows={tableData.rows} />
      )}
    </section>
  );
}

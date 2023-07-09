import { useLoaderData } from "react-router-dom";
import { Employee } from "../../../models/Employee";
import Table from "react-bootstrap/Table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const columns: ColumnDef<Employee>[] = [
  {
    header: "Name",
    accessorKey: "name",
    minSize: 270,
  },
  {
    header: "Job Title",
    accessorKey: "jobTitle",
    minSize: 150,
  },
  {
    header: "Tenure",
    accessorKey: "tenure",
    size: 90,
  },
  {
    header: "Gender",
    accessorKey: "gender",
    size: 100,
  },
];

export const EmployeeTable: React.FC = () => {
  const employees = useLoaderData() as Employee[];

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data: employees,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableContainerRef.current,
    count: rows.length,
    estimateSize: () => 41,
    overscan: 10,
  });

  const { getVirtualItems, getTotalSize } = rowVirtualizer;

  const virtualItems = getVirtualItems();

  const paddingTop = virtualItems.length > 0 ? virtualItems[0]?.start || 0 : 0;
  const paddingBottom =
    virtualItems.length > 0
      ? getTotalSize() - (virtualItems[virtualItems.length - 1]?.end || 0)
      : 0;

  return (
    <div
      ref={tableContainerRef}
      className="flex-1 w-100 overflow-y-auto border"
    >
      <Table striped bordered hover>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-top-0">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border-start-0"
                  style={{
                    minWidth: header.getSize(),
                  }}
                >
                  <div
                    className="cursor-pointer d-flex justify-content-between"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                    <span style={{ width: 15 }}>
                      {header.column.getIsSorted() === "asc" && " ↓"}
                      {header.column.getIsSorted() === "desc" && " ↑"}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {paddingTop > 0 && (
            <tr>
              <td colSpan={4} style={{ height: `${paddingTop}px` }} />
            </tr>
          )}
          {virtualItems.map((virtualRow) => {
            const row = rows[virtualRow.index];
            return (
              <tr key={row.id} style={{ height: virtualRow.size }}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border-start-0 text-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
          {paddingBottom > 0 && (
            <tr>
              <td colSpan={4} style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

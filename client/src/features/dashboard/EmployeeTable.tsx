import { useLoaderData } from "react-router-dom";
import { Employee } from "../../models/Employee";
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

const columns: ColumnDef<Employee>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },
  {
    header: "Job Title",
    accessorKey: "jobTitle",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },
  {
    header: "Tenure",
    accessorKey: "tenure",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },
  {
    header: "Gender",
    accessorKey: "gender",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
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

  return (
    <div className="flex-1 w-100 overflow-y-auto border">
      <Table striped bordered hover>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-top-0">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border-start-0"
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-start-0">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

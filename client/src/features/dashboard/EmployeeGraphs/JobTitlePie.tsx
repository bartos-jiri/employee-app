import { ResponsiveContainer, Pie, PieChart, LabelList, Cell } from "recharts";
import { useLoaderData } from "react-router-dom";
import { Employee } from "../../../models/Employee";
import React from "react";

const COLORS = ["#8884d8", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const JobTitlePie: React.FC = () => {
  const employees = useLoaderData() as Employee[];

  const data = React.useMemo(() => {
    const result: Record<string, number> = {};

    for (const employee of employees) {
      if (result[employee.jobTitle]) {
        result[employee.jobTitle]++;
      } else {
        result[employee.jobTitle] = 1;
      }
    }

    return Object.entries(result).map(([label, value]) => ({ label, value }));
  }, [employees]);

  return (
    <fieldset className="border p-2">
      <legend className="float-none w-auto px-2">Employees by Job Title</legend>

      <ResponsiveContainer aspect={1} width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            label={(entry: (typeof data)[0]) => entry.label}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <LabelList dataKey="value" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </fieldset>
  );
};

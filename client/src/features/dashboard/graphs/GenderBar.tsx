import { useLoaderData } from "react-router-dom";
import { Employee } from "../../../models/Employee";
import { Bar, BarChart, Legend, ResponsiveContainer, YAxis } from "recharts";
import React from "react";
import { occurrences } from "./computation";

const COLORS = ["#8884d8", "#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

export const GenderBar: React.FC = () => {
  const employees = useLoaderData() as Employee[];

  const data = React.useMemo(
    () => [occurrences(employees, "gender")],
    [employees]
  );

  return (
    <fieldset className="border p-2">
      <legend className="float-none w-auto px-2">Employees by Gender</legend>
      <ResponsiveContainer aspect={1} width="100%" height="100%">
        <BarChart data={data}>
          <YAxis />
          {Object.keys(data[0]).map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={COLORS[index % COLORS.length]}
              label={{ position: "top" }}
            />
          ))}
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </fieldset>
  );
};

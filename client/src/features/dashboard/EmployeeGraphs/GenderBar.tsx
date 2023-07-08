import { useLoaderData } from "react-router-dom";
import { Employee } from "../../../models/Employee";
import { Bar, BarChart, Legend, ResponsiveContainer, YAxis } from "recharts";
import React from "react";

export const GenderBar: React.FC = () => {
  const employees = useLoaderData() as Employee[];

  const data = React.useMemo(() => {
    const result = [
      {
        Male: 0,
        Female: 0,
      },
    ];

    for (const employee of employees) {
      if (employee.gender === "Male") {
        result[0].Male++;
      } else if (employee.gender === "Female") {
        result[0].Female++;
      }
    }

    return result;
  }, [employees]);

  return (
    <fieldset className="border p-2">
      <legend className="float-none w-auto px-2">Employees by Gender</legend>
      <ResponsiveContainer aspect={1} width="100%" height="100%">
        <BarChart data={data}>
          <YAxis />
          <Bar dataKey="Male" fill="#8884d8" label={{ position: "top" }} />
          <Bar dataKey="Female" fill="#82ca9d" label={{ position: "top" }} />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </fieldset>
  );
};

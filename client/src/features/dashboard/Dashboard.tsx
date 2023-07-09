import { EmployeeTable } from "./tables/EmployeeTable";
import { EmployeeGraphs } from "./graphs/EmployeeGraphs";

import classes from "./Dashboard.module.scss";
import { useLoaderData } from "react-router-dom";
import { Employee } from "../../models/Employee";
import { EmptyDashboard } from "./EmptyDashboard";

export const Dashboard: React.FC = () => {
  const employees = useLoaderData() as Employee[];

  if (!employees.length) {
    return <EmptyDashboard />;
  }

  return (
    <div>
      <div className={`${classes.top} mb-2 d-flex`}>
        <EmployeeTable />
      </div>
      <div>
        <EmployeeGraphs />
      </div>
    </div>
  );
};

import { EmployeeTable } from "./EmployeeTable";
import { EmployeeGraphs } from "./EmployeeGraphs";

import classes from "./Dashboard.module.scss";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className={`${classes.top} mb-3 d-flex`}>
        <EmployeeTable />
      </div>
      <div>
        <EmployeeGraphs />
      </div>
    </div>
  );
};

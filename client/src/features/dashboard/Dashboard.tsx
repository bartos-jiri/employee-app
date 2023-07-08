import { EmployeeTable } from "./EmployeeTable";
import { EmployeeGraphs } from "./EmployeeGraphs/EmployeeGraphs";

import classes from "./Dashboard.module.scss";

export const Dashboard: React.FC = () => (
  <div>
    <div className={`${classes.top} mb-2 d-flex`}>
      <EmployeeTable />
    </div>
    <div>
      <EmployeeGraphs />
    </div>
  </div>
);

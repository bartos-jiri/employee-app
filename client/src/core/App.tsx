import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { ErrorPage } from "./ErrorPage";

import { NewEmployeeForm } from "../features/new-employee/NewEmployeeForm";
import { createEmployeeAction } from "../features/new-employee/actions";

import { Dashboard } from "../features/dashboard/Dashboard";
import { getEmployees } from "../features/dashboard/api";

import "./global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: getEmployees,
      },
      {
        path: "/employees/new",
        element: <NewEmployeeForm />,
        action: createEmployeeAction,
      },
    ],
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;

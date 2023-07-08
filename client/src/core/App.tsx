import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { ErrorPage } from "./ErrorPage";

import { NewEmployee } from "../features/new-employee/NewEmployee";
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
        element: <NewEmployee />,
      },
    ],
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import { ErrorPage } from "./ErrorPage";

import { NewEmployee } from "../features/new-employee/NewEmployee";
import { Dashboard } from "../features/dashboard/Dashboard";
import { getEmployees } from "../features/dashboard/api";

import "./global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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

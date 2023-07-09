import "@testing-library/jest-dom";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const withRouterDef = (
  element: React.ReactNode,
  options?: Partial<{
    path: RouteObject["path"];
    action: RouteObject["action"];
  }>
) => {
  const router = createBrowserRouter([
    {
      element,
      path: options?.path || "/",
      action: options?.action,
    },
  ]);

  return <RouterProvider router={router} />;
};

declare global {
  // eslint-disable-next-line no-var
  var withRouter: typeof withRouterDef;
}

global.withRouter = withRouterDef;

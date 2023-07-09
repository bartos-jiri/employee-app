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
    loader: RouteObject["loader"];
  }>
) => {
  const router = createBrowserRouter([
    {
      element,
      path: options?.path || "/",
      action: options?.action,
      loader: options?.loader,
    },
  ]);

  return <RouterProvider router={router} />;
};

declare global {
  // eslint-disable-next-line no-var
  var withRouter: typeof withRouterDef;
}

global.withRouter = withRouterDef;

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

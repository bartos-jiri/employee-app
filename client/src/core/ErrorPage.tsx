import { useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as {
    statusText?: string;
    message?: string;
  };

  console.error(error);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

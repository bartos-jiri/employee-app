import Spinner from "react-bootstrap/Spinner";

export const LoadingPage: React.FC = () => (
  <div className="w-100 flex-fill d-flex justify-content-center align-items-center">
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden opacity-0">Loading...</span>
    </Spinner>
  </div>
);

import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";

export const AppLayout: React.FC = () => (
  <div className="d-flex flex-column min-vh-100">
    <AppBar />
    <Container className="flex-fill">
      <Outlet />
    </Container>
  </div>
);

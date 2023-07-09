import Container from "react-bootstrap/Container";
import { Outlet, useNavigation } from "react-router-dom";
import { AppBar } from "./AppBar";
import { LoadingPage } from "./LoadingPage";

export const AppLayout: React.FC = () => {
  const navigation = useNavigation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <AppBar />
      <Container className="flex-fill my-3 d-flex flex-column">
        {navigation.state === "loading" ? <LoadingPage /> : <Outlet />}
      </Container>
    </div>
  );
};

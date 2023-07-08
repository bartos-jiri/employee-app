import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export const AppBar: React.FC = () => (
  <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" fixed="top">
    <Container>
      <Navbar.Brand href="#top">Corporate Employees</Navbar.Brand>
      <Navbar.Toggle aria-controls="app-bar" data-bs-target="#app-bar" />
      <Navbar.Collapse id="app-bar" className="justify-content-end">
        <Nav>
          <Nav.Link eventKey="1" as={NavLink} to="/">
            Dashboard
          </Nav.Link>
          <Nav.Link eventKey="2" as={NavLink} to="/employees/new">
            Add Employee
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

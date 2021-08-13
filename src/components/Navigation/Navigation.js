import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
import logo from "../../../src/logo.png";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Paulista Hortifruti Logo"
          />
        </Navbar.Brand>
        <Nav className="mx-auto" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cart">Carrinho</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;

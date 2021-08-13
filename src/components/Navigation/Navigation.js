import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css'

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
          <Navbar.Brand href="#home">
          <img
              src="/logo.png"
              width="10"
              height="10"
              className="d-inline-block align-top"
              alt="Paulista Hortifruti Logo"
          />
          </Navbar.Brand>
            <Nav className="mx-auto" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Frutas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home">Legumes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home">Verduras</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home">Mercearia</Nav.Link>
              </Nav.Item>
            </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
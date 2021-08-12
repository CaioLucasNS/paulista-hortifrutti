import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">
          {/*<img
              src="/logo.png"
              width="10"
              height="10"
              className="d-inline-block align-top"
              alt="Paulista Hortifruti Logo"
          />*/}
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' >
            <Nav>
              <Nav.Link href='/frutas'>Frutas</Nav.Link>
              <Nav.Link href='/legumes'>Legumes</Nav.Link>
              <Nav.Link href='/ovos'>Ovos</Nav.Link>
              <Nav.Link href='/temperos'>Temperos</Nav.Link>
              <Nav.Link href='/verdura'>Verdura</Nav.Link>
              <Nav.Link href='/mercearia'>Mercearia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNavbar() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary px-7 h-70 kuda__navbar">
      <Container fluid>
        <Navbar.Brand href="#">Kuda Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Personal</Nav.Link>
            <Nav.Link href="#action2">Business</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Company</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              Link
            </Nav.Link>
          </Nav>
           <Nav.Link href="#action6">Help</Nav.Link>
           <Button variant="kuda" size="lg">Join Kuda</Button>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
import "./navbar.css"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
const Topbar = () => {
  return (
        <Navbar bg="dark" expand="md" className="py-5">
          <Container fluid="lg">
              <Navbar.Brand className='fs-4 fw-normal text-white' href="#home"><strong className="text-danger">SOL</strong>MUSIC</Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav'/>
              <Navbar.Collapse id="basic-navbar-nav" className='d-md-flex justify-content-md-between align-items-md-center'>
                <Nav>
                  <Nav.Link className=" text-white ms-4">Home</Nav.Link>
                  <Nav.Link className="text-white ms-4">About</Nav.Link>
                  <NavDropdown title="Pages" id="basic-nav-dropdown" className="ms-4">
                    <NavDropdown.Item href="#">Category</NavDropdown.Item>
                    <NavDropdown.Item href="#">Playlists</NavDropdown.Item>
                    <NavDropdown.Item href="#">Artists</NavDropdown.Item>
                    <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
                    <NavDropdown.Item href="#">Contact</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="text-white ms-4">News</Nav.Link>
                  <Nav.Link className="text-white ms-4">Contact</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link className="text-muted">Help</Nav.Link>
                  <Nav.Link className="text-white">Login</Nav.Link>
                  <Nav.Link className="text-danger">Create an account</Nav.Link>
                </Nav>
              </Navbar.Collapse> 
          </Container>
        </Navbar>
  )
}

export default Topbar
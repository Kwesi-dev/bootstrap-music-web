import { Navbar, Container, Nav } from "react-bootstrap"
const Topbar = () => {
  return (
    <nav>
        <Navbar bg="dark" expand="md" collapseOnSelect={true} style={{height: "20vh"}}>
          <Container fluid="lg">
              <Navbar.Brand className='fs-4 fw-normal text-white' href="#home"><strong className="text-danger">SOL</strong>MUSIC</Navbar.Brand>
              <Navbar.Toggle aria-controls='navbar-nav'/>
              <Navbar.Collapse id="navbar-nav" className='d-flex justify-content-between align-items-center'>
                <Nav>
                  <Nav.Item className=" ms-5">
                    <Nav.Link className=" text-white">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" ms-5">
                    <Nav.Link className="text-white">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" ms-5">
                    <Nav.Link className="  text-white">Pages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" ms-5">
                    <Nav.Link className="  text-white">News</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" ms-5">
                    <Nav.Link className="  text-white">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav>
                <Nav.Item>
                    <Nav.Link className="text-muted">Help</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="text-white">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="text-danger">Create an account</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse> 
          </Container>
        </Navbar>
    </nav>
  )
}

export default Topbar
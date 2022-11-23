import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';


function NavBar(){
  return(
    <Navbar variant="dark"  bg="dark" expand="lg"  >
    <Container>
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Project</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#link">Contact </Nav.Link>
          
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default NavBar;
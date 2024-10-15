import { Container, Navbar, Button } from "react-bootstrap";
import "./header.css";
function header() {
  return (
    <Navbar bg="light" className="mx-5 round-navbar">
      <Container>
        <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button Color="hover-orange">LogIn</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;

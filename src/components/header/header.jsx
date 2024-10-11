import { Container, Navbar, Button } from "react-bootstrap";

function header() {
  return (
    <Navbar bg="light" className="mx-4">
      <Container>
        <Navbar.Brand href="#home">MyLogo</Navbar.Brand>

        {/* Right-aligned Login Button */}
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-primary">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;

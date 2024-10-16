import { Container, Button, Navbar } from "react-bootstrap";
import "./header.css";
function header() {
  return (
    <Navbar bg="light" className="mx-5 round-navbar">
      <Container>
        <div className="sc-fBEEOr aOQZO">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="hover-line1"></span>
          <span className="hover-line2"></span>
        </div>
        <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button className="custom-button px-5 py-2 ">LogIn</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;

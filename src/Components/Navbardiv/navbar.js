import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

function NavbarComponent() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="/" style={{ color: "white" }}>
            The Ninja
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                About
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

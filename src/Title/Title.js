import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import "./Title.css";

function Title() {
  return (
    <Container>
      <Row>
        <Col md={12} sm={12} className="text-center mt-5">
          <h1>This is Title</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Title;

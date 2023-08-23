import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import "./Power.css";
function Power() {
  return (
    <Container>
      <Row>
        <Col md={12} sm={12} className="powerSecton">
          <h3 className="PowerTitle">What power this Ninja Have</h3>
          <ul>
            <li>Ulter Power</li>
            <li>Ninja Power</li>
            <li>Swim faster</li>
            <li>Run Fast</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Power;

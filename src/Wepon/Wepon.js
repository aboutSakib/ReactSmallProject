import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import katana from "../Images/image/katana.jpg";
import kunai from "../Images/image/kunai.jpg";
import ninja from "../Images/image/ninja.jpg";
import ShuriKen from "../Images/image/shuriken.jpg";

function Wepon() {
  return (
    <Container fluid>
      <Row>
        <Col md={12} sm={12}>
          <h3 className="text-center mt-5">What We Use</h3>
        </Col>
        <Col md={3} sm={6} className="text-center mt-5">
          <h4>katana</h4>
          <img
            className="width"
            src={katana}
            alt="not found"
            Style="width:100%"
          />
        </Col>
        <Col md={3} sm={6} className="text-center mt-5">
          <h4>Kunai</h4>
          <img src={kunai} alt="not found" Style="width:100%" />
        </Col>
        <Col md={3} sm={6} className="text-center mt-5">
          <h4>Ninja</h4>
          <img src={ninja} alt="not found" Style="width:100%" />
        </Col>
        <Col md={3} sm={6} className="text-center mt-5">
          <h4>ShuriKen</h4>
          <img src={ShuriKen} alt="not found" Style="width:100%" />
        </Col>
      </Row>
    </Container>
  );
}

export default Wepon;

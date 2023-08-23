// IntroP.js
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import hero from "../Images/image/heroImage.jpg";
import "./IntroP.css";

function IntroP() {
  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <img id="heroImage" src={hero} alt="can't loaded " />
        </Col>
        <Col md={6} sm={12}>
          <p className="IntroText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            aliquam ipsam quisquam quas nemo, natus iure quidem corporis omnis?
            Omnis inventore earum expedita odio, quae voluptates? Suscipit
            aliquam, pariatur odio quam voluptatibus corporis illum non laborum,
            facilis, vero dolore at. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laborum tenetur ea ducimus voluptatum omnis.
            Numquam quos autem exercitationem non accusamus.
          </p>
          <p className="IntroText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            magnam est facere soluta ducimus nemo consequatur nisi praesentium
            omnis atque dolor, ipsam amet quidem dolorem hic officiis! Rem, aut
            dicta.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default IntroP;

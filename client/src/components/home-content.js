import React from "react";
import { Row, Container } from "../components/Grid";
import home from "../images/home.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import "../components/style.css";

const HomeContent = () => (

  <div className="next-steps">
    <h2 className="my-5 text-center"
      style={{
        color: "var(--forest)",
        fontWeight: "bolder",
        fontSize: "24px",
        // textShadow: "1px 1px var(--smoke)"
      }}>
      ...neighbors helping neighbors get through hard times &#128151;
    </h2>
    <Container fluid>
      <Row>
        <img src={home} alt="mad and woman gardening" />
        <img src={home2} alt="group of women sitting on stairs" />
        <img src={home3} alt="man in neighbor baseball cap" />
      </Row>
    </Container>
  </div>
);

export default HomeContent;
import React from "react";
import { Row, Container } from "../components/Grid";
import background from "../images/background.jpg";
// import home from "../images/home.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import home4 from "../images/home4.jpg";
import "../components/style.css";

const HomeContent = () => (

  <div className="next-steps">
    <h2 className="my-5 text-center"
      style={{
        color: "var(--pale)",
        fontWeight: "bolder",
        fontSize: "24px",
        textShadow: "2px 2px var(--forest)"
      }}>
      ...neighbors helping neighbors get through hard times &#128151;
    </h2>
    <Container fluid>
      <Row>
        <img src={background} alt="people helping" />
        {/* <img src={home} alt="more people helping" /> */}
        <img src={home2} alt="even more people helping" />
        <img src={home3} alt="guy in hat" />
        <img src={home4} alt="helping hands" />
      </Row>
    </Container>
  </div>
);

export default HomeContent;
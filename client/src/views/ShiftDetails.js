import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function ShiftDetails(props) {
  const [shift, setShift] = useState({})

  const { id } = useParams()
  useEffect(() => {
    API.getShift(id)
      .then(res => setShift(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">

          <h4 style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#004d26"
          }}>
            {shift.eventTitle}
          </h4>
          <h5 style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#004d26"
          }}>
            Need help on: {shift.dateAvailable}
          </h5>

        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h5 style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "#004d26"
            }}>Volunteer event location: {shift.eventLocation}</h5>
            <h6 style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "#004d26"
            }}>Volunteer details: {shift.eventDetails}</h6>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Link to="/shifts/" style={{ color: "#004d26" }} >← Back to all your volunteer opportunities</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default ShiftDetails;

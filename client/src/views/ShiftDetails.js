import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function ShiftDetails(props) {
  const [shift, setShift] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams()
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
        
              <h3>
                {shift.eventTitle}
              </h3>
    <p>location:  {shift.eventLocation}</p>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>deetz</h1>
              <p>
                {shift.eventDetails}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">back to...wherever</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default ShiftDetails;

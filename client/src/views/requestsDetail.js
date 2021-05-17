import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function RequestsDetail(props) {
  const [requests, setRequests] = useState({})

  // When this component mounts, grab the requests with the _id of props.match.params.id
  // e.g. localhost:3000/requestss/599dcb67f0f16317844583fc
  // const {id} = useParams()
  const { id } = useParams()
  useEffect(() => {
    API.getRequests(id)
      .then(res => setRequests(res.data))
      .catch(err => console.log(err));
  }, )

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {requests.title} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Request</h1>
              <p>
                {requests.request}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Watevr</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default RequestsDetail;

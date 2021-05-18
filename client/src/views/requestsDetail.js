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
    API.getRequest(id)
      .then(res => setRequests(res.data))
      .catch(err => console.log(err));
  })

  return (
    <Container fluid>
      <Row>
        <Col size="md-12 ">
          <h4 style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#004d26",
            fontFamily: "'Montserrat', sans-serif"
          }}>
            Need help on {requests.dateAvailable}
          </h4>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <article>
            <h5 style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "#004d26",
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Request details:
                        </h5>
            <h6 style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "#004d26",
              fontFamily: "'Montserrat', sans-serif"
            }}>
              {requests.request}
            </h6>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-12 mt-10"  >
          <Link to="/requests/" style={{
            color: "#004d26",
            fontFamily: "'Montserrat', sans-serif"
          }} >← Back to all your requests</Link>
        </Col>
      </Row>
    </Container >
  );
}


export default RequestsDetail;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function CommunityRequestsDetail(props) {
    const [requests, setRequests] = useState({})
    const { id } = useParams()
    useEffect(() => {
        API.getCommunityRequest(id)
            .then(res => setRequests(res.data))
            .catch(err => console.log(err));
    })

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>
                            {requests.title} by {requests.requests}
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <article>
                        <h1>Request</h1>
                        <p>
                            {requests.requests}
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


export default CommunityRequestsDetail;

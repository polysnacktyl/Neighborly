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
                    <Link to="/community_requests/" style={{
                        color: "#004d26",
                        fontFamily: "'Montserrat', sans-serif"
                    }} >← Back to all community requests</Link>
                </Col>
            </Row>
        </Container >
    );
}


export default CommunityRequestsDetail;

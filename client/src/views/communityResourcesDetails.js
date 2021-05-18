import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function CommunityResourcesDetails(props) {
    const [resource, setResource] = useState({})
    const { id } = useParams()
    useEffect(() => {
        API.getCommunityResource(id)
            .then(res => setResource(res.data))
            .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h4 style={{
                        textAlign: "center",
                        marginBottom: "10px",
                        color: "#004d26",
                        fontFamily: "'Montserrat', sans-serif"
                    }}>
                        Date Available To Help Out: {resource.dateAvailable}
                    </h4>
                    <h5 style={{
                        textAlign: "center",
                        marginBottom: "10px",
                        color: "#004d26",
                        fontFamily: "'Montserrat', sans-serif"
                    }}>status:  {resource.status}</h5>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <article>
                        <h5 style={{
                            textAlign: "center",
                            marginBottom: "10px",
                            color: "#004d26",
                            fontFamily: "'Montserrat', sans-serif"
                        }}>resource offer details: {resource.details}</h5>

                    </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Link to="/community_resources/" style={{
                        color: "#004d26",
                        fontFamily: "'Montserrat', sans-serif"
                    }} >← Back to all resources</Link>
                </Col>
            </Row>
        </Container>
    );
}


export default CommunityResourcesDetails;

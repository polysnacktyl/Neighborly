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

                    <h4>
                        {resource.dateAvailable}
                    </h4>
                    <p>status:  {resource.status}</p>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <article>
                        <h3>resource offer details</h3>
                        <p>
                            {resource.details}
                        </p>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Link to="/resources">back to all resources</Link>
                </Col>
            </Row>
        </Container>
    );
}


export default CommunityResourcesDetails;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function CommunityShiftDetails(props) {
    const [shift, setShift] = useState({})

    const { id } = useParams()
    useEffect(() => {
        API.getCommunityShift(id)
            .then(res => setShift(res.data))
            .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
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


export default CommunityShiftDetails;

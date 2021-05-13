import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function ResourceDetails(props) {
    const [resource, setResource] = useState({})

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    // const {id} = useParams()
    const { id } = useParams()
    useEffect(() => {
        API.getResource(id)
            .then(res => setResource(res.data))
            .catch(err => console.log(err));
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


export default ResourceDetails;

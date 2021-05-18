import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "../components/style.css";

function Community() {
    return (

        <div>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h1 className="community text-center">
                            Our Community
              </h1>
                    </Col>
                </Row>
                <Row>
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Request</h5>

                            <div className="card-footer text-center">
                                <Link to="/community_requests">
                                    <button className="btn-view">View Requests</button>
                                </Link>
                            </div>
                            <p className="card-text">Submit a new request or fulfil a neighbor's request</p>
                        </div>
                    </div>
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Resource Offers</h5>

                            <div className="card-footer text-center">
                                <Link to="/community_resources">
                                    <button className="btn-view">View Offers</button>
                                </Link>
                            </div>
                            <p className="card-text">Submit a new offer or fulfill an existing offer</p>
                        </div>
                    </div>
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Volunteering</h5>
                            <div className="card-footer text-center">
                                <Link to="/community_calendar">
                                    <button className="btn-view">View Calendar</button>
                                </Link>
                            </div>
                            <p className="card-text">Calendar of upcoming volunteer events in the community</p>
                        </div>

                    </div>
                </Row>
            </Container >
        </div>
    );
}

export default Community;
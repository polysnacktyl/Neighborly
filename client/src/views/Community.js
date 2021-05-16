import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "../components/style.css";
import community from "../images/community.jpg";
import community1 from "../images/community1.jpg";
import community2 from "../images/community2.jpg";

function Community() {
    return (

        <div className="community">
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
                            <p className="card-text">Submit a new request or fulfil a neighbor's request</p>
                            <div className="card-footer text-center">
                                <Link to="/community_requests">
                                    <button className="btn-view">View Requests</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Resource Offers</h5>
                            <p className="card-text">Submit a new offer or fulfill an existing offer</p>
                            <div className="card-footer text-center">
                                <Link to="/community_resources">
                                    <button className="btn-view">View Resource Offers</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Volunteer Shift Calendar</h5>
                            <p className="card-text">Calendar of upcoming volunteer events in the community</p>
                            <div className="card-footer text-center">
                                <Link to="/community_calendar">
                                    <button className="btn-view">View Calendar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <img src={community1} alt="group of girls volunteering" />
                    <img src={community} alt="girl writing on heart wall" />
                    <img src={community2} alt="volunteers in California" />
                </Row>
            </Container >
        </div>
    );
}

export default Community;
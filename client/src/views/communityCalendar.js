import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import { Container, Row } from "../components/Grid";
import API from "../utils/API";
import community1 from "../images/community1.jpg";

function CommunityCalendar() {
    const [shifts, setShifts] = useState([])
    useEffect(() => {
        loadShifts()
    }, [])

    function loadShifts() {
        API.getAllShifts()
            .then(res =>
                setShifts(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <p className="text-center calendar"
                style={{
                    color: "#99ffcc",
                    fontWeight: "bolder",
                    fontSize: "24px",
                    textShadow: "2px 2px #004d26"
                }}>
                Calendar Here!
            </p>
            <Container fluid>
                <Row>
                    <img src={community1} alt="calendar" />

                    {shifts.length ? (
                        <List>
                            {shifts.map(shifts => (
                                <ListItem key={shifts._id}>
                                    <Link to={"/community_calendar/" + shifts._id}>
                                        <strong>
                                            {shifts.eventTitle} at {shifts.eventLocation}
                                        </strong>
                                    </Link>

                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Row>
            </Container>
        </div>
    )
}

export default CommunityCalendar;
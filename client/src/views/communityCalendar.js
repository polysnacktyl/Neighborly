import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import { Col } from "../components/Grid";
// import Resources from "./resource";
import API from "../utils/API";

function CommunityCalendar() {


    const [shifts, setShifts] = useState([])

    useEffect(() => {
        loadShifts()
    }, [])

    function loadShifts() {
        API.getShifts()
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
            <Col size="md-6 sm-12">
                {shifts.length ? (
                    <List>
                        {shifts.map(shifts => (
                            <ListItem key={shifts._id}>
                                <Link to={"/shifts/" + shifts._id}>
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
            </Col>

        </div>
    )
}

export default CommunityCalendar;
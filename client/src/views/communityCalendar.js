import React, { useState, useEffect, useContext } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Date } from "../components/Form";
import UserContext from "../utils/userContext";

function Shifts() {
    const [shifts, setShifts] = useState([])
    const [formObject, setFormObject] = useState({})
    const { user } = useContext(UserContext);

    useEffect(() => {
        loadShifts()
    }, [])

    function loadShifts() {
        let userID = user.sub.split("|");
        let authID = userID[1];
        API.getAllShifts(authID)
            .then(res =>
                setShifts(res.data)
            )
            .catch(err => console.log(err));
    };



    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.eventTitle && formObject.eventLocation) {
            let userID = user.sub.split("|");
            let authID = userID[1];
            API.saveShift({
                dateAvailable: formObject.dateAvailable,
                eventTitle: formObject.eventTitle,
                eventLocation: formObject.eventLocation,
                eventDetails: formObject.eventDetails,
                user: user.email,
                authID: authID
            })
                .then(res => loadShifts())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <h4 style={{
                        textAlign: "center", color: "#004d26", marginBottom: "20px",
                        fontFamily: "'Montserrat', sans-serif"
                    }}>Let the community know when and where you need help</h4>
                    <form>
                        <h6 style={{
                            color: "#004d26",
                            fontFamily: "'Montserrat', sans-serif"
                        }}>Enter date you need volunteers:</h6>
                        <Date
                            onChange={handleInputChange}
                            name="dateAvailable"
                            placeholder="Date available (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="eventTitle"
                            placeholder="Event (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="eventLocation"
                            placeholder="Location (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="eventDetails"
                            placeholder="Details"
                        />
                        <div
                            onChange={handleInputChange}
                            name="user"
                            value={user.email}

                        />
                        <FormBtn
                            disabled={!(formObject.eventTitle && formObject.eventDetails)}
                            onClick={handleFormSubmit}
                        >
                            post a volunteer opportunity
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <h4 style={{
                        textAlign: "center", color: "#004d26", marginBottom: "45px",
                        fontFamily: "'Montserrat', sans-serif"
                    }}>Checkout the volunteer opportunities posted to the community</h4>
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
                            <h3 style={{
                                textAlign: "center", color: "#004d26", marginBottom: "20px",
                                fontFamily: "'Montserrat', sans-serif"
                            }}>No Shifts to Display</h3>
                        )}
                </Col>
            </Row>
        </Container >
    );
}


export default Shifts;

import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Date } from "../components/Form";
import UserContext from "../utils/userContext";

function Requests() {
    const [Requests, setRequests] = useState([])
    const [formObject, setFormObject] = useState({})
    const { user } = useContext(UserContext);

    useEffect(() => {
        loadRequests()
    }, [])

    function loadRequests() {
        let userID = user.sub.split("|");
        let authID = userID[1];
        API.getAllRequests(authID)
            .then(res =>
                setRequests(res.data)
            )
            .catch(err => console.log(err));
    };


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.request && formObject.dateAvailable) {
            let userID = user.sub.split("|");
            let authID = userID[1];
            API.saveRequests({
                dateAvailable: formObject.dateAvailable,
                title: formObject.title,
                request: formObject.request,
                user: user.email,
                authID: authID
            })
                .then(res => loadRequests())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6 sm-12">
                    <h4 style={{ textAlign: "center", color: "#004d26", marginBottom: "20px" }}>Post a request to the community</h4>
                    <form>
                        <h6 style={{ color: "#004d26" }}>Enter date you need help:</h6>
                        <Date

                            onChange={handleInputChange}
                            name="dateAvailable"
                            placeholder="Date available (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="title (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="request"
                            placeholder="request (required)"
                        />
                        <div
                            onChange={handleInputChange}
                            name="user"
                            value={user.email}

                        />
                        <FormBtn
                            disabled={!(formObject.title && formObject.request)}
                            onClick={handleFormSubmit}
                        >
                            Submit Request
              </FormBtn>
                    </form>
                </Col>

                <Col size="md-6 sm-12">
                    <h4 style={{ textAlign: "center", color: "#004d26", marginBottom: "45px" }}>Requests made to the community</h4>
                    {Requests.length ? (
                        <List>
                            {Requests.map(requests => (
                                <ListItem key={requests._id}>
                                    <Link to={"/community_requests/" + requests._id}>
                                        <strong>
                                            {requests.title} with {requests.request}
                                        </strong>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3 style={{ textAlign: "center", color: "#004d26", marginBottom: "20px" }}>No Requests to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}


export default Requests;

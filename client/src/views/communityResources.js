import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { TextArea, FormBtn, Radio, Date } from "../components/Form";
import UserContext from "../utils/userContext";

function Resources() {
    const [resources, setResources] = useState([])
    const [formObject, setFormObject] = useState({})
    const { user } = useContext(UserContext);

    useEffect(() => {
        loadResources()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function loadResources() {
        let userID = user.sub.split("|");
        let authID = userID[1];
        API.getAllResources(authID)
            .then(res =>
                setResources(res.data)
            )
            .catch(err => console.log(err));
    };


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.dateAvailable && formObject.details && formObject.status) {
            let userID = user.sub.split("|");
            let authID = userID[1];
            API.saveResource({
                dateAvailable: formObject.dateAvailable,
                details: formObject.details,
                status: formObject.status,
                user: user.email,
                authID: authID
            })
                .then(res => loadResources())
                .catch(err => console.log(err));
        }
    };

    return (
        < Container fluid >
            <Row>
                <Col size="md-6">
                    <h4 style={{
                        textAlign: "center", color: "#004d26", marginBottom: "20px",
                        fontFamily: "'Montserrat', sans-serif"
                    }}>Post a resource offer to the community</h4>
                    <form>
                        <h6 style={{
                            color: "#004d26",
                            fontFamily: "'Montserrat', sans-serif"
                        }}>Enter date available:</h6>
                        <Date

                            onChange={handleInputChange}
                            name="dateAvailable"
                            placeholder="Date available (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="details"
                            placeholder="details (required)"
                        />
                        <div
                            onChange={handleInputChange}
                            name="user"
                            value={user.email}

                        />
                        <Radio
                            onChange={handleInputChange}
                            name="status"
                            placeholder="available"
                        />
                        <FormBtn
                            disabled={!(formObject.dateAvailable && formObject.details && formObject.status)}
                            onClick={handleFormSubmit}
                        >
                            Submit Resource
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <h4 style={{
                        textAlign: "center", color: "#004d26", marginBottom: "45px",
                        fontFamily: "'Montserrat', sans-serif"
                    }}>Checkout the resources made available to the community</h4>
                    {resources.length ? (
                        <List>
                            {resources.map(resources => (
                                <ListItem key={resources._id}>
                                    <Link to={"/community_resources/" + resources._id}>
                                        <strong>
                                            {resources.details}
                                        </strong>
                                    </Link>

                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3 style={{
                                textAlign: "center", color: "#004d26", marginBottom: "20px",
                                fontFamily: "'Montserrat', sans-serif"
                            }}>No Resources to Display</h3>
                        )}
                </Col>
            </Row>
        </Container >
    );
}


export default Resources;

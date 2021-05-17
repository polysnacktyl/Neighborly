import React, { useState, useEffect, useContext } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { TextArea, FormBtn, Radio, Date } from "../components/Form";
import UserContext from "../utils/userContext";

function Resources() {
    // Setting our component's initial state
    const [resources, setResources] = useState([])
    const [formObject, setFormObject] = useState({})
    const { user } = useContext(UserContext);

    // trying to run conditional that wil only run useEffect if correct user is logged in
    // useEffect(() => {
    //     if (user.email === resources[0].user) {
    //         loadResources()
    //     }
    // }, [])

    useEffect(() => {
        loadResources()
        // console.log(resources)
        // console.log(user.email)
        console.log(user)
        // console.log(formObject)
    }, [])

    // Loads all books and sets them to books
    function loadResources() {
        let userID = user.sub.split("|");
        let authID = userID[1];
        API.getResources(authID)
            .then(res =>
                setResources(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteResource(id) {
        API.deleteResource(id)
            .then(res => loadResources())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
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
                    {/* <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron> */}
                    <form>
                        <h6>Enter date available:</h6>
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
                    {resources.length ? (
                        <List>
                            {resources.map(resources => (
                                <ListItem key={resources._id}>
                                    <Link to={"/resources/" + resources._id}>
                                        <strong>
                                            available on {resources.dateAvailable}, and {resources.details}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => deleteResource(resources._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container >
    );
}


export default Resources;

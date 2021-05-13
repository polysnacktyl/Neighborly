import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Requests() {
  // Setting our component's initial state
  const [Requests, setRequests] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Requests and store them with setRequests
  useEffect(() => {
    loadRequests()
  }, [])

  // Loads all Requests and sets them to Requests
  function loadRequests() {
    API.getRequests()
      .then(res => 
        setRequests(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads Requests from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadRequests())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload Requests from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadRequests())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Do You Need Help? Make A Request.</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="Request"
                placeholder="Request (required)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Request
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Come Help A Neighbor</h1>
            </Jumbotron>
            {Requests.length ? (
              <List>
                {Requests.map(request => (
                  <ListItem key={request._id}>
                    <Link to={"/requests/" + request._id}>
                      <strong>
                        {request.title}, {request.request}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(request._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Requests;

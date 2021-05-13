import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Shifts() {
  // Setting our component's initial state
  const [shifts, setShifts] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadShifts()
  }, [])

  // Loads all books and sets them to books
  function loadShifts() {
    API.getShifts()
      .then(res =>
        setShifts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteShift(id) {
    API.deleteShift(id)
      .then(res => loadShifts())
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
    if (formObject.eventTitle && formObject.eventLocation) {
      API.saveShift({
        // userID: this.userID, 
        // userEmail: this.userEmail,
        eventTitle: formObject.eventTitle,
        eventLocation: formObject.eventLocation,
        eventDetails: formObject.eventDetails
      })
        .then(res => loadShifts())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <form>
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
            <FormBtn
                disabled={!(formObject.eventTitle && formObject.eventDetails)}
                onClick={handleFormSubmit}
              >
                Post Opportunity
              </FormBtn>
          </form>
        </Col>
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
                  <DeleteBtn onClick={() => deleteShift(shifts._id)} />
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


export default Shifts;

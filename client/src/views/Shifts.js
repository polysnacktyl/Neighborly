import React, { useState, useEffect, useContext } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Time, Date } from "../components/Form";
import UserContext from "../utils/userContext";

function Shifts() {
  const [shifts, setShifts] = useState([])
  const { user } = useContext(UserContext);

  useEffect(() => {
    loadShifts()
  }, [])

  function loadShifts() {
    let userID = user.sub.split("|");
    let authID = userID[1];
    API.getShifts(authID)
      .then(res =>
        setShifts(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteShift(id) {
    API.deleteShift(id)
      .then(res => loadShifts())
      .catch(err => console.log(err));
  }



  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <h4 style={{
            textAlign: "center", color: "#004d26", marginBottom: "40px", marginTop: "40px",
            fontFamily: "'Montserrat', sans-serif"
          }}> {user.given_name}'s volunteer shifts made available to the community</h4>
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
              <h3 style={{
                textAlign: "center", color: "#004d26", marginTop: "100px",
                fontFamily: "'Montserrat', sans-serif"
              }}>No Volunteer Shifts to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Shifts;

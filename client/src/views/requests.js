import React, { useState, useEffect, useContext } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import UserContext from "../utils/userContext";

function Requests() {
  const [Requests, setRequests] = useState([])
  const { user } = useContext(UserContext);

  useEffect(() => {
    loadRequests()
  }, [])

  function loadRequests() {
    let userID = user.sub.split("|");
    let authID = userID[1];
    API.getRequests(authID)
      .then(res =>
        setRequests(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteRequests(id) {
    API.deleteRequests(id)
      .then(res => loadRequests())
      .catch(err => console.log(err));
  }



  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          {Requests.length ? (
            <List>
              {Requests.map(requests => (
                <ListItem key={requests._id}>
                  <Link to={"/requests/" + requests._id}>
                    <strong>
                      {requests.title}, {requests.request}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteRequests(requests._id)} />
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

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import UserContext from "../utils/userContext"
import "../components/style.css";

const Profile = () => {
  const { user } = useContext(UserContext)
  //wait for the page to finish loading
  function ready(newUser) {
    if (document.readyState !== 'loading') {
      newUser();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', newUser);
    }
  }
  //set user entry variables from auth0 login return
  let userID = user.sub.split("|");
  let authID = userID[1];
  let userEmail = user.email;
  console.log(userID);
  console.log(userID[1]);
  console.log(userEmail);
  ready(function () {
    //create new entry in User collection with auth0-specific id and email used to login. 
    API.saveUser({
      userID: userID[1],
      userEmail: userEmail,
      authID: authID
    })
      .catch(err => console.log(err));
  })
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 className="community text-center">
            {user.name}'s profile
          </h1>
        </Col>
      </Row>
      <Row>
        <div className="card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">My Requests</h5>
            <div className="card-footer text-center">
              <Link to="/requests">
                <button className="btn-view">View Requests</button>
              </Link>
            </div>
            <p className="card-text">View your active requests here.</p>
          </div>
        </div>
        <div className="card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">My Resources</h5>
            <div className="card-footer text-center">
              <Link to="/resources">
                <button className="btn-view">View Resources</button>
              </Link>
            </div>
            <p className="card-text">View any resources you currently have listed as available here.</p>
          </div>
        </div>
        <div className="card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">My Volunteering</h5>
            <div className="card-footer text-center">
              <Link to="/shifts">
                <button className="btn-view">View Calendar</button>
              </Link>
            </div>
            <p className="card-text">View your upcoming volunteer events here.</p>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default Profile;
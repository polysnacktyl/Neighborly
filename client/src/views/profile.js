import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import UserContext from "../utils/userContext"
import "../components/style.css";
// import userImage1 from "../images/userImage1.jpg";
// import userImage from "../images/userImage.jpg";
// import userImage2 from "../images/userImage2.jpg";

const Profile = () => {
  const { user } = useContext(UserContext)
  // const { name, picture, email } = user;
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
            My Community
              </h1>
        </Col>
      </Row>
      <Row>
        <div className="card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Requests</h5>
            <p className="card-text">View your active requests here.</p>
            <div className="card-footer text-center">
              <Link to="/requests">
                <button className="btn-view">View Requests</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Volunteer Calendar</h5>
            <p className="card-text">View your upcoming volunteer events here.</p>
            <div className="card-footer text-center">
              <Link to="/shifts">
                <button className="btn-view">View Calendar</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Resources</h5>
            <p className="card-text">View any resources you currently have listed as available here.</p>
            <div className="card-footer text-center">
              <Link to="/resources">
                <button className="btn-view">View Resources</button>
              </Link>
            </div>
          </div>
        </div>
      </Row>
      {/* <Row>
        <img src={userImage} alt="people holding hands" />
        <img src={userImage2} alt="charity event race" />
        <img src={userImage1} alt="man and boy" />
      </Row> */}
    </Container>
  );
};
export default Profile;
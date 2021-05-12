import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

const Profile = () => {
  const { user } = useAuth0();
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
  let userEmail = user.email;
  console.log(userID);
  console.log(userID[1]);
  console.log(userEmail);
  ready(function () {
    //create new entry in User collection with auth0-specific id and email used to login. 
    API.saveUser({
      userID: userID[1],
      userEmail: userEmail

    })
      .catch(err => console.log(err));
  })

  return (
    <div>

      <div class="card text-center" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Requests</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <Link to="/requests">
            <a className="btn btn-primary">Go somewhere</a>
          </Link>
        </div>
      </div>

      <div class="card text-center" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Volunteer Calendar</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <Link to="/volunteer">
            <a className="btn btn-primary">Go somewhere</a>
          </Link>
        </div>
      </div>

      <div class="card text-center" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Resources</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <Link to="/resources">
            <a className="btn btn-primary">Go somewhere</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
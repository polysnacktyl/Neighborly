import React from "react";
import { Route, Switch } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer } from "./components";
import { Home, Profile, Books } from "./views";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";

const App = () => {

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/books" component={Books} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
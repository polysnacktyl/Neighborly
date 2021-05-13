import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import NoMatch from "./views/NoMatch";
import { NavBar, Footer } from "./components";
import { Home, Profile, Books, Detail, Shifts, ShiftDetails, Community } from "./views";
import ProtectedRoute from "./auth/protected-route";
import "./app.css";

const App = () => {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/"> <Home /></Route>
        <ProtectedRoute path="/profile" component={Profile}/>
        <ProtectedRoute path="/community" component={Community} />
        <ProtectedRoute exact path="/books" component={Books}/>
        <ProtectedRoute exact path="/books/:id" component={Detail}/>
        <ProtectedRoute exact path="/shifts" component={Shifts}/> 
        <ProtectedRoute exact path="/shifts/:id" component={ShiftDetails}/>
        <Route><NoMatch /></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
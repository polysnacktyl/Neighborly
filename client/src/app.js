import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import NoMatch from "./views/NoMatch";
import { NavBar, Footer } from "./components";
import { Home, Profile, Books, Detail, Shifts, ShiftDetails, Resources, ResourceDetails, Community, CommunityRequests, CommunityResources, CommunityCalendar, Requests, RequestsDetail } from "./views";
import ProtectedRoute from "./auth/protected-route";
import "./app.css";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "./utils/userContext"

const App = () => {
  const { user } = useAuth0();
  return (
    <UserContext.Provider value={{ user }}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/"> <Home /></Route>
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/community" component={Community} />
          <ProtectedRoute exact path="/books" component={Books} />
          <ProtectedRoute exact path="/books/:id" component={Detail} />
          <ProtectedRoute exact path="/shifts" component={Shifts} />
          <ProtectedRoute exact path="/shifts/:id" component={ShiftDetails} />
          <ProtectedRoute exact path="/resources" component={Resources} />
          <ProtectedRoute exact path="/resources/:id" component={ResourceDetails} />
          <ProtectedRoute exact path="/community_requests" component={CommunityRequests} />
          <ProtectedRoute exact path="/community_resources" component={CommunityResources} />
          <ProtectedRoute exact path="/community_calendar" component={CommunityCalendar} />
          <ProtectedRoute exact path="/requests" component={Requests} />
          <ProtectedRoute exact path="/requests/:id" component={RequestsDetail} />
          <Route><NoMatch /></Route>
        </Switch>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
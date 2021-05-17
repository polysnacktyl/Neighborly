import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router} from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

import "./index.css";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory
    domain="divine-math-3885.us.auth0.com"
    clientId="5E399ofqYs1Fu6vvOkCiJlMZqKI9v8Tc"
    redirectUri={window.location.origin}
    audience={"https://infinite-forest-58133.herokuapp.com/"}> 
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-light btn-block" style={{ color: "#6d6de7" }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button >
  );
};

export default LoginButton;
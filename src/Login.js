import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="" />
        <h1>Messager</h1>
      </div>

      <Button onClick={signIn}>Login</Button>
    </div>
  );
}

export default Login;

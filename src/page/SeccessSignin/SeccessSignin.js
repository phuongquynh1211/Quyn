import React from "react";
import "./SeccessSignin.css";

function SeccessSignin() {
  return (
    <div className="login-success">
      <div className="success-icon">
        <i className="checkmark">&#10003;</i>
      </div>
      <p className="success-message">Registered Successfully</p>
      <button className="ok-button">OK</button>
    </div>
  );
}

export default SeccessSignin;

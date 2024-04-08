import React from "react";
import "./login_form.css";
import Logo from "../../assets/cophee-icon.png";

export default function login_form() {
  return (
    <div className="login-form">
      <div className="login-title">LOGIN</div>
      <form className="input-form">
        <input type="text" placeholder="Username" id="username-input"></input>
        <input type="text" placeholder="Password" id="password-input"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

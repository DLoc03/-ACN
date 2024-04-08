import React from "react";
import "./resigter_form.css";
import Logo from "../../assets/cophee-icon.png";

export default function resiter_form() {
  return (
    <div className="resigter-form">
      <div className="resigter-title">RESIGTER</div>
      <form className="input-form">
        <input type="text" placeholder="Email" id="username-input"></input>
        <input type="text" placeholder="Username" id="username-input"></input>
        <input type="text" placeholder="Password" id="password-input"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

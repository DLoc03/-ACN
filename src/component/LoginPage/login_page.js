import React from "react";
import TopNav from "../top-nav/topNav";
import Footer from "../footer/footer";
import LoginForm from "../login_form/login_form";
import "./login_page.css";

export default function login_page() {
  return (
    <div className="all-list-container">
      <div className="header">
        <TopNav />
      </div>

      <div className="login-container">
        <LoginForm />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

import React from "react";
import TopNav from "../top-nav/topNav";
import Footer from "../footer/footer";
import ResigterForm from "../resigter_form/resigter_form";
import "./resigter_page.css";

export default function resigter_page() {
  return (
    <div className="all-list-container">
      <div className="header">
        <TopNav />
      </div>

      <div className="resigter-container">
        <ResigterForm />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

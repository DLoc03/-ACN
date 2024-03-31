import React from "react";
import "./ListAll.css";
import TopNav from "../top-nav/topNav";
import Footer from "../footer/footer";
import ShopList from "../shop-list/shop-list";

export default function ListAll() {
  return (
    <div className="all-list-container">
      <div className="header">
        <TopNav />
      </div>

      <div className="all-list">
        <ShopList />
        <ShopList />
        <ShopList />
        <ShopList />
        <ShopList />
        <ShopList />
        <ShopList />
        <ShopList />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

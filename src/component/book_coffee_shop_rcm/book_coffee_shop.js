import React from "react";
import "./book_coffee_shop.css";
import BookCFImage from "../../assets/book-cf-1.jpg";

export default function Book_coffee_shop() {
  return (
    <div className="book-cf-image">
      <div className="book-avatar-image">
        <img src={BookCFImage}></img>
      </div>
      <div className="book-title-image">DaLat Route</div>
    </div>
  );
}

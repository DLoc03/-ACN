import React from "react";
import "./book_coffee_list.css";
import BookCoffee from "../book_coffee_shop_rcm/book_coffee_shop";

export default function Book_coffee_list() {
  return (
    <div className="book-cf-scroll">
      <div className="scrl book-cf1">
        <BookCoffee />
      </div>

      <div className="scrl book-cf2">
        <BookCoffee />
      </div>

      <div className="scrl book-cf3">
        <BookCoffee />
      </div>

      <div className="scrl book-cf4">
        <BookCoffee />
      </div>

      <div className="scrl book-cf5">
        <BookCoffee />
      </div>
    </div>
  );
}

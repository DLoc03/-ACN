import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./topNav.css";
import Logo from "../../assets/cophee-icon.png";
import { FaSearch } from "react-icons/fa";

function fillSearchBar(element) {
  const searchBar = document.getElementById("search-bar");
  searchBar.value += element.textContent;
}

function Top_Nav() {
  const goToLoginPage = () => {
    window.location.href = "/loginform";
  };

  const goToResigterPage = () => {
    window.location.href = "/resigterform";
  };

  const gotoHomePage = () => {
    window.location.href = "/";
  };
  return (
    <div className="top-nav-box">
      <div className="top-nav">
        <div class="logo">
          <img src={Logo} href="" alt="Logo" onClick={gotoHomePage} />
        </div>
        <div className="main-nav">
          <li>
            <a class="home-btn" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/listall">Location</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
        </div>

        <div className="login-nav">
          <button
            type="submit"
            class="login-btn"
            id="login-btn"
            onClick={goToLoginPage}
          >
            Login
          </button>
          <div className="half"></div>
          <button
            className="resigter-btn"
            id="resigter-btn"
            onClick={goToResigterPage}
          >
            Resigter
          </button>
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, location..."
          id="search-bar"
        />
        <button type="submit" id="search-btn">
          <FaSearch />
        </button>
      </div>

      <div className="recommend-container">
        <p onclick={fillSearchBar}>#phuong 8</p>
        <p onclick={fillSearchBar}>#phuong 2</p>
        <p onclick={fillSearchBar}>#view dep</p>
        <p onclick={fillSearchBar}>#hung vuong</p>
        <p onclick={fillSearchBar}>#phu dong</p>
        <p onclick={fillSearchBar}>#sang trong</p>
        <p onclick={fillSearchBar}>#chill</p>
        <p onclick={fillSearchBar}>#thuc an</p>
        <p onclick={fillSearchBar}>#ngon</p>
      </div>
    </div>
  );
}

export default Top_Nav;

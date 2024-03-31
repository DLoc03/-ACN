import React from "react";
import { Link } from "react-router-dom";
import "./topNav.css";
import Logo from "../../assets/cophee-icon.png";
import { FaSearch } from "react-icons/fa";
import Home from "../Home/Home";
import ListAll from "../ListAll/ListAll";

function fillSearchBar(element) {
  const searchBar = document.getElementById("search-bar");
  searchBar.value += element.textContent;
}

export default function TopNav() {
  return (
    <div className="top-nav-box">
      <div className="top-nav">
        <div class="logo">
          <img src={Logo} href="" />
        </div>
        <div className="main-nav">
          <li>
            <a href="/">Home</a>
            <Home />
            {/* <div className="page home-page">Home</div> */}
          </li>
          <li>
            <a href="/listall">Location</a>
            <ListAll />
            {/* <div className="page list-all-page" onclick={<ListAll />}>
              Location 
            </div>*/}
          </li>
          <li>
            <div className="page about-us-page" onClick={ListAll}>
              About Us
            </div>
          </li>
        </div>

        <div className="login-nav">
          <button
            type="submit"
            class="login-btn"
            id="login-btn"
            onclick="showLogin()"
          >
            Login
          </button>
          <div className="half"></div>
          <button
            type="submit"
            class="resigter-btn"
            id="resigter-btn"
            onclick="showResigter()"
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

      <div className="search-empty-alerForm" id="empty-alertForm">
        <img src={Logo} href="" />
        <p id="empty-title">MESSAGE</p>
        <p id="empty-content">Keyword search drum.</p>
        <p id="empty-content">Please enter the keyword!</p>
        <button type="submit" id="empty-ok" onclick="closeEmptyForm()">
          OK
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

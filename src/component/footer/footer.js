import React from "react";
import { Link} from "react-router-dom";
import './footer.css';
import Logo from '../../assets/cophee-icon.png'

export default function Footer() {
    return (
        <div className="container">
            <div className="logo">
                <img src={Logo} href=""/>
            </div>
            <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
            </div>
            <div className="text">
                <div className="phone">Phone: +84 987837827</div>
                <div className="email">Email: admin@gmail.com</div>
            </div>
            <div className="mailbox">
                <input type="search" value="Enter your mail"/>
                <button>Submit</button>
            </div>
            <div className="line"></div>
            <div className="reversed">@2024 All Rights Reversed.</div>
        </div>
    )
}
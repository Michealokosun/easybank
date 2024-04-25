import React from "react";
import logo from "../images/footerlogo.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="_container footerbox">
        <div className="footbox1">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-social-icon">
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={pintrest} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className="footerbox2">
          <ul className="p-0 text-center ">
            <li>
              <a href="#about">about us</a>
            </li>
            <li>
              <a href="#contact">contact </a>
            </li>
            <li>
              <a href="#blog">blog</a>
            </li>
          </ul>
          <ul className="p-0 text-center ">
            <li>
              <a href="#carerrs">carerrs</a>
            </li>
            <li>
              <a href="#carerrs">support</a>
            </li>
            <li>
              <a href="#carerrs">privacy policy</a>
            </li>
          </ul>
        </div>

        <div className="footerbox3 text-center">
          <div className="btn footerbtn rounded-pill text-white">
            Request invite
          </div>
          <div>
            <p>@Easybank. All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

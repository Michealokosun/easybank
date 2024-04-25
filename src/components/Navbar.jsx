import React, { useState } from "react";
import navlogo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

export default function Navbar() {
  const [show, setshow] = useState(false);
  return (
    <nav>
      <div className="_container">
        <div className="navbar">
          <div className="logo">
            <img src={navlogo} alt="navlogo" />
          </div>
          <div className="hamburger">
            {show ? (
              <img onClick={(e) => setshow(!show)} src={close} alt="toggle" />
            ) : (
              <img
                onClick={(e) => setshow(!show)}
                src={hamburger}
                alt="toggle"
              />
            )}
          </div>
          <div className={show ? "navlist" : "close"}>
            <ul>
              <li>
                <a onClick={() => setshow(false)} href="#home">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => setshow(false)} href="#about">
                  about
                </a>
              </li>
              <li>
                <a onClick={() => setshow(false)} href="#contact">
                  contact
                </a>
              </li>
              <li>
                <a onClick={() => setshow(false)} href="#blog">
                  blog
                </a>
              </li>
              <li>
                <a onClick={() => setshow(false)} href="#carerrs">
                  carerrs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

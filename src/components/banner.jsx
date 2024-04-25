import React from "react";
import bannerimg from "../images/image-mockups.png";

export default function Banner() {
  return (
    <header>
      <div className="_container">
        <div className="row banner">
          <div className="col-md-6 banner-box-1">
            <img src={bannerimg} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 banner-box-2">
            <h1>next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <div className="btn _btn rounded-pill">request invite</div>
          </div>
        </div>
      </div>
    </header>
  );
}

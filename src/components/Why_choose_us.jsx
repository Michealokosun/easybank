import React from "react";
import icon1 from "../images/icon-online.svg";
import icon2 from "../images/icon-budgeting.svg";
import icon3 from "../images/icon-onboarding.svg";
import icon4 from "../images/icon-api.svg";

export default function WhyChooseUs() {
  return (
    <div id="about" className="bg-why pb-5">
      <div className="_container  text-center">
        <section>
          <div className="section_header">
            <h1 className="text-capitalize">why choose easybank ?</h1>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="section-body">
            <div className="section_box1">
              <div className="icon">
                <img src={icon1} alt="" />
              </div>
              <h1>online banking</h1>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="section_box1">
              <div className="icon">
                <img src={icon2} alt="" />
              </div>
              <h1> Simple Budgeting</h1>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className="section_box1">
              <div className="icon">
                <img src={icon3} alt="" />
              </div>
              <h1>Fast Onboarding</h1>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="section_box1">
              <div className="icon">
                <img src={icon4} alt="" />
              </div>
              <h1>Open API</h1>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

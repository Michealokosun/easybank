import React from "react";
import imgage1 from "../images/image-currency.jpg";
import imgage2 from "../images/image-restaurant.jpg";
import imgage3 from "../images/image-plane.jpg";
import imgage4 from "../images/image-confetti.jpg";
import Card from "react-bootstrap/Card";

export default function LatestArticle() {
  return (
    <div id="blog" className="_container  ">
      <div className="latest_section">
        <div className="latest-heder text-center mt-5 mb-5">
          <h1>latest Articles</h1>
        </div>
        <div className="latest-cards row mx-auto w-100">
          <Card className="col col-md-3" style={{}}>
            <Card.Img variant="top" src={imgage1} />
            <Card.Body>
              <Card.Text>Latest Articles</Card.Text>
              <Card.Title>
                By Claire Robinson Receive money in any currency with no fees
              </Card.Title>
              <Card.Text>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col col-md-3" style={{ with: "24rem" }}>
            <Card.Img variant="top" src={imgage2} />
            <Card.Body>
              <Card.Text>By Wilson Hutton</Card.Text>
              <Card.Title>
                Treat yourself without worrying about money
              </Card.Title>
              <Card.Text>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col col-md-3" style={{ with: "28rem" }}>
            <Card.Img variant="top" src={imgage3} />
            <Card.Body>
              <Card.Text>By Wilson Hutton</Card.Text>
              <Card.Title>
                Take your Easybank card wherever you go We want you to enjoy
              </Card.Title>
              <Card.Text>
                Take your Easybank card wherever you go We want you to enjoy
                your travels. This is why we don’t charge any fees on purchases
                while you’re abroad. We’ll even show you …
              </Card.Text>
            </Card.Body>
          </Card>
          <Card classname="col col-md-3" style={{ idth: "28rem" }}>
            <Card.Img variant="top" src={imgage4} />
            <Card.Body>
              <Card.Text>By Claire Robinson</Card.Text>
              <Card.Title>
                Our invite-only Beta accounts are now live!
              </Card.Title>
              <Card.Text>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

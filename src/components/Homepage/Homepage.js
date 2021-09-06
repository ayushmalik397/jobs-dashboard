import React from "react";
import "./Homepage.css";
import HomeImage from "../../images/home-cover.jpg";
import Company from "../../images/microsoft.svg";

function Homepage() {
  return (
    <div className="home">
      <div className="cover-home">
        <div className="cover-title">
          Welcome to My<span style={{ color: "#43AFFF" }}>Jobs</span>
          <div>
              <button className="blue-btn">Get Started</button>
          </div>
        </div>
        <div className="image">
          <img
            src={HomeImage}
            alt="home"
            height="300"
            width="500"
            style={{ borderRadius: "30px" }}
          />
        </div>
      </div>
      <div className="main">
        <p className="section-head">Why Us</p>
        <div className="cards">
          <div className="card">
            <h3>Get more visibility</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
          <div className="card">
            <h3>Get more visibility</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="card">
            <h3>Get more visibility</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
        </div>
        <p className="section-head" style={{ marginTop: "30px" }}>
          Companies who trust us
        </p>
        <div className="companies">
          <img src={Company} alt="Company" height="50" width="60" />
          <img src={Company} alt="Company" height="50" width="60" />
          <img src={Company} alt="Company" height="50" width="60" />
          <img src={Company} alt="Company" height="50" width="60" />
          <img src={Company} alt="Company" height="50" width="60" />
          <img src={Company} alt="Company" height="50" width="60" />
          <img src={Company} alt="Company" height="50" width="60" />
          <img src={Company} alt="Company" height="50" width="60" />
          <img src={Company} alt="Company" height="50" width="60" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

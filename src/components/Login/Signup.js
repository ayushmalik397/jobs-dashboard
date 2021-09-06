import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecImage from "../../images/human-resources.png";
import User from "../../images/user.png";
import "./login.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [bColor, setbColor] = useState("");
  const [bColor2, setbColor2] = useState("");
  const [bColor3, setbColor3] = useState("");
  const [bColor4, setbColor4] = useState("");
  const [error, setError] = useState(false);

  function handleSignup() {
    if (email === "" || name === "" || password === "") {
      setError(true);
      setbColor("2px solid red");
      setbColor2("2px solid red");
      setbColor3("2px solid red");
    }
  }

  return (
    <div>
      <div className="login">
        <h3>SignUp</h3>
        <form>
          <div className="control">
            <label>I'am a*</label>
            <div style={{ display: "flex" }}>
              <div className="opt-box">
                <img className="icon" src={RecImage} alt="recruter" />
                Recruiter
              </div>
              <div className="opt-box">
                <img className="icon" src={User} alt="candidate" />
                Candidate
              </div>
            </div>
          </div>
          <div className="control">
            <label>Full Name*</label>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onFocus={() => setbColor("2px solid #43afff")}
                onBlur={() => setbColor("")}
                onChange={(event) => setName(event.target.value)}
                style={{
                  border: bColor,
                }}
              />
            </div>
          </div>
          <div className="control">
            <label>Email address*</label>
            <div>
              <input
                type="text"
                value={email}
                onFocus={() => setbColor2("2px solid #43afff")}
                onBlur={() => setbColor2("")}
                onChange={(event) => setEmail(event.target.value)}
                style={{
                  border: bColor2,
                }}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="control password">
            <div className="pass-left" style={{ width: "47%" }}>
              <label>Create Password*</label>
              <div>
                <input
                  type="password"
                  value={password}
                  onFocus={() => setbColor3("2px solid #43afff")}
                  onBlur={() => setbColor3("")}
                  onChange={(event) => setPassword(event.target.value)}
                  style={{
                    border: bColor3,
                  }}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="pass-right" style={{ width: "47%" }}>
              <label>Confirm Password*</label>
              <div>
                <input type="password" placeholder="Enter your password" />
              </div>
            </div>
          </div>
          <div className="control">
            <label>Skills</label>
            <div>
              <input
                type="text"
                value={skills}
                onFocus={() => setbColor4("2px solid #43afff")}
                onBlur={() => setbColor4("")}
                onChange={(event) => setSkills(event.target.value)}
                style={{
                  border: bColor4,
                }}
                placeholder="Enter comma separated skills"
              />
            </div>
          </div>
          {error && (
            <label className="red-text">All * fields are mandatory.</label>
          )}
        </form>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button className="login-btn" onClick={handleSignup}>
            SignUp
          </button>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            Have an account?{" "}
            <Link to="/login">
              <span style={{ color: "#43AFFF" }}>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

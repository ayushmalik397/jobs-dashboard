import React, { useState } from "react";
import { Link } from "react-router-dom";

function Forget() {
  const [email, setEmail] = useState("");
  const [bColor, setbColor] = useState("");
  return (
    <div className="login">
      <h3>Forget your password?</h3>
      <p style={{ fontSize: "12px" }}>
        Enter the email associated with your account and we’ll send you
        instructions to reset your password.
      </p>
      <div className="control">
        <label>Email address</label>
        <div>
          <input
            type="text"
            value={email}
            placeholder="Enter your email"
            onFocus={() => setbColor("2px solid #43afff")}
            onBlur={() => setbColor("")}
            onChange={(event) => setEmail(event.target.value)}
            style={{
              border: bColor,
            }}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/reset">
          <button className="login-btn">Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Forget;

import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bColor, setbColor] = useState("");
  const [bColor2, setbColor2] = useState("");
  const [error, setError] = useState(false);

  function updateError() {
    setError(true);
    setbColor("2px solid red");
    setbColor2("2px solid red");
  }

  function handleLoginSubmit() {
    if (email === "" || password === "") {
      updateError();
    }
    axios({
      method: "post",
      url: "https://jobs-api.squareboat.info/api/v1/auth/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("name", res.data.data.name);
          props.trigLogin();
          history.push("/dashboard/recdash");
        } else {
          updateError();
        }
      })
      .catch((err) => {
        updateError();
      });
  }
  return (
    <div className="login">
      <h3>Login</h3>
      <form>
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
        <div className="control">
          <label>Password</label>
          <Link to="/forget">
            <span className="forget-text">Forget your password?</span>
          </Link>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
              onFocus={() => setbColor2("2px solid #43afff")}
              onBlur={() => setbColor2("")}
              style={{
                border: bColor2,
              }}
            />
          </div>
        </div>
        {error && (
          <label className="red-text">Incorrect Email or Password.</label>
        )}
      </form>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button className="login-btn" onClick={handleLoginSubmit}>
          Login
        </button>
        <p style={{ marginTop: "30px", fontSize: "14px" }}>
          New to MyJobs?{" "}
          <Link to="/signup">
            <span style={{ color: "#43AFFF" }}>Create an Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

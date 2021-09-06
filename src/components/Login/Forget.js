import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Forget(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [bColor, setbColor] = useState("");
  function handleSubmit() {
    axios.get(`https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`).then((res) => {
      if(res.data.code === 201) {
        localStorage.setItem('passToken', res.data.data.token);
        history.push("/reset")
      }
    }).catch(err => console.log(err))
  }
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
          <button className="login-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Forget;

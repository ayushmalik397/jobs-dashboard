import axios from "axios";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

function Reset() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [bColor, setbColor] = useState("");
  const [bColor2, setbColor2] = useState("");

  function handleReset() {
    axios({
      method: 'post',
      url: 'https://jobs-api.squareboat.info/api/v1/auth/resetpassword',
      data: {
        password,
        confirmPassword: CPassword,
        token: localStorage.getItem('passToken')
      }
    }).then((res) => {
      if(res.data.code === 201){
        history.push("/login")
      }else{
      }
    }).catch((err) => {
    })
  }

  return (
    <div className="login">
      <h3>Reset your password</h3>
      <p style={{ fontSize: "12px", marginBottom: "30px" }}>
        Enter your new password below.
      </p>
      <form>
        <div className="control">
          <label>New password</label>
          <div>
            <input
              type="password"
              value={password}
              onFocus={() => setbColor("2px solid #43afff")}
              onBlur={() => setbColor("")}
              onChange={(event) => setPassword(event.target.value)}
              style={{
                border: bColor,
              }}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="control">
          <label>Confirm new pasword</label>
          <div>
            <input
              type="password"
              value={CPassword}
              onFocus={() => setbColor2("2px solid #43afff")}
              onBlur={() => setbColor2("")}
              onChange={(event) => setCPassword(event.target.value)}
              style={{
                border: bColor2,
              }}
              placeholder="Enter your password"
            />
          </div>
        </div>
      </form>
      <div style={{ textAlign: "center" }}>
        <button className="login-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Reset;

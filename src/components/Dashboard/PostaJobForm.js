import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PostaJobForm() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");
  const [bColor, setbColor] = useState("");
  const [bColor2, setbColor2] = useState("");
  const [bColor3, setbColor3] = useState("");
  const [error, setError] = useState(false);
  function updateError() {
    setError(true);
    setbColor("2px solid red");
    setbColor2("2px solid red");
    setbColor3("2px solid red");
  }
  async function handlePost() {
    if (title !== "" && desc !== "" && loc !== "") {
      const myHeaders = new Headers();
      let options = {
        title,
        description: desc,
        location: loc,
      };
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", localStorage.getItem("token"));

      let res = await fetch("https://jobs-api.squareboat.info/api/v1/jobs", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(options),
      });
      if (res.status === 201) {
        history.push("/dashboard/recdash");
      }
    } else {
      updateError();
    }
  }

  return (
    <div className="postajob-form">
      <h3>Post a Job</h3>
      <form>
        <div className="control">
          <label>Job Title*</label>
          <div>
            <input
              type="text"
              value={title}
              onFocus={() => setbColor("2px solid #43afff")}
              onBlur={() => setbColor("")}
              onChange={(event) => setTitle(event.target.value)}
              style={{
                border: bColor,
              }}
              placeholder="Enter job title"
            />
          </div>
        </div>
        <div className="control">
          <label>Description*</label>
          <div>
            <textarea
              type="textarea"
              value={desc}
              onFocus={() => setbColor2("2px solid #43afff")}
              onBlur={() => setbColor2("")}
              onChange={(event) => setDesc(event.target.value)}
              style={{
                border: bColor2,
              }}
              placeholder="Enter job description"
            />
          </div>
        </div>
        <div className="control">
          <label>Location*</label>
          <div>
            <input
              type="text"
              value={loc}
              onFocus={() => setbColor3("2px solid #43afff")}
              onBlur={() => setbColor3("")}
              onChange={(event) => setLoc(event.target.value)}
              style={{
                border: bColor3,
              }}
              placeholder="Enter job title"
            />
            {error && (
              <label className="red-text">All fields are mandatory.</label>
            )}
          </div>
        </div>
      </form>
      <div>
        <button className="login-btn" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
}

export default PostaJobForm;

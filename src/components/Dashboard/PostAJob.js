import React from "react";
import { Link } from "react-router-dom";
import Contract from "../../images/contract.png";
import "./dashboard.css";

function PostAJob() {
  return (
    <div className="postajob">
      <img src={Contract} alt="post" />
      <p>Your posted jobs will show here</p>
      <Link to="/dashboard/postajobform">
        <button className="post-btn">Post a job</button>
      </Link>
    </div>
  );
}

export default PostAJob;

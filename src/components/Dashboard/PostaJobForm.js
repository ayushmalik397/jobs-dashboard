import React from "react";

function PostaJobForm() {
  return (
    <div className="postajob-form">
      <h3>Post a Job</h3>
      <form>
        <div className="control">
          <label>Job Title*</label>
          <div>
            <input type="text" placeholder="Enter job title" />
          </div>
        </div>
        <div className="control">
          <label>Description*</label>
          <div>
            <textarea type="textarea" placeholder="Enter job description" />
          </div>
        </div>
        <div className="control">
          <label>Location*</label>
          <div>
            <input type="text" placeholder="Enter job title" />
            <label className="red-text">All fields are mandatory.</label>
          </div>
        </div>
      </form>
      <div>
        <button className="login-btn">Post</button>
      </div>
    </div>
  );
}

export default PostaJobForm;

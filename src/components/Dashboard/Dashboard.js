import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import RecruiterDash from "./RecruiterDash";
import Home from "../../images/home.png";
import PostAJob from "./PostAJob";
import PostaJobForm from "./PostaJobForm";

function Dashboard() {
  return (
    <div className="dashboard">
      <p>
        <img src={Home} alt="home" height="10" width="10" />
        <span style={{ marginLeft: "5px", fontSize: "10px" }}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/dashboard/recdash"
          >
            Home
          </Link>
          <Switch>
            <Route path="/dashboard/postajobform">&gt; Post a Job</Route>
          </Switch>
        </span>
      </p>
      <p style={{ fontSize: "16px" }}>Jobs posted by you</p>
      <Switch>
        <Route path="/dashboard/recdash">
          <RecruiterDash />
        </Route>
        <Route path="/dashboard/postajobform">
          <PostaJobForm />
        </Route>
        <Route path="/dashboard/postajob">
          <PostAJob />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;

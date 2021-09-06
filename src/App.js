import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Forget from "./components/Login/Forget";
import Reset from "./components/Login/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";
import Down from "./images/down.png";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [logClass, setLogclass] = useState("logout-box");
  function trigForget(tokenStr) {
    localStorage.setItem("passToken", tokenStr);
  }
  function trigLogin() {
    setLoggedIn(true);
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setLoggedIn(false);
  }
  function toggleArrow() {
    if (logClass === "logout-box") {
      setLogclass("logout-box log-active");
    } else {
      setLogclass("logout-box");
    }
  }
  return (
    <Router>
      <div className="app">
        <div className="cover">
          <header className="header">
            <div className="left">
              <Link to="/">
                <span style={{ color: "white" }}>My</span>
                <span style={{ color: "#43AFFF" }}>Jobs</span>
              </Link>
            </div>
            <div className="right">
              <Switch>
                <Route path="/dashboard/recdash">
                  <div className="dash-nav">
                    <Link to="/dashboard/postajob">
                      <p
                        style={{
                          color: "white",
                          marginTop: "5px",
                          marginRight: "10px",
                        }}
                      >
                        Post a Job
                      </p>
                    </Link>
                    <span className="initial">
                      {localStorage.getItem("name")
                        ? localStorage.getItem("name")[0]
                        : ""}
                    </span>
                    <img
                      style={{ marginTop: "5px", cursor: "pointer" }}
                      src={Down}
                      alt="Down"
                      height={30}
                      onClick={toggleArrow}
                    />
                  </div>
                  <Link to="/">
                    <div className={logClass} onClick={logout}>
                      Logout
                    </div>
                  </Link>
                </Route>
                <Route path="/" exact={true}>
                  {isLoggedIn === false ? (
                    <Link to="/login">
                      <button className="login-signup-btn">Login/SignUp</button>
                    </Link>
                  ) : (
                    <Link to="/">
                      <button className="login-signup-btn" onClick={logout}>
                        Logout
                      </button>
                    </Link>
                  )}
                </Route>
              </Switch>
            </div>
          </header>
        </div>
        <div className="content">
          <Switch>
            <Route path="/login">
              <Login trigLogin={trigLogin} />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/forget">
              <Forget trigForget={trigForget} />
            </Route>
            <Route path="/reset">
              <Reset />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

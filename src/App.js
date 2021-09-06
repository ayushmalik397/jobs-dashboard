import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Forget from "./components/Login/Forget";
import Reset from "./components/Login/Reset";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
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
                  <Link to="/dashboard/postajob">
                    <p style={{ color: "white", marginBottom: "20px" }}>
                      Post a Job
                    </p>
                  </Link>
                </Route>
                <Route path="/" exact={true}>
                  <Link to="/login">
                    <button className="login-signup-btn">Login/SignUp</button>
                  </Link>
                </Route>
              </Switch>
            </div>
          </header>
        </div>
        <div className="content">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/forget">
              <Forget />
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

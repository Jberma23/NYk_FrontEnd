import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./containers/home";
import Login from "./components/Login/login";
import CreateAccount from "./components/Login/Create_Account";

ReactDOM.render(
  //   <Router>
  //     <Route exact path="/" render={routerProps => <Home />} />
  //     <Route exact path="/login" render={routerProps => <Login />} />
  //     <Route exact path="/register" render={routerProps => <CreateAccount />} />
  //   </Router>,
  <App />,
  document.getElementById("root")
);
// <App />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

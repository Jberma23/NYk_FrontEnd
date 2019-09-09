import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home />}></Route>
    </div>
  );
}

export default App;

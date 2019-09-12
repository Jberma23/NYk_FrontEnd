import React, { Component } from "react";
// import { Nav, NavItem, NavLink } from "reactstrap";
import CreateAccount from "./Create_Account";
import { NavLink } from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleLoginSubmit(event)}>
          <label>Username:</label>
          <br></br>
          <input
            type="text"
            id="username"
            onChange={event => this.props.handleLoginChange(event)}
          />
          <br></br>
          <label>Password:</label>
          <br></br>
          <input
            type="password"
            id="password"
            onChange={event => this.props.handleLoginChange(event)}
          />
          <br></br>
          <br></br>
          <button type="Submit" value="submit">
            Login
          </button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <NavLink to="/register" >
          Create an account
        </NavLink>
      </div>
    );
  }
}

export default Login;

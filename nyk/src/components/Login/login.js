import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
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
        <NavLink href="#" onClick={this.props.handleCreateLoginLink}>
          Create an account
        </NavLink>
      </div>
    );
  }
}

export default Login;

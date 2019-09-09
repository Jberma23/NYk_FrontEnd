import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Login from "./login";
// import { NavLink } from "react-router-dom";
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleCreateSubmit(event)}>
          <label>First Name:</label>
          <br></br>
          <input
            type="text"
            id="First_name"
            placeholder="First Name"
            onChange={event => this.props.handleCreateChange(event)}
          ></input>
          <br></br>
          <label>Last Name:</label>
          <br></br>
          <input
            type="text"
            id="Last_name"
            placeholder="Last Name"
            onChange={event => this.props.handleCreateChange(event)}
          ></input>
          <br></br>
          <label>Email:</label>
          <br></br>
          <input
            type="text"
            id="Email"
            placeholder="Email"
            onChange={event => this.props.handleCreateChange(event)}
          ></input>
          <br></br>
          <label>Username:</label>
          <br></br>
          <input
            type="text"
            id="Username"
            placeholder="Username"
            onChange={event => this.props.handleCreateChange(event)}
          ></input>
          <br></br>
          <label>Password:</label>
          <br></br>
          <input
            type="password"
            id="Password"
            placeholder="Password"
            onChange={event => this.props.handleCreateChange(event)}
          ></input>
          <br></br>
          <button type="submit" id="Submit" value="Submit">
            Create Account
          </button>
          <br></br>
          <br></br>
          <br></br>
          <NavLink
            href="http://localhost:3000/login"
            // onClick={this.props.handleCreateLoginLink}
            path="/login"
            render={() => <Login />}
          >
            Login
          </NavLink>
        </form>
      </div>
    );
  }
}

export default CreateAccount;

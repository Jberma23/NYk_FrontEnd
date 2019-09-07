import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <form>
          <label>First Name:</label>
          <br></br>
          <input type="text" name="first name" placeholder="First Name"></input>
          <br></br>
          <label>Last Name:</label>
          <br></br>
          <input type="text" name="Last_name" placeholder="Last Name"></input>
          <br></br>
          <label>Email:</label>
          <br></br>
          <input type="text" name="Email" placeholder="Email"></input>
          <br></br>
          <label>Username:</label>
          <br></br>
          <input type="text" name="Username" placeholder="Username"></input>
          <br></br>
          <label>Password:</label>
          <br></br>
          <input type="password" name="Password" placeholder="Password"></input>
          <br></br>
          <button type="submit" name="Submit" value="Submit">
            Create Account
          </button>
          <br></br>
          <br></br>
          <br></br>
          <NavLink href="#" onClick={this.props.handleCreateLoginLink}>
            Login
          </NavLink>
        </form>
      </div>
    );
  }
}

export default CreateAccount;

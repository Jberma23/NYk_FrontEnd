import React, { Component } from "react";
import Login from "../components/Login/login";
import CreateAccount from "../components/Login/Create_Account";
import Dashboard from "./DashBoard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loginInfo: {
        username: "",
        password: ""
      },
      createAccountInfo: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      },
      current_user: null,
      accountCreate: false,
      loggedIn: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then(resp => resp.json())
      .then(users => this.setState({ users: users.data }))
      .catch(e => console.error(e));
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    let user = this.state.users.find(
      user =>
        user.attributes.username === this.state.loginInfo.username &&
        user.attributes.password === this.state.loginInfo.password
    );
    if (user) {
      this.setState({ current_user: user, loggedIn: true });
    } else {
      alert(
        "There is no login matching that username or password. Please try again or create an account."
      );
    }
  };

  handleLoginChange = event => {
    if (event.target.id === "username") {
      this.setState({
        loginInfo: { ...this.state.loginInfo, username: event.target.value }
      });
    } else {
      this.setState({
        loginInfo: { ...this.state.loginInfo, password: event.target.value }
      });
    }
  };

  handleCreateLoginLink = () => {
    this.setState({ accountCreate: !this.state.accountCreate });
  };

  render() {
    return (
      <>
        <div>
          {this.state.accountCreate === false ? (
            <Login
              handleCreateLoginLink={this.handleCreateLoginLink}
              handleLoginSubmit={this.handleLoginSubmit}
              handleLoginChange={this.handleLoginChange}
            />
          ) : (
            <CreateAccount handleCreateLoginLink={this.handleCreateLoginLink} />
          )}
        </div>
      </>
    );
  }
}

export default Home;

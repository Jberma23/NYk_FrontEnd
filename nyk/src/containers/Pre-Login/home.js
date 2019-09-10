import React, { Component } from "react";
import Login from "../../components/Login/login";
import CreateAccount from "../../components/Login/Create_Account";
import Dash from "../Post_Login/Dash";
import { Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "../Post_Login/DashBoard";
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
      .then(users => this.setState({ users: users }))
      .catch(e => console.error(e));
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    let user = this.state.users.find(
      user =>
        user.username === this.state.loginInfo.username &&
        user.password === this.state.loginInfo.password
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

  handleCreateChange = event => {
    const exp = `${event.target.id}`;

    if (exp === "First_name") {
      this.setState({
        createAccountInfo: {
          ...this.state.createAccountInfo,
          firstName: event.target.value
        }
      });
    } else if (exp === "Last_name") {
      this.setState({
        createAccountInfo: {
          ...this.state.createAccountInfo,
          lastName: event.target.value
        }
      });
    } else if (exp === "Email") {
      this.setState({
        createAccountInfo: {
          ...this.state.createAccountInfo,
          email: event.target.value
        }
      });
    } else if (exp === "Username") {
      this.setState({
        createAccountInfo: {
          ...this.state.createAccountInfo,
          username: event.target.value
        }
      });
    } else if (exp === "Password") {
      this.setState({
        createAccountInfo: {
          ...this.state.createAccountInfo,
          password: event.target.value
        }
      });
    }
  };

  handleCreateSubmit = event => {
    event.preventDefault();
    let user = {
      first_name: this.state.createAccountInfo.firstName,
      last_name: this.state.createAccountInfo.lastName,
      email: this.state.createAccountInfo.email,
      password: this.state.createAccountInfo.password,
      username: this.state.createAccountInfo.username
    };
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001/users"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(e => console.error(e));
  };

  handleCreateLoginLink = () => {
    this.setState({ accountCreate: !this.state.accountCreate });
  };

  render() {
    return (
      <>
        <Route
          path="/dash"
          exact
          strict
          render={() => (this.state.loggedIn ? <Dash /> : <Redirect to="/" />)}
        />
        <Route
          path="/"
          exact
          strict
          render={() =>
            this.state.loggedIn ? (
              <Redirect to="/dash" />
            ) : (
              <Login
                handleCreateLoginLink={this.handleCreateLoginLink}
                handleLoginSubmit={this.handleLoginSubmit}
                handleLoginChange={this.handleLoginChange}
              />
            )
          }
        />
        <Route
          path="/register"
          exact
          strict
          render={() => (
            <CreateAccount
              handleCreateLoginLink={this.handleCreateLoginLink}
              handleLoginSubmit={this.handleLoginSubmit}
              handleLoginChange={this.handleLoginChange}
            />
          )}
        />
    
        
      </>
    );
  }
}


class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      restaurants: [],
      reviews: [],
      current_user: props.current_user
    };
  }
  async componentDidMount() {
    await fetch("http://localhost:3001/plans")
      .then(res => res.json())
      .then(plans =>
        this.setState({
          plans: plans
        })
      );
    await fetch("http://localhost:3001/restaurants")
      .then(res => res.json())
      .then(restaurants => this.setState({ restaurants: restaurants }));
    await fetch("http://localhost:3001/reviews")
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews }));
  }

  render() {
    return (
      <Route
        path="/dashboard"
        exact
        strict
        render={() => (
          <DashBoard
            plans={this.state.plans.filter(
              plans => plans.user_id === this.state.current_user.id
            )}
            reviews={this.state.reviews.filter(
              review => review.user_id === this.state.current_user.id
            )}
            restaurants={this.state.restaurants}
          />
        )}
      />
    );
  }
}

export default Dash;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Pre-Login/home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dash from "./containers/Post_Login/Dash";
import CreateAccount from "./components/Login/Create_Account";
import Login from "./components/Login/login";
import DashBoard from "./containers/Post_Login/DashBoard";
import Reviews from "./components/Reviews";
import Restaurants from "./components/Restaurants";
import RestaurantContainer from "./containers/Post_Login/RestaurantContainer";
import ReviewContainer from "./containers/Post_Login/ReviewContainer";
import PlanContainer from "./containers/Post_Login/PlansContainer";
class App extends React.Component {
  constructor() {
    super();
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
      loggedIn: false,
      plans: [],
      restaurants: [],
      reviews: [],
      rating: ""
    };
  }
  async componentDidMount() {
    fetch("http://localhost:3001/users")
      .then(resp => resp.json())
      .then(users => this.setState({ users: users }))
      .catch(e => console.error(e));

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
    debugger;

    let {
      email,
      firstName,
      lastName,
      password,
      username
    } = this.state.createAccountInfo;

    let user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      username: username
    };

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        username: username
      })
    })
      .then(res => res.json())
      .then(response =>
        this.setState({ current_user: response, loggedIn: true })
      )
      .catch(e => console.error(e));
  };

  handleCreateLoginLink = () => {
    this.setState({ accountCreate: !this.state.accountCreate });
  };
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.current_user === null ? (
            <Redirect to="/login" />
          ) : (
            <Redirect to="/dashboard" />
          )}
          <Route
            exact
            path="/login"
            render={() => {
              return (
                <Login
                  handleCreateLoginLink={this.handleCreateLoginLink}
                  handleLoginSubmit={this.handleLoginSubmit}
                  handleLoginChange={this.handleLoginChange}
                />
              );
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={() => {
              return (
                <DashBoard
                  current_user={this.state.current_user}
                  plans={this.state.plans.filter(
                    plans => plans.user_id === this.state.current_user.id
                  )}
                  reviews={this.state.reviews.filter(
                    review => review.user_id === this.state.current_user.id
                  )}
                  restaurants={this.state.restaurants}
                />
              );
            }}
          />
          <Route
            exact
            path="/register"
            render={() => {
              return (
                <CreateAccount
                  handleCreateSubmit={this.handleCreateSubmit}
                  handleCreateChange={this.handleCreateChange}
                />
              );
            }}
          />
          <Route
            exact
            path="/restaurants"
            render={() => {
              return (
                <div>
                  <h1>Restaurants</h1>
                  <RestaurantContainer
                    current_user={this.state.current_user}
                    restaurants={this.state.restaurants}
                    reviews={this.state.reviews.filter(
                      review => review.user_id === this.state.current_user.id
                    )}
                  />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/reviews"
            render={() => {
              return (
                <div>
                  <h1>My Reviews</h1>
                  <ReviewContainer
                    reviews={this.state.reviews}
                    restaurants={this.state.restaurants}
                  />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/plans"
            render={() => {
              return (
                <div>
                  <PlanContainer
                    plans={this.state.plans}
                    restaurants={this.state.restaurants}
                    reviews={this.state.reviews.filter(
                      review => review.user_id === this.state.current_user.id
                    )}
                  />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Pre-Login/home";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import Dash from "./containers/Post_Login/Dash";
import CreateAccount from "./components/Login/Create_Account";
import Login from "./components/Login/login";
import DashBoard from "./containers/Post_Login/DashBoard";
import Reviews from "./components/Reviews";
import Restaurants from "./components/Restaurants";
import RestaurantContainer from "./containers/Post_Login/RestaurantContainer";
import ReviewContainer from "./containers/Post_Login/ReviewContainer";
import PlanContainer from "./containers/Post_Login/PlansContainer";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      newUser: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      },
      existingUser: {
        email: "",
        password: ""
      },
      loading: true,
      current_user: null,
      accountCreate: false,
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

  handleUserLogOut = (event) => {
    event.preventDefault()
    const r = window.confirm("Do you really want to Sign Out?")
    if (r == true) {
      localStorage.clear()
      this.setState({ currentUser: null })

    }
  }


  handleCreateAccountSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state.newUser })
    })
      .then(res => res.json())
      .then(res => this.setState({ currentUser: res }))
      .catch(e => console.error(e))

  }


  handleCreateAccountChange = (event) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [event.target.id]: event.target.value
      }
    })

  }
  handleCreateAccountOwnerChange = (event) => {
    this.setState(
      {
        newUser: {
          ...this.state.newUser
        }
      })
  }

  handleLoginChange = (event) => {
    this.setState({
      existingUser: {
        ...this.state.existingUser,
        [event.target.id]: event.target.value
      }
    })
  }
  handleLoginSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3001/users/sign_in', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: this.state.existingUser.email,
          password: this.state.existingUser.password,
        }
      })
    })
      .then(response => {

        if (response.ok) {
          return response.json()

        } else {
          console.error("incorrect login info")
        }
      })
      .then(data => {
        if (data.authenticated) {
          localStorage.setItem("token", data.token)
          this.setState({ currentUser: data.user, favoriteTrucks: data.user.favorites })
        } else {
          alert("Incorrect Email or Password")
        }
      }).catch((e) => console.error(e))
  }

  handleCreateLoginLink = () => {
    this.setState({ accountCreate: !this.state.accountCreate });
  };
  render() {
    return (
      <Router>
        <div className="App">
          {/* {this.state.current_user === null ? ( */}
          {/* <Redirect to="/login" />
          ) : (
              <Redirect to="/dashboard" /> */}
          {/* )} */}
          <Route
            exact
            path="/login"
            render={() => {
              return (
                <Login
                  handleLoginChange={this.handleLoginChange} handleLoginSubmit={this.handleLoginSubmit}
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
                  handleCreateAccountSubmit={this.handleCreateAccountSubmit} handleCreateAccountChange={this.handleCreateAccountChange}
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
                    reviews={this.state.reviews.filter(
                      review => review.user_id === this.state.current_user.id
                    )}
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




    export default withRouter(App);

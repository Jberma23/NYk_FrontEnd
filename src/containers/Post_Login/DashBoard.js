import React, { Component } from "react";
import Plans from "../../components/Plans";
import Reviews from "../../components/Reviews";
import Restaurants from "../../components/Restaurants";
// import Friends from "../../components/Friends";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Restaurant from "../../components/Restaurants";
import RestaurantContainer from "./RestaurantContainer";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      plans: props.plans,
      restaurants: props.restaurants,
      reviews: props.reviews,
      date: ""
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      date: year + "-" + month + "-" + date
    });
  }
  sortPastPlans = () => {
    let planz = [...this.props.plans].filter(
      plans => plans.date <= this.state.date
    );
    let sorted = planz.sort(function(a, b) {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateA - dateB;
    });
    return sorted.slice(0, 4).map(plan => {
      let restaurant = this.props.restaurants.find(restaurant => {
        return restaurant.id === plan.restaurant_id;
      });

      return <Plans restaurants={restaurant} key={plan.id} plan={plan} />;
    });
  };
  sortFuturePlans = () => {
    let planz = [...this.props.plans].filter(
      plans => plans.date >= this.state.date
    );
    let sorted = planz.sort(function(a, b) {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateA - dateB;
    });
    return sorted.slice(0, 4).map(plan => {
      let restaurant = this.props.restaurants.find(restaurant => {
        return restaurant.id === plan.restaurant_id;
      });
      return (
        <Plans
          key={plan.id}
          restaurants={this.props.restaurants.find(restaurant => {
            return restaurant.id === plan.restaurant_id;
          })}
          plan={plan}
        />
      );
    });
  };

  renderReviews = () => {
    let reviews = [...this.props.reviews].sort(function(a, b) {
      return b.rating - a.rating;
    });
    return reviews.slice(0, 4).map(review => {
      let restaurant1 = this.props.restaurants.find(restaurant => {
        return restaurant.id === review.restaurant_id;
      });
      return (
        <Reviews key={review.id} review={review} restaurant={restaurant1} />
      );
    });
  };

  sortRestaurants = () => {
    let restaurants = [...this.props.restaurants]
      .sort(function(a, b) {
        return b.avg_review - a.avg_review;
      })
      .slice(0, 4);

    return (
      <RestaurantContainer
        current_user={this.props.current_user}
        restaurants={restaurants.slice(0, 4)}
        reviews={this.props.reviews}
      />
    );
  };

  render() {
    return (
      <div>
        {/* <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NYK: Now You Know</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  to="/reviews"
                  render={<Reviews reviews={this.state.reviews} />}
                >
                  Reviews
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/plans">Plans</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/restaurants">Restaurants </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/friends">Friends </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}

        <div className="ui four column grid" style={{ paddingTop: "16px" }}>
          <h1 className="ui center aligned header">Upcoming Plans</h1>
          <div className="row">{this.sortFuturePlans()}</div>
          <h1>Past Plans</h1>
          <div className="row">{this.sortPastPlans()}</div>
          <h1>Your Reviews</h1>
          <div className="row">{this.renderReviews()}</div>
          <h1>Top Rated Restaurants</h1>
          <div className="row">{this.sortRestaurants()}</div>
        </div>
      </div>
    );
  }
}

export default DashBoard;

import React, { Component } from "react";
import Plans from "../../components/Plans";
import Reviews from "../../components/Reviews";
import Friends from "../../components/Friends";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Restaurant from "../../components/Restaurants";

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
      return <Plans key={plan.id} plan={plan} />;
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
      return <Plans key={plan.id} plan={plan} />;
    });
  };

  renderReviews = () => {
    let reviews = [...this.props.reviews].sort(function(a, b) {
      return a.rating - b.rating;
    });
    return reviews
      .slice(0, 5)
      .map(review => <Reviews key={review.id} review={review} />);
  };

  sortRestaurants = () => {
    let restaurant = this.state.restaurants.filter(restaurant =>
      this.state.reviews.includes(restaurant.id)
    );
    console.log(restaurant);
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NYK: Now You Know</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/reviews/">Reviews</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/plans/">Plans</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/restaurants/">Restaurants</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/friends/">Friends</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="ui four column grid">
          <h1>Upcoming Plans</h1>
          <div className="row">{this.sortFuturePlans()}</div>
          <h1>Past Plans</h1>
          <div className="row">{this.sortPastPlans()}</div>
          <h1>Your Reviews</h1>
          <div className="row">{this.renderReviews()}</div>
        </div>
      </div>
    );
  }
}

export default DashBoard;

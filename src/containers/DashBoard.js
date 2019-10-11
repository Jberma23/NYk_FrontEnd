import React, { Component } from "react";
import Plans from "../components/Plans";
import Reviews from "../components/Reviews";
import Friends from "../components/Friends";
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

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      plans: [],
      restaurants: []
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount() {
    fetch("http://localhost:3001/plans")
      .then(res => res.json())
      .then(plans =>
        this.setState({
          plans: plans.filter(plan => plan.user_id === this.props.currentUserId)
        })
      );

    fetch("http://localhost:3001/restaurants")
      .then(res => res.json())
      .then(restaurants => this.setState({ restaurants: restaurants }));
  }
  render() {
    debugger
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
          <div className="row">
            {this.props.plans.map(plan => (
              <Plans
                plan={plan}
                key={plan.id}
                restaurants={this.state.restaurants.filter(
                  restaurant => restaurant.id === plan.restaurant_id
                )}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;

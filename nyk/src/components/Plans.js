import React, { Component, Fragment } from "react";

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: props.plan,
      restaurant: props.restaurants
    };
  }

  componentDidMount() {
    // debugger;
    // let id = this.props.plan.restaurant_id;
    // let restaurants = [...this.props.restaurants];
    // let filtered = restaurants.find(restaurant => {
    //   return restaurant.id === id;
    // });
    // this.setState({ restaurant: filtered });
    // debugger;
  }
  render() {
    return (
      <div className="ui column">
        <div className="ui card" key={this.state.plan.id}>
          <div className="content">
            <div className="header">{this.props.plan.name}</div>
            <div className="header">Restaurant: {this.props.restaurant}</div>
            <div className="meta text-wrap">
              {this.props.restaurants ? (
                <div>
                  <div className="body">{this.props.restaurants.name}</div>
                  <div className="body">{this.props.restaurants.location}</div>
                </div>
              ) : null}
              <small>Date: {this.state.plan.date}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;

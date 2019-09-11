import React, { Component, Fragment } from "react";

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    debugger;
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
        <div className="ui card" key={this.props.plan.id}>
          <div className="content">
            <div className="header">{this.props.plan.name}</div>
            <div className="header">
              Restaurant: {this.props.restaurant.name}
            </div>
            <div className="meta text-wrap">
              {this.props.restaurant ? (
                <div>
                  <div className="body">
                    Location: {this.props.restaurant.location}
                  </div>
                </div>
              ) : null}
              <small>Date: {this.props.plan.date}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;

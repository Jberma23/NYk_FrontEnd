import React, { Component } from "react";
import Plan from "../../components/Plans";

class PlansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.plans.map(plan => {
      return (
        <Plan
          plan={plan}
          key={plan.id}
          restaurant={this.props.restaurants.find(restaurant => {
            return restaurant.id === plan.restaurant_id;
          })}
        />
      );
    });
  }
}

export default PlansContainer;

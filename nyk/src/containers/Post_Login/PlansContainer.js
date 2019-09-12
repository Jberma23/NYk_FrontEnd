import React, { Component } from "react";
import Plan from "../../components/Plans";
import PlansForm from "../../components/PlansForm";

class PlansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // return this.props.plans.map(plan => {
    return (
      // <Plan
      //   plan={plan}
      //   key={plan.id}
      //   restaurant={this.props.restaurants.find(restaurant => {
      //     return restaurant.id === plan.restaurant_id;
      //   })}
      // />
      <PlansForm />
    );
  }
}

export default PlansContainer;

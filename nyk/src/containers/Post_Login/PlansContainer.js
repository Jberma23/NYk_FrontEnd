import React, { Component } from "react";
import Plan from "../../components/Plans";
import PlansForm from "../../components/PlansForm";

class PlansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sortRestaurants = () => {
    let restaurants = [...this.props.restaurants]
      .sort(function(a, b) {
        return b.rating - a.rating;
      })
      .slice(0, 4);
    return <PlansForm restaurants={restaurants} />;
  };

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
      this.sortRestaurants()
    );
  }
}

export default PlansContainer;

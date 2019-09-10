import React, { Component } from "react";
import Restaurant from "../../components/Restaurants";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  render() {
    return this.state.restaurants.map(restaurant => (
      <Restaurant restaurant={restaurant} key={restaurant.id} />
    ));
  }
}

export default RestaurantContainer;

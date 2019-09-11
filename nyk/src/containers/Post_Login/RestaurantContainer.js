import React, { Component } from "react";
import Restaurant from "../../components/Restaurants";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: props.restaurants,
      rating: null
    };
  }
  handleRatingChange = (event, restaurant) => {
    debugger;
    restaurant.rating = event.target.value
    let col = [...this.state.restaurants]
    let i = col.indexOf(restaurant)
    this.setState({
      rating: [...col.slice(0, i),
      { ...restaurant, rating: event.target.value },
      ...col.slice(i + 1)]
    }
    fetch("http://localhost:3001/reviews", {
      method: "Post"
      headers: {
        "Accepts": "application/json"
      "Allows": "application/json"
      }
    })
    )

  };
  render() {
    return this.state.restaurants.map(restaurant => (
      <Restaurant restaurant={restaurant} handleRatingChange={this.handleRatingChange} key={restaurant.id} />
    )
    );
  }
}

export default RestaurantContainer;

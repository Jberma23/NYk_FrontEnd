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
    restaurant.rating = event.target.value;
    let col = [...this.state.restaurants];
    let i = col.indexOf(restaurant);
    this.setState({
      rating: [
        ...col.slice(0, i),
        { ...restaurant, rating: event.target.value },
        ...col.slice(i + 1)
      ]
    });
    let user_id = this.props.current_user.id;
    let restaurant_id = restaurant.id;
    let rating = event.target.value;
    fetch("http://localhost:3001/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: user_id,
        restaurant_id: restaurant_id,
        rating: rating
      })
    })
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(e => console.error(e));
  };
  render() {
    return this.state.restaurants.map(restaurant => (
      <Restaurant
        restaurant={restaurant}
        handleRatingChange={this.handleRatingChange}
        key={restaurant.id}
      />
    ));
  }
}

export default RestaurantContainer;

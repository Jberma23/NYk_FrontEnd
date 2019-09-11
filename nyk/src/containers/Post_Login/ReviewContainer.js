import React, { Component } from "react";
import Review from "../../components/Reviews";

class ReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: props.restaurants
    };
  }

  renderRestaurant() {
    debugger

  }




  render() {
    debugger
    return (
      this.props.reviews.map(review => {
        return <Review review={review} restaurant={this.props.restaurants.find(rest => { return rest.id === review.restaurant_id })} key={review.id} />
      })
    )
  }
}

export default ReviewContainer;

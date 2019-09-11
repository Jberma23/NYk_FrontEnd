import React, { Component } from "react";
import Review from "../../components/Reviews";

class ReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.reviews.map(review => (
      <Review review={review} key={review.id} />
    ));
  }
}

export default ReviewContainer;

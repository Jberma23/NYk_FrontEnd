import React, { Component } from "react";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating,
      restaurant: []
    };
  }
  componentDidMount() {}
  render() {
    return <h1>Hi</h1>;
  }
}

export default Reviews;

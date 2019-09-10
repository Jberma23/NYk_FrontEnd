import React, { Component } from "react";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: props.review,
      restaurant: props.restaurants
    };
  }

  // console.log(rest);
  componentDidMount() {
    // let id = this.props.review.restaurant_id;
    // let restaurants = [...this.props.restaurants];
    // let filtered = restaurants.find(restaurant => {
    //   return restaurant.id === id;
    // });
    // this.setState({ restaurant: filtered });
  }
  render() {
    return (
      <div className="ui column">
        <div className="ui card" key={this.state.review.id}>
          <div className="content">
            {this.state.restaurant ? (
              <div className="header">{this.state.restaurant.name}</div>
            ) : null}
            <div className="meta text-wrap">
              {this.state.restaurant ? (
                <div className="body">
                  Rating: {this.state.review.rating}
                  <br></br>
                  Location: {this.state.restaurant.location}
                </div>
              ) : (
                <div className="body">{this.state.review.rating}</div>
              )}
              <small>Date: {this.state.review.created_at}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;

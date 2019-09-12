import React, { Component } from "react";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: props.review,
      restaurant: props.restaurant
    };
  }
  // console.log(rest);
  componentDidMount() {}
  render() {
    let date = new Date(this.state.review.created_at.slice(0, 10));
    return (
      <div className="ui column">
        <div className="ui card" key={this.props.review.id}>
          <div className="content">
            {this.state.restaurant ? (
              <div className="header">{this.state.restaurant.name}</div>
            ) : null}
            <div className="meta text-wrap">
              {this.state.restaurant ? (
                <div className="body">
                  <p>Rating: {this.props.review.rating}</p>
                  <p>Location: {this.state.restaurant.location}</p>
                </div>
              ) : (
                <div className="body">
                  <p>Rating: {this.props.review.rating}</p>
                </div>
              )}
              <small>Date: {date.toLocaleDateString("en-US")}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;

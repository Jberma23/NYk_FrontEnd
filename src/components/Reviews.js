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
  componentDidMount() { }
  render() {
    return this.props.review.map(review => {
      let date = new Date(review.created_at.slice(0, 10));
      return (
        <div className="ui column">
          <div className="ui card" key={review.id}>
            <div className="content">
              {this.state.restaurant ? (
                <div className="header">{this.props.restaurant.name}</div>
              ) : null}
              <div className="meta text-wrap">
                {this.props.restaurant ? (
                  <div className="body">
                    <p>Rating: {review.rating}</p>
                    <p>Location: {this.props.restaurant.location}</p>
                  </div>
                ) : (
                    <div className="body">
                      <p>Rating: {review.rating}</p>
                    </div>
                  )}
                <small>Date: {date.toLocaleDateString("en-US")}</small>
              </div>
            </div>
          </div>
        </div>
      )

    })
  }

}

export default Reviews;

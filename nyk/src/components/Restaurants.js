import React, { Component } from "react";
import ReviewForm from "./ReviewsForm";
class Restaurant extends Component {
  constructor(props) {
    let { name, location, categories, averageReviews } = props.restaurant;

    super(props);
    this.state = {};
  }

  renderRestaurants = () => {};

  render() {
    return (
      <div className="ui column ">
        <div className="card">
          <div className="image">
            <img src={this.props.restaurant.url} />
          </div>
          <div className="content">
            <div className="header">{this.props.restaurant.name}</div>
            <div className="meta">
              <a>{this.props.restaurant.categories} </a>
            </div>
            <div className="description">{this.props.restaurant.location}</div>
          </div>
          <div className="extra content">
            <span>{<ReviewForm />}</span>
            <span className="right floated">{this.props.restaurant.price}</span>
            <span>
              <i className="user icon"></i>
              {this.props.restaurant.avg_review}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;

import React, { Component } from "react";

class Restaurant extends Component {
  constructor(props) {
    let { name, location, categories, averageReviews } = props.restaurant;

    super(props);
    this.state = {};
  }

  renderRestaurants = () => {};

  render() {
    return (
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src={this.props.restaurant.url} />
          </div>
          <div class="content">
            <div class="header">{this.props.restaurant.name}</div>
            <div class="meta">
              <a>{this.props.restaurant.categories} </a>
            </div>
            <div class="description">{this.props.restaurant.location}</div>
          </div>
          <div class="extra content">
            <span class="right floated">{this.props.restaurant.price}</span>
            <span>
              <i class="user icon"></i>
              {this.props.restaurant.avg_review}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;

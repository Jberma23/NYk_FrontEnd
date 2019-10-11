import React, { Component } from "react";
import ReviewForm from "./ReviewsForm";



class Restaurant extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }





  render() {
    return (
      <div className="ui column">
        <div className="card" key={this.props.restaurant.id}>
          <div className="image">
            <img src={this.props.restaurant.url} alt="food" />
          </div>
          <div className="content">
            <div className="header">{this.props.restaurant.name}</div>
            <div className="meta">
              <a>{this.props.restaurant.categories} </a>
            </div>
            <div className="description">{this.props.restaurant.location}</div>
          </div>
          <div className="extra content">
            <span className="right floated">{this.props.restaurant.price}</span>
            <span>
              <i className="user icon"></i>
              {this.props.restaurant.avg_review}
            </span>
            <br></br>
            <span>
              {
                <ReviewForm
                  review={this.props.review}
                  key={this.props.restaurant.id}
                  id={this.props.restaurant.id}
                  restaurant={this.props.restaurant}
                  handleRatingChange={this.props.handleRatingChange}
                />
              }
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;

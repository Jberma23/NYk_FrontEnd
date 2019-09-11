import React, { Component, Fragment } from "react";




let checked5 = false
let checked4p5 = false
let checked4 = false
let checked3p5 = false
let checked3 = false
let checked2p5 = false
let checked2 = false
let checked1p5 = false
let checked1 = false
let checkedp5 = false
class ReviewsForm extends Component {

  state = {

  };


  renderChecked() {

    if (this.props.restaurant.rating === "5") {
      checked5 = true
    } else if (this.props.restaurant.rating === "4.5") {
      checked4p5 = true
    } else if (this.props.restaurant.rating === "4") {
      checked4 = true
    } else if (this.props.restaurant.rating === "3.5") {
      checked3p5 = true
    } else if (this.props.restaurant.rating === "3") {
      checked3 = true
    } else if (this.props.restaurant.rating === "2.5") {
      checked2p5 = true
    } else if (this.props.restaurant.rating === "2") {
      checked2 = true
    } else if (this.props.restaurant.rating === "1.5") {
      checked1p5 = true
    } else if (this.props.restaurant.rating === "1") {
      checked1 = true
    } else if (this.props.restaurant.rating === ".5") {
      checkedp5 = true
    }
  }

  render() {
    this.renderChecked()
    return (
      <Fragment>
        <form className={`rating`}>
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            checked={checked5}
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="full"
            htmlFor="star5"
            title="Awesome - 5 stars"
          ></label>
          <input
            type="radio"
            id="star4half"
            name="rating"
            value="4.5"
            checked={checked4p5}
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="half"
            htmlFor="star4half"
            title="Pretty good - 4.5 stars"
          ></label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value=""
            checked={checked4}
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="full"
            htmlFor="star4"
            title="Pretty good - 4 stars"
          ></label>
          <input
            type="radio"
            id="star3half"
            name="rating"
            value="3.5"
            checked={checked3p5}
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="half"
            htmlFor="star3half"
            title="Meh - 3.5 stars"
          ></label>
          <input
            type="radio"
            id="star3"
            name="rating"
            checked={checked3}
            value="3"
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
          <input
            type="radio"
            id="star2half"
            name="rating"
            checked={checked2p5}
            value="2.5"
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="half"
            htmlFor="star2half"
            title="Kinda bad - 2.5 stars"
          ></label>
          <input
            type="radio"
            id="star2"
            name="rating"
            checked={checked2}
            value="2"
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="full"
            htmlFor="star2"
            title="Kinda bad - 2 stars"
          ></label>
          <input
            type="radio"
            id="star1half"
            name="rating"
            checked={checked1p5}
            value="1.5"
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="half"
            htmlFor="star1half"
            title="Meh - 1.5 stars"
          ></label>
          <input
            type="radio"
            id="star1"
            name="rating"
            checked={checked1}
            value="1"
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="full"
            htmlFor="star1"
            title="Sucks big time - 1 star"
          ></label>
          <input
            type="radio"
            id="starhalf"
            name="rating"
            checked={checkedp5}
            value=".5"
            onChange={event => this.props.handleRatingChange(event, this.props.restaurant)}
          />
          <label
            className="half"
            htmlFor="starhalf"
            title="Sucks big time - 0.5 stars"
          ></label>
        </form>
      </Fragment>
    );
  }
}

export default ReviewsForm;

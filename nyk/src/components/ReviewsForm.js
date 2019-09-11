import React, { Component, Fragment } from "react";


class ReviewsForm extends Component {

  state = {

  };


  render() {
    return (
      this.props.review ?
        <Fragment>
          <form className={`rating`} onChange={(event) => { this.setState({ rating: event.target.value }) }}>
            {this.props.review.rating >= 1 || this.state.rating >= 1 ?
              <input
                type="checkbox"
                value="1"
                checked={true}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
              :
              <input
                type="checkbox"
                value="1"
                checked={null}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />}
            {this.props.review.rating >= 2 || this.state.rating >= 2 ?
              <input
                type="checkbox"
                value="2"
                checked={true}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
              :
              <input
                type="checkbox"
                value="2"
                checked={null}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />}

            {this.props.review.rating >= 3 || this.props.restaurant.rating >= 3 ?
              <input
                type="checkbox"
                value="3"
                checked={true}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
              :
              <input
                type="checkbox"
                value="3"
                checked={null}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
            }

            {this.props.review.rating >= 4 || this.props.restaurant.rating >= 4 ?
              <input
                type="checkbox"
                value="4"
                checked={true}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
              :
              <input
                type="checkbox"
                value="4"
                checked={null}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />}{this.props.review.rating >= 45 || this.props.restaurant.rating >= 5 ?
                <input
                  type="checkbox"
                  value="5"
                  checked={true}
                  onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
                />
                :

                <input
                  type="checkbox"
                  value="5"
                  checked={null}
                  onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
                />}

          </form>
        </Fragment >



        :
        <Fragment>
          <form className={`rating`} onChange={(event) => { this.setState({ rating: event.target.value }) }}>
            {this.state.rating >= 1 ?
              <input
                type="checkbox"
                value="1"
                checked={true}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
              :
              <input
                type="checkbox"
                value="1"
                checked={null}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />}
            {this.state.rating >= 2 ?
              <input
                type="checkbox"
                value="2"
                checked={true}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
              :
              <input
                type="checkbox"
                value="2"
                checked={null}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />}

            {this.state.rating >= 3 ?
              <input
                type="checkbox"
                value="3"
                checked={true}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
              :
              <input
                type="checkbox"
                value="3"
                checked={null}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
            }

            {this.state.rating >= 4 ?
              <input
                type="checkbox"
                value="4"
                checked={true}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />
              :
              <input
                type="checkbox"
                value="4"
                checked={null}
                onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
              />}{this.state.rating >= 5 ?
                <input
                  type="checkbox"
                  value="5"
                  checked={true}
                  onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
                />
                :

                <input
                  type="checkbox"
                  value="5"
                  checked={null}
                  onClick={event => this.props.handleRatingChange(event, this.props.restaurant)}
                />}

          </form>
        </Fragment >
    )

  }
}






export default ReviewsForm;

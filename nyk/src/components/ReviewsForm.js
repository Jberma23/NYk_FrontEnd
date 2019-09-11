import React, { Component, Fragment } from "react";

class ReviewForm extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <form>
          <lable>Rate this Restaurant:</lable>
          <br></br>
          <input type="checkbox" value="0"></input>
          <input type="checkbox" value="1"></input>
          <input type="checkbox" value="2"></input>
          <input type="checkbox" value="3"></input>
          <input type="checkbox" value="4"></input>
          <input type="checkbox" value="5"></input>
        </form>
      </Fragment>
    );
  }
}

export default ReviewForm;

import React, { Component, Fragment } from "react";

class PlansForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h1></h1>
          <h2>Create Plan</h2>
          <label>Plan Name: </label>
          <input type="text" name="name" />
          <br></br>
          <label>Suggested Restaurants:</label>
          <select>
            {this.props.restaurants.sort(function (a, b) { return a.avg_review - b.avg_review }).map(e => {
              debugger
              return <option>{e.name} - {e.avg_review}</option>
            })}
            {/* <option value="hello">Hello</option>
            <option value="world">world</option>
            <option value="no">No</option> */}
          </select>
          <br></br>
          <label>Select A Date:</label>
          <input type="date" name="data" />
          <br></br>
          <label>Select A Time:</label>
          <input type="time" name="usr_time" />
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PlansForm;

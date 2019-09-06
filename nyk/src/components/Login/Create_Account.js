import React, { Component } from "react";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <form>
        <label></label>
        <input type="text" placeholder="name"></input>
      </form>
    );
  }
}

export default CreateAccount;

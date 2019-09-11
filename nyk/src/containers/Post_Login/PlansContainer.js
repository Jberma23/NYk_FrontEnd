import React, { Component } from "react";
import Plan from "../../components/Plans";

class PlansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.plans.map(plan => (
      <Plan plan={plan} key={plan.id} restaurants={this.props.restaurants} />
    ));
  }
}

export default PlansContainer;

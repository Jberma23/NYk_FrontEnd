import React, { Component } from "react";
import Plans from "../../components/Plans";

class PlansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: []
    };
  }

  render() {
    return this.state.plans.map(plan => <Plans plan={plan} key={plan.id} />);
  }
}

export default PlansContainer;

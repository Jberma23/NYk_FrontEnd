import React, { Component } from "react";

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="ui column">
        <div className="ui card" key={this.props.plan.id}>
          <div className="content">
            <div className="header">{this.props.plan.name}</div>
            <div className="meta text-wrap">
              <small>Date: {this.props.plan.date}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;

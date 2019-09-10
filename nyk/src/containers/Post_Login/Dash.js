import React, { Component } from "react";
import DashBoard from "./DashBoard";
import RestaurantContainer from "./RestaurantContainer";
import PlansContainer from "./PlansContainer";
import { Router, Route } from "react";
class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      restaurants: [],
      reviews: [],
      current_user: props.current_user
    };
  }
  async componentDidMount() {
    await fetch("http://localhost:3001/plans")
      .then(res => res.json())
      .then(plans =>
        this.setState({
          plans: plans
        })
      );
    await fetch("http://localhost:3001/restaurants")
      .then(res => res.json())
      .then(restaurants => this.setState({ restaurants: restaurants }));
    await fetch("http://localhost:3001/reviews")
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews }));
  }

  render() {
    return (
      <Route>
        <DashBoard
          plans={this.state.plans.filter(
            plans => plans.user_id === this.state.current_user.id
          )}
          reviews={this.state.reviews.filter(
            review => review.user_id === this.state.current_user.id
          )}
          restaurants={this.state.restaurants}
        />
      </Route>
    );
  }
}

export default Dash;

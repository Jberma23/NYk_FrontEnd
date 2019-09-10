import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Pre-Login/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dash from "./containers/Post_Login/Dash";
import CreateAccount from "./components/Login/Create_Account";
import Login from "./components/Login/login";


class  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  );
  }
}
 
export default ;
function App() {
  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/login"
          render={props => {
            return <Login />;
          }}
        />
        <Route
          exact
          path="/register"
          render={() => {
            return <CreateAccount />;
          }}
        />
      </div>
    </Router>
  );
}

export default App;

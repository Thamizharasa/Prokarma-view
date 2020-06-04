import React, { Component } from "react";
import { Switch, Route,BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/DashBoard";
import  Login  from "./Components/Login";

export default class Routes extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route path="/DashBoard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route component={Login} /> 
      </Switch>
      </Router>
    );
  }
}

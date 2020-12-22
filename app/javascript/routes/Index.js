import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Pets from "../components/Pets";
import Pet from "../components/Pet";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Pets}/>
      <Route path="/Pets" exact component={Pets}/>
      <Route path="/Pets/:id" exact component={Pet}/>
    </Switch>
  </Router>
);
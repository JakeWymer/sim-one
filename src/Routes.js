import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/add" component={Form} />
        <Route path="/edit/:id" component={Form} />
      </Switch>
    );
  }
}

export default Routes;

{/* <Form 
  getInventory={this.getInventory}/> */}
import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './Cards.js';
import Home from './Home.js';
import NavbarBem from './NavbarBem.js';
import {Grid} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavbarBem />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

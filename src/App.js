import React, { Component } from 'react';
import logo from './logo.svg';
import Cards from './Cards.js';
import Home from './Home.js';
import {Grid} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <Home />
      </Grid>
    );
  }
}

export default App;

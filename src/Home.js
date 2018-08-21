import React, { Component } from 'react';
import Cards from './Cards.js';
import logo from './logo.svg';
import './App.css';
import UncontrolledCarousel from './Carousel.js';
import {Grid, Col, Row} from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      	<Row>
      		<Col xs={2} md={1} />
      		<Col xs={8} md={10}>
      			<UncontrolledCarousel className="carousel" />
      			<Cards />
      		</Col>
      		<Col xs={2} md={1}/>
      	</Row>
    );
  }
}

export default Home;

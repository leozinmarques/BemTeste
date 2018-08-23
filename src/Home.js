import React, { Component } from 'react';
import Cards from './Cards.js';
import logo from './logo.svg';
import './App.css';
import UncontrolledCarousel from './Carousel.js';
import {Grid, Col, Row} from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
    	<Grid>
	      	<Row>
	      		<Col sm={0} xs={1} md={1} />
	      		<Col sm={12} xs={10} md={10} >
	      			<UncontrolledCarousel className="carousel" />
	      			<Cards />
	      		</Col>
	      		<Col sm={0} xs={1} md={1} />
	      	</Row>
      	</Grid>
    );
  }
}

export default Home;

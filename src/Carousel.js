import React, { Component } from 'react';
import {Carousel, Grid} from 'react-bootstrap';
import test from './test.png';
import test2 from './test2.jpg';
import test3 from './test3.jpg';


class UncontrolledCarousel extends Component {
	render(){
		return(
			<Carousel>
			  <Carousel.Item>
			    <img alt="900x500" src={test} />
			    <Carousel.Caption>
			      <h3>First slide label</h3>
			      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img alt="900x500" src={test} />
			    <Carousel.Caption>
			      <h3>Second slide label</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img alt="900x500" src={test} />
			    <Carousel.Caption>
			      <h3>Third slide label</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
		);
	}
}

export default UncontrolledCarousel;
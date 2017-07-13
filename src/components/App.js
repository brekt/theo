import React, { Component } from 'react';
import Poly, { shapes } from './Poly';

export default class App extends Component {
	constructor() {
		super();
		const cube = new Poly(shapes.CUBE);
		console.log(cube.getShapeName());
		console.log(THREE.WebGLRenderer);
	}
	render() {
		return (
			<div>
				Hello world.
			</div>
		);
	}
}

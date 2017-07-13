import React, { Component } from 'react';
import Poly, { shapes } from './Poly';

/* exported variableName */

export default class App extends Component {
	constructor() {
		super();
		const cube = new Poly(shapes.CUBE);
		console.log(cube.getShapeName());
	}
	render() {
		return (
			<div>
				Hello world.
			</div>
		);
	}
}

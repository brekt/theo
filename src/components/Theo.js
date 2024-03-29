import React from 'react';
import React3 from 'react-three-renderer';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import * as THREE from 'three';

export default class Theo extends React.Component {
	constructor(props, context) {
		super(props, context);
		autoBind(this);
		this.cameraPosition = new THREE.Vector3(0, 0, 1000);
		this.lightPosition = new THREE.Vector3(100, -30, 50);
		this.lightTarget = new THREE.Vector3(0, 0, 0);
		this.state = {
			xRotDirection: 'pos',
			rotation: new THREE.Euler(),
		};
		this.xRotDelta = 0.001;
	}
	_onAnimate() {
		if (this.state.rotation.x >= 0.1) {
			this.setState({ xRotDirection: 'neg' });
		}
		if (this.state.rotation.x <= -0.1) {
			this.setState({ xRotDirection: 'pos' });
		}
		this.state.xRotDirection === 'neg' ? this.xRotDelta = -0.001 : this.xRotDelta = 0.001;
		this.setState({
			rotation: new THREE.Euler(
				this.state.rotation.x + this.xRotDelta,
				this.state.rotation.y + 0.00666,
				0
			),
		});
	}
	render() {
		const width = window.innerWidth; // canvas width
		const height = window.innerHeight; // canvas height
		return (
			<div onClick={this.props.handleClick}>
				<React3
				mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
				width={width}
				height={height}
				onAnimate={this._onAnimate}
				>
					<scene>
						<perspectiveCamera
							name="camera"
							fov={75}
							aspect={width / height}
							near={0.1}
							far={10000}
							position={this.cameraPosition}
						/>
						<mesh
							rotation={this.state.rotation}
							scale={new THREE.Vector3(1, 1.5, 1)}
						>
							<octahedronGeometry
								radius={256}
								detail={0}
							/>
							<meshPhongMaterial
								color={0x93ccff}
								specular={0x111111}
								emissive={0x000000}
								shininess={30}
								shading={THREE.FlatShading}
								wireframe={false}
								side={THREE.DoubleSide}
								opacity={0.5}
								transparent={true}
								depthWrite={false}
							/>
						</mesh>
						<ambientLight color={0x505050} />
						<directionalLight
							color={0xffffff}
							position={this.lightPosition}
							lookAt={this.lightTarget}
						/>
					</scene>
				</React3>
			</div>
		);
	}
}
Theo.propTypes = {
	handleClick: PropTypes.func,
};

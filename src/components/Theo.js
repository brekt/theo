import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

export default class Theo extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.cameraPosition = new THREE.Vector3(0, 0, 1000);
		this.state = {
			rotation: new THREE.Euler(),
		};
		this._onAnimate = () => {
			this.setState({
				rotation: new THREE.Euler(
					this.state.rotation.x + 0.001,
					this.state.rotation.y + 0.001,
					0
				),
			});
		};
	}

	render() {
		const width = window.innerWidth; // canvas width
		const height = window.innerHeight; // canvas height
		return (<React3
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
				>
					<octahedronGeometry
						radius={512}
						detail={0}
					/>
					<meshBasicMaterial
						color={0x00ffff}
						wireframe={true}
					/>
				</mesh>
			</scene>
		</React3>);
	}
}

import Poly, { shapes } from './Poly';

export default class Theo {
	constructor() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			1,
			10000
		);
		this.renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);
		this.geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
		this.material = new THREE.MeshBasicMaterial({
			color: 0xffffff,
			wireframe: true
		});
		this.cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		this.camera.position.z = 1000;
		this.render();
	}
	render() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
}

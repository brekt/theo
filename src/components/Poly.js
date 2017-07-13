export const shapes = {
	TETRAHEDRON: {
		faceCount: 4,
		shapeName: 'tetrahedron',
	},
	PENTAHEDRON: {
		faceCount: 5,
		shapeName: 'pentahedron',
	},
	CUBE: {
		faceCount: 6 ,
		shapeName: 'cube',
	},
	SEPTAHEDRON: {
		faceCount: 7,
		shapeName: 'septahedron',
	},
	OCTAHEDRON: {
		faceCount: 8,
		shapeName: 'octahedron',
	},
	NONAHEDRON: {
		faceCount: 9,
		shapeName: 'nonahedron',
	},
	DECAHEDRON: {
		faceCount: 10,
		shapeName: 'decahedron',
	},
};

export default class Poly {
	constructor(type = shapes.CUBE) {
		this.faceCount = type.faceCount;
		this.shapeName = type.shapeName;
	}
	getShapeName() {
		return this.shapeName;
	}
}

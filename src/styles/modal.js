const modalSize = window.innerWidth * 0.5 << 0;

const styles = {
	hidden: {
		visibility: 'hidden',
	},
	visible: {
		visibility: 'visible',
		position: 'absolute',
		top: '20%',
		left: '25%',
		zIndex: '100',
		width: modalSize,
		height: modalSize * 0.6,
		backgroundColor: '#f7bb67',
		margin: '0 auto',
		borderRadius: '10px',
	},
	closeButtonStyle: {
		position: 'absolute',
		top: '2%',
		right: '2%',
		fontWeight: '900',
		fontSize: '1.5em',
	}
};

export default styles;

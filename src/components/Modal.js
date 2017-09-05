import React from 'react';
import PropTypes from 'prop-types';
import modalStyles from '../styles/modal';

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		const modalStyle = this.props.modalOpen ? modalStyles.visible : modalStyles.hidden;
		console.log(modalStyle);
		return(
			<div style={modalStyle}>
				<ul>
					<li>Donee</li>
					<li>Donee</li>
					<li>Donee</li>
					<li>Donee</li>
				</ul>
			</div>
		);
	}
}

Modal.propTypes = {
	donees: PropTypes.array,
	modalOpen: PropTypes.bool,
};

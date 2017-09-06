import React from 'react';
import PropTypes from 'prop-types';
import modalStyles from '../styles/modal';

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		const { visible, hidden, closeButtonStyle } = modalStyles;
		const modalStyle = this.props.modalOpen ? visible : hidden;
		return(
			<div style={modalStyle}>
				<div style={closeButtonStyle} onClick={this.props.closeModal}>X</div>
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
	closeModal: PropTypes.func,
};

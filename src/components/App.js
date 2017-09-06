import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Theo from './Theo';
import Modal from './Modal';

export default class App extends Component {
	constructor(props) {
		super(props);
		autoBind(this);
		this.state = {
			modalOpen: false,
		};
	}
	openModal() {
		this.setState({modalOpen: true});
	}
	closeModal() {
		this.setState({modalOpen: false});
	}
	render() {
		return (
			<div>
				<Theo
					handleClick={() => this.openModal()}
				/>
				<Modal
					modalOpen={this.state.modalOpen}
					closeModal={() => this.closeModal()}
				/>
			</div>
		);
	}
}

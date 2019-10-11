import React, { Component } from "react";
import Input from './input';
import Result from './result';

class Hoist extends Component {
	state = { inputValue: ' ' }
	setInputValue = newValue => {
		this.setState({ inputValue: newValue });
	}
	render() {
		return (
			<div>
			<Input value={this.state.inputValue}
				liftValue={this.setInputValue} />
			<Result data={this.state.inputValue} />
			</div>
		);
	}
}

export default Hoist;
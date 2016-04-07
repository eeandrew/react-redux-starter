import React from 'react';
import ReacDom from 'react-dom';

export default class AddTodo extends React.Component {

	handleClick() {
		var inputNode = this.refs.input;
		let todoText = inputNode.value.trim();
		inputNode.value = '';
		this.props.onAddClick(todoText);
	}

	render() {
		return (
			<div>
				<input ref="input"/>
				<button onClick={this.handleClick.bind(this)}>Add Todo</button>
			</div>	
		);
	}
}

AddTodo.propTypes = {
	onAddClick : React.PropTypes.func.isRequired
}
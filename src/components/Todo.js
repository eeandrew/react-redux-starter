import React from 'react';

export default class Todo extends React.Component {
	render() {
		return (
			<li style={{
				textDecoration:this.props.completed ? 'line-through' :'none'
			}} onClick={this.props.onItemClick}>
				{this.props.text}
			</li>
		);
	}
}

Todo.propTypes = {
	completed : React.PropTypes.bool,
	text : React.PropTypes.string,
	onItemClick : React.PropTypes.func
}
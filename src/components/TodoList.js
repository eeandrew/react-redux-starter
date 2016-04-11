import React,{PropTypes} from 'react';
import Todo from './Todo.js';

export default class TodoList extends React.Component {

	getTodos() {
		return this.props.todos.map((todo,index) => {
				return <Todo {...todo} key={index} onItemClick={()=>{this.props.onTodoClick(index)}}/>
			});
	}

	render() {
		let todos = this.getTodos();
		return <ul>{todos}</ul>;
	}
}

TodoList.propTyps = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text:PropTypes.string,
		completed: PropTypes.bool
	})),
	onTodoClick: PropTypes.func.isRequired
}
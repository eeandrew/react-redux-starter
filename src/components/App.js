import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';

export default class App extends React.Component {
	onAddTodo(text) {
		console.log(text);
	}

	onTodoClick(index) {
		console.log(index);
	} 
	render() {
		let todos = [{text:'todo1',completed:true},{text:'todo1',completed:false}]
		return (
			<div>
				<AddTodo onAddClick={this.onAddTodo.bind(this)}/>
				<TodoList todos={todos} onTodoClick={this.onTodoClick.bind(this)}/>
			</div>
		);
	}
}
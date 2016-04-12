import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import {addTodo,completeTodo} from '../actions.js';
import todoApp from '../reducer.js';
import {connect} from 'react-redux';


export default class App extends React.Component {
	onAddTodo(text) {
		console.log(text);
	}

	onTodoClick(index) {
		console.log(index);
	} 
	render() {
		const {dispatch} = this.props;
		return (
			<div>
				<AddTodo onAddClick={(text)=>{dispatch(addTodo(text))}}/>
				<TodoList todos={this.props.todos} onTodoClick={(index)=>{dispatch(completeTodo(index))}}/>
			</div>
		);
	}
}

function select(state) {
	return {
		todos:state.todos
	}
}

export default connect(select)(App);
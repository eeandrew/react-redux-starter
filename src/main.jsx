import ReactDom from 'react-dom';
import React from 'react';
import store from './index.js';
import AddTodo from './components/AddTodo.js';

const onAddClick = (text)=>{
	console.log(text);
}

ReactDom.render(<AddTodo onAddClick={onAddClick}/>,document.getElementById('app'))
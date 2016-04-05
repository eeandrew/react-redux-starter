import {VisibiltyFilter,SET_VISIBILITY_FILTER,ADD_TODO,COMPLETE_TOTO} from './actions.js';

const initialState = {
	visibilityFilter : VisibiltyFilter.SHOW_ALL,
	todos : []
}

function todoApp(preState = initialState,action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER : 
			return Object.assign({},preState,{
				visibilityFilter:action.filter
			});
		case ADD_TODO :
			return Object.assign({},preState,{
				todos:[...preState.todos,{text:action.text,completed:false}]
			});
		case COMPLETE_TOTO:
			return Object.assign({},preState,{
				todos:[
				...preState.todos.slice(0,action.index),
				Object.assign({},preState.todos[action.index],{completed:action.false}),
				...preState.todos.slice(action.index+1),
				]
			});
	}
}
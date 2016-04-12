import {VisibiltyFilter,SET_VISIBILITY_FILTER,ADD_TODO,COMPLETE_TOTO} from './actions.js';
import {combineReducers} from 'redux';

function todos(state = [],action) {
	switch(action.type) {
		case ADD_TODO:
			return [...state,{text:action.text,completed:false}];
		case COMPLETE_TOTO :
			return [
				...state.slice(0,action.index),
				Object.assign({},state[action.index],{completed:!state[action.index].completed}),
				...state.slice(action.index+1)
			];
		default:
			return state;
	}
}

function setVisibility(visibility = VisibiltyFilter.SHOW_ALL,action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return visibility
	}
}

const todoApp = combineReducers({
	visibilityFilter:setVisibility,
	todos
})

export default todoApp;
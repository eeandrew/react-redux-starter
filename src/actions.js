export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TOTO = "COMPLETE_TOTO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibiltyFilter = {
	SHOW_ALL : 'SHOW_ALL',
	SHOW_ACTIVE : 'SHOW_ACTIVE',
	SHOW_COMPLETE : 'SHOW_COMPLETE',
};

export function addTodo(text) {
	return {
		type:ADD_TODO,
		text
	};
}

export function completeTodo(index) {
	return {
		type:COMPLETE_TOTO,
		index
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}
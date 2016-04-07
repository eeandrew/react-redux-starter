import {createStore} from 'redux';
import todoApp from './reducer.js';
import {addTodo,completeTodo,setVisibilityFilter,VisibiltyFilter} from './actions.js';

let store = createStore(todoApp);

let unsubscribe = store.subscribe(()=>{
	console.log(store.getState());
});

store.dispatch(addTodo('hello world1'));
store.dispatch(addTodo('hello world2'));
store.dispatch(addTodo('hello world3'));
store.dispatch(completeTodo(2));
store.dispatch(setVisibilityFilter(VisibiltyFilter.SHOW_COMPLETE));

unsubscribe();

export default store;
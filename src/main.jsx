import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducer.js';

let store = createStore(todoApp);

ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('app')) 
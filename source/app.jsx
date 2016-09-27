import React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux'
import { Provider } from 'react-redux';

import reducers from './reducers';

import RecipeGame from './components/recipe-game';

const store = combineReducers(reducers);

// import configureStore from './utils/configure-store';
// import Container from './components/container';
// import DevTools from './utils/dev-tools';
//
// const store = configureStore({});
render(
	<Provider store={store}>
		<RecipeGame />
	</Provider>,
	document.getElementById('app')
);

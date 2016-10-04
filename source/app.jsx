import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {} from '../styles/main.scss';

import recipes from './reducers/recipes';

import RecipeGame from './components/recipe-game';

const store = createStore(recipes);

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

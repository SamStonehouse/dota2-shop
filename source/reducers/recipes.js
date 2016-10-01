import { List, Map } from 'immutable';

import { RESET, ITEM_SELECTED, ITEM_UNSELECTED } from '../constants/action-types';
import AvailableItem from '../data/available-item';
// import items from '../data/items';
import recipes from '../data/recipes';

function _initialState() {
	const allRecipes = recipes.sort(() => (Math.random() - 0.5));
	const currentRecipe = allRecipes.last();
	const remainingRecipes = allRecipes.pop();
	const availableItems = currentRecipe.get('components').map(item => new AvailableItem({ item }));

	return new Map({
		availableItems,
		selectedItems: new List([]),
		remainingRecipes,
		currentRecipe,
		completedRecipes: new List([]),
		points: 0,
	});
}

const initialStore = _initialState();

function lexographicSort(a, b) {
	return a.localeCompare(b);
}

function itemSelected(action, _state) {
	let state = _state;

	if (state.get('selectedItems').contains(action.availableItem)) {
		console.error('Selected item which has already been selected');
		return state;
	}

	state = state.set('selectedItems', state.get('selectedItems').push(action.availableItem));

	const correctItemIds = state.get('currentRecipe').get('components')
		.map(item => item.get('id'))
		.sort(lexographicSort);

	const selectedItemIds = state.get('selectedItems')
		.map(availableItem => availableItem.item.id)
		.sort(lexographicSort);

	if (correctItemIds.size !== selectedItemIds.size) {
		return state;
	}

	let allCorrect = true;

	for (let i = 0; i < correctItemIds.length; i++) {
		console.log(`${i} - ${correctItemIds[i]}, ${selectedItemIds[i]}`);
		if (correctItemIds[i] !== selectedItemIds[i]) {
			allCorrect = false;
			break;
		}
	}

	console.log(`All correct: ${allCorrect}`);

	if (allCorrect) {
		state = state.set('points', state.get('points') + 1);
		state = state.set('completedRecipes', state.get('completedRecipes').push(state.get('currentRecipe')));
	} else {
		state = state.set('points', 0);
	}

	state = state.set('selectedItems', new List([]));

	if (state.get('remainingRecipes').size > 0) {
		state = state.set('currentRecipe', state.get('remainingRecipes').last());
		state = state.set('remainingRecipes', state.get('remainingRecipes').pop());
		state = state.set('availableItems',
			state.get('currentRecipe').get('components').map(item => new AvailableItem({ item }))
		);
	} else {
		state = state.set('currentRecipe', undefined);
		state = state.set('availableItems', new List([]));
	}

	return state;
}

function itemUnselected(action, state) {
	if (!state.get('selectedItems').includes(action.availableItem)) {
		console.log('Invalid item for unselection');
		return state;
	}

	const itemIndex = state.get('selectedItems').findKey(availableItem => availableItem === action.availableItem);

	if (itemIndex >= state.get('selectedItems').size) {
		console.error('Invalid item unselected');
		return state;
	}

	return state.set('selectedItems', state.get('selectedItems').delete(itemIndex));
}

function reset(action, _state) {
	let state = _state;
	state = state.set('completedRecipes', state.get('completedRecipes').push(state.get('currentRecipe')));
	state = state.set('selectedItems', new List([]));
	if (state.remainingRecipes.length > 0) {
		state = state.set('currentRecipe', state.get('remainingRecipes').last());
		state = state.set('remainingRecipes', state.get('remainingRecipes').pop());
		state = state.set('availableItems',
			state.currentRecipe.get('components').map(item => new AvailableItem({ item }))
		);
	} else {
		state = state.set('currentRecipe', undefined);
		state = state.set('availableItems', new List([]));
	}

	return state;
}

export default function events(state = initialStore, action) {
	switch (action.type) {
	case ITEM_SELECTED:
		return itemSelected(action, state);

	case ITEM_UNSELECTED:
		return itemUnselected(action, state);

	case RESET:
		return reset(action, state);

	default:
		return state;
	}
}

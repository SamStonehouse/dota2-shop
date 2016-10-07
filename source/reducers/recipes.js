import { List, Map } from 'immutable';

import { RESTART, ITEM_SELECTED, ITEM_UNSELECTED } from '../constants/action-types';
import AvailableItem from '../data/available-item';
import items from '../data/items';
import recipes from '../data/recipes';

function _getRandomItem() {
	const randomIndex = Math.floor(Math.random() * items.size);
	return items.get(randomIndex);
}

function _getRandomItems(count) {
	return new List().setSize(count).map(() => _getRandomItem());
}

function _shuffleList(list) {
	const mutableList = list.asMutable();
	let currentIndex = mutableList.size;
	while (currentIndex !== 0) {
		const randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		const temp = mutableList.get(currentIndex);
		mutableList.set(currentIndex, mutableList.get(randomIndex));
		mutableList.set(randomIndex, temp);
	}

	return mutableList.asImmutable();
}

function _nextRecipe(_state) {
	let state = _state;
	state = state.set('currentRecipe', state.get('remainingRecipes').last());
	state = state.set('remainingRecipes', state.get('remainingRecipes').pop());
	state = state.set('availableItems',
		state.get('currentRecipe').get('components').map(item => new AvailableItem({ item }))
	);
	state = state.set('selectedItems', new List().setSize(state.get('currentRecipe').components.size));
	const additionalItems = _getRandomItems(5).map(item => new AvailableItem({ item }));
	state = state.set('availableItems', _shuffleList(state.get('availableItems').concat(additionalItems)));
	return state;
}

function _initialState() {
	const remainingRecipes = _shuffleList(recipes);

	let state = new Map({
		availableItems: new List([]),
		selectedItems: new List([]),
		remainingRecipes,
		currentRecipe: null,
		completedRecipes: new List([]),
		points: 0,
		streak: 0,
		biggestStreak: 0,
	});

	if (state.get('remainingRecipes').size > 0) {
		state = _nextRecipe(state);
	}

	return state;
}


const initialStore = _initialState();

function lexographicSort(a, b) {
	return a.localeCompare(b);
}

function itemSelected(action, _state) {
	let state = _state;

	if (state.get('selectedItems').contains(action.availableItem)) {
		return state;
	}

	if (state.get('selectedItems').filter(availableItem => availableItem !== undefined).size === state.get('selectedItems').size) {
		console.error('All slots are full');
		return state;
	}

	const firstEmptyIndex = state.get('selectedItems').findKey(availableItem => availableItem === undefined);

	state = state.set('selectedItems', state.get('selectedItems').set(firstEmptyIndex, action.availableItem));

	const correctItemIds = state.get('currentRecipe').get('components')
		.map(item => item.get('id'))
		.sort(lexographicSort);

	const selectedItemIds = state.get('selectedItems')
		.filter(availableItem => availableItem !== undefined)
		.map(availableItem => availableItem.item.id)
		.sort(lexographicSort);

	if (correctItemIds.size !== selectedItemIds.size) {
		return state;
	}

	let allCorrect = true;

	for (let i = 0; i < correctItemIds.size; i++) {
		if (correctItemIds.get(i) !== selectedItemIds.get(i)) {
			allCorrect = false;
			break;
		}
	}

	console.log(`All correct: ${allCorrect}`);

	if (allCorrect) {
		state = state.set('points', state.get('points') + 1);
		state = state.set('streak', state.get('streak') + 1);
		if (state.get('streak') > state.get('biggestStreak')) {
			state = state.set('biggestStreak', state.get('streak'));
		}
		state = state.set('completedRecipes', state.get('completedRecipes').push(state.get('currentRecipe')));
	} else {
		state = state.set('streak', 0);
	}

	state = state.set('selectedItems', new List([]));

	if (state.get('remainingRecipes').size > 0) {
		console.log('more than 1');
		state = _nextRecipe(state);
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

	return state.set('selectedItems', state.get('selectedItems').set(itemIndex, undefined));
}

function restart() {
	return _initialState();
}

export default function events(state = initialStore, action) {
	switch (action.type) {
	case ITEM_SELECTED:
		return itemSelected(action, state);

	case ITEM_UNSELECTED:
		return itemUnselected(action, state);

	case RESTART:
		return restart(action, state);

	default:
		return state;
	}
}

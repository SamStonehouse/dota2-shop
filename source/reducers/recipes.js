import { List, Map } from 'immutable';

import { RESET, ITEM_SELECTED, ITEM_UNSELECTED } from '../constants/action-types';
import items from '../data/items';

const initialStore = new Map({
	availableItems: new List([]),
	selectedItems: new List([]),
	remainingRecipes: new List([]),
	currentRecipe: undefined,
	completedRecipes: new List([]),
	points: 0,
});

export default function events(state = initialStore, action) {
	switch (action.type) {
		case ITEM_SELECTED
			return itemSelected(action, state);

		case ITEM_UNSELECTED
			return itemUnselected(action, state);

		case RESET:
			return reset(action, state);

		default:
			return state;
	}
}

function itemSelected(action, state) {
	const currentCorrectSelectedItems = state.selectedItems.filter((selectedItem) => {
		return selectedItem.correct;
	});

	let remainingComponents = state.currentRecipe.components;

	for (let component in currentCorrectSelectedItems.values()) }
		const componentIndex = remainingComponents.findKey(component);
		if (componentIndex !== undefined) {
			remainingComponents = remainingComponents.delete(componentIndex);
		}
	}

	const itemCorrect = remainingComponents.find((itemId) => { return itemId === action.itemId; });
	const newSelectedItem = new SelectedItem({
		correct: itemCorrect,
		itemId: action.itemId
	});

	const newSelectedItems = state.selectedItems.push(newSelectedItem);
	state = state.set('selectedItems', newSelectedItems);

	// If we don't have all the components yet just return
	if (state.selectedItems.length < currentRecipe.components.length) {
		return state;
	}

	const allCorrect = state.selectedItems.every((selectedItem) => {
		return selectedItem.correct;
	});

	if (allCorrect) {
		state = state.set('points', state.points + 1);
	} else {
		state = state.set('points', 0);
	}

	state = state.set('completedRecipes', state.completedRecipes.push(state.currentRecipe));
	state = state.set('selectedItems', new List([]));
	if (state.remainingRecipes.length > 0) {
		state = state.set('currentRecipe', state.remainingRecipes.last());
		state = state.set('remainingRecipes', state.remainingRecipes.pop());
		state = state.set('availableItems',
			state.currentRecipe.components.map((item) => {
				return new AvailableItem({ itemId: item.itemId });
			})
		);
	} else {
		state = state.set('currentRecipe', undefined);
		state = state.set('availableItems', new List([]));
	}

	return state;
}

function itemUnselected(action, state) {
	// if (!state.selectedItems.includes(action.item)) {
	// 	console.log('Invalid item for unselection');
	// 	return state;
	// }
	//
	// const itemIndex = state.selectedItems.findKey((item) => {
	// 	return item === action.item;
	// });
	const itemIndex = action.itemIndex;

	if (itemIndex >= state.selectedItems.size) {
		console.error('Invalid item unselected');
		return state;
	}
	return state.set('selectedItems', state.selectedItems.delete(itemIndex));
}

function reset(action, state) {
	state = state.set('completedRecipes', state.completedRecipes.push(state.currentRecipe));
	state = state.set('selectedItems', new List([]));
	if (state.remainingRecipes.length > 0) {
		state = state.set('currentRecipe', state.remainingRecipes.last());
		state = state.set('remainingRecipes', state.remainingRecipes.pop());
		state = state.set('availableItems',
			state.currentRecipe.components.map((item) => {
				return new AvailableItem({ itemId: item.itemId });
			})
		);
	} else {
		state = state.set('currentRecipe', undefined);
		state = state.set('availableItems', new List([]));
	}

	return state;
}

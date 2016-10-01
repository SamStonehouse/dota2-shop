import { ITEM_SELECTED, ITEM_UNSELECTED } from '../constants/action-types';

export function itemSelected(availableItem) {
	return {
		type: ITEM_SELECTED,
		availableItem,
	};
}

export function itemUnselected(availableItem) {
	return {
		type: ITEM_UNSELECTED,
		availableItem,
	};
}

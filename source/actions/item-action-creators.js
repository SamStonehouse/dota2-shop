import { ITEM_SELECTED, ITEM_UNSELECTED } from '../constants/action-types';

export function itemSelected(itemId) {
	return {
		type: ITEM_SELECTED,
		itemId,
	};
}

export function itemUnselected(itemId) {
	return {
		type: ITEM_UNSELECTED,
		itemId,
	};
}

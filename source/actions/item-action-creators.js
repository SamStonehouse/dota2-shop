import { ITEM_SELECTED, ITEM_UNSELECTED, RESTART } from '../constants/action-types';

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

export function restart() {
	return {
		type: RESTART,
	};
}

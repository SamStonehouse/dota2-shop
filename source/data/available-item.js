import { Record } from 'immubtable';

const _AvailableItem = {
	selected = false,
	itemId = '',
}

class AvailableItem extends Record(_AvailableItem){

}

export default AvailableItem;

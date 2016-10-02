import { Record } from 'immutable';

let idIndex = 0;

const _AvailableItem = {
	item: '',
	id: -1,
};

class AvailableItem extends Record(_AvailableItem){
	constructor(_props) {
		const props = _props;
		if (!{}.hasOwnProperty.call(props, 'id')) {
			props.id = idIndex++;
		}
		super(props);
	}
}

export default AvailableItem;

import { Record } from 'immubtable';

const _SelectedItem = {
	correct = false,
	itemId = '',
}

class SelectedItem extends Record(_SelectedItem){

}

export default SelectedItem;

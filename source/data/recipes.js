import { List } from 'immutable';

import Recipe from './recipe';
import items from './items';

function getItem(id) {
	return items.find(_item => _item.id === id);
}

const recipes = [
	{
		name: 'Heart of Tarrasque',
		components: [getItem('reaver'), getItem('vitality_booster'), getItem('recipe')],
	},
	{
		name: 'Yasha',
		components: [getItem('blade_of_alacrity'), getItem('boots_of_elves'), getItem('recipe')],
	},
];

module.exports = new List(recipes).map(recipe => Recipe.createFromData(recipe));

import { Record, List } from 'immutable';

const _Recipe = {
	item: '',
	name: '',
	components: new List([]),
};

class Recipe extends Record(_Recipe) {

}

Recipe.createFromData = function(data) {
	return new Recipe({
		item: data.item,
		name: data.name,
		components: new List(data.components),
	});
};

export default Recipe;

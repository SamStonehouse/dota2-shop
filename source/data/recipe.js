import { Record, List } from 'immutable';

const _Recipe = {
	name: '',
	components: new List([]),
}

class Recipe extends Record(_Recipe) {

}

Recipe.createFromData = function(data) {
	return new Recipe({
		name: data.name,
		components: new List(data.components),
	});
}

export default Recipe;

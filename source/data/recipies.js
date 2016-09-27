import Recipe from './recipe';

const recipes = [
	{
		name: 'Heart of Tarrasque',
		components: ['reaver', 'vitality_booster', 'recipe']
	}
];

module.exports = new List(recipes).map((recipe) => { return Recipe.createFromData(recipe); });

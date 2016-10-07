import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { itemSelected, itemUnselected, restart } from '../actions/item-action-creators';
import AvailableItems from './available-items';
import SelectedItems from './selected-items';
import Recipe from '../data/recipe';
import ItemDisplay from './item-display';

class RecipeGame extends Component {

	constructor() {
		super();
		this.renderCurrentRecipe = this.renderCurrentRecipe.bind(this);
		this.renderGameOver = this.renderGameOver.bind(this);
	}

	renderCurrentRecipe() {
		return (
			<div>
				<p className='recipe-item'>
					<ItemDisplay item={this.props.currentRecipe.item} />
					{ this.props.currentRecipe.name }
				</p>
				<SelectedItems onUnselect={this.props.onUnselect} selectedItems={this.props.selectedItems} />
				<AvailableItems onSelect={this.props.onSelect} selectedItems={this.props.selectedItems} availableItems={this.props.availableItems} />
				<p>Points: { this.props.points }</p>
			</div>
		);
	}

	renderGameOver() {
		return (
			<div>
				<h3>Game Over</h3>
				<p>Points: { this.props.points }</p>
				<p>Biggest Streak: { this.props.biggestStreak }</p>
				<button onClick={this.props.restart}>Restart</button>
			</div>
		);
	}

	render() {
		if (this.props.currentRecipe === undefined) {
			if (this.props.remainingRecipes.size === 0) {
				return this.renderGameOver();
			}
			throw new Error('Recipes remaining but there is not current recipe');
		}

		return this.renderCurrentRecipe();
	}
}

RecipeGame.propTypes = {
	restart: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
	onUnselect: PropTypes.func.isRequired,
	currentRecipe: PropTypes.instanceOf(Recipe),
	availableItems: PropTypes.instanceOf(List).isRequired,
	selectedItems: PropTypes.instanceOf(List).isRequired,
	remainingRecipes: PropTypes.instanceOf(List).isRequired,
	points: PropTypes.number,
	biggestStreak: PropTypes.number,
};

RecipeGame.defaults = {
	currentRecipe: undefined,
	points: 0,
};

function mapStateToProps(state) {
	return {
		remainingRecipes: state.get('remainingRecipes'),
		currentRecipe: state.get('currentRecipe'),
		availableItems: state.get('availableItems'),
		selectedItems: state.get('selectedItems'),
		points: state.get('points'),
		biggestStreak: state.get('biggestStreak'),
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onSelect: itemSelected,
		onUnselect: itemUnselected,
		restart,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGame);

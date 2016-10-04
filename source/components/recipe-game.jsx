import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { itemSelected, itemUnselected } from '../actions/item-action-creators';
import AvailableItems from './available-items';
import SelectedItems from './selected-items';
import Recipe from '../data/recipe';

class RecipeGame extends Component {
	render() {
		return (<div>
			<p>Current Recipe: { this.props.currentRecipe.name }</p>
			<SelectedItems onUnselect={this.props.onUnselect} selectedItems={this.props.selectedItems} />
			<hr />
			<AvailableItems onSelect={this.props.onSelect} selectedItems={this.props.selectedItems} availableItems={this.props.availableItems} />
		</div>);
	}
}

RecipeGame.propTypes = {
	onSelect: PropTypes.func.isRequired,
	onUnselect: PropTypes.func.isRequired,
	currentRecipe: PropTypes.instanceOf(Recipe).isRequired,
	availableItems: PropTypes.instanceOf(List).isRequired,
	selectedItems: PropTypes.instanceOf(List).isRequired,
};

function mapStateToProps(state) {
	return {
		currentRecipe: state.get('currentRecipe'),
		availableItems: state.get('availableItems'),
		selectedItems: state.get('selectedItems'),
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onSelect: itemSelected,
		onUnselect: itemUnselected,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGame);

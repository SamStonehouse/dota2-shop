import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';

import { itemSelected, itemUnselected } from '../item-action-creators';

class RecipeGame extends Component {
	render() {
		return (<div>
			RECIPE GAME
		</div>);
	}
}

Item.propTypes = {
	onSelect: PropTypes.func.isRequired,
	onUnselect: PropTypes.func.isRequired,
	availableItems: PropTypes.instanceOf(List).isRequired,
	selectedItems: PropTypes.instanceOf(List).isRequired,
};

function mapStateToProps() {
	return {
		availableItems,
		selectedItems
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onSelect: itemSelected,
		onUnselect: itemUnselected,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGame);

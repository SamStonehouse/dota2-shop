import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';

import ItemDisplay from './item-display';

class SelectedItems extends Component {

	constructor() {
		super();
		this.renderItem = this.renderItem.bind(this);
	}

	renderItem(availableItem, index) {
		return (
			<div key={index} >
				<ItemDisplay item={availableItem.item} onClick={() => { this.props.onUnselect(availableItem); }} />
			</div>
		);
	}

	render() {
		return (
			<div>
				{ this.props.selectedItems.map(this.renderItem) }
			</div>
		);
	}
}

SelectedItems.propTypes = {
	onUnselect: PropTypes.func.isRequired,
	selectedItems: PropTypes.instanceOf(List).isRequired,
};

export default SelectedItems;

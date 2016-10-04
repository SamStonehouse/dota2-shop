import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';

import ItemDisplay from './item-display';
import ItemSlot from './item-slot';

class SelectedItems extends Component {

	constructor() {
		super();
		this.renderSlot = this.renderSlot.bind(this);
		this.renderItem = this.renderItem.bind(this);
	}

	renderItem(availableItem) {
		return (<ItemDisplay item={availableItem.item} onClick={() => { this.props.onUnselect(availableItem); }} />);
	}

	renderSlot(availableItem, index) {
		return (
			<ItemSlot key={index}>
				{ availableItem ? this.renderItem(availableItem) : null }
			</ItemSlot>
		);
	}

	render() {
		return (
			<div className='selected-items'>
				{ this.props.selectedItems.map(this.renderSlot) }
			</div>
		);
	}
}

SelectedItems.propTypes = {
	onUnselect: PropTypes.func.isRequired,
	selectedItems: PropTypes.instanceOf(List).isRequired,
};

export default SelectedItems;

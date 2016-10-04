import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';

import ItemDisplay from './item-display';

class AvailableItems extends Component {

	constructor() {
		super();
		this.renderItem = this.renderItem.bind(this);
	}

	renderItem(availableItem, index) {
		const selected = this.props.selectedItems.contains(availableItem);
		return (
			<span className={`${selected ? 'selected' : null} item-container`} key={index} >
				<ItemDisplay item={availableItem.item} onClick={() => { this.props.onSelect(availableItem); }} />
			</span>
		);
	}

	render() {
		return (
			<div className='available-items'>
				{ this.props.availableItems.map(this.renderItem) }
			</div>
		);
	}
}

AvailableItems.propTypes = {
	onSelect: PropTypes.func.isRequired,
	availableItems: PropTypes.instanceOf(List).isRequired,
	selectedItems: PropTypes.instanceOf(List).isRequired,
};

export default AvailableItems;

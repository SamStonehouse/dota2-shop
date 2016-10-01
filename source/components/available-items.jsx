import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';

import ItemDisplay from './item-display';

class AvailableItems extends Component {

	constructor() {
		super();
		this.renderItem = this.renderItem.bind(this);
	}

	renderItem(availableItem, index) {
		return (
			<div className={availableItem.selected ? 'selected' : null} key={index} >
				<ItemDisplay item={availableItem.item} onClick={() => { this.props.onSelect(availableItem); }} />
			</div>
		);
	}

	render() {
		return (
			<div>
				{ this.props.availableItems.map(this.renderItem) }
			</div>
		);
	}
}

AvailableItems.propTypes = {
	onSelect: PropTypes.func.isRequired,
	availableItems: PropTypes.instanceOf(List).isRequired,
};

export default AvailableItems;

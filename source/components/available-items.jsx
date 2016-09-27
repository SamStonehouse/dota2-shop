import React, { PropTypes, Component } from 'react';
import Item from './item';

class AvailableItems extends Component {
	render() {
		return (
			<div>
				{ this.props.availableItems.map(renderItem) }
			</div>
		);
	}

	renderItem(availableItem) {
		return (
			<div className={ availableItem.selected ? 'selected' : null } >
				<Item item={ item } onClick={ () => { this.props.onSelect(availableItem) } } />
			</div>
		);
	}
}

AvailableItems.propTypes = {
	onSelect: PropTypes.func.isRequired,
	availableItems: PropTypes.instanceOf(List).isRequired,
};

export default AvailableItems;

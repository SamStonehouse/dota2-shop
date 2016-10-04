import React, { PropTypes, Component } from 'react';
import Item from '../data/item';

function getStyle(imgUrl) {
	return {
		backgroundImage: `url(${imgUrl})`,
	};
}

class ItemDisplay extends Component {
	render() {
		return (
			<button onClick={this.props.onClick} className='item' style={getStyle(`/assets/images/items/${this.props.item.id}.png`)} />
		);
	}
}

ItemDisplay.propTypes = {
	onClick: PropTypes.func.isRequired,
	item: PropTypes.instanceOf(Item).isRequired,
};

export default ItemDisplay;

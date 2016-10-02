import React, { PropTypes, Component } from 'react';
import Item from '../data/item';

class ItemDisplay extends Component {
	render() {
		return (
			<button onClick={this.props.onClick} className='item'>
				<img src={`/assets/images/${this.props.item.id}.png`} alt={this.props.item.id} />
			</button>
		);
	}
}

ItemDisplay.propTypes = {
	onClick: PropTypes.func.isRequired,
	item: PropTypes.instanceOf(Item).isRequired,
};

export default ItemDisplay;

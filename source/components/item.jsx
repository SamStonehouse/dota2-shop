import React, { PropTypes, Component } from 'react';
import Item from '../data/item';

class Item extends Component {
	render() {
		return (
			<div onClick={ this.props.onClick } className='item'>
				{ this.props.item.id }
			</div>
		);
	}
}

Item.propTypes = {
	onClick: PropTypes.func.isRequired,
	item: PropTypes.instanceOf(Item).isRequired,
};

export default Item;

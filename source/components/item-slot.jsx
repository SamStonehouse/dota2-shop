import React, { PropTypes, Component } from 'react';

class ItemSlot extends Component {
	render() {
		return (
			<div className='item-slot'>
				{this.props.children}
			</div>
		);
	}
}

ItemSlot.propTypes = {
	children: PropTypes.element,
};

export default ItemSlot;

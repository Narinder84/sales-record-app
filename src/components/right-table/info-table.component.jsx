/** @format */

import React from 'react';
import { connect } from 'react-redux';

import './info-table.style.scss';

const InfoTable = ({ oderList }) => {
	const total = () =>
		oderList.length
			? oderList.reduce((acc, item) => acc + item.price * item.quantity, 0)
			: 0;

	return (
		<div className='right-panel'>
			<p>Info:</p>
			<div className='table-section'>
				<div className='row '>
					<div className='row-cell'>Number Of Items</div>
					<div className='row-cell'>{oderList.length}</div>
				</div>
				<div className='row col'>
					<div className='row-cell'>Total Purchase Value</div>
					<div className='row-cell'>{total()}</div>
				</div>
				<div className='row '>
					<div className='row-cell'>Tax</div>
					<div className='row-cell'>0</div>
				</div>
				<div className='row col'>
					<div className='row-cell'>Net After Tax</div>
					<div className='row-cell'>0</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	oderList: state.oder.oderList,
});

export default connect(mapStateToProps, null)(InfoTable);

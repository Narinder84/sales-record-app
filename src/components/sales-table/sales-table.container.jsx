/** @format */

import React from 'react';
import { connect } from 'react-redux';
import TableRow from '../table.row/table.row';

import './sales-table.style.scss';

const SalesTable = ({ oderList }) => {
	console.log(oderList);
	return (
		<>
			<div className='sales-table-container'>
				<div className='sales-heading'>
					<p>Oder Details</p>
				</div>
				<div className='sales-table'>
					<div className='heading-row'>
						<div className='cell'>
							<span>S. No:</span>
						</div>
						<div className='cell'>
							<span>Name</span>
						</div>
						<div className='cell'>
							<span>price</span>
						</div>
						<div className='cell'>
							<span>Quantity</span>
						</div>
						<div className='cell'>
							<span>Total</span>
						</div>
						<div className='cell'>
							<span>Action</span>
						</div>
					</div>
					{oderList.map((item, indx) => {
						return <TableRow key={indx} indx={indx} item={item} />;
					})}
				</div>
			</div>
		</>
	);
};

const mapStateToProp = (state) => ({
	oderList: state.oder.oderList,
});

export default connect(mapStateToProp, null)(SalesTable);

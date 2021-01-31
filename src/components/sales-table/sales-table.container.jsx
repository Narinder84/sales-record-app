/** @format */

import React from 'react';
import { connect } from 'react-redux';

import './sales-table.style.scss';

const SalesTable = ({ oderList }) => {
	console.log(oderList);
	return (
		<div className='sales-table-container'>
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
					return (
						<div key={indx} className='data-row'>
							<form>
								<div className='cell'>
									<span>{item.id}</span>
								</div>
								<div className='cell'>
									<input placeholder='Name' value={item.name} />
								</div>
								<div className='cell'>
									<span>{item.price}</span>
								</div>
								<div className='cell'>
									<input
										type='text'
										placeholder='Quantity'
										value={item.quantity}
									/>
								</div>
								<div className='cell'>
									<span>{item.quantity * item.price}</span>
								</div>
								<div className='cell'>
									<span>Edit | Dele</span>
								</div>
							</form>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProp = (state) => ({
	oderList: state.oder.oderList,
});

export default connect(mapStateToProp, null)(SalesTable);

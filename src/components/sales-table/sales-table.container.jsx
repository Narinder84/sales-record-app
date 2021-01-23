/** @format */

import React from 'react';
import './sales-table.style.scss';

const SalesTable = () => {
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
				{[...new Array(5)].map((val, indx) => {
					return (
						<div key={indx} className='data-row'>
							<form>
								<div className='cell'>
									<span>1</span>
								</div>
								<div className='cell'>
									<input placeholder='Name' />
								</div>
								<div className='cell'>
									<span>Price</span>
								</div>
								<div className='cell'>
									<input type='text' placeholder='Quantity' />
								</div>
								<div className='cell'>
									<span>Total</span>
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
export default SalesTable;

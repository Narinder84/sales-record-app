/** @format */

import React from 'react';

import './sales-record-styles.scss';

const SalesRecord = () => {
	return (
		<div className='sales-record-container'>
			<div className='sales-heading'>
				<p>Oder Details</p>
			</div>
			<div className='upper-section'>
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
						{[...new Array(50)].map(() => {
							return (
								<div className='data-row'>
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
				<div className='left-panel'>
					<p>Info:</p>
					<div className='table-section'>
						<div className='row '>
							<div className='row-cell'>Number Of Items</div>
							<div className='row-cell'>0</div>
						</div>
						<div className='row col'>
							<div className='row-cell'>Total Purchase Value</div>
							<div className='row-cell'>0</div>
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
			</div>
			<div className='lower-section'>
				<div className='sale-panel'>
					<div className=''>
						<label htmlFor=''>Product Id:</label>
						<input className='oder-form' placeholder='Product Id' />
					</div>
					<div className=''>
						<label htmlFor=''>Product Id:</label>
						<input className='oder-form' placeholder='Product Id' />
					</div>
					<div className=''>
						<label htmlFor=''>Product Id:</label>
						<input className='oder-form' placeholder='Product Id' />
					</div>

					<span>Value</span>
					<div className='bt'>
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SalesRecord;

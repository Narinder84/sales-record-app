/** @format */

import React from 'react';
import SalesTable from '../../';

import './sales-record-styles.scss';

const SalesRecord = () => {
	return (
		<div className='sales-record-container'>
			<div className='sales-heading'>
				<p>Oder Details</p>
			</div>
			<div className='upper-section'>
				<SalesTable />
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
						<input className='oder-form' placeholder='Product Id' />
					</div>
					<div className=''>
						<input className='oder-form' placeholder='Product Id' />
					</div>
					<div className=''>
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

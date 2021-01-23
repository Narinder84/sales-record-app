/** @format */

import React from 'react';

import './info-table.style.scss';

const InfoTable = () => {
	return (
		<div className='right-panel'>
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
	);
};
export default InfoTable;

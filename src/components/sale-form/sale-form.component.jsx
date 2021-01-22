/** @format */

import React from 'react';

import './sale-form.style.scss';

const SaleForm = () => {
	return (
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
	);
};

export default SaleForm;

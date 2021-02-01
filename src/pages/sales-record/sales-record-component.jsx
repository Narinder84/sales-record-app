/** @format */

import React from 'react';
import InfoTable from '../../components/right-table/info-table.component';
import SaleForm from '../../components/sale-form/sale-form.component';
import SalesTable from '../../components/sales-table/sales-table.container';

import './sales-record-styles.scss';

const SalesRecord = () => {
	return (
		<div className='sales-record-container'>
			<div className='upper-section'>
				<SalesTable />
				<InfoTable />
			</div>
			<div className='lower-section'>
				<SaleForm />
			</div>
		</div>
	);
};

export default SalesRecord;

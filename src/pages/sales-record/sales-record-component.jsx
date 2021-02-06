/** @format */

import React from 'react';
import InfoTable from '../../components/right-table/info-table.component';
import SaleForm from '../../components/sale-form/sale-form.component';
import SalesTable from '../../components/sales-table/sales-table.container';
import InfoBar from '../../components/infobar/infobar.component';
import './sales-record-styles.scss';
import { connect } from 'react-redux';

const SalesRecord = ({ focusSaleForm, focusSalesTable }) => {
	return (
		<div className='sales-record-container'>
			<div className='upper-section'>
				<SalesTable focusSalesTable={focusSalesTable} />
				<InfoTable />
			</div>
			<div className='middle-section'>
				<InfoBar />
			</div>
			<div className='lower-section'>
				<SaleForm focusSaleForm={focusSaleForm} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	focusSalesTable: state.oder.isActive,
	focusSaleForm: state.oder.focusSalePanel,
});
export default connect(mapStateToProps, null)(SalesRecord);

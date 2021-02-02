/** @format */

import React from 'react';
import { connect } from 'react-redux';

import './infobar.style.scss';

const InfoBar = ({ message }) => {
	return (
		<>
			{message ? (
				<>
					<p>{message}</p>
					<p>
						<i className='co fas fa-times'></i>
					</p>
				</>
			) : null}
		</>
	);
};

const mapStateToProp = (state) => ({
	message: state.oder.message,
});
export default connect(mapStateToProp, null)(InfoBar);

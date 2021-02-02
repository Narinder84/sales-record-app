/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { setDeleteMessage } from '../../redux/oder/oder.action';

import './infobar.style.scss';

const InfoBar = ({ message, deleteMessage }) => {
	return (
		<>
			{message ? (
				<>
					<p className='mess'>{message}</p>
					<p onClick={deleteMessage}>
						<i className='co fas fa-times'></i>
					</p>
				</>
			) : null}
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	deleteMessage: () => dispatch(setDeleteMessage()),
});

const mapStateToProp = (state) => ({
	message: state.oder.message,
});
export default connect(mapStateToProp, mapDispatchToProps)(InfoBar);

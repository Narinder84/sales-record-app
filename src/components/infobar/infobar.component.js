/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { setDeleteMessage } from '../../redux/oder/oder.action';

import './infobar.style.scss';

class InfoBar extends React.Component {
	componentDidUpdate() {
		if (
			this.props.message === 'Item added' ||
			this.props.message === 'Item deleted'
		) {
			setTimeout(() => {
				this.props.deleteMessage();
			}, 2000);
		}
	}
	render() {
		return (
			<>
				{this.props.message ? (
					<>
						<p className='mess'>{this.props.message}</p>
						<p onClick={this.props.deleteMessage}>
							{this.props.message === 'Item added' ||
							this.props.message === 'Item deleted' ? null : (
								<i className='co fas fa-times'></i>
							)}
						</p>
					</>
				) : (
					<p className='message'>Record Sale</p>
				)}
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteMessage: () => dispatch(setDeleteMessage()),
});

const mapStateToProp = (state) => ({
	message: state.oder.message,
});
export default connect(mapStateToProp, mapDispatchToProps)(InfoBar);

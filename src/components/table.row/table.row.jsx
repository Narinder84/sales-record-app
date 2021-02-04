/** @format */

import React from 'react';
import { connect } from 'react-redux';

import { setDeleteItemFromOderList } from '../../redux/oder/oder.action.js';

import './table.row.scss';

class TableRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			quantity: this.props.item.quantity,
			isActive: false,
		};
	}

	handleClick = (e) => {
		this.setState((prevState) => {
			if (this.state.quantity) {
				return {
					...prevState,
					isActive: !prevState.isActive,
				};
			}
			return {
				...prevState,
				isActive: !prevState.isActive,
				quantity: this.props.item.quantity,
			};
		});
	};
	handleChange = (e) => {
		e.preventDefault();
		if (e.keyCode !== 13) {
			e.preventDefault();
			const { name, value } = e.target;
			return this.setState({ [name]: value });
		}
		if (e.keyCode === 13) {
			e.preventDefault();
			return this.setState({ ...this.state, isActive: false });
		}
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.state.quantity
			? this.setState({ ...this.state, isActive: false })
			: this.setState({
					...this.state,
					quantity: this.props.item.quantity,
					isActive: false,
			  });
	};
	render() {
		const { item } = this.props;
		return (
			<div key={this.props.indx} className='data-row'>
				<form onSubmit={this.handleSubmit}>
					<div className='cell'>
						<span>{this.props.indx + 1}</span>
					</div>
					<div className='cell'>
						<span>{this.props.item.name}</span>
					</div>
					<div className='cell'>
						<span>{this.props.item.price}</span>
					</div>
					<div className='cell'>
						<input
							className={!this.state.isActive ? 'inActive' : null}
							id={this.props.indx}
							type='text'
							name='quantity'
							placeholder='Quantity'
							value={this.state.quantity}
							disabled={this.state.isActive ? false : true}
							onChange={this.handleChange}
						/>
					</div>
					<div className='cell'>
						<span>{this.props.item.quantity * this.props.item.price}</span>
					</div>
					<div className='  bo cell action '>
						<span onClick={() => this.props.deleteItem(item)}>
							<i className='far fa-trash-alt'></i>
						</span>

						{this.state.isActive ? (
							<span onClick={this.handleClick}>
								<i className='far fa-save'></i>
							</span>
						) : (
							<span onClick={this.handleClick}>
								<i className='far fa-edit'></i>
							</span>
						)}
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteItem: (item) => dispatch(setDeleteItemFromOderList(item)),
});

export default connect(null, mapDispatchToProps)(TableRow);

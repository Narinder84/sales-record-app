/** @format */

import React from 'react';

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
		if ((e.keyCode = 13)) {
			e.preventDefault();

			this.setState({ ...this.state, isActive: false });
		}
	};
	render() {
		console.log(this.state.quantity === '', '===----', this.props.quantity);
		return (
			<div key={this.props.indx} className='data-row'>
				<form onSubmit={this.handleSubmit}>
					<div className='cell'>
						<span>{this.props.item.id}</span>
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
					<div className='cell action '>
						{this.state.isActive ? (
							<span onClick={this.handleClick}>Save</span>
						) : (
							<span onClick={this.handleClick}>Edit</span>
						)}
					</div>
				</form>
			</div>
		);
	}
}
export default TableRow;

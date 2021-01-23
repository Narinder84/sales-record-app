/** @format */

import React from 'react';
import SearchInput from '../search-inut-box/search-input.box';

import './sale-form.style.scss';

class SaleForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cursor: 0,
			productId: '',
			productName: '',
			productPrice: '',
			listForId: [],
			listForProduct: [],
			list: [
				{ id: 1, name: 'milk', price: 2 },
				{ id: 2, name: 'water', price: 1 },
				{ id: 3, name: 'tea', price: 3 },
			],
		};
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name);
		const data = () => {
			switch (name) {
				case 'productId':
					return this.state.list.filter(
						(val) => Number(val.id) === Number(value),
					);
				case 'productName':
					return this.state.list.filter((data) => data.name.includes(value));

				default:
					break;
			}
		};
		const newlist = data();

		if (name === 'productId') {
			return this.setState({
				...this.state,
				[name]: value,
				listForId: newlist,
				productName: '',
			});
		}
		if (name === 'productName') {
			return this.setState({
				...this.state,
				[name]: value,
				listForProduct: newlist,
				productId: '',
			});
		}
	};

	handleKeyDown = (e) => {
		if (this.state.productId || this.state.productName) {
			console.log(this.state.cursor);
			if (e.keyCode === 40) {
				e.preventDefault();
				this.setState((preState) => ({
					...preState,
					cursor: this.state.cursor + 1,
				}));
			}
			if (e.keyCode === 38) {
				e.preventDefault();
				this.setState((preState) => ({
					...preState,
					cursor: this.state.cursor - 1,
				}));
			}
		}
	};
	render() {
		console.log(this.state);
		return (
			<form className='sale-panel'>
				<SearchInput
					id='id'
					name='productId'
					placeholder='Product Id'
					value={this.state.productId}
					cursor={this.state.cursor}
					keyDown={this.handleKeyDown}
					list={this.state.listForId.map((data) => data.id)}
					autoComplete='off'
					handleChange={this.handleChange}
				/>
				<SearchInput
					id='name'
					type='text'
					name='productName'
					placeholder='Product Name'
					value={this.state.productName}
					cursor={this.state.cursor}
					list={this.state.listForProduct.map((data) => data.name)}
					handleChange={this.handleChange}
					keyDown={this.handleKeyDown}
					autoComplete='off'
				/>
				<p>Price: {0}</p>
				<p>Value: {0}</p>

				<button>Submit</button>
			</form>
		);
	}
}

export default SaleForm;

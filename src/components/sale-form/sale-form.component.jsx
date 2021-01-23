/** @format */

import React from 'react';
import SearchInput from '../search-inut-box/search-input.box';

import './sale-form.style.scss';

class SaleForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productId: '',
			productName: '',
			productPrice: '',
			list: [],
			// list: [
			// 	{ id: 1, name: 'milk', price: 2 },
			// 	{ id: 2, name: 'water', price: 1 },
			// 	{ id: 3, name: 'tea', price: 3 },
			// ],
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		console.log(this.state);
		return (
			<form className='sale-panel'>
				<SearchInput
					name='productId'
					placeholder='Product Id'
					list={this.state.list.map((val) => val.id)}
					handleChange={this.handleChange}
				/>
				<SearchInput
					name='productName'
					placeholder='Product Name'
					list={this.state.list.map((val) => val.name)}
				/>
				<p>Price: {0}</p>
				<p>Value: {0}</p>

				<button>Submit</button>
			</form>
		);
	}
}

export default SaleForm;

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
			displayList: [],
			list: [
				{ id: 1, name: 'milk', price: 2 },
				{ id: 2, name: 'water', price: 1 },
				{ id: 3, name: 'tea', price: 3 },
			],
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		const FilterData = () => {
			switch (name) {
				case 'productId':
					return this.state.list.filter((data) => {
						console.log(
							Number(data.id),
							Number(value),
							Number(data.id) === Number(value),
						);
						return Number(data.id) === Number(value);
					});

				case 'productName':
					return this.state.list.filter((data) => {
						return data.name.includes(value);
					});

				default:
					return this.state.list;
			}
		};
		const newList = FilterData();
		this.setState({ [name]: value, displayList: newList });
	};

	render() {
		console.log(this.state);
		return (
			<form className='sale-panel'>
				<SearchInput
					type='number'
					name='productId'
					placeholder='Product Id'
					list={
						this.state.productId
							? this.state.displayList.map((val) => val.id)
							: []
					}
					autocomplete='off'
					handleChange={this.handleChange}
				/>
				<SearchInput
					type='text'
					name='productName'
					placeholder='Product Name'
					list={
						this.state.productName
							? this.state.displayList.map((val) => val.name)
							: []
					}
					handleChange={this.handleChange}
					autocomplete='off'
				/>
				<p>Price: {0}</p>
				<p>Value: {0}</p>

				<button>Submit</button>
			</form>
		);
	}
}

export default SaleForm;

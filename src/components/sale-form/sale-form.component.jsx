/** @format */

import React from 'react';

import SearchInput from '../search-inut-box/search-input.box';
import { setAddItemToOderList } from '../../redux/oder/oder.action';
import './sale-form.style.scss';
import { connect } from 'react-redux';

class SaleForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cursor: 0,
			productId: '',
			productName: '',
			productPrice: '',
			quantity: 0,
			selected: '',
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

		const data = () => {
			switch (name) {
				case 'productId':
					return this.state.list.filter(
						(val) => Number(val.id) === Number(value),
					);
				case 'productName':
					return this.state.list.filter((data) => data.name.includes(value));
				case 'quantity':
					return this.setState({ ...this.setState, [name]: value });

				default:
					break;
			}
		};
		const newlist = data();

		if (name === 'productId') {
			if (!value) {
				return this.setState({
					...this.state,
					listForId: [],
					productId: '',
				});
			}

			return this.setState((prevState) => ({
				...prevState,
				[name]: value,
				listForId: newlist,
				selectedList: newlist.length > 0 ? newlist[this.state.cursor] : [],
				productName: newlist.length ? newlist[this.state.cursor].name : '',
			}));
		}
		if (name === 'productName') {
			if (!value) {
				return this.setState({
					...this.state,
					listForProduct: [],
					productName: '',
				});
			}
			return this.setState({
				...this.state,
				[name]: value,
				listForProduct: newlist,
				productId: newlist.length > 0 ? newlist[this.state.cursor].id : '',
				selectedList: newlist ? newlist[this.state.cursor] : [],
			});
		}
	};

	handleKeyDown = (e) => {
		if (this.state.productId || this.state.productName) {
			if (
				(e.keyCode === 40 &&
					this.state.cursor < this.state.listForProduct.length - 1) ||
				this.state.cursor < this.state.listForId.length - 1
			) {
				e.preventDefault();
				if (e.target.name === 'productName') {
					return this.setState((preState) => ({
						...preState,
						cursor: preState.cursor + 1,
						selectedList: this.state.listForProduct[preState.cursor + 1],
						productId: this.state.listForProduct[preState.cursor + 1].id,
					}));
				}
				return this.setState((preState) => ({
					...preState,
					cursor: preState.cursor + 1,
					selectedList: this.state.listForProduct[preState.cursor + 1],
					productName: this.state.listForProduct[preState.cursor + 1].name,
				}));
			}
			if (e.keyCode === 38 && this.state.cursor > 0) {
				e.preventDefault();
				if (e.target.name === 'productName') {
					return this.setState((preState) => ({
						...preState,
						cursor: preState.cursor - 1,
						selectedList: this.state.listForProduct[preState.cursor - 1],
						productId: this.state.listForProduct[preState.cursor - 1].id,
					}));
				}

				// this.setState((preState) => ({
				// 	...preState,
				// 	cursor: preState.cursor - 1,
				// }));
			}
			if (e.keyCode === 13) {
				e.preventDefault();
				if (
					this.state.listForId.length > 0 ||
					this.state.listForProduct.length > 0
				) {
					this.setState({
						productId: this.state.selectedList.id,
						productName: this.state.selectedList.name,
						listForId: [],
						listForProduct: [],
					});
				}
			}
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.selectedList.length);
		if (this.state.selectedList.length === 0) {
			return;
		}
		const item = {
			...this.state.selectedList,
			quantity: this.state.quantity,
			total: this.state.selectedList.price * this.state.quantity,
		};
		this.props.setAddItemToOderList(item);
		this.setState({
			productId: '',
			productName: '',
			productPrice: '',
			quantity: 0,
		});
	};
	render() {
		return (
			<form className='sale-panel' onSubmit={this.handleSubmit}>
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
				<SearchInput
					id='quantity'
					name='quantity'
					placeholder='quantity'
					value={this.state.quantity}
					handleChange={this.handleChange}
					autoComplete='off'
				/>
				<p>
					Price:{' '}
					{this.state.selectedList === undefined
						? ''
						: this.state.selectedList.price}
				</p>
				<p>
					Value:{' '}
					{this.state.selectedList === undefined ||
					this.state.selectedList.length === 0
						? 0
						: this.state.selectedList.price * this.state.quantity}
				</p>

				<button>Submit</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setAddItemToOderList: (item) => dispatch(setAddItemToOderList(item)),
});
export default connect(null, mapDispatchToProps)(SaleForm);

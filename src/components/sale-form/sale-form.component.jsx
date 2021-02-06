/** @format */

import React from 'react';

import SearchInput from '../search-inut-box/search-input.box';
import { setAddItemToOderList, setMessage } from '../../redux/oder/oder.action';
import './sale-form.style.scss';
import { connect } from 'react-redux';

class SaleForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entringData: false,
			cursor: 0,
			productId: '',
			productName: '',
			productPrice: '',
			quantity: 0,
			selected: '',
			listForId: [],
			listForProduct: [],
			selectedList: undefined,
			list: [
				{ id: 1, name: 'milk', price: 2 },
				{ id: 2, name: 'water', price: 1 },
				{ id: 3, name: 'tea', price: 3 },
			],
		};
		this.textInput = React.createRef();
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
				entringData: true,
				[name]: value,
				listForId: newlist,
				selectedList:
					newlist.length > 0 ? newlist[this.state.cursor] : undefined,
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
				entringData: true,
				[name]: value,
				listForProduct: newlist,
				productId: newlist.length > 0 ? newlist[this.state.cursor].id : '',
				selectedList: newlist ? newlist[this.state.cursor] : undefined,
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

		if (this.state.selectedList === undefined) {
			const message = 'All field details are must';
			return this.props.setMessage(message);
		}
		if (Number(this.state.quantity) === 0) {
			const message = 'Quantity not added . Please give valid quantity';
			return this.props.setMessage(message);
		}

		const item = {
			...this.state.selectedList,
			quantity: this.state.quantity,
			total: this.state.selectedList.price * this.state.quantity,
		};
		this.props.setAddItemToOderList(item);
		this.setState({
			entringData: false,
			cursor: 0,
			productId: '',
			productName: '',
			productPrice: '',
			quantity: 0,
			selected: '',
			listForId: [],
			selectedList: undefined,
		});
		this.textInput.current.focus();
	};
	componentDidMount() {
		this.textInput.current.focus();
	}
	componentDidUpdate() {
		if (this.state.entringData === false) {
			return this.textInput.current.focus();
		}
	}

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
					inputRef={this.textInput}
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
const mapStateToProps = (state) => ({
	focusSalesTable: state.oder.isActive,
	focusSaleForm: state.oder.focusSalePanel,
});
const mapDispatchToProps = (dispatch) => ({
	setAddItemToOderList: (item) => dispatch(setAddItemToOderList(item)),
	setMessage: (message) => dispatch(setMessage(message)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SaleForm);

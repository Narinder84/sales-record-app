/** @format */

import { oderActionTypes } from './oder.action.types';

const INITIAL_STATE = {
	oderList: [
		// { id: 1, name: 'milk', price: 2, quantity: 30 },
		// { id: 2, name: 'water', price: 1, quantity: 10 },
		// { id: 3, name: 'tea', price: 3, quantity: 5 },
	],
};

export const OderReducer = (state = INITIAL_STATE, action = {}) => {
	console.log(action);
	switch (action.type) {
		case oderActionTypes.ADD_ITEM_TO_ODER_LIST:
			const newList = [...state.oderList, action.payload];
			return { ...state, oderList: newList };

		default:
			return state;
	}
};

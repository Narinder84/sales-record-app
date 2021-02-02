/** @format */

import { oderActionTypes } from './oder.action.types';
import oderList from './oder.utils';

const INITIAL_STATE = {
	oderList: [{ id: 3, name: 'tea', price: 3, quantity: 5 }],
	message: '',
};

export const OderReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case oderActionTypes.ADD_ITEM_TO_ODER_LIST:
			return oderList(state, action.payload);
		case oderActionTypes.REMOVE_MESSAGE:
			return { ...state, message: '' };

		default:
			return state;
	}
};

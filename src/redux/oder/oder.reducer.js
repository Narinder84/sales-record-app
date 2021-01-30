/** @format */

import { oderActionTypes } from './oder.action.types';

const INITIAL_STATE = {
	oderList: [],
};

export const OderReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case oderActionTypes.ADD_ITEM:
			return { ...state, oderList: action.payload };

		case oderActionTypes.DELETE_ITEM_FROM_ODER_LIST:
			return { ...state, oderList: action.payload };

		default:
			return state;
	}
};

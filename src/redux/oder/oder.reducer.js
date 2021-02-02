/** @format */

import { oderActionTypes } from './oder.action.types';
import { oderList, oderListAfterDeleteItem } from './oder.utils';

const INITIAL_STATE = {
	oderList: [],
	message: '',
};

export const OderReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case oderActionTypes.ADD_ITEM_TO_ODER_LIST:
			return oderList(state, action.payload);
		case oderActionTypes.DELETE_ITEM_FROM_ODER_LIST:
			return oderListAfterDeleteItem(state, action.payload);
		case oderActionTypes.REMOVE_MESSAGE:
			return { ...state, message: '' };

		default:
			return state;
	}
};

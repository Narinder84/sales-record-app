/** @format */

import { oderActionTypes } from './oder.action.types';
import { oderList, oderListAfterDeleteItem } from './oder.utils';

const INITIAL_STATE = {
	oderList: [],
	message: '',
	isActive: false,
	focusSalePanel: true,
};

export const OderReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case oderActionTypes.ADD_ITEM_TO_ODER_LIST:
			return oderList(state, action.payload);
		case oderActionTypes.DELETE_ITEM_FROM_ODER_LIST:
			return oderListAfterDeleteItem(state, action.payload);
		case oderActionTypes.REMOVE_MESSAGE:
			return { ...state, message: '' };
		case oderActionTypes.TOGGLE_IS_ACTIVE:
			return {
				...state,
				isActive: !state.isActive,
				focusSalePanel: !state.focusSalePanel,
			};

		case oderActionTypes.SET_MESSAGE:
			return {
				...state,
				message: action.payload,
			};
		default:
			return state;
	}
};

/** @format */

import { oderActionTypes } from './oder.action.types';

export const setAddItemToOderList = (item) => ({
	type: oderActionTypes.ADD_ITEM_TO_ODER_LIST,
	payload: item,
});

export const setDeleteItemFromOderList = (item) => {
	return {
		type: oderActionTypes.DELETE_ITEM_FROM_ODER_LIST,
		payload: item,
	};
};

export const setDeleteMessage = () => ({
	type: oderActionTypes.REMOVE_MESSAGE,
});
export const setMessage = (message) => ({
	type: oderActionTypes.SET_MESSAGE,
	payload: message,
});

export const toggelIsActive = () => ({
	type: oderActionTypes.TOGGLE_IS_ACTIVE,
});

export const setFocusSalePanel = () => ({
	type: oderActionTypes.FOCUS_IS_SALE_PANEL,
});

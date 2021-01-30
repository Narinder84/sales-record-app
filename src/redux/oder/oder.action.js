/** @format */

import { oderActionTypes } from './oder.action.types';

export const setAddItemToOderList = (item) => ({
	type: oderActionTypes.ADD_ITEM_TO_ODER_LIST,
	payload: item,
});

export const setDeleteItemFromOderList = (item) => ({
	type: oderActionTypes.DELETE_ITEM_FROM_ODER_LIST,
	payload: item,
});

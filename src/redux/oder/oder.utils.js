/** @format */

export const oderList = (state, item) => {
	const isInclude = state.oderList.find((data) => data.id === item.id);

	if (!!isInclude) {
		return { ...state, message: 'Item already exists' };
	}
	const newlist = [...state.oderList, item];
	return { ...state, message: 'Item added', oderList: newlist };
};
export const oderListAfterDeleteItem = (state, item) => {
	const data = {
		...state,
		message: 'Item deleted',
		oderList: state.oderList.filter((data) => data.id !== item.id),
	};

	return data;
};

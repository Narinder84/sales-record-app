/** @format */

const oderList = (state, item) => {
	const isInclude = state.oderList.find((data) => data.id === item.id);

	if (!!isInclude) {
		return { ...state, message: 'Item already exists' };
	}
	const newlist = [...state.oderList, item];
	return { ...state, message: '', oderList: newlist };
};

export default oderList;

/** @format */

import { combineReducers } from 'redux';

import { OderReducer } from '../redux/oder/oder.reducer';

const rootReducer = combineReducers({
	oder: OderReducer,
});

export default rootReducer;

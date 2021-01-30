/** @format */

import { combineReducers } from 'redux';

import { OderReducer } from '../redux/root-reducer';

const rootReducer = combineReducers({
	oder: OderReducer,
});

export default rootReducer;

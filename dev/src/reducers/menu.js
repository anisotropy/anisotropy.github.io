import {SET_CURRENT_PATH} from '../constants';
import update from 'immutability-helper';

const initialState = {
	currentPath: '/'
};

const menu = (state = initialState, action) => {
	switch(action.type){
		case SET_CURRENT_PATH:
			return update(state, {currentPath: {$set: action.path}});
		default:
			return state;
	}
};

export default menu;

import {combineReducers} from 'redux';
import menu from './menu';
import home from './home';
import repositories from './repositories';

const rootReducer = combineReducers({
	menu,
	home,
	repositories
});

export default rootReducer;

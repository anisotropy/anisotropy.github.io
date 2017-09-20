import {combineReducers} from 'redux';
import menu from './menu';
import home from './home';
import repositories from './repositories';
import blog from './blog';

const rootReducer = combineReducers({
	menu,
	home,
	repositories,
	blog
});

export default rootReducer;

import {combineReducers} from 'redux';
import root from './root';
import menu from './menu';
import home from './home';
import repositories from './repositories';
import blog from './blog';

const rootReducer = combineReducers({
	root,
	menu,
	home,
	repositories,
	blog
});

export default rootReducer;

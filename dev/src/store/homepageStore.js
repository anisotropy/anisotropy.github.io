import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const homepageStore = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default homepageStore;

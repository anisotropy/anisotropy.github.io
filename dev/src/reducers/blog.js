import {CHANGE_IN_BLOG} from '../constants';
import update from 'immutability-helper';

const initialState = {
  post: ''
};

const blog = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_IN_BLOG:
      return update(state, action.args);
    default:
      return state;
  }
};

export default blog;

import {CHANGE_IN_ROOT} from '../constants';
import update from 'immutability-helper';

const initialState = {
  currentPath: '/',
  errMessage: null
};

const root = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_IN_ROOT:
      return update(state, action.args);
    default:
      return state;
  }
};

export default root;

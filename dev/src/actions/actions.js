import {SET_CURRENT_PATH} from '../constants';

const actions = {
  setCurrentPath(path){
    return {type: SET_CURRENT_PATH, path};
  }
};

export default actions;

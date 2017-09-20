import {CHANGE_IN_ROOT, CHANGE_IN_BLOG} from '../constants';
import api from '../api/api';

const actions = {
  setCurrentPath(path){
    return {type: CHANGE_IN_ROOT, args: {currentPath: {$set: path}}};
  },
  fetchPosts(){ return (dispatch) => {
    api.fetchPosts()
    .then((post) => (post ? dispatch({type: CHANGE_IN_BLOG, args: {post: {$set: post}}}) : null))
    .catch((error) => dispatch({type: CHANGE_IN_ROOT, args: {errMessage: {$set: error}}}));
  }}
};

export default actions;

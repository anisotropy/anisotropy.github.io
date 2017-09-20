import {connect} from 'react-redux';
import actions from '../actions/actions.js';
import Blog from '../components/Blog';

const BlogCont = connect(
  (state) => ({
    post: state.blog.post
  }),
  (dispatch) => ({
    setCurrentPath: () => dispatch(actions.setCurrentPath('/blog')),
    fetch: () => dispatch(actions.fetchPosts())
  })
)(Blog);

export default BlogCont;

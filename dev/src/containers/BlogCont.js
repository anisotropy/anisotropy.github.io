import {connect} from 'react-redux';
import actions from '../actions/actions.js';
import Blog from '../components/Blog';

const BlogCont = connect(
	(state) => ({
	}),
	(dispatch) => ({
		setCurrentPath: () => dispatch(actions.setCurrentPath('/blog'))
	})
)(Blog);

export default BlogCont;

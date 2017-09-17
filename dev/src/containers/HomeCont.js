import {connect} from 'react-redux';
import actions from '../actions/actions.js';
import Home from '../components/Home';

const HomeCont = connect(
	(state) => ({
		content: state.content
	}),
	(dispatch) => ({
		setCurrentPath: () => dispatch(actions.setCurrentPath('/'))
	})
)(Home);

export default HomeCont;

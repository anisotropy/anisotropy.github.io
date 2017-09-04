import {connect} from 'react-redux';
import Home from '../components/Home';

const HomeCont = connect(
	(state) => ({
		content: state.content
	}),
	(dispatch) => ({

	})
)(Home);

export default HomeCont;

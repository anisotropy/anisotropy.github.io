import {connect} from 'react-redux';
import actions from '../actions/actions.js';
import Repositories from '../components/Repositories';

const RepositoriesCont = connect(
	(state) => ({

	}),
	(dispatch) => ({
		setCurrentPath: () => dispatch(actions.setCurrentPath('/repositories'))
	})
)(Repositories);

export default RepositoriesCont;

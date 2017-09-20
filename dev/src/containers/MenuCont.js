import {connect} from 'react-redux';
import Menu from '../components/Menu';

const MenuCont = connect(
	(state) => ({
		currentPath: state.root.currentPath
	}),
	(dispatch) => ({

	})
)(Menu);

export default MenuCont;

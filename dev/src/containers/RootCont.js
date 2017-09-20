import {connect} from 'react-redux';
import actions from '../actions/actions.js';
import Root from '../components/Root';

const RootCont = connect(
  (state) => ({
    errMessage: state.root.errMessage
  }),
  (dispatch) => ({
  })
)(Root);

export default RootCont;

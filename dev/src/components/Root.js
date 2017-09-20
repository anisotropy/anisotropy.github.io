import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Root extends PureComponent {
  render(){
    const {errMessage} = this.props;
    const renderedErrMessage = errMessage && (
      <div className="root__errormsg">
        {errMessage}
      </div>
    );
    return (
      <div className="root">
        {renderedErrMessage}
      </div>
    );
  }
}
Root.propTypes = {
  errMessage: PropTypes.string
};

export default Root;

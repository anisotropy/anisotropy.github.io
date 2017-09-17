import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Repositories extends PureComponent {
  componentDidMount(){
    this.props.setCurrentPath();
  }
  render(){
    return (
      <div className="repositories">
        Repositories
      </div>
    );
  }
}
Repositories.propTypes = {
  setCurrentPath: PropTypes.func.isRequired
};

export default Repositories;

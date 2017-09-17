import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown';

class Home extends PureComponent {
  componentDidMount(){
    this.props.setCurrentPath();
  }
  render(){
    return (
      <div className="home">
        <Markdown>**title**</Markdown>
      </div>
    );
  }
}
Home.propTypes = {
  setCurrentPath: PropTypes.func.isRequired
}

export default Home;

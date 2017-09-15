import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown';

class Home extends PureComponent {
  render(){
    return (
      <div className="home">
        <Markdown>**title**</Markdown>
      </div>
    );
  }
}

export default Home;
